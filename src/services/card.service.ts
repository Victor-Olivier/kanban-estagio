import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from '../entities/card.entity';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  create(createCardDto: CreateCardDto) {
    const card = this.cardRepository.create(createCardDto);
    return this.cardRepository.save(card);
  }

  findAll() {
    return this.cardRepository.find();
  }

  findOne(id: number) {
    return this.cardRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    await this.cardRepository.update(id, updateCardDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.cardRepository.delete(id);
  }
}
