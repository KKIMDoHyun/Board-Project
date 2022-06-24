import {
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
  Post,
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

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @HttpCode(201)
  signUp(@Body(ValidationPipe) userSignUpDto: UserSignUpDto): Promise<void> {
    return this.authService.signUp(userSignUpDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) userSignInDto: UserSignInDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(userSignInDto);
  }

  @Get('/idRedundancyCheck')
  redundancyCheckByUserId(
    @Body(ValidationPipe) userIdDto: UserIdDto,
  ): Promise<boolean> {
    return this.authService.redundancyCheckByUserId(userIdDto);
  }

  // @Get('/test')
  // @UseGuards(AuthGuard())
  // test(@GetUser() user: User) {
  //   console.log('user', user);
  // }

  @Get()
  test() {
    return 'hello';
  }
}
