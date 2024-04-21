import { Controller, Param, Put, Request } from '@nestjs/common';
import { ShiftService } from './shift.service';

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Put(':id/register')
  registerUser(@Param('id') id: string, @Request() req) {
    return this.shiftService.registerUser(+id, req.user.sub);
  }

  @Put(':id/remove')
  removeUser(@Param('id') id: string, @Request() req) {
    return this.shiftService.removeUser(+id, req.user.sub);
  }
}
