import { Module } from '@nestjs/common';
import { AuthenticationPublicService } from './services/user/authentication.public.service';
import { OtpCodePublicService } from './services/otp-code/otp-code.public.service';
import { AuthenticationPublicController } from './controllers/user/authentication.public.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtpCode } from '@/features/authentication/entities/otp-code.entity';
import { User } from '@/features/authentication/entities/user.entity';
import {
  AuthenticationAdminController
} from '@/features/authentication/controllers/user/authentication.admin.controller';
import { AuthenticationAdminService } from '@/features/authentication/services/user/authentication.admin.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, OtpCode])
  ],
  controllers: [
    AuthenticationPublicController,
    AuthenticationAdminController
  ],
  providers: [
    AuthenticationPublicService,
    OtpCodePublicService,
    AuthenticationAdminService
  ],
})
export class AuthenticationModule {
}
