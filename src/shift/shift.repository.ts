import { Injectable } from '@nestjs/common';

import { Shift, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateShiftDto } from './dto/update-shift.dto';

@Injectable()
export class ShiftRepository {
  constructor(private prisma: PrismaService) {}

  async findAllShiftsByHealthFacility(
    healthFacilityId: number,
    params: {
      skip?: number;
      take?: number;
      where?: Prisma.ShiftWhereInput;
    },
  ): Promise<Shift[]> {
    const { skip, take, where } = params;
    return this.prisma.shift.findMany({
      where: {
        healthFacilityId,
        AND: {
          deletedAt: null,
        },
        ...where,
      },
      skip,
      take,
    });
  }

  async findAllByUser(
    userId: number,
    params: {
      skip?: number;
      take?: number;
      where?: Prisma.ShiftWhereInput;
    },
  ): Promise<Partial<Shift>[]> {
    const { skip, take, where } = params;
    return this.prisma.shift.findMany({
      include: {
        healthFacility: {
          select: {
            name: true,
            type: true,
          },
        },
      },
      where: {
        userId,
        AND: {
          deletedAt: null,
        },
        ...where,
      },

      skip,
      take,
    });
  }

  async findOne(id: number): Promise<Shift> {
    return this.prisma.shift.findFirst({
      where: {
        id,
        AND: {
          deletedAt: null,
        },
      },
    });
  }

  async updateShift(
    id: number,
    updateShiftDto: UpdateShiftDto,
  ): Promise<Partial<Shift>> {
    return this.prisma.shift.update({
      select: {
        id: true,
        available: true,
        healthFacilityId: true,
      },
      data: {
        available: updateShiftDto.available,
        userId: updateShiftDto.userId,
      },
      where: {
        id,
      },
    });
  }
}
