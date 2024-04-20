import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { HealthFacilityModule } from './health-facility/health-facility.module';
import { ShiftModule } from './shift/shift.module';

@Module({
  imports: [HealthFacilityModule, ShiftModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
