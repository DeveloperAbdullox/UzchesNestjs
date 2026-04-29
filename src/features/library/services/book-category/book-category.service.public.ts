import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookCategory } from '@/features/library/entities/book-category.entity';
import { BookCategoryDetailPublicDto } from '../../dtos/book-category/public/book-category.detail.dto.public';
import { BookCategoryListDtoPublic } from '../../dtos/book-category/public/book-category.list.dto.public';

@Injectable()
export class BookCategoryServicePublic {
  async getAll() {
    const BookCategories = await BookCategory.find();
    return plainToInstance(BookCategoryListDtoPublic, BookCategories, {excludeExtraneousValues: true});
  }

  async getOne(id: number) {
    const bookcategory = await BookCategory.findOneBy({ id })
    if (!bookcategory) {
      throw new NotFoundException('BookCategory not found')
    }
    return plainToInstance(BookCategoryDetailPublicDto, bookcategory, {excludeExtraneousValues: true})
  }
}