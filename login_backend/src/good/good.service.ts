import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { Board } from 'src/boards/entity/board.entity';
import { Repository } from 'typeorm';
import { CreateGoodDto } from './dto/create-good.dto';
import { Good } from './entity/good.entity';

@Injectable()
export class GoodService {
  constructor(
    @InjectRepository(Good)
    private readonly goodRepository: Repository<Good>,
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async setGood(createGoodDto: CreateGoodDto, user: User) {
    const { boardId } = createGoodDto;
    const foundGood = await this.goodRepository.findOne({
      where: {
        board: boardId,
        user,
      },
    });
    const board = await this.boardRepository.findOne(boardId);
    if (!foundGood) {
      const good = await this.goodRepository.create({
        board,
        user,
      });
      await this.goodRepository.save(good);
      console.log('좋아요 추가');
    } else {
      await this.goodRepository.delete(foundGood);
      console.log('좋아요 삭제');
    }
  }
}
