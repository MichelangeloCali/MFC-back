import { Injectable } from '@nestjs/common';
import { HealthFacilityRepository } from './health-facility.repository';
import { ShiftService } from 'src/shift/shift.service';

@Injectable()
export class HealthFacilityService {
  constructor(
    private healthFacilityRepository: HealthFacilityRepository,
    private shiftService: ShiftService,
  ) {}

  async findAll(params: { skip?: number; take?: number }) {
    // TODO: validate if user is logged in to return health facilities
    const healthFacilities =
      await this.healthFacilityRepository.findAll(params);

    return healthFacilities.map((item) => ({
      healthFacilityId: item.id,
      name: item.name,
      type: item.type,
      hours: item.hours,
      shiftsPerDay: item.shiftsPerDay,
    }));
  }

  async findHealthFacilityShifts(
    id: number,
    date: string,
    params: { skip?: number; take?: number },
  ) {
    const healthFacilityShifts =
      await this.shiftService.findAllShiftsByHealthFacility(id, date, params);
    return healthFacilityShifts.map((item) => ({
      shiftId: item.id,
      available: item.available,
      period: item.period,
      duration: item.duration,
      startTime: item.startTime,
      endTime: item.endTime,
    }));
  }
}
