import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  private logger = new Logger('UserController');
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUserInfo(user: User): Promise<{}> {
    //   return user;
    const { email, username, phoneNumber, gender } = user;
    const userInfo = {
      email,
      username,
      phoneNumber,
      gender,
    };
    this.logger.verbose(`(getUserInfo) ${JSON.stringify(userInfo)}`);
    return userInfo;
  }
}
