import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserIdDto {
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: '아이디는 영어와 숫자로만 이루어져 있어야 합니다.',
  })
  readonly userId: string;
}
