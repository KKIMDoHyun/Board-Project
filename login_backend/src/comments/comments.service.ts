import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { Repository } from 'typeorm';
import { Comment } from './entity/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  // async createComment(
  //   id: number,
  //   createCommentDto: CreateCommentDto,
  //   user: User,
  // ): Promise<Comment> {
  //   const { content } = createCommentDto;
  //   const reply = await this.commentRepository.create({
  //     content,
  //     user,
  //   });
  //   await this.commentRepository.save(reply);
  //   return reply;
  // }
}
