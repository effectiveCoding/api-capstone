import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator'
import { IsTaken } from '../decorators/is-taken.decorator'

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(250)
  name: string

  @IsNotEmpty()
  @MaxLength(20)
  @IsTaken()
  username: string

  @IsNotEmpty()
  @IsEmail()
  @IsTaken()
  email: string

  @IsNotEmpty()
  @MinLength(8)
  password: string
}
