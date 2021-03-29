const { Controller, Post, Body, Get, Put, Delete, Param, Bind, Req, Dependencies, forwardRef } = require('@nestjs/common');
const { YumiService } = require('../yumi.service');
// import { YumiContact } from '../entities/contact.entity';
// import { YumiUser } from '../entities/user.entity'

@Controller('users')
@Dependencies(YumiService)
export class YumiUserController {

  constructor(yumiService) { this.yumiService = yumiService }

  @Get(':id')
  @Param()
  get(params) {
    return this.service.getUser(params.id);
  }

  @Post()
  @Body()
  activate(user) {
    return this.service.createUser(user);
  }

  @Put()
  @Body()
  update(user) {
    return this.service.updateUser(user);
  }

  @Delete(':id')
  @Param()
  deleteUser(params) {
    return this.service.deleteUser(params.id);
  }
}