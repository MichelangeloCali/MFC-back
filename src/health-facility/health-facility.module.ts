import { Module } from '@nestjs/common';
import { HealthFacilityService } from './health-facility.service';
import { HealthFacilityController } from './health-facility.controller';
import { HealthFacilityRepository } from './health-facility.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [HealthFacilityController],
  providers: [HealthFacilityService, HealthFacilityRepository, PrismaService],
})
export class HealthFacilityModule {}
