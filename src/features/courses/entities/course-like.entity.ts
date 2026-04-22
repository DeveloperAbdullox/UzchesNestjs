import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { BaseModel } from '@/core/base-model.entity';
import { User } from '@/features/authentication/entities/user.entity';
import { Course } from '@/features/courses/entities/course.entity';

@Entity('courseLikes')
export class CourseLike extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => User, (users) => users.courseLikes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user?: Relation<User>;

  @Column()
  courseId!: number;

  @ManyToOne(() => Course, (courses) => courses.likes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  course?: Relation<Course>;
}
