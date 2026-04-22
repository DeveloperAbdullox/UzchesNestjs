import { BaseModel } from '@/core/base-model.entity';
import { Column, JoinColumn, ManyToOne, Entity } from 'typeorm';
import type { Relation } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { User } from '../../authentication/entities/user.entity';
import { Book } from '@/features/library/entities/book.entity';

@Entity('bookReviews')
export class BookReview extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => User, (users) => users.bookReviews, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  @ApiHideProperty()
  user!: Relation<User>;

  @Column()
  bookId!: number;

  @ManyToOne(() => Book, (book) => book.reviews, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'bookId' })
  @ApiHideProperty()
  book?: Relation<Book>;

  @Column()
  rating!: number;

  @Column({ length: 512, nullable: true })
  comment?: string;
}
