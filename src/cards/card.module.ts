import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from '../entities/card.entity';
import { Column } from '../entities/column.entity';
import { CardService } from '../services/card.service';
import { CardController } from '../controllers/card.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Card, Column])],
  providers: [CardService],
  controllers: [CardController],
})
export class CardModule {}
