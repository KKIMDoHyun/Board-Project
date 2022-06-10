import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  phoneNumber: string;

  @Column()
  gender: string;

  @Column()
  password: string;
}
