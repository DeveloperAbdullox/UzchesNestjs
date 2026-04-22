import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { BaseModel } from '@/core/base-model.entity';
import { User } from '../../authentication/entities/user.entity';
import { Book } from './book.entity';

@Entity('bookLikes')
export class BookLike extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => User, (users) => users.bookLikes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  @ApiHideProperty()
  user?: Relation<User>;

  @Column()
  bookId!: number;

  @ManyToOne(() => Book, (books) => books.likes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'bookId' })
  @ApiHideProperty()
  book?: Relation<Book>;
}
