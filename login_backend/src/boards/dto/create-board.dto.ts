import { IsNotEmpty, MaxLength } from 'class-validator';
import { BoardStatus } from '../type/board-status.enum';

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  status: BoardStatus;
}
