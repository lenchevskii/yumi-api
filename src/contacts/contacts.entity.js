import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('contacts')
export class ContactsEntity {
  @PrimaryColumn({ nullable: false, type: Number })
  id;

  @Column({ nullable: true, type: String })
  yumi_user_id;

  @Column({ nullable: true, type: String })
  contact_user_id;
}
