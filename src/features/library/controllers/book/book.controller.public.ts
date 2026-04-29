import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
import { BookServicePublic } from '@/features/library/services/book/book.service.public';
import { BookListDtoPublic } from '@/features/library/dtos/book/public/book.list.dto.public';
import { BookDetailDtoPublic } from '../../dtos/book/public/book.detail.dto.public';

@ApiTags('Book - Public')
@Controller('public/book')
export class BookControllerPublic {
  constructor(private service: BookServicePublic) {

  }

  @Get()
  @ApiOkResponse({ type: () => BookListDtoPublic, isArray: true })
  async getAll() {
    return await this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => BookDetailDtoPublic, isArray: true})
  async getOne(@Param('id') id: number) {
    return await this.service.getOne(id);
  }
}