import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { GenderType } from '../type/user.type';

export class UserInfoDto {
  @IsNotEmpty()
  readonly userId: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly gender: GenderType;

  @IsNotEmpty()
  @IsPhoneNumber('KR')
  readonly phoneNumber: string;

  readonly currentHashedRefreshToken?: string;
}
