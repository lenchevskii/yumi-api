import { Entity, Column, PrimaryColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';

@Entity('users')
export class UsersEntity {
  @PrimaryColumn({ nullable: false, type: Number })
  yumi_user_id: number;

  @Column({ nullable: true, type: String })
  hashtag: string;

  // @Column({ nullable: true, type: String })
  // email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }

  @Column({ nullable: true, type: String })
  password: string;
}
