import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CommentsService } from 'src/comments/comments.service';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { Board } from './entity/board.entity';
import { Comment } from 'src/comments/entity/comment.entity';
import { Good } from 'src/good/entity/good.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Board]),
    AuthModule,
    TypeOrmModule.forFeature([Comment]),
    TypeOrmModule.forFeature([Good]),
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
