import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CommentsService } from 'src/comments/comments.service';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { Board } from './entity/board.entity';
import { Comment } from 'src/comments/entity/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Board]),
    AuthModule,
    TypeOrmModule.forFeature([Comment]),
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
