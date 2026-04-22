import { BaseModel } from '@/core/base-model.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { User } from '@/features/authentication/entities/user.entity';
import { Course } from '@/features/courses/entities/course.entity';

@Entity('courseReviews')
export class CourseReview extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => User, (users) => users.courseReviews, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  @ApiHideProperty()
  user?: Relation<User>;

  @Column()
  courseId!: number;

  @ManyToOne(() => Course, (courses) => courses.reviews, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  @ApiHideProperty()
  course?: Relation<Course>;

  @Column()
  rating!: number;

  @Column({ length: 512, nullable: true })
  comment?: string;
}
