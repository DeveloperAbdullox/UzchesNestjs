import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '@/core/base-model.entity';

@Entity('courseLikes')
export class CourseLike extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne('User', 'courseLikes', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user?: any;

  @Column()
  courseId!: number;

  @ManyToOne('Course', 'likes', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  course?: any;
}
