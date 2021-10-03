import { CreateUserDto } from './../dtos/createUserDto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/user.entity';
import { CustomUserRepository } from '../typeorm/repositories/customUserRepository';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(User)
    private userRepository: CustomUserRepository,
  ) {}

  async execute(createUserDto: CreateUserDto) {
    return await this.userRepository.createUser(createUserDto);
  }
}
