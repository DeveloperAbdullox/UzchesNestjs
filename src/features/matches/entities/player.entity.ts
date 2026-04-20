import { BaseModel } from '@/core/base-model.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Country } from '../../common/entities/country.entity';

@Entity('players')
export class Player extends BaseModel {
  @Column()
  countryId!: number;

  @ManyToOne(() => Country, (country) => country.players, { onDelete: 'RESTRICT' })
  country?: Country;

  @Column({ length: 64 })
  fullName!: string;

  @Column({ length: 128, nullable: true })
  image?: string;

  @Column({ nullable: true })
  classic?: number;

  @Column({ nullable: true })
  rapid?: number;

  @Column({ nullable: true })
  blitz?: number;

  @OneToMany('Match', 'firstPlayer')
  matchesAsFirst?: any[];

  @OneToMany('Match', 'secondPlayer')
  matchesAsSecond?: any[];
}
