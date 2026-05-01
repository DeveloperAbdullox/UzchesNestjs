import { Module } from '@nestjs/common';
import { BookCategoryControllerAdmin } from './controllers/book-category/book-category.controller.admin';
import { BookCategoryServiceAdmin } from './services/book-category/book-category.service.admin';
import {
  BookCategoryControllerPublic
} from '@/features/library/controllers/book-category/book-category.controller.public';
import { BookCategoryServicePublic } from '@/features/library/services/book-category/book-category.service.public';
import { BookControllerPublic } from './controllers/book/book.controller.public';
import { BookServicePublic } from './services/book/book.service.public';
import { BookControllerAdmin } from './controllers/book/book.controller.admin';
import { BookAdminService } from './services/book/book.service.admin';
import { BookCategoryGetAllHandler } from './handlers/book-category/book-category.get-all.handler';
import { BookCategoryCreateHandler } from './handlers/book-category/book-category.create.handler';
import { BookCategoryRepository } from './repositories/book-category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookCategory } from './entities/book-category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookCategory])
  ],
  controllers: [
    BookCategoryControllerAdmin, 
    BookCategoryControllerPublic,
    BookControllerPublic,
    BookControllerAdmin
  ],
  providers: [
    BookCategoryServiceAdmin, 
    BookCategoryServicePublic,
    BookServicePublic,
    BookAdminService,
    BookCategoryGetAllHandler,
    BookCategoryCreateHandler,
    BookCategoryRepository
  ],
  exports: [
    BookCategoryServiceAdmin, 
    BookCategoryServicePublic,
    BookServicePublic,
    BookAdminService
  ],
})
export class LibraryModule {}
