import { Injectable } from '@nestjs/common';
import { ShiftRepository } from './shift.repository';

@Injectable()
export class ShiftService {
  constructor(private shiftRepository: ShiftRepository) {}

  findAllShiftsByHealthFacility(id: number) {
    return this.shiftRepository.findAllShiftsByHealthFacility(id, {});
  }

  findAllByUser(id: number) {
    return this.shiftRepository.findAllByUser(id, {});
  }
}
