import { Injectable } from '@nestjs/common';
import { ShiftRepository } from './shift.repository';
import { UpdateShiftDto } from './dto/update-shift.dto';

@Injectable()
export class ShiftService {
  constructor(private shiftRepository: ShiftRepository) {}

  findAllShiftsByHealthFacility(id: number) {
    return this.shiftRepository.findAllShiftsByHealthFacility(id, {});
  }

  findAllByUser(id: number) {
    return this.shiftRepository.findAllByUser(id, {});
  }

  registerUser(id: number, userId: number) {
    const updateShiftDto: UpdateShiftDto = {
      available: false,
      userId,
    };
    return this.shiftRepository.updateShift(id, updateShiftDto);
  }

  removeUser(id: number) {
    const updateShiftDto: UpdateShiftDto = {
      available: true,
      userId: null,
    };
    return this.shiftRepository.updateShift(id, updateShiftDto);
  }
}
