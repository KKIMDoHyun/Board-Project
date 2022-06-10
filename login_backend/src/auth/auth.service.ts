import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { User } from './entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, username, gender, phoneNumber, password } =
      authCredentialsDto;
    const user = this.userRepository.create({
      email,
      username,
      gender,
      phoneNumber,
      password,
    });
    try {
      await this.userRepository.save(user);
    } catch (err) {
      if (err.code === '23505') {
        throw new ConflictException('Exist Account');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
