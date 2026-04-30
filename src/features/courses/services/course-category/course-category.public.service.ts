import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseCategory } from '@/features/courses/entities/course-category.entity';
import { CourseCategoryListPublicDto } from '@/features/courses/dtos/course-category';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CourseCategoryPublicService {
  async getAll() {
    const courseCategories = await CourseCategory.find();
    return plainToInstance(CourseCategoryListPublicDto, courseCategories);
  }

  async getOne(id: number) {
    const courseCategory = await CourseCategory.findOneBy({ id })
    if (!courseCategory) {
      throw new NotFoundException('CourseCategory with given id not found')
    }
    return plainToInstance(CourseCategoryListPublicDto, courseCategory, { excludeExtraneousValues: true });
  }
}