import { Injectable } from '@nestjs/common';
import { HealthFacilityRepository } from './health-facility.repository';

@Injectable()
export class HealthFacilityService {
  constructor(private healthFacilityRepository: HealthFacilityRepository) {}
  findAll() {
    // TODO: validate if user is logged in to return health facilities
    return this.healthFacilityRepository.findAll({});
  }

  findHealthFacilityShifts(id: number) {
    // TODO: get shifts by health facility id
    return `This action returns a #${id} healthFacility`;
  }
}
