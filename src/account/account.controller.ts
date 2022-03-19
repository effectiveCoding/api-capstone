import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'

import { AccountService } from './account.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller({ version: '1', path: 'account' })
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.accountService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.accountService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne({ where: { id } })
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateUserDto) {
    return this.accountService.update(id, updateAccountDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.remove(id)
  }
}
