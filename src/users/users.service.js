import { Dependencies, Injectable } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';

import { UsersEntity } from './users.entity';

@Injectable()
@Dependencies(getRepositoryToken(UsersEntity))
export class UsersService {
  constructor(usersRepository) { this.usersRepository = usersRepository }

  async showAll() {
    return await this.usersRepository.find();
  }

  async create(data) {
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

  async read(yumi_user_id) {
    return await this.usersRepository
      .findOne({
        where: { yumi_user_id: yumi_user_id },
      })
      .then((x) => console.log(x));
  }

  async update(yumi_user_id, data) {
    await this.usersRepository.update(yumi_user_id, data);
    return await this.usersRepository.findOne(yumi_user_id);
  }

  async destroy(yumi_user_id) {
    await this.usersRepository.delete(yumi_user_id);
    return { deleted: true };
  }
}
