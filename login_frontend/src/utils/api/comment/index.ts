import {instance} from '../index';

function getComments(id: any) {
  return instance.get(`/comments/board/${id}`);
}

export {getComments};
