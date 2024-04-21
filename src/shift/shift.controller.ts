import { Body, Controller, Param, Put, Get, Query } from '@nestjs/common';
import { ShiftService } from './shift.service';

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Put(':id/register')
  registerUser(@Param('id') id: string, @Body() data: { userId: number }) {
    return this.shiftService.registerUser(+id, data.userId);
  }

  @Put(':id/remove')
  removeUser(@Param('id') id: string, @Body() data: { userId: number }) {
    return this.shiftService.removeUser(+id, data.userId);
  }

  @Get('')
  findShiftByDay(
    @Query('date') date: string,
    @Query('userId') userId?: string,
  ) {
    return this.shiftService.findShiftByDay(date, +userId);
  }
}
