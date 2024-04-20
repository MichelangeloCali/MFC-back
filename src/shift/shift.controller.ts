import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ShiftService } from './shift.service';

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Patch(':id/register')
  registerUser(@Param('id') id: string, @Body() data: { userId: number }) {
    return this.shiftService.registerUser(+id, data.userId);
  }

  @Patch(':id/remove')
  removeUser(@Param('id') id: string) {
    return this.shiftService.removeUser(+id);
  }
}
