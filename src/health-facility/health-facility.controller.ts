import { Controller, Get, Param, Query } from '@nestjs/common';
import { HealthFacilityService } from './health-facility.service';

@Controller('health-facility')
export class HealthFacilityController {
  constructor(private readonly healthFacilityService: HealthFacilityService) {}

  @Get()
  findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    return this.healthFacilityService.findAll({
      skip: page ? +page : undefined,
      take: limit ? +limit : undefined,
    });
  }

  @Get(':id/shifts')
  findOne(
    @Param('id') id: string,
    @Query('date') date: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.healthFacilityService.findHealthFacilityShifts(+id, date, {
      skip: page ? +page : undefined,
      take: limit ? +limit : undefined,
    });
  }
}
