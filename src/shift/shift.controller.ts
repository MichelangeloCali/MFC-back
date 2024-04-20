import {
  Controller,
  // Patch,
} from '@nestjs/common';
import { ShiftService } from './shift.service';
// import { UpdateShiftDto } from './dto/update-shift.dto';

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateShiftDto: UpdateShiftDto) {
  //   return this.shiftService.update(+id, updateShiftDto);
  // }
}
