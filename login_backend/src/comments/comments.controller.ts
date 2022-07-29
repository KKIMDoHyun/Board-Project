import { Body, Controller, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comment')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  // @Post()
  // createReply(
  //   @Body() createReplyDto: CreateReplyDto,
  //   @GetUser() user: User,
  // ): Promise<Reply> {
  //   return this.replyService.createReply(createReplyDto, user);
  // }
}
