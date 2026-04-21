import { Module } from '@nestjs/common';
import { CourseCategoryAdminService } from './services/course-category/course-category.admin.service';
import { CourseCategoryPublicService } from './services/course-category/course-category.public.service';
import { CourseCategoryAdminController } from './controllers/course-category/course-category.admin.controller';
import { CourseCategoryPublicController } from './controllers/course-category/course-category.public.controller';
import { CourseLikePublicService } from '@/features/courses/services/course-like/course-like.public.service';
import { CourseLikePublicController } from '@/features/courses/controllers/course-like/public/course-like.public.controller';
import { CourseAdminService } from '@/features/courses/services/course/course.admin.service';
import { CoursePublicService } from '@/features/courses/services/course/course.public.service';
import { CourseAdminController } from '@/features/courses/controllers/course/course.admin.controller';
import { CoursePublicController } from '@/features/courses/controllers/course/course.public.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from '@/features/courses/entities/course.entity';
import { CourseCategory } from '@/features/courses/entities/course-category.entity';
import { CourseSection } from '@/features/courses/entities/course-section.entity';
import { CourseLesson } from '@/features/courses/entities/course-lesson.entity';
import { CourseLike } from '@/features/courses/entities/course-like.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Course,
      CourseCategory,
      CourseSection,
      CourseLesson,
      CourseLike
    ])
  ],
  providers: [
    CourseCategoryAdminService,
    CourseCategoryPublicService,
    CourseAdminService,
    CoursePublicService,
    CourseLikePublicService,
  ],
  controllers: [
    CourseCategoryAdminController,
    CourseCategoryPublicController,
    CourseAdminController,
    CoursePublicController,
    CourseLikePublicController,
  ],
})
export class CoursesModule {
}
