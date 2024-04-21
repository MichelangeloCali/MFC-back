import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { PrismaService } from 'src/prisma.service';
import { ShiftService } from 'src/shift/shift.service';
import { ShiftRepository } from 'src/shift/shift.repository';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    PrismaService,
    ShiftService,
    ShiftRepository,
    AuthService,
  ],
})
export class UserModule {}
