import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Column } from './entities/column.entity';
import { Card } from './entities/card.entity';
import { BoardModule } from './boards/board.module';
import { ColumnModule } from './columns/column.module';
import { CardModule } from './cards/card.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'kanban.db',
      entities: [Board, Column, Card],
      synchronize: true, // Trocar para false ao usar migrações
    }),
    BoardModule,
    ColumnModule,
    CardModule,
  ],
})
export class AppModule {}
