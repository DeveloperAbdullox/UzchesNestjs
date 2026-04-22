import { BaseModel } from '@/core/base-model.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { Author } from '@/features/common/entities/author.entity';
import { BookCategory } from '@/features/library/entities/book-category.entity';
import { Language } from '@/features/common/entities/language.entity';
import { Difficulty } from '@/features/common/entities/difficulty.entity';
import { BookReview } from '@/features/library/entities/book-review.entity';
import { BookLike } from '@/features/library/entities/book-like.entity';

@Entity('books')
export class Book extends BaseModel {

  @Column()
  authorId!: number;

  @ManyToOne(() => Author, (author) => author.books, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'authorId' })
  @ApiHideProperty()
  author?: Relation<Author>;

  @Column()
  categoryId!: number;

  @ManyToOne(() => BookCategory, (category) => category.books, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'categoryId' })
  @ApiHideProperty()
  category?: Relation<BookCategory>;

  @Column()
  languageId!: number;

  @ManyToOne(() => Language, (language) => language.books, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'languageId' })
  @ApiHideProperty()
  language?: Relation<Language>;

  @Column()
  difficultyId!: number;

  @ManyToOne(() => Difficulty, (difficult) => difficult.books, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'difficultyId' })
  @ApiHideProperty()
  difficulty?: Relation<Difficulty>;

  @Column({ length: 256 })
  title!: string;

  @Column({ length: 128, nullable: true })
  image?: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price!: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  newPrice?: number;

  @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
  rating?: number;

  @Column({ default: 0 })
  reviewsCount!: number;

  @Column()
  pages!: number;

  @Column({ type: 'date' })
  pubDate!: Date;

  @OneToMany(() => BookReview, (review) => review.book)
  @ApiHideProperty()
  reviews?: Relation<BookReview[]>;

  @OneToMany(() => BookLike, (like) => like.book)
  @ApiHideProperty()
  likes?: Relation<BookLike[]>;
}
