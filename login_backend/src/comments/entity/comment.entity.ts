import { User } from 'src/auth/entity/user.entity';
import { Board } from 'src/boards/entity/board.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  // @ManyToOne((type) => Board, (board) => board.comments, { eager: false })
  // board: Board;

  // @ManyToOne((type) => User, (user) => user.comments, { eager: false })
  // user: User;
}
