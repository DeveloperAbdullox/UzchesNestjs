import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { BaseModel } from '@/core/base-model.entity';
import { Difficulty } from '@/features/common/entities/difficulty.entity';
import { Language } from '@/features/common/entities/language.entity';
import { CourseCategory } from '@/features/courses/entities/course-category.entity';
import { Author } from '@/features/common/entities/author.entity';
import { CourseSection } from '@/features/courses/entities/course-section.entity';
import { CourseLesson } from '@/features/courses/entities/course-lesson.entity';
import { CourseReview } from '@/features/courses/entities/course-review.entity';
import { CourseLike } from '@/features/courses/entities/course-like.entity';
import { CoursePurchase } from '@/features/courses/entities/course-purchase.entity';


@Entity('courses')
export class Course extends BaseModel {
  @Column()
  authorId!: number;

  @ManyToOne(() => Author, (author) => author.courses, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'authorId' })
  @ApiHideProperty()
  author?: Relation<Author>;

  @Column()
  categoryId!: number;

  @ManyToOne(() => CourseCategory, (category) => category.courses, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'categoryId' })
  @ApiHideProperty()
  category?: Relation<CourseCategory>;

  @Column()
  languageId!: number;

  @ManyToOne(() => Language, (language) => language.courses, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'languageId' })
  @ApiHideProperty()
  language?: Relation<Language>;

  @Column()
  difficultyId!: number;

  @ManyToOne(() => Difficulty, (difficult) => difficult.courses, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'difficultyId' })
  @ApiHideProperty()
  difficulty?: Relation<Difficulty>;

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

  @OneToMany(() => CourseSection, (section) => section.course)

  @ApiHideProperty()
  sections?: Relation<CourseSection[]>;

  @OneToMany(() => CourseLesson, (lesson) => lesson.course)
  @ApiHideProperty()
  lessons?: Relation<CourseLesson[]>;

  @OneToMany(() => CourseReview, (review) => review.course)
  @ApiHideProperty()
  reviews?: Relation<CourseReview[]>;

  @OneToMany(() => CourseLike, (like) => like.course)
  @ApiHideProperty()
  likes?: Relation<CourseLike[]>;

  @OneToMany(() => CoursePurchase, (purchase) => purchase.course)
  @ApiHideProperty()
  purchases?: Relation<CoursePurchase[]>;
}
