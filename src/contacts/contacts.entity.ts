import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('contacts')
export class ContactsEntity {
  @PrimaryColumn({ nullable: false, type: Number })
  id: number;

  @Column({ nullable: true, type: String })
  yumi_user_id: number;

  @Column({ nullable: true, type: String })
  contact_user_id: number;
}
