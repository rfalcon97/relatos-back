import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { GetBookDto } from './dto/get-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('create')
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Post()
  findAll() {
    return this.bookService.findAll();
  }

  @Post('find-id')
  findOne(@Body() getBookDto: GetBookDto) {
    return this.bookService.findOne(getBookDto.idBook);
  }

 
}
