import { Injectable } from '@nestjs/common';
import { CourseCategory } from '@/features/courses/entities/course-category.entity';
import { plainToInstance } from 'class-transformer';
import { BookCategoryDtoPublic } from '@/features/library/dtos/book-category/public/book-category.list.dto.public';

@Injectable()
export class BookCategoryServicePublic {
  async getAll() {
    const courseCategories = await CourseCategory.find();
    return plainToInstance(BookCategoryDtoPublic, courseCategories);
  }
}