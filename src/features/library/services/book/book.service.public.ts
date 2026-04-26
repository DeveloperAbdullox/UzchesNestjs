import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from '@/features/library/entities/book.entity';
import { plainToInstance } from 'class-transformer';
import { BookDetailDtoPublic } from '@/features/library/dtos/book/public/book.detail.dto.public';
import { BookListDtoPublic } from '@/features/library/dtos/book/public/book.list.dto.public';

@Injectable()
export class BookServicePublic {
  async getAll() {
    const book = await Book.find();
    return plainToInstance(BookListDtoPublic, book);
  }

  async getOne( id: number) {
    const book = await Book.findOneBy({ id })

    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }

    return plainToInstance(BookDetailDtoPublic, book)
  }
}