import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  findShiftByDay(date: string, userId?: number, healthFacilityId?: number) {
    const startDate = new Date(date);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 1);
    if (userId)
      return this.shiftRepository.findAllByUser(userId, {
        where: {
          startTime: {
            lte: endDate,
            gte: startDate,
          },
        },
      });

    if (healthFacilityId)
      return this.shiftRepository.findAllShiftsByHealthFacility(
        healthFacilityId,
        {
          where: {
            startTime: {
              lte: endDate,
              gte: startDate,
            },
          },
        },
      );
  }

  async registerUser(id: number, userId: number) {
    const shift = await this.shiftRepository.findOne(id);
    if (!shift) {
      throw new NotFoundException('Shift not found');
    }
    if (!shift.available || shift.userId) {
      throw new ConflictException('Shift already taken');
    }

    const updateShiftDto: UpdateShiftDto = {
      available: false,
      userId,
    };

    return this.shiftRepository.updateShift(id, updateShiftDto);
  }

  async removeUser(id: number, userId: number) {
    const shift = await this.shiftRepository.findOne(id);
    if (!shift) {
      throw new NotFoundException('Shift not found');
    }
    if (shift.userId !== userId) {
      throw new ConflictException('Shift belongs to another User');
    }

    const updateShiftDto: UpdateShiftDto = {
      available: true,
      userId: null,
    };
    return this.shiftRepository.updateShift(id, updateShiftDto);
  }
}
