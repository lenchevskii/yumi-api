import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UsersEntity } from './users.entity';
import { UsersDTO } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  async showAll() {
    return await this.usersRepository.find();
  }

  async create(data: UsersDTO) {
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(data);
    return user;
  }

  // async findByEmail(email: string): Promise<UsersDTO> {
  //   return await this.usersRepository.findOne({
  //     where: {
  //       email: email,
  //     },
  //   });
  // }

  async read(yumi_user_id: number) {
    return await this.usersRepository
      .findOne({
        where: { yumi_user_id: yumi_user_id },
      })
      .then((x) => console.log(x));
  }

  async update(yumi_user_id: number, data: Partial<UsersDTO>) {
    await this.usersRepository.update(yumi_user_id, data);
    return await this.usersRepository.findOne(yumi_user_id);
  }

  async destroy(yumi_user_id: number) {
    await this.usersRepository.delete(yumi_user_id);
    return { deleted: true };
  }
}
