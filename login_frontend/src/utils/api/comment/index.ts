import {instance} from '../index';

function getComments(id: any) {
  return instance.get(`/comments/board/${id}`);
}

function addComment(commentData: Object) {
  return instance.post('/comments', commentData);
}

export {getComments, addComment};
