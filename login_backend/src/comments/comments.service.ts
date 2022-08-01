import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { Board } from 'src/boards/entity/board.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entity/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async createComment(
    createCommentDto: CreateCommentDto,
    user: User,
  ): Promise<Comment> {
    const { boardId, content } = createCommentDto;
    const board = await this.boardRepository.findOne(boardId);
    const comment = await this.commentRepository.create({
      user,
      board,
      content,
    });
    await this.commentRepository.save(comment);
    return comment;
  }

  async getAllComments(): Promise<Comment[]> {
    const comments = await this.commentRepository
      .createQueryBuilder('cr')
      .leftJoinAndSelect('cr.user', 'user')
      .leftJoinAndSelect('cr.board', 'board')
      .select(['cr', 'user.id', 'user.email', 'board.id'])
      .getMany();

    return comments;
  }

  async deleteAllComments(): Promise<void> {
    await this.commentRepository.delete({});
  }
}
