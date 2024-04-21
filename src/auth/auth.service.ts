import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(createUserDto: CreateUserDto): Promise<any> {
    if (!createUserDto.email)
      throw new UnauthorizedException('You must pass an email');

    const user = await this.userService.findOne(createUserDto.email);

    let createUser;

    if (!user) {
      createUser = await this.userService.create(createUserDto);
    }

    const payload = {
      sub: user ? user.id : createUser.id,
      email: user ? user.email : createUser.email,
      name: user ? user.name : createUser.name,
      profileImage: user ? user.imageUrl : createUser.imageUrl,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
