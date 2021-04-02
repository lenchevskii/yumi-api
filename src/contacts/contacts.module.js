import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsEntity } from './contacts.entity';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContactsEntity])],
  providers: [ContactsService],
  controllers: [ContactsController],
})
export class ContactsModule {}
