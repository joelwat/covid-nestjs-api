import {
  Controller,
  Get,
  HttpCode,
} from '@nestjs/common';

import { User } from 'src/entities';

import { UserDAO } from './users.dao';

@Controller('users')
export class UsersController {
  @Get()
  @HttpCode(200)
  findAll(): User[] {
    return UserDAO.findAll();
  }

  @Get(':id')
  find(/* @Param('id') id: number */): User {
    return UserDAO.find(/* id */);
  }
}
