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

  getAllBoards() {
    return this.boardRepository.find();
  }

  async createBoard(
    createBoardDto: CreateBoardDto,
    // user: User,
  ): Promise<Board> {
    const { title, content } = createBoardDto;
    const board = await this.boardRepository.create({
      title,
      content,
      status: BoardStatus.PUBLIC,
      //   user,
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

  async deleteBoard(id: number): Promise<void> {
    const foundBoard = await this.boardRepository.delete({ id });
    if (foundBoard.affected === 0) {
      throw new NotFoundException(`${id}의 게시글을 찾을 수 없습니다.`);
    }
    console.log('result', foundBoard);
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;
    await this.boardRepository.save(board);
    return board;
  }
}
