import { BaseModel } from '@/core/base-model.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { Country } from '../../common/entities/country.entity';
import { Match } from '@/features/matches/entities/match.entity';

@Entity('players')
export class Player extends BaseModel {
  @Column()
  countryId!: number;

  @ManyToOne(() => Country, (country) => country.players, { onDelete: 'RESTRICT' })
  @ApiHideProperty()
  country?: Relation<Country>;

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

  @OneToMany(() => Match, (match) => match.firstPlayer)
  @ApiHideProperty()
  matchesAsFirst?: Relation<Match[]>;

  @OneToMany(() => Match, (match) => match.secondPlayer)
  @ApiHideProperty()
  matchesAsSecond?: Relation<Match[]>;
}
