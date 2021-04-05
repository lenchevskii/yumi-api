import {
  Get,
  Post,
  Bind,
  Body,
  Patch,
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

  @Get('all')
  async showAllUsers() {
    const users = await this.usersService.showAll();
    console.log("We'r inside the ShowAllUsers method");
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      users: users,
    };
  }

  @Post('new')
  @Bind(Body())
  async createUser(data) {
    const user = await this.usersService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      user: user,
    };
  }

  @Get('user')
  @Bind(Body('yumi_user_id'))
  async readUser(yumi_user_id) {
    const data = await this.usersService.read(yumi_user_id);
    return data === undefined
      ? {
        statusCode: HttpStatus.BAD_REQUEST,
        message: `User:${yumi_user_id} doesn't exist.`
      }
      : {
        statusCode: HttpStatus.OK,
        message: `User:${yumi_user_id} fetched successfully.`,
        data: data,
      };
  }

  @Patch('update')
  @Bind(Body())
  async uppdateUser(body) {
    const updated = await this.usersService.update(body.yumi_user_id, body);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
      updated: updated,
    };
  }

  @Delete('delete')
  @Bind(Body('yumi_user_id'))
  async deleteUser(yumi_user_id) {
    const deleted = await this.usersService.destroy(yumi_user_id);
    return {
      statusCode: HttpStatus.OK,
      deleted: deleted,
    };
  }
}
