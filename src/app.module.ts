import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaService } from './prisma.service';
import { HealthFacilityModule } from './health-facility/health-facility.module';
import { ShiftModule } from './shift/shift.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    HealthFacilityModule,
    ShiftModule,
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
  ],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
