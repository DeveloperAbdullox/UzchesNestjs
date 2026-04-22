import { BaseModel } from '@/core/base-model.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { Course } from '@/features/courses/entities/course.entity';
import { User } from '@/features/authentication/entities/user.entity';

@Entity('coursePurchases')
export class CoursePurchase extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => User, (user) => user.courseLikes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  @ApiHideProperty()
  user?: Relation<User>;

  @Column()
  courseId!: number;

  @ManyToOne(() => Course, (course) => course.purchases, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'courseId' })
  @ApiHideProperty()
  course?: Relation<Course>;

  @Column({ type: 'boolean', default: false })
  isCompleted!: boolean;
}
