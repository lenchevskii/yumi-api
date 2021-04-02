import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
  Dependencies,
  Injectable,
  Bind,
} from '@nestjs/common';

import { ContactsService } from './contacts.service';

@Injectable()
@Controller('contacts')
@Dependencies(ContactsService)
export class ContactsController {
  constructor(contactsService) { this.contactsService = contactsService }

  @Get()
  async showAllContacts() {
    const contacts = await this.contactsService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Contacts fetched successfully',
      contacts,
    };
  }

  @Post()
  @Bind(Body())
  async createContact(data) {
    const contact = await this.contactsService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Contact created successfully',
      contact,
    };
  }

  @Get(':id')
  @Bind(Param('id'))
  async readContact(id) {
    const data = await this.contactsService.read(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Contact fetched successfully',
      data,
    };
  }

  @Patch(':id')
  @Bind(Param('id'), Body())
  async uppdateContact(id, data) {
    await this.contactsService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Contact updated successfully',
    };
  }

  @Delete(':id')
  @Bind(Param('id'))
  async deleteContact(id) {
    await this.contactsService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Contact deleted successfully',
    };
  }
}
