import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Board } from 'src/boards/entity/board.entity';
import { Good } from './entity/good.entity';
import { GoodController } from './good.controller';
import { GoodService } from './good.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Good]),
    AuthModule,
    TypeOrmModule.forFeature([Board]),
  ],
  controllers: [GoodController],
  providers: [GoodService],
})
export class GoodModule {}
