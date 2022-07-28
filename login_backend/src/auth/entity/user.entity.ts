import { Exclude } from 'class-transformer';
import { Board } from 'src/boards/entity/board.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { GenderType } from '../type/user.type';

@Entity()
@Unique(['userId'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userId: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  phoneNumber: string;

  @Column()
  gender: GenderType;

  @Column()
  password: string;

  @Column({ nullable: true })
  @Exclude()
  currentHashedRefreshToken?: string;

  @OneToMany((type) => Board, (board) => board.user, { eager: true })
  boards: Board[];
}
