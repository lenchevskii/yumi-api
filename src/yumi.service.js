const { Injectable, Dependencies } = require('@nestjs/common')
const { YumiUser } = require('./entities/user.entity')

@Injectable()
@Dependencies(YumiUser)
export class YumiService {

  constructor(yumiRepository) { this.yumiRepository = yumiRepository }

  async getUsers(yumi_user_id) {
    return await this.yumiRepository.find(yumi_user_id);
  }

  async getUser(yumi_user_id) {
    return await this.yumiRepository.find({
      select: ["hashtag", "email", "password"],
      where: [{ "yumi_user_id": yumi_user_id }]
    });
  }

  async updateUser(yumi_user) {
    this.yumiRepository.save(yumi_user)
  }

  async deleteUser(yumi_user_id) {
    this.yumiRepository.delete(yumi_user_id);
  }
}