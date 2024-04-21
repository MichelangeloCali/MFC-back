import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { ShiftService } from 'src/shift/shift.service';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private shiftService: ShiftService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    if (!createUserDto.email || !createUserDto.name)
      throw new UnauthorizedException('Email and Name are required');

    const user = await this.userRepository.findOne(createUserDto.email);
    if (user) throw new ConflictException('User already exists');
    return await this.userRepository.create(createUserDto);
  }

  findOne(email: string) {
    return this.userRepository.findOne(email);
  }

  findUserShifts(
    id: number,
    date: string,
    params: { skip?: number; take?: number },
  ) {
    return this.shiftService.findAllByUser(id, date, params);
  }
}
