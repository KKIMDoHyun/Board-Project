import {getAllBoards, getBoardById} from '@/utils/api/board';
import {getComments} from '@/utils/api/comment';
import {observable} from 'mobx';
import {
  BoardStatusType,
  BoardStoreType,
  BoardType,
  CommentType,
} from './types/BoardStore.type';

const BoardStore: BoardStoreType = observable({
  boardList: [] as BoardType[],
  setBoardList(boardList: BoardType[]) {
    this.boardList = boardList;
  },
  async fetchBoardList() {
    console.log('BoardStore.fetchBoardList() start');
    await getAllBoards()
      .then(res => {
        console.log('fetching');
        this.setBoardList(res.data);
      })
      .catch(err => console.log(err));
    console.log('BoardStore.fetchBoardList() end');
  },

  selectedBoardId: 0,
  setSelectedBoardId(id: number) {
    this.selectedBoardId = id;
  },
  board: {} as BoardType,
  setBoard(board: BoardType) {
    this.board = board;
  },
  async fetchBoard(boardId: number) {
    console.log('BoardStore.fetchBoard() start');
    await getBoardById(boardId)
      .then(res => {
        console.log('fetching', res.data);
        // console.log('fetchBoard Success');
        // const {comments, ...newBoard} = res.data;
        this.setBoard(res.data);
        // console.log('setBoard', this.board);
        // getComments(boardId)
        //   .then(res => {
        //     this.setComments(res.data);
        //   })
        //   .catch(err => console.log(err.response.data));
      })
      .catch(err => console.log(err));
    console.log('BoardStore.fetchBoard() end', this.board);
  },
  comments: [] as CommentType[],
  setComments(comments: CommentType[]) {
    // this.comments = comments;
    this.board.comments = comments;
    console.log(this.board);
  },
  fetchComments(boardId: number) {
    getComments(boardId)
      .then(res => this.setComments(res.data))
      .catch(err => console.log(err.response.data));
  },

  boardTitle: '',
  setBoardTitle(title: string) {
    this.boardTitle = title;
  },
  boardContent: '',
  setBoardContent(content: string) {
    this.boardContent = content;
  },
  boardStatus: 'PUBLIC' as BoardStatusType,
  setBoardStatus(status: BoardStatusType) {
    this.boardStatus = status;
  },
  setBoardClear() {
    this.setBoardTitle('');
    this.setBoardContent('');
    this.setBoardStatus('PUBLIC');
  },
});

export default BoardStore;
