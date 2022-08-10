import { IsNotEmpty } from 'class-validator';

export class CreateGoodDto {
  @IsNotEmpty()
  boardId: number;
}
