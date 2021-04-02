const { YumiUserController }  = require('./controllers/user.controller');
const { TypeOrmModule }       = require('@nestjs/typeorm');
const { YumiService }         = require('./yumi.service');
const { YumiContact }         = require('./entities/contact.entity')
const { YumiUser }            = require('./entities/user.entity');
const { Module }              = require('@nestjs/common');

@Module({
  imports: [
    TypeOrmModule.forFeature([YumiUser]),
    TypeOrmModule.forRoot()
  ],
  providers: [YumiService],
  controllers: [YumiUserController],
})

export class YumiModule { }