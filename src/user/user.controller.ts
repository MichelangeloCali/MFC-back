import { Controller, Get, Query, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('shifts')
  findUserShifts(
    @Request() req,
    @Query('date') date: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const dateNow = new Date().toDateString();
    return this.userService.findUserShifts(req.user.sub, date ?? dateNow, {
      skip: page ? +page : undefined,
      take: limit ? +limit : undefined,
    });
  }
}
