import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findOne(
    where: FindOptionsWhere<User> | FindOptionsWhere<User>[],
  ): Promise<User | undefined> {
    return this.userRepository.findOneBy(where);
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}
