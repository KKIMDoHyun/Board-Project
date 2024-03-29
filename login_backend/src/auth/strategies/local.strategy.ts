import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserSignInDto } from '../dto/user-signIn.dto';
import { UserInfoDto } from '../dto/user-info.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'userId',
    });
  }

  async validate(userId: string, password: string): Promise<UserInfoDto> {
    const user = await this.authService.validateUser({ userId, password });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
