import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CourseCategoryListPublicDto } from '@/features/courses/dtos/course-category';
import { CourseCategoryPublicService } from '../../services/course-category/course-category.public.service';
import { CourseCategoryDetailPublicDto } from '../../dtos/course-category/public/course-category.detail.public.dto';

@ApiTags('CourseCategory - Public')
@Controller('public/course-category')
export class CourseCategoryPublicController {
  constructor(private service: CourseCategoryPublicService) {
  }

  @Get()
  @ApiOkResponse({ type: () => CourseCategoryListPublicDto, isArray: true })
  async getAll() {
    return await this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseCategoryDetailPublicDto})
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.service.getOne(id);
  }
}