import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AccountService } from './account.service'
import { AccountController } from './account.controller'

import { UserEntity } from './entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule {}
