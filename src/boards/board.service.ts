import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from '../entities/board.entity';
import { CreateBoardDto } from '../dto/create-board.dto';
import { UpdateBoardDto } from '../dto/update-board.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepo: Repository<Board>,
  ) {}

  create(dto: CreateBoardDto) {
    const board = this.boardRepo.create(dto);
    return this.boardRepo.save(board);
  }

  findAll() {
    return this.boardRepo.find({ relations: ['columns', 'columns.cards'] });
  }

  findOne(id: number) {
    return this.boardRepo.findOne({ where: { id }, relations: ['columns', 'columns.cards'] });
  }

  update(id: number, dto: UpdateBoardDto) {
    return this.boardRepo.update(id, dto);
  }

  remove(id: number) {
    return this.boardRepo.delete(id);
  }
}
