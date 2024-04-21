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
      cursor?: Prisma.ShiftWhereUniqueInput;
    },
  ): Promise<Shift[]> {
    const { skip, take, cursor } = params;
    return this.prisma.shift.findMany({
      where: {
        healthFacilityId,
        AND: {
          deletedAt: null,
        },
      },
      skip,
      take,
      cursor,
    });
  }

  async findAllByUser(
    userId: number,
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.ShiftWhereUniqueInput;
    },
  ): Promise<Shift[]> {
    const { skip, take, cursor } = params;
    return this.prisma.shift.findMany({
      where: {
        userId,
        AND: {
          deletedAt: null,
        },
      },
      skip,
      take,
      cursor,
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
  ): Promise<Shift> {
    return this.prisma.shift.update({
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
