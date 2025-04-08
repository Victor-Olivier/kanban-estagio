import { Entity, PrimaryGeneratedColumn, Column as ColumnType, ManyToOne } from 'typeorm';
import { Column } from './column.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @ColumnType()
  title: string;

  @ColumnType({ nullable: true })
  description: string;

  @ManyToOne(() => Column, column => column.cards, { onDelete: 'CASCADE' })
  column: Column;
}
