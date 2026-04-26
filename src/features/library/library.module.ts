import { Module } from '@nestjs/common';
import { BookCategoryControllerAdmin } from './controllers/book-category/book-category.controller.admin';
import { BookCategoryServiceAdmin } from './services/book-category/book-category.service.admin';
import {
  BookCategoryControllerPublic
} from '@/features/library/controllers/book-category/book-category.controller.public';
import { BookCategoryServicePublic } from '@/features/library/services/book-category/book-category.service.public';
import { BookControllerPublic } from './controllers/book/book.controller.public';
import { BookServicePublic } from './services/book/book.service.public';

@Module({
  controllers: [
    BookCategoryControllerAdmin, 
    BookCategoryControllerPublic,
    BookControllerPublic
  ],
  providers: [
    BookCategoryServiceAdmin, 
    BookCategoryServicePublic,
    BookServicePublic
  ],
  exports: [
    BookCategoryServiceAdmin, 
    BookCategoryServicePublic,
    BookServicePublic
  ],
})
export class LibraryModule {}
