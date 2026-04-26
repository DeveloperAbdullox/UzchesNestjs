import { Module } from '@nestjs/common';
import { BookCategoryControllerAdmin } from './controllers/book-category/book-category.controller.admin';
import { BookCategoryServiceAdmin } from './services/book-category/book-category.service.admin';
import {
  BookCategoryControllerPublic
} from '@/features/library/controllers/book-category/book-category.controller.public';
import { BookCategoryServicePublic } from '@/features/library/services/book-category/book-category.service.public';

@Module({
  controllers: [BookCategoryControllerAdmin, BookCategoryControllerPublic],
  providers: [BookCategoryServiceAdmin, BookCategoryServicePublic],
  exports: [BookCategoryServiceAdmin, BookCategoryServicePublic],
})
export class LibraryModule {}
