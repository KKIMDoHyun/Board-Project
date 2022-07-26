import {
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserSignUpDto } from './dto/user-signUp.dto';
import { AuthService } from './auth.service';
import { User } from './entity/user.entity';
import { UserIdDto } from './dto/user-id.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import { Public } from './decorators/public-decorator';
import { UserInfoDto } from './dto/user-info.dto';

@Controller('auth')
export class AuthController {
  private logger = new Logger('AuthController');
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/signup')
  @HttpCode(201)
  signUp(@Body() userSignUpDto: UserSignUpDto): Promise<User> {
    console.log(userSignUpDto);
    return this.authService.signUp(userSignUpDto);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Req() req): Promise<{
    accessToken: string;
    refreshToken: string;
    userInfo: UserInfoDto;
  }> {
    const user = req.user;
    const { accessToken } = await this.authService.getJwtAccessToken(user.id);
    const { refreshToken } = await this.authService.getJwtRefreshToken(user.id);
    await this.authService.setCurrentRefreshToken(refreshToken, user.id);
    this.logger.verbose(`로그인 성공: ${JSON.stringify(user)}`);
    const { currentHashedRefreshToken, ...userInfo } = user;
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
      userInfo: userInfo,
    };
  }

  @Public()
  @Post('/idRedundancyCheck')
  async redundancyCheckByUserId(
    @Body() userIdDto: UserIdDto,
  ): Promise<boolean> {
    return await this.authService.redundancyCheckByUserId(userIdDto);
  }

  @Get('/profile')
  @HttpCode(201)
  async getProfile(@Req() req) {
    return await this.authService.getProfile(req.user.userId);
  }

  @Public()
  @UseGuards(JwtRefreshGuard)
  @Post('/refresh')
  async refresh(@Req() req) {
    const user = req.user;
    const { accessToken } = await this.authService.getJwtAccessToken(user.id);
    return { accessToken: accessToken };
  }

  @Post('/logout')
  @HttpCode(201)
  async logout(
    @Req() req,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    await this.authService.removeRefreshToken(req.user.id);
    this.logger.verbose(`로그아웃 성공`);
    return { accessToken: '', refreshToken: '' };
  }
}
