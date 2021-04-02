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

import { ContactsService } from './contacts.service';
import { ContactsDTO } from './contacts.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

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
  async createContact(@Body() data: ContactsDTO) {
    const contact = await this.contactsService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Contact created successfully',
      contact,
    };
  }

  @Get(':id')
  async readContact(@Param('id') id: number) {
    const data = await this.contactsService.read(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Contact fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async uppdateContact(
    @Param('id') id: number,
    @Body() data: Partial<ContactsDTO>,
  ) {
    await this.contactsService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Contact updated successfully',
    };
  }

  @Delete(':id')
  async deleteContact(@Param('id') id: number) {
    await this.contactsService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Contact deleted successfully',
    };
  }
}
