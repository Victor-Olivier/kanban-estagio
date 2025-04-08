import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Column } from '../entities/column.entity';
import { ColumnService } from '../services/column.service';
import { ColumnController } from '../controllers/column.controller';
import { Board } from '../entities/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Column, Board])],
  providers: [ColumnService],
  controllers: [ColumnController],
})
export class ColumnModule {}
