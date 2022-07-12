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
  async signIn(
    @Req() req,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    const user = req.user;
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
  }

  @Public()
  @Get('/idRedundancyCheck')
  redundancyCheckByUserId(@Body() userIdDto: UserIdDto): Promise<boolean> {
    return this.authService.redundancyCheckByUserId(userIdDto);
  }

  @Get('profile')
  @HttpCode(201)
  getProfile(@Req() req) {
    // console.log(req);
    return this.authService.getProfile(req.user.userId);
  }

  @Public()
  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  refresh(@Req() req, @Res({ passthrough: true }) res: Response) {
    const user = req.user;
    const { accessToken, ...accessOption } =
      this.authService.getCookieWithJwtAccessToken(user.id);
    res.cookie('Authentication', accessToken, accessOption);
    return user;
  }

  @Post('/logout')
  @HttpCode(201)
  async logout(@Req() req, @Res({ passthrough: true }) res: Response) {
    const { accessOption, refreshOption } =
      this.authService.getCookiesForLogOut();
    await this.authService.removeRefreshToken(req.user.id);

    res.cookie('Authentication', '', accessOption);
    res.cookie('Refresh', '', refreshOption);
    this.logger.verbose(`로그아웃 성공`);
  }

  @Public()
  @Get('/test')
  async test() {
    return 'hello';
  }
}
