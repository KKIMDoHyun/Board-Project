export type BoardStoreType = {
  boards: BoardType[];
  setBoards: (boards: BoardType[]) => void;
  fetchBoards: () => void;
};

export type BoardType = {
  id: number;
  title: string;
  content: string;
  status: BoardStatusType;
  user: UserOfBoardType;
  comments: CommentsOfBoardType;
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
