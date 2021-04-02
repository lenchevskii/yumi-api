const { Injectable, Dependencies } = require('@nestjs/common')
const { YumiUser } = require('./entities/user.entity')

@Injectable()
@Dependencies(YumiUser)
export class YumiService {

  constructor(yumiUserRepository) { this.yumiUserRepository = yumiUserRepository }

  async getUsers(yumi_user_id) {
    return await this.yumiUserRepository.find(yumi_user_id);
  }

  async getUser(yumi_user_id) {
    return await this.yumiUserRepository.find({
      select: ["hashtag", "email", "password"],
      where: [{ "yumi_user_id": yumi_user_id }]
    });
  }

  async updateUser(yumi_user) {
    this.yumiUserRepository.save(yumi_user)
  }

  async deleteUser(yumi_user_id) {
    this.yumiUserRepository.delete(yumi_user_id);
  }
}