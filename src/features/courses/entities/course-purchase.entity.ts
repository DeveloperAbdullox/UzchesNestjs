import { BaseModel } from '@/core/base-model.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../../authentication/entities/user.entity';
import { Course } from './course.entity';

@Entity('coursePurchases')
export class CoursePurchase extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne('User', 'courseLikes', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user?: any;

  @Column()
  courseId!: number;

  @ManyToOne('Course', 'purchases', { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'courseId' })
  course?: any;

  @Column({ type: 'boolean', default: false })
  isCompleted!: boolean;
}
