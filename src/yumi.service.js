import { InjectRepository } from '@nestjs/typeorm';

const { Injectable, Dependencies, forwardRef } = require('@nestjs/common')
const { YumiUser } = require('./entities/user.entity')

@Injectable()
@Dependencies(YumiUser)
export class YumiService {

  constructor(yumiRepository) { this.yumiRepository = yumiRepository }

  // @InjectRepository(YumiUser)
  async getUsers(yumi_user_id) {
    return await this.yumiRepository.find(yumi_user_id);
  }

  // @InjectRepository(YumiUser)
  async getUser(yumi_user_id) {
    return await this.yumiRepository.find({
      select: ["hashtag", "email", "password"],
      where: [{ "yumi_user_id": yumi_user_id }]
    });
  }

  // @Bind(InjectRepository(YumiUser))
  async updateUser(yumi_user) {
    this.yumiRepository.save(yumi_user)
  }

  // @Bind(InjectRepository(YumiUser))
  async deleteUser(yumi_user_id) {
    this.yumiRepository.delete(yumi_user_id);
  }
}