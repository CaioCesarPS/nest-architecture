import { CreateUserService } from './../services/createUser.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUserDto';

@Controller('user')
export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.execute(createUserDto);
  }
}
