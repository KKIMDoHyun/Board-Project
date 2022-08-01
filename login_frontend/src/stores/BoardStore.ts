import {getAllBoards} from '@/utils/api/board';
import {observable} from 'mobx';
import {BoardStoreType, BoardType} from './types/BoardStore.type';

const BoardStore: BoardStoreType = observable({
  boards: [] as BoardType[],
  setBoards(boards: BoardType[]) {
    this.boards = boards;
  },
  fetchBoards() {
    getAllBoards()
      .then(res => {
        console.log(res.data);
        this.setBoards(res.data);
      })
      .catch(err => console.log(err));
  },
});

export default BoardStore;
