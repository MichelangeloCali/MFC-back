import { Injectable } from '@nestjs/common';
import { HealthFacilityRepository } from './health-facility.repository';
import { ShiftService } from 'src/shift/shift.service';

@Injectable()
export class HealthFacilityService {
  constructor(
    private healthFacilityRepository: HealthFacilityRepository,
    private shiftService: ShiftService,
  ) {}
  findAll() {
    // TODO: validate if user is logged in to return health facilities
    return this.healthFacilityRepository.findAll({});
  }

  findHealthFacilityShifts(id: number) {
    return this.shiftService.findAllShiftsByHealthFacility(id);
  }
}
