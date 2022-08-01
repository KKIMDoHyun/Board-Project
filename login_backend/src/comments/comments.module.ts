import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Comment } from './entity/comment.entity';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Board } from 'src/boards/entity/board.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]),
    AuthModule,
    TypeOrmModule.forFeature([Board]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
