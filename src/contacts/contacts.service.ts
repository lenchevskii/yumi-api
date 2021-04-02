import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ContactsEntity } from './contacts.entity';
import { ContactsDTO } from './contacts.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(ContactsEntity)
    private contactsRepository: Repository<ContactsEntity>,
  ) {}

  async showAll() {
    return await this.contactsRepository.find();
  }

  async create(data: ContactsDTO) {
    const contact = this.contactsRepository.create(data);
    await this.contactsRepository.save(data);
    return contact;
  }

  async read(id: number) {
    return await this.contactsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<ContactsDTO>) {
    await this.contactsRepository.update(id, data);
    return await this.contactsRepository.findOne(id);
  }

  async destroy(id: number) {
    await this.contactsRepository.delete(id);
    return { deleted: true };
  }
}
