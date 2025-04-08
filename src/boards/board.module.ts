import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from '../entities/board.entity';
import { BoardService } from '../services/board.service';
import { BoardController } from '../controllers/board.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  providers: [BoardService],
  controllers: [BoardController],
})
export class BoardModule {}
