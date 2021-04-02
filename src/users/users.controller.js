import {
  Get,
  Post,
  Bind,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  HttpStatus,
  Injectable,
  Dependencies,
} from '@nestjs/common';

import { UsersService } from './users.service';

@Injectable()
@Controller('users')
@Dependencies(UsersService)
export class UsersController {
  constructor(usersService) { this.usersService = usersService }

  @Get()
  async showAllUsers() {
    const users = await this.usersService.showAll();
    console.log("We'r inside the ShowAllUsers method");
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      users,
    };
  }

  @Post()
  @Bind(Body())
  async createUser(data) {
    const user = await this.usersService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      user,
    };
  }

  @Get(':yumi_user_id')
  @Bind(Param('yumi_user_id'))
  async readUser(yumi_user_id) {
    const data = await this.usersService.read(yumi_user_id);
    return {
      statusCode: HttpStatus.OK,
      message: `User:${data} fetched successfully.`,
      data: data,
    };
  }

  @Patch(':yumi_user_id')
  @Bind(Param('yumi_user_id'), Body())
  async uppdateUser(yumi_user_id, data) {
    await this.usersService.update(yumi_user_id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':yumi_user_id')
  @Bind(Param('yumi_user_id'))
  async deleteUser(yumi_user_id) {
    await this.usersService.destroy(yumi_user_id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
