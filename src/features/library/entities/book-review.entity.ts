import { BaseModel } from '../../../core/base-model.entity';
import { Column, JoinColumn, ManyToOne, Entity } from "typeorm";

@Entity('bookReviews')
export class BookReview extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne('User', 'bookReviews', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: any;

  @Column()
  bookId!: number;

  @ManyToOne( 'Book','reviews', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'bookId' })
  book?: any;

  @Column()
  rating!: number;

  @Column({ length: 512, nullable: true })
  comment?: string;
}
