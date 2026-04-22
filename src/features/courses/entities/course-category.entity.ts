import { BaseModel } from '@/core/base-model.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { Course } from '@/features/courses/entities/course.entity';

@Entity('courseCategories')
export class CourseCategory extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;

  @OneToMany(() => Course, (course) => course.category)
  @ApiHideProperty()
  courses?: Relation<Course[]>;
}
