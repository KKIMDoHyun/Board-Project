import {
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UserSignUpDto } from './dto/user-signUp.dto';
import { UserSignInDto } from './dto/user-signIn.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './entity/user.entity';
import { UserIdDto } from './dto/user-id.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  private logger = new Logger('AuthController');
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @HttpCode(201)
  signUp(@Body() userSignUpDto: UserSignUpDto): Promise<User> {
    return this.authService.signUp(userSignUpDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Req() req, @Res({ passthrough: true }) res: Response) {
    const user = req.user;
    console.log(user);
    const { accessToken, ...accessOption } =
      this.authService.getCookieWithJwtAccessToken(user.id);
    const { refreshToken, ...refreshOption } =
      this.authService.getCookieWithJwtRefreshToken(user.id);

    await this.authService.setCurrentRefreshToken(refreshToken, user.id);

    res.cookie('Authentication', accessToken, accessOption);
    res.cookie('Refresh', refreshToken, refreshOption);

    this.logger.verbose(
      `로그인 성공: [accessToken]: ${accessToken}, [refreshToken]: ${refreshToken}`,
    );
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Post('/logout')
  async logout(@Req() req, @Res({ passthrough: true }) res: Response) {
    const { accessOption, refreshOption } =
      this.authService.getCookiesForLogOut();
    await this.authService.removeRefreshToken(req.user.id);

    res.cookie('Authentication', '', accessOption);
    res.cookie('Refresh', '', refreshOption);
    this.logger.verbose(`로그아웃 성공`);
  }

  @Get('/idRedundancyCheck')
  redundancyCheckByUserId(@Body() userIdDto: UserIdDto): Promise<boolean> {
    return this.authService.redundancyCheckByUserId(userIdDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Body() userIdDto: UserIdDto) {
    return this.authService.getProfile(userIdDto);
  }
}
