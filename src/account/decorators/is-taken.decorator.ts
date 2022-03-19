import { getConnection } from 'typeorm'

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  ValidationOptions,
  registerDecorator
} from 'class-validator'
import { UserEntity } from '../entities/user.entity'

@ValidatorConstraint({ async: true })
export class IsTakenConstraint implements ValidatorConstraintInterface {
  async validate(
    value: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validationArguments?: ValidationArguments
  ): Promise<boolean> {
    const user = await getConnection()
      .getRepository(UserEntity)
      .findOne({
        where: [{ username: value }, { email: value }]
      })
    if (user) return false
    return true
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    let field: string

    if (typeof validationArguments.value === 'string') {
      validationArguments.value.includes('@')
        ? (field = 'email')
        : (field = 'username')
    }

    return `${field} ${validationArguments.value} is already taken.`
  }
}

export function IsTaken(validationOptions?: ValidationOptions) {
  return (object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsTakenConstraint
    })
  }
}
