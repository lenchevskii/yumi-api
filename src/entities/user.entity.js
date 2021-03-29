const { Entity, Column, PrimaryColumn } = require('typeorm');

@Entity()
export class YumiUser {

  @PrimaryColumn({ length: 20, nullable: false, type: Number })
  yumi_user_id;

  @Column({ nullable: true, type: String })
  hashtag;

  @Column({ nullable: true, type: String })
  email;

  @Column({ nullable: true, type: String })
  password;
}