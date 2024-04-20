import { Module } from '@nestjs/common';
import { HealthFacilityService } from './health-facility.service';
import { HealthFacilityController } from './health-facility.controller';
import { HealthFacilityRepository } from './health-facility.repository';
import { PrismaService } from 'src/prisma.service';
import { ShiftService } from 'src/shift/shift.service';
import { ShiftRepository } from 'src/shift/shift.repository';

@Module({
  controllers: [HealthFacilityController],
  providers: [
    HealthFacilityService,
    HealthFacilityRepository,
    PrismaService,
    ShiftService,
    ShiftRepository,
  ],
})
export class HealthFacilityModule {}
