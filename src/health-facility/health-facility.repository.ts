import { Injectable } from '@nestjs/common';
import { HealthFacility, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class HealthFacilityRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HealthFacilityWhereUniqueInput;
    where?: Prisma.HealthFacilityWhereInput;
    orderBy?: Prisma.HealthFacilityOrderByWithRelationInput;
  }): Promise<HealthFacility[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.healthFacility.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
