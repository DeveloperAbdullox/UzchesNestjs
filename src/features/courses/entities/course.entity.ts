import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '@/core/base-model.entity';


@Entity('courses')
export class Course extends BaseModel {
  @Column()
  authorId!: number;

  @ManyToOne('Author', 'courses', { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'authorId' })
  author?: any;

  @Column()
  categoryId!: number;

  @ManyToOne('CourseCategory', 'courses', { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'categoryId' })
  category?: any;

  @Column()
  languageId!: number;

  @ManyToOne('Language', 'courses', { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'languageId' })
  language?: any;

  @Column()
  difficultyId!: number;

  @ManyToOne('Difficulty', 'courses', { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'difficultyId' })
  difficulty?: any;

  @Column({ length: 128 })
  title!: string;

  @Column({ length: 128 })
  image!: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price!: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  newPrice?: number;

  @Column({ default: 0 })
  reviewsCount!: number;

  @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
  rating?: number;

  @Column({ default: 0 })
  sectionsCount!: number;

  @Column({ default: 0 })
  lessonsCount!: number;

  @OneToMany('CourseSection', 'course')
  sections?: any[];

  @OneToMany('CourseLesson', 'course')
  lessons?: any[];

  @OneToMany('CourseReview', 'course')
  reviews?: any[];

  @OneToMany('CourseLike', 'course')
  likes?: any[];

  @OneToMany('CoursePurchase', 'course')
  purchases?: any[];
}
