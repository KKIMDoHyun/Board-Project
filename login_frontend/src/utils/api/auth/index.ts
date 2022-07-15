import {instance} from '../index';

function signIn(userData: Object) {
  return instance.post('/auth/signin', userData);
}
function signUp(userData: Object) {
  return instance.post('/auth/signup', userData);
}
function getProfile() {
  return instance.get('/auth/profile');
}

export {signIn, signUp, getProfile};
