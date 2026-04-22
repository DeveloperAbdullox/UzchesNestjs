import {BaseModel} from '@/core/base-model.entity';
import {Column, Entity, OneToMany} from 'typeorm';
import type { Relation } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import {Course} from '../../courses/entities/course.entity';
import { Book } from '@/features/library/entities/book.entity';

@Entity('authors')
export class Author extends BaseModel {
  @Column({length: 64})
  fullName!: string;

  @OneToMany(() => Course, (course) => course.author)
  @ApiHideProperty()
  courses?: Relation<Course[]>;

  @OneToMany(() => Book, (book) => book.author)
  @ApiHideProperty()
  books?: Relation<Book[]>;
}
