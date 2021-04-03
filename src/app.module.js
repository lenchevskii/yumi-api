import { join } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { ContactsModule } from './contacts/contacts.module';

const {
  DB_TYPE,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PSSWD,
  DB_NAME
} = require('dotenv').config().parsed

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: DB_TYPE,
      host: DB_HOST,
      port: DB_PORT,
      username: DB_USERNAME,
      password: DB_PSSWD,
      database: DB_NAME,
      synchronize: false,
      logging: true,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    }),
    UsersModule,
    ContactsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
