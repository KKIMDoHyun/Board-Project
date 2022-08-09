import { User } from 'src/auth/entity/user.entity';
import { Comment } from 'src/comments/entity/comment.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BoardStatus } from '../type/board-status.enum';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  status: BoardStatus;

  @CreateDateColumn()
  created_at: Date;

  // board N : 1 user
  @ManyToOne(() => User, (user) => user.boards, { eager: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  // board 1 : N Comment
  @OneToMany(() => Comment, (comment) => comment.board, {
    eager: true,
  })
  comments: Comment[];
}
