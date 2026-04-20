import { BaseModel } from '@/core/base-model.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('courseReviews')
export class CourseReview extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne('User','courseReviews', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user?: any;

  @Column()
  courseId!: number;

  @ManyToOne('Course','reviews', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  course?: any;

  @Column()
  rating!: number;

  @Column({ length: 512, nullable: true })
  comment?: string;
}
