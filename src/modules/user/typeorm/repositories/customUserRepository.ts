import { CreateUserDto } from './../../dtos/createUserDto';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(User)
export class CustomUserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return createUserDto;
  }
}
