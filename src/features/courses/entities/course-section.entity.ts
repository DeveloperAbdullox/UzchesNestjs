import { BaseModel} from '../../../core/base-model.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('courseSections')
export class CourseSection extends BaseModel {
  @Column()
  courseId!: number;

  @ManyToOne('Course', 'sections', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  course?: any;

  @Column({ length: 256 })
  title!: string;

  @Column({ nullable: true })
  order?: number;

  @Column({ type: 'timestamp' })
  date!: Date;

  @OneToMany('CourseLesson', 'course')
  lessons?: any[];
}
