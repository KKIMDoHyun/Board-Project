import {observable} from 'mobx';
import {GenderType, UserStoreType} from './types/UserStore.type';

const UserStore: UserStoreType = observable({
  autoLoginToggle: false as boolean,
  setAutoLoginToggle(toggle: boolean) {
    this.autoLoginToggle = toggle;
  },
  accessToken: '',
  setAccessToken(token: string) {
    this.accessToken = token;
  },
  refreshToken: '',
  setRefreshToken(token: string) {
    this.refreshToken = token;
  },

  userId: '',
  setUserId(id: string) {
    this.userId = id;
  },
  email: '',
  setEmail(email: string) {
    this.email = email;
  },
  username: '',
  setUsername(username: string) {
    this.username = username;
  },
  gender: 'MALE',
  setGender(gender: GenderType) {
    this.gender = gender;
  },
  phoneNumber: '',
  setPhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  },
  password: '',
  setPassword(password: string) {
    this.password = password;
  },
  checkPassword: '',
  setCheckPassword(password: string) {
    this.checkPassword = password;
  },
});

export default UserStore;
