import {
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserSignUpDto } from './dto/user-signUp.dto';
import { AuthService } from './auth.service';
import { User } from './entity/user.entity';
import { UserIdDto } from './dto/user-id.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Response } from 'express';
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
    const { accessToken } = this.authService.getCookieWithJwtAccessToken(
      user.id,
    );
    const { refreshToken } = this.authService.getCookieWithJwtRefreshToken(
      user.id,
    );
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
  @Get('/idRedundancyCheck')
  redundancyCheckByUserId(@Body() userIdDto: UserIdDto): Promise<boolean> {
    return this.authService.redundancyCheckByUserId(userIdDto);
  }

  @Get('/profile')
  @HttpCode(201)
  getProfile(@Req() req) {
    return this.authService.getProfile(req.user.userId);
  }

  @Public()
  @UseGuards(JwtRefreshGuard)
  @Post('/refresh')
  refresh(@Req() req) {
    const user = req.user;
    const { accessToken, ...accessOption } =
      this.authService.getCookieWithJwtAccessToken(user.id);
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

  @Public()
  @Get('/test')
  async test() {
    return 'hello';
  }
}
