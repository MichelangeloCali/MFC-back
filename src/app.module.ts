import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaService } from './prisma.service';
import { HealthFacilityModule } from './health-facility/health-facility.module';
import { ShiftModule } from './shift/shift.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    HealthFacilityModule,
    ShiftModule,
    ConfigModule.forRoot(),
    UserModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
