import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindOneOptions, Repository } from 'typeorm'
import { UserEntity } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

import * as bcrypt from 'bcrypt'

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>
  ) {}

  async create(
    createAccountDto: CreateUserDto
  ): Promise<Omit<UserEntity, 'password'>> {
    const salt = 10
    const { password: givenPassword, ...rest } = createAccountDto

    const hashedPassword = await bcrypt.hash(givenPassword, salt)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.userRepo.save({
      password: hashedPassword,
      ...rest
    })

    return { ...user }
  }

  findAll() {
    return `This acti on returns all account`
  }

  async findOne(option: FindOneOptions): Promise<Omit<UserEntity, 'password'>> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = await this.userRepo.findOne(option)
    return rest
  }

  update(id: string, updateAccountDto: UpdateUserDto) {
    return `This action updates a #${id} account`
  }

  remove(id: string) {
    return `This action removes a #${id} account`
  }
}
