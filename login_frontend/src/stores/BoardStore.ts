import {deleteBoardById, getAllBoards, getBoardById} from '@/utils/api/board';
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
        this.setBoard(res.data);
      })
      .catch(err => console.log(err));
    console.log('BoardStore.fetchBoard() end', this.board);
  },
  comments: [] as CommentType[],
  setComments(comments: CommentType[]) {
    this.comments = comments;
  },
  async fetchComments(boardId: number) {
    await getComments(boardId)
      .then(res => {
        this.setComments(res.data);
      })
      .catch(err => console.log(err.response.data));
    console.log('BoardStore.fetchComments() end', this.comments);
  },
  addComment(comment: CommentType) {
    this.comments.unshift(comment);
    console.log(this.comments);
  },

  boardId: 0,
  setBoardId(boardId: number) {
    this.boardId = boardId;
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
    this.setBoardModifyMode(false);
  },

  deleteBoardModalVisible: false as boolean,
  setDeleteBoardModalVisible(visible: boolean) {
    this.deleteBoardModalVisible = visible;
  },
  deleteBoard(boardId: number) {
    deleteBoardById(boardId).then(() => {
      this.boardList.splice(
        this.boardList.findIndex(i => i.id === boardId),
        1,
      );
    });
  },

  boardModifyMode: false as boolean,
  setBoardModifyMode(mode: boolean) {
    this.boardModifyMode = mode;
  },
});

export default BoardStore;
