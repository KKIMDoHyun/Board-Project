import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { GenderType } from '../user.type';

export class AuthCredentialsDto {
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

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: '비밀번호는 영어와 숫자로만 이루어져 있어야 합니다.',
  })
  readonly password: string;
}
