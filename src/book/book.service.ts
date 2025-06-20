import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import * as moment from 'moment-timezone';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}
  async create(createBookDto: CreateBookDto): Promise<Book> {
    // Usa moment-timezone para definir createdAt en Ecuador/Guayaquil
    const createdAt = moment()
      .tz('America/Guayaquil')
      .format('YYYY-MM-DD HH:mm:ss');

    const book = this.bookRepository.create({
      ...createBookDto,
      createdAt,
    });

    return await this.bookRepository.save(book);
  }

  async findAll() {
    const books = await this.bookRepository.find();
    return {
      status: true,
      data: books,
      message: 'Books retrieved successfully',
    };
  }

  findOne(id: number) {
    const book = this.bookRepository.findOne({ where: { idLibro: id } });
    if (!book) {
      return {
        status: false,
        message: `Book with ID ${id} not found`,
      };
    }
    return {
      status: true,
      data: book,
      message: 'Book retrieved successfully',
    };    
  }
}
