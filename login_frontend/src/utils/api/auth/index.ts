import {instance} from '../index';

function signIn(userData: Object) {
  return instance.post('/auth/signin', userData);
}
function getProfile() {
  return instance.get('/auth/profile');
}

export {signIn, getProfile};
