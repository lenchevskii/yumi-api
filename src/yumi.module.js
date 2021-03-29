import { Connection, getConnection } from 'typeorm';

const { YumiUserController } = require('./controllers/user.controller');
const { TypeOrmModule } = require('@nestjs/typeorm');
const { YumiService } = require('./yumi.service');
const { YumiContact } = require('./entities/contact.entity')
const { YumiUser } = require('./entities/user.entity');
const { Module } = require('@nestjs/common');

// require("@babel/core").transformSync("code", {
//   plugins: ["@babel/plugin-proposal-decorators"]
// });

@Module({
  imports: [TypeOrmModule.forFeature([YumiUser, YumiContact])],
  providers: [YumiService],
  controllers: [YumiUserController],
})

export class YumiModule { }