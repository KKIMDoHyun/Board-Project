import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const { email, username, gender, phoneNumber, password } = createUserDto;
    const user = this.userRepository.create({
      email,
      username,
      gender,
      phoneNumber,
      password,
    });
    await this.userRepository.save(user);
    return user;
  }
}
