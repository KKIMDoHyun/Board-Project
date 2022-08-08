export type BoardStoreType = {
  boardList: BoardType[];
  setBoardList: (boardList: BoardType[]) => void;
  fetchBoardList: () => void;

  selectedBoardId: number;
  setSelectedBoardId: (id: number) => void;
  board: BoardType;
  setBoard: (board: BoardType) => void;
  fetchBoard: (boardId: number) => void;

  comments: CommentType[];
  setComments: (comments: CommentType[]) => void;
  fetchComments: (boardId: number) => void;
  addComment: (board: CommentType) => void;

  boardTitle: string;
  setBoardTitle: (title: string) => void;
  boardContent: string;
  setBoardContent: (content: string) => void;
  boardStatus: BoardStatusType;
  setBoardStatus: (status: BoardStatusType) => void;
  setBoardClear: () => void;
};

export type BoardType = {
  id: number;
  title: string;
  content: string;
  status: BoardStatusType;
  user: UserOfBoardType;
  comments: CommentsOfBoardType[];
  created_at: string;
};

export type BoardStatusType = 'PUBLIC' | 'PRIVATE';
export type UserOfBoardType = {
  id: number;
  userId: string;
  email: string;
  username: string;
};
export type CommentsOfBoardType = {
  id: number;
  content: string;
};

export type CommentType = {
  id: number;
  content: string;
  created_at: string;
  user: UserOfBoardType;
  board: BoardOfCommentType;
};

export type BoardOfCommentType = {
  id: number;
};
