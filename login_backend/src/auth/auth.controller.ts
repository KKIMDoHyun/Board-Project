import {
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
  Post,
  Request,
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

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @HttpCode(201)
  signUp(@Body() userSignUpDto: UserSignUpDto): Promise<User> {
    return this.authService.signUp(userSignUpDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  signIn(
    @Body() userSignInDto: UserSignInDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(userSignInDto);
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
