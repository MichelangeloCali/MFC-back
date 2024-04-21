import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { ShiftService } from 'src/shift/shift.service';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private shiftService: ShiftService,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
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
