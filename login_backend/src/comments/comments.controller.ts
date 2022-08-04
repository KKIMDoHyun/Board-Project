import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entity/user.entity';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entity/comment.entity';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post('')
  createComment(
    @Body() createCommentDto: CreateCommentDto,
    @GetUser() user: User,
  ): Promise<Comment> {
    return this.commentsService.createComment(createCommentDto, user);
  }

  @Get('/board/:id')
  getComments(@Param('id') id: number): Promise<Comment[]> {
    return this.commentsService.getComments(id);
  }

  @Get('/all')
  getAllComments(): Promise<Comment[]> {
    return this.commentsService.getAllComments();
  }

  @Delete('')
  deleteAllComments(): Promise<void> {
    return this.commentsService.deleteAllComments();
  }
}
