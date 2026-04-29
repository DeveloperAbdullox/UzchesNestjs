import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BookCategoryServicePublic } from '@/features/library/services/book-category/book-category.service.public';
import { BookCategoryListDtoPublic } from '../../dtos/book-category/public/book-category.list.dto.public';
import { BookCategoryDetailPublicDto } from '../../dtos/book-category/public/book-category.detail.dto.public';

@ApiTags('BookCategory- Public')
@Controller('public/book-category')
export class BookCategoryControllerPublic {
  constructor(private service: BookCategoryServicePublic) {

  }

  @Get()
  @ApiOkResponse({ type: () => BookCategoryListDtoPublic, isArray: true })
  async getAll() {
    return await this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => BookCategoryDetailPublicDto, isArray: true })
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<BookCategoryDetailPublicDto> {
    return await this.service.getOne(id)
  }
}