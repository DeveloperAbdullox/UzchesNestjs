import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/base-model.entity';
import { CourseSection } from '@/features/courses/entities/course-section.entity';


@Entity('courseLessons')
export class CourseLesson extends BaseModel {
  @Column()
  courseId!: number;

  @ManyToOne('Course', 'lessons', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  course?: any;

  @Column()
  courseSectionId!: number;

  @ManyToOne(() => CourseSection, (sections) => sections.lessons, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseSectionId' })
  courseSection?: any;

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

  @OneToMany('UsersLessons', 'courseLesson')
  users?: any[];
}
