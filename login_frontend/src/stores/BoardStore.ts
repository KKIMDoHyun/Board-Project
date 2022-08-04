import {getAllBoards} from '@/utils/api/board';
import {getComments} from '@/utils/api/comment';
import {observable} from 'mobx';
import {BoardStoreType, BoardType, CommentType} from './types/BoardStore.type';

const BoardStore: BoardStoreType = observable({
  boards: [] as BoardType[],
  setBoards(boards: BoardType[]) {
    this.boards = boards;
  },
  fetchBoards() {
    getAllBoards()
      .then(res => {
        this.setBoards(res.data);
      })
      .catch(err => console.log(err));
  },

  board: {} as BoardType,
  setBoard(board: BoardType) {
    this.board = Object.assign({}, board);
  },

  comments: [] as CommentType[],
  setComments(comments: CommentType[]) {
    this.comments = comments;
  },
  fetchComments(boardId: number) {
    getComments(boardId)
      .then(res => this.setComments(res.data))
      .catch(err => console.log(err.response.data));
  },
});

export default BoardStore;
