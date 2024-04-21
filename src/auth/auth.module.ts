import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { UserRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/user.service';
import { ShiftService } from 'src/shift/shift.service';
import { ShiftRepository } from 'src/shift/shift.repository';
import { PrismaService } from 'src/prisma.service';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1800s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    UserRepository,
    ShiftService,
    ShiftRepository,
    PrismaService,
  ],
})
export class AuthModule {}
