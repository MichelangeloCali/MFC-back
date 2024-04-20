import { Module } from '@nestjs/common';
import { HealthFacilityService } from './health-facility.service';
import { HealthFacilityController } from './health-facility.controller';

@Module({
  controllers: [HealthFacilityController],
  providers: [HealthFacilityService],
})
export class HealthFacilityModule {}
