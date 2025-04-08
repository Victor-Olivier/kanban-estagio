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
    private boardRepository: Repository<Board>,
  ) {}

  create(createBoardDto: CreateBoardDto) {
    const board = this.boardRepository.create(createBoardDto);
    return this.boardRepository.save(board);
  }

  findAll() {
    return this.boardRepository.find({ relations: ['columns'] });
  }

  findOne(id: number) {
    return this.boardRepository.findOne({ where: { id }, relations: ['columns'] });
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    await this.boardRepository.update(id, updateBoardDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.boardRepository.delete(id);
  }
}
