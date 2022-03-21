import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator'
import { IsTaken } from '../decorators/is-taken.decorator'
import { Match } from '../decorators/match.decorator'

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(250)
  name: string

  @IsNotEmpty()
  @IsTaken()
  @MaxLength(20)
  username: string

  @IsNotEmpty()
  @IsTaken()
  @IsEmail()
  email: string

  /**
   * Regex, in this case a password may contain:
    - (?=.*?[A-Z]) : At least one upper case English letter
    - (?=.*?[a-z]) : At least one lower case English letter
    - (?=.*?[0-9]) : At least one digit
    - (?=.*?[#?!@$ %^&*-]) : At least one special character or space
    - .{8,} : Minimum eight in length
   */
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, {
    message: 'Please provide a more complex password'
  })
  password: string

  @IsNotEmpty()
  @Match(CreateUserDto, s => s.password)
  confirmPassword: string
}
