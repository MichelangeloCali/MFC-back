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
    const dateNow = new Date().toDateString();
    return this.healthFacilityService.findHealthFacilityShifts(
      +id,
      date ?? dateNow,
      {
        skip: page ? +page : undefined,
        take: limit ? +limit : undefined,
      },
    );
  }
}
