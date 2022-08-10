import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { Comment } from 'src/comments/entity/comment.entity';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entity/board.entity';
import { BoardStatus } from './type/board-status.enum';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,

    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { title, content, status } = createBoardDto;
    const board = await this.boardRepository.create({
      title,
      content,
      status,
      user,
    });
    await this.boardRepository.save(board);
    return board;
  }

  async getAllBoards(): Promise<Board[]> {
    const board = await this.boardRepository
      .createQueryBuilder('br')
      .leftJoinAndSelect('br.user', 'user')
      .leftJoinAndSelect('br.comments', 'comments')
      .leftJoinAndSelect('br.goodList', 'good')
      .select([
        'br',
        'user.id',
        'user.userId',
        'user.email',
        'user.username',
        'comments',
        'good',
      ])
      .orderBy('br.created_at', 'DESC')
      .getMany();
    return board;
  }

  async getBoardById(id: number): Promise<Board> {
    const foundBoard = await this.boardRepository
      .createQueryBuilder('br')
      .leftJoinAndSelect('br.user', 'user')
      .leftJoinAndSelect('br.comments', 'comments')
      .leftJoinAndSelect('br.goodList', 'good')
      .select([
        'br',
        'user.id',
        'user.userId',
        'user.email',
        'user.username',
        'comments',
        'good',
      ])
      .where('br.id = :id', { id })
      .getOne();

    if (!foundBoard) {
      throw new NotFoundException(`id가 ${id}인 게시글을 찾을 수 없습니다.`);
    }
    return foundBoard;
  }

  async deleteAllBoard(): Promise<void> {
    await this.commentRepository.delete({});
    await this.boardRepository.delete({});
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
