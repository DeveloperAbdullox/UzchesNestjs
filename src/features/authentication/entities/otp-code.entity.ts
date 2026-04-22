import { BaseModel } from '@/core/base-model.entity';
import type { Relation } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { User } from './user.entity';
import { OtpType } from '@/core/enums/otp-type.enum';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('otpCodes')
export class OtpCode extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => User, (users) => users.otpCodes, { onDelete: 'CASCADE' })
  @ApiHideProperty()
  user?: Relation<User>;

  @Column({ length: 6 })
  code!: string;

  @Column({ type: 'enum', enum: OtpType })
  type!: OtpType;
}
