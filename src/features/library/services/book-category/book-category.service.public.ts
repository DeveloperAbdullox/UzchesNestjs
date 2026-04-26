import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookCategoryDtoPublic } from '@/features/library/dtos/book-category/public/book-category.list.dto.public';
import { BookCategory } from '@/features/library/entities/book-category.entity';

@Injectable()
export class BookCategoryServicePublic {
  async getAll() {
    const BookCategories = await BookCategory.find();
    return plainToInstance(BookCategoryDtoPublic, BookCategories);
  }
}