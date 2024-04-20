import { Module } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { ShiftController } from './shift.controller';
import { ShiftRepository } from './shift.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ShiftController],
  providers: [ShiftService, ShiftRepository, PrismaService],
})
export class ShiftModule {}
