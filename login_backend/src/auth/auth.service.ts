import {
  ConflictException,
  HttpException,
  HttpStatus,
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
import * as config from 'config';

@Injectable()
export class AuthService {
  private logger = new Logger('AuthController');
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  /*
   * 회원가입
   */
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

  /*
   * 로그인
   * validateUser: 유저 유무 확인 및 PW 비교
   * getCookieWithJwtAccessToken : accessToken 발급, 쿠키와 함께 반환
   * getCookieWithJwtRefreshToken : refreshToken 발급, 쿠키와 함께 반환
   */
  async validateUser(userSignInDto: UserSignInDto): Promise<UserInfoDto> {
    const { userId, password } = userSignInDto;
    const user = await this.userRepository.findOne({ userId });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    } else {
      throw new HttpException(
        '아이디 또는 비밀번호를 잘못 입력했습니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async getJwtAccessToken(id: number) {
    const payload = { id };
    const token = this.jwtService.sign(payload, {
      secret: config.get('jwt.accessToken_secret'),
      expiresIn: config.get('jwt').accessToken_expiresIn,
    });
    return {
      accessToken: token,
    };
  }
  async getJwtRefreshToken(id: number) {
    const payload = { id };
    const token = this.jwtService.sign(payload, {
      secret: config.get('jwt.refreshToken_secret'),
      expiresIn: config.get('jwt').refreshToken_expiresIn,
    });
    return {
      refreshToken: token,
    };
  }
  async setCurrentRefreshToken(refreshToken: string, id: number) {
    const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.userRepository.update(id, { currentHashedRefreshToken });
  }

  /*
   * 회원정보 조회하기
   */
  async getProfile(userId: string): Promise<UserInfoDto> {
    const user = await this.userRepository.findOne({ userId });
    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, currentHashedRefreshToken, ...result } = user;
      this.logger.verbose(`회원정보 조회 ${JSON.stringify(result)}`);
      return result;
    } else {
      return null;
    }
  }

  async getUserIfRefreshTokenMatches(
    refreshToken: string,
    id: number,
  ): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ id });
    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,
      user.currentHashedRefreshToken,
    );
    if (isRefreshTokenMatching) {
      return user;
    }
    return;
  }

  async removeRefreshToken(id: number) {
    return this.userRepository.update(id, {
      currentHashedRefreshToken: null,
    });
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
