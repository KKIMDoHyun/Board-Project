import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';
import { GenderType } from '../user.type';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly username: string;

  @IsString()
  readonly gender: GenderType;

  @IsPhoneNumber('KR')
  readonly phoneNumber: string;

  @IsString()
  readonly password: string;
}
