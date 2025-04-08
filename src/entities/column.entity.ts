import { Entity, PrimaryGeneratedColumn, Column as ColumnType, ManyToOne, OneToMany } from 'typeorm';
import { Board } from './board.entity';
import { Card } from './card.entity';

@Entity()
export class Column {
  @PrimaryGeneratedColumn()
  id: number;

  @ColumnType()
  title: string;

  @ManyToOne(() => Board, board => board.columns, { onDelete: 'CASCADE' })
  board: Board;

  @OneToMany(() => Card, card => card.column, { cascade: true })
  cards: Card[];
}
