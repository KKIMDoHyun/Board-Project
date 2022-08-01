import {instance} from '../index';

function createBoard(createBoardDto: Object) {
  return instance.post('/boards', createBoardDto);
}

function getAllBoards() {
  return instance.get('/boards');
}

function getBoardById(id: number) {
  return instance.get(`/boards/${id}`);
}

export {getAllBoards, getBoardById, createBoard};
