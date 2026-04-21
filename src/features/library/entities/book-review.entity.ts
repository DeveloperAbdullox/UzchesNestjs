import { BaseModel } from '../../../core/base-model.entity';
import { Column, JoinColumn, ManyToOne, Entity } from "typeorm";
import { User } from '../../authentication/entities/user.entity';
import { Book } from '@/features/library/entities/book.entity';

@Entity('bookReviews')
export class BookReview extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => User, (user) => user.bookReviews, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: any;

  @Column()
  bookId!: number;

  @ManyToOne(() => Book, (book) => book.reviews, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'bookId' })
  book?: any;

  @Column()
  rating!: number;

  @Column({ length: 512, nullable: true })
  comment?: string;
}
