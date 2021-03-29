const { Entity, Column, PrimaryColumn } = require('typeorm');

@Entity()
export class YumiContact {

  @PrimaryColumn({ nullable: false, type: Number })
  id;

  @Column({ nullable: true, type: Number })
  yumi_user_id;

  @Column({ nullable: true, type: Number })
  contact_user_id;
}