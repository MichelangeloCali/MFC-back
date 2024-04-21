import { Body, Controller, Get, Post, Query, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from 'src/auth/public.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}

  @Public()
  @Post('sign-up')
  async create(@Body() createUserDto: CreateUserDto) {
    const createdUser = await this.userService.create(createUserDto);
    return this.authService.signIn(createdUser.email);
  }

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
