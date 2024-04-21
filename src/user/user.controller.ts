import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(id);
  // }

  @Get(':id/shifts')
  findUserShifts(
    @Param('id') id: string,
    @Query('date') date: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.userService.findUserShifts(+id, date, {
      skip: page ? +page : undefined,
      take: limit ? +limit : undefined,
    });
  }
}
