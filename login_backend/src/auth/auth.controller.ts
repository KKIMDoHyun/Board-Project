import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @HttpCode(201)
  async signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
    return await this.authService.signUp(authCredentialsDto);
  }
}
