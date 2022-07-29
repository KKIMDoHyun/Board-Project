import { Exclude } from 'class-transformer';
import { Board } from 'src/boards/entity/board.entity';
import { Comment } from 'src/comments/entity/comment.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
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

  // user 1 : N board
  @OneToMany(() => Board, (board) => board.user, { eager: true })
  boards: Board[];

  // // user 1 : N Comment
  // @OneToMany((type) => Comment, (comment) => comment.user, { eager: true })
  // comments: Comment[];
}
