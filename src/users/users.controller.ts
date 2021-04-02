import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersDTO } from './users.dto';

const trace = (x) => {
  console.log(x);
  return x;
};

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
    trace(this);
  }

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
  async createUsers(@Body() data: UsersDTO) {
    const user = await this.usersService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      user,
    };
  }

  @Get(':yumi_user_id')
  async readUser(@Param('yumi_user_id') yumi_user_id: number) {
    const data = await this.usersService.read(yumi_user_id);
    return {
      statusCode: HttpStatus.OK,
      message: `User:${data} fetched successfully.`,
      data: data,
    };
  }

  @Patch(':yumi_user_id')
  async uppdateUser(
    @Param('yumi_user_id') yumi_user_id: number,
    @Body() data: Partial<UsersDTO>,
  ) {
    await this.usersService.update(yumi_user_id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':yumi_user_id')
  async deleteUser(@Param('yumi_user_id') yumi_user_id: number) {
    await this.usersService.destroy(yumi_user_id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
