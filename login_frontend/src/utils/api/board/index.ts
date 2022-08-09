import {instance} from '../index';

function createBoard(createBoardDto: Object) {
  return instance.post('/boards', createBoardDto);
}

function modifyBoard(boardId: number, createBoardDto: Object) {
  return instance.patch(`/boards/${boardId}`, createBoardDto);
}

function getAllBoards() {
  return instance.get('/boards');
}

function getBoardById(id: number) {
  return instance.get(`/boards/${id}`);
}

function deleteBoardById(id: number) {
  return instance.delete(`/boards/${id}`);
}

export {getAllBoards, modifyBoard, getBoardById, createBoard, deleteBoardById};
