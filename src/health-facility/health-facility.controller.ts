import { Controller, Get, Param } from '@nestjs/common';
import { HealthFacilityService } from './health-facility.service';

@Controller('health-facility')
export class HealthFacilityController {
  constructor(private readonly healthFacilityService: HealthFacilityService) {}

  @Get()
  findAll() {
    return this.healthFacilityService.findAll();
  }

  @Get(':id/shifts')
  findOne(@Param('id') id: string) {
    return this.healthFacilityService.findHealthFacilityShifts(+id);
  }
}
