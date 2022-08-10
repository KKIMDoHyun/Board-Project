import { Body, Controller, Post } from '@nestjs/common';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entity/user.entity';
import { CreateGoodDto } from './dto/create-good.dto';
import { GoodService } from './good.service';

@Controller('good')
export class GoodController {
  constructor(private goodService: GoodService) {}

  @Post('')
  setGood(@Body() createGoodDto: CreateGoodDto, @GetUser() user: User) {
    return this.goodService.setGood(createGoodDto, user);
  }
}
