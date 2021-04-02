import { Dependencies, Injectable } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ContactsEntity } from './contacts.entity';

@Injectable()
@Dependencies(getRepositoryToken(ContactsEntity))
export class ContactsService {
  constructor(contactsRepository) { this.contactsRepository = contactsRepository }

  async showAll() {
    return await this.contactsRepository.find();
  }

  async create(data) {
    const contact = this.contactsRepository.create(data);
    await this.contactsRepository.save(data);
    return contact;
  }

  async read(id) {
    return await this.contactsRepository.findOne({ where: { id: id } });
  }

  async update(id, data) {
    await this.contactsRepository.update(id, data);
    return await this.contactsRepository.findOne(id);
  }

  async destroy(id) {
    await this.contactsRepository.delete(id);
    return { deleted: true };
  }
}
