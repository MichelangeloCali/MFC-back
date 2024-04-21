import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass?: string): Promise<any> {
    const user = await this.userService.findOne(email);
    // if (user?.password !== pass) {
    //   throw new UnauthorizedException();
    // }
    // const { result } = user;

    const payload = {
      sub: user.id,
      email: user.email,
      profileImage: user.imageUrl,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
