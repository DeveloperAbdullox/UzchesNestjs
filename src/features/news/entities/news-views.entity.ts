
import { BaseModel } from '@/core/base-model.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { User } from '../../authentication/entities/user.entity';
import { News } from './news.entity';

@Entity('newsViews')
export class NewsViews extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  @ApiHideProperty()
  user?: Relation<User>;

  @Column()
  newsId!: number;

  @ManyToOne(() => News, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'newsId' })
  @ApiHideProperty()
  news?: Relation<News>;

  @CreateDateColumn()
  firstDate!: Date;

  @Column({ type: 'timestamp' })
  lastDate!: Date;

  @Column({ default: 1 })
  count!: number;
}
