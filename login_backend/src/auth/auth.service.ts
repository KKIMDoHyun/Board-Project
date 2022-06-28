import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSignUpDto } from './dto/user-signUp.dto';
import { UserSignInDto } from './dto/user-signIn.dto';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserIdDto } from './dto/user-id.dto';
import { UserInfoDto } from './dto/user-info.dto';

@Injectable()
export class AuthService {
  private logger = new Logger('AuthController');
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(userSignUpDto: UserSignUpDto): Promise<User> {
    const { userId, email, username, gender, phoneNumber, password } =
      userSignUpDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.userRepository.create({
      userId,
      email,
      username,
      gender,
      phoneNumber,
      password: hashedPassword,
    });
    try {
      await this.userRepository.save(user);
      this.logger.verbose(`회원가입 성공: ${JSON.stringify(userSignUpDto)}`);
      return user;
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        this.logger.verbose(
          `회원가입 실패: 이미 존재하는 계정 ${JSON.stringify(userSignUpDto)}`,
        );
        throw new ConflictException('Exist Account');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUser(userSignInDto: UserSignInDto): Promise<UserInfoDto> {
    const { userId, password } = userSignInDto;
    const user = await this.userRepository.findOne({ userId });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      console.log(result);
      return result;
    }
    return null;
  }

  async signIn(userSignInDto: UserSignInDto): Promise<{ accessToken: string }> {
    const payload = { userId: userSignInDto.userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async getProfile(userIdDto: UserIdDto): Promise<UserInfoDto> {
    const { userId } = userIdDto;
    const user = await this.userRepository.findOne({ userId });
    if (user) {
      const { password, currentHashedRefreshToken, ...result } = user;
      console.log(result);
      return result;
    } else {
      return null;
    }
  }

  async getUserIfRefreshTokenMatches(
    refreshToken: string,
    userIdDto: UserIdDto,
  ): Promise<User | undefined> {
    const { userId } = userIdDto;
    const user = await this.userRepository.findOne({ userId });
    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,
      user.currentHashedRefreshToken as string,
    );

    if (isRefreshTokenMatching) {
      return user;
    }
    return;
  }

  async redundancyCheckByUserId(userIdDto: UserIdDto): Promise<boolean> {
    const { userId } = userIdDto;
    const user = await this.userRepository.findOne({ userId });
    if (!user) {
      return true;
    } else {
      return false;
    }
  }
}
