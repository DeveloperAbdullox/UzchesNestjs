import { BaseModel } from '../../../core/base-model.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('usersLessons')
export class UsersLessons extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne('User', 'lessons', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user?: any;

  @Column()
  courseLessonId!: number;

  @ManyToOne('CourseLesson', 'users', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseLessonId' })
  courseLesson?: any;

  @Column({nullable: true})
  stoppedAt?: number;

  @Column({type: 'boolean', default: false})
  isCompleted!: boolean;
}
