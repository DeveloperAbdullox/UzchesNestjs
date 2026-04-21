import { BaseModel } from '@/core/base-model.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
// import { ReportCategory } from './report-category.entity';
import { ReportType } from '@/core/enums/report-type.enum';

@Entity('reports')
export class Report extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne('User', 'reports')
  user?: any;

  @Column()
  categoryId!: number;

  @ManyToOne('ReportCategory', 'reports', { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'categoryId' })
  category?: any;

  @Column({ type: 'enum', enum: ReportType })
  target!: ReportType;

  // targetga qarab foreign keyni qo'lda tekshirish kerak bo'ladi
  @Column()
  targetId!: number;

  @Column({ length: 256, nullable: true })
  description?: string;
}
