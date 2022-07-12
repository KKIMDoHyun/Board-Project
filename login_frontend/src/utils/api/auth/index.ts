import {instance} from '../index';

function signIn(userData) {
  return instance.post('/auth/signin', userData);
}

export {signIn};
