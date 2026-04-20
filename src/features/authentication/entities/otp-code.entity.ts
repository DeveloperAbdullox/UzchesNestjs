import { BaseModel } from '@/core/base-model.entity';
import  { User } from './user.entity';
import { OtpType } from '@/core/enums/otp-type.enum';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('otpCodes')
export class OtpCode extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne('User','otpCodes', {onDelete: "CASCADE"})
  user?: User;

  @Column({length: 6})
  code!: string;

  @Column({type: "enum", enum: OtpType})
  type!: OtpType;
}
