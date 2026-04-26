import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { BookCategoryServicePublic } from '@/features/library/services/book-category/book-category.service.public';
import { BookCategoryDtoPublic } from '@/features/library/dtos/book-category/public/book-category.list.dto.public';

@ApiTags('BookCategory- Public')
@Controller('public/book-category')
export class BookCategoryControllerPublic {
  constructor(private service: BookCategoryServicePublic) {

  }

  @Get()
  @ApiOkResponse({ type: () => BookCategoryDtoPublic, isArray: true })
  async getAll() {
    return await this.service.getAll();
  }
}