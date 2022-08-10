import { Exclude } from 'class-transformer';
import { Board } from 'src/boards/entity/board.entity';
import { Comment } from 'src/comments/entity/comment.entity';
import { Good } from 'src/good/entity/good.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
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

  @CreateDateColumn()
  created_at: Date;

  // user 1 : N board
  @OneToMany(() => Board, (board) => board.user, { eager: true })
  boards: Board[];

  // // user 1 : N Comment
  @OneToMany(() => Comment, (comment) => comment.user, { eager: true })
  comments: Comment[];

  @OneToMany(() => Good, (good) => good.user, {
    eager: true,
  })
  goodList: Good[];
}
