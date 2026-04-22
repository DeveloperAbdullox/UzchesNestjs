import { BaseModel } from '@/core/base-model.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { User } from '@/features/authentication/entities/user.entity';
import { CourseLesson } from '@/features/courses/entities/course-lesson.entity';

@Entity('usersLessons')
export class UsersLessons extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => User, (users) => users.lessons, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  @ApiHideProperty()
  user?: Relation<User>;

  @Column()
  courseLessonId!: number;

  @ManyToOne(() => CourseLesson, (users) => users.users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseLessonId' })
  @ApiHideProperty()
  courseLesson?: Relation<CourseLesson>;

  @Column({ nullable: true })
  stoppedAt?: number;

  @Column({ type: 'boolean', default: false })
  isCompleted!: boolean;
}
