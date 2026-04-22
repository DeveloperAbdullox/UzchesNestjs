import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { BaseModel } from '@/core/base-model.entity';
import { CourseSection } from '@/features/courses/entities/course-section.entity';
import { Course } from '@/features/courses/entities/course.entity';
import { UsersLessons } from '@/features/courses/entities/users-lessons.entity';


@Entity('courseLessons')
export class CourseLesson extends BaseModel {
  @Column()
  courseId!: number;

  @ManyToOne(() => Course, (course) => course.lessons, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  @ApiHideProperty()
  course?: Relation<Course>;

  @Column()
  courseSectionId!: number;

  @ManyToOne(() => CourseSection, (sections) => sections.lessons, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseSectionId' })
  @ApiHideProperty()
  courseSection?: Relation<CourseSection>;

  @Column({ length: 128 })
  title!: string;

  @Column({ type: 'text', nullable: true })
  content?: string;

  @Column({ length: 128, nullable: true })
  thumbnail?: string;

  @Column({ length: 256 })
  video!: string;

  @Column({ nullable: true })
  order?: number;

  @Column({ type: 'boolean', default: false })
  isFree!: boolean;

  @OneToMany(() => UsersLessons, (lesson) => lesson.courseLesson)
  @ApiHideProperty()
  users?: Relation<UsersLessons[]>;
}
