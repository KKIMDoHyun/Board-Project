import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as config from 'config';
import { Request } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(private authService: AuthService) {
    super({
      secretOrKey: config.get('jwt.refreshToken_secret'),
      jwtFromRequest: ExtractJwt.fromBodyField('refreshToken'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any) {
    const refreshToken = req.body.refreshToken;
    return this.authService.getUserIfRefreshTokenMatches(
      refreshToken,
      payload.id,
    );
  }
}
