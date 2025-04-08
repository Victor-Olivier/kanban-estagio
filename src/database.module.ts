import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Column } from './entities/column.entity';
import { Card } from './entities/card.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'kanban.db',
      entities: [Board, Column, Card],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
