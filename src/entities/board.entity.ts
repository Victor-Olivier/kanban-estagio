import { Entity, PrimaryGeneratedColumn, Column as ColumnType, OneToMany } from 'typeorm';
import { Column } from './column.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @ColumnType()
  title: string;

  @OneToMany(() => Column, column => column.board, { cascade: true })
  columns: Column[];
}
