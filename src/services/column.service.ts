import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Column } from '../entities/column.entity';
import { CreateColumnDto } from '../dto/create-column.dto';
import { UpdateColumnDto } from '../dto/update-column.dto';

@Injectable()
export class ColumnService {
  constructor(
    @InjectRepository(Column)
    private columnRepository: Repository<Column>,
  ) {}

  create(createColumnDto: CreateColumnDto) {
    const column = this.columnRepository.create(createColumnDto);
    return this.columnRepository.save(column);
  }

  findAll() {
    return this.columnRepository.find({ relations: ['cards'] });
  }

  findOne(id: number) {
    return this.columnRepository.findOne({ where: { id }, relations: ['cards'] });
  }

  async update(id: number, updateColumnDto: UpdateColumnDto) {
    await this.columnRepository.update(id, updateColumnDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.columnRepository.delete(id);
  }
}
