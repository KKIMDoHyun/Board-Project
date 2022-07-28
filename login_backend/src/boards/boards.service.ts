import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entity/board.entity';
import { BoardStatus } from './type/board-status.enum';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async getAllBoards(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { title, content } = createBoardDto;
    const { userId, username, ...result } = user;
    console.log(userId, username, result);
    const board = await this.boardRepository.create({
      title,
      content,
      status: BoardStatus.PUBLIC,
      user,
      user_id: userId,
      username: username,
    });
    await this.boardRepository.save(board);
    return board;
  }

  async getBoardById(id: number): Promise<Board> {
    const foundBoard = await this.boardRepository.findOne({ id });
    if (!foundBoard) {
      throw new NotFoundException(`id가 ${id}인 게시글을 찾을 수 없습니다.`);
    }
    return foundBoard;
  }

  async deleteAllBoard(): Promise<void> {
    await this.boardRepository.clear();
  }

  async deleteBoard(id: number, user: User): Promise<void> {
    const foundBoard = await this.boardRepository.delete({ id, user });
    if (foundBoard.affected === 0) {
      // throw new NotFoundException(`id가 ${id}인 게시글을 찾을 수 없습니다.`);
      throw new NotFoundException(`게시물을 지울 권한이 없습니다.`);
    }
    console.log('result', foundBoard);
  }

  async updateBoard(
    id: number,
    boardDto: CreateBoardDto,
    status: BoardStatus,
    user: User,
  ): Promise<Board> {
    const board = await this.boardRepository.findOne({ id, user });
    console.log(board);
    if (!board) {
      throw new NotFoundException(`게시글의 수정 권한이 없습니다.`);
    }
    board.title = boardDto.title;
    board.content = boardDto.content;
    board.status = status;
    await this.boardRepository.save(board);
    return board;
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;
    await this.boardRepository.save(board);
    return board;
  }
}
