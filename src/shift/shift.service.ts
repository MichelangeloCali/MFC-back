import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ShiftRepository } from './shift.repository';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ShiftService {
  constructor(private shiftRepository: ShiftRepository) {}

  findAllShiftsByHealthFacility(
    id: number,
    params: { skip?: number; take?: number; where?: Prisma.ShiftWhereInput },
  ) {
    return this.shiftRepository.findAllShiftsByHealthFacility(id, params);
  }

  findAllByUser(
    id: number,
    params: { skip?: number; take?: number; where?: Prisma.ShiftWhereInput },
  ) {
    return this.shiftRepository.findAllByUser(id, params);
  }

  findShiftByDay(
    date: string,
    userId: number | undefined,
    healthFacilityId: number | undefined,
    params: { skip?: number; take?: number },
  ) {
    const startDate = new Date(date);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 1);

    const { skip, take } = params;

    if (userId)
      return this.shiftRepository.findAllByUser(userId, {
        where: {
          startTime: {
            lte: endDate,
            gte: startDate,
          },
        },
        skip,
        take,
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
          skip,
          take,
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
