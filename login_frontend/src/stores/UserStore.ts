import {observable} from 'mobx';
import {GenderType, UserInfoType, UserStoreType} from './types/UserStore.type';

const UserStore: UserStoreType = observable({
  autoLoginToggle: false as boolean,
  setAutoLoginToggle(toggle: boolean) {
    this.autoLoginToggle = toggle;
  },
  signInUserId: '',
  setSignInUserId(userId: string) {
    this.signInUserId = userId;
  },
  signInPassword: '',
  setSignInPassword(password: string) {
    this.signInPassword = password;
  },
  clearSignInInput() {
    this.setSignInUserId('');
    this.setSignInPassword('');
  },
  accessToken: '',
  setAccessToken(token: string) {
    this.accessToken = token;
  },
  refreshToken: '',
  setRefreshToken(token: string) {
    this.refreshToken = token;
  },

  id: 0,
  setId(id: number) {
    this.id = id;
  },
  userId: '',
  setUserId(userId: string) {
    this.userId = userId;
  },
  email: 'string',
  setEmail(emailFront: string, emailBack: string) {
    this.email = emailFront.concat('@', emailBack);
  },
  emailFront: '',
  setEmailFront(email: string) {
    this.emailFront = email;
  },
  emailBack: '',
  setEmailBack(email: string) {
    this.emailBack = email;
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
  rePassword: '',
  setRePassword(password: string) {
    this.rePassword = password;
  },

  userIdCheck: false as boolean,
  setUserIdCheck(flag: boolean) {
    this.userIdCheck = flag;
  },
  emailFrontCheck: false as boolean,
  setEmailFrontCheck(flag: boolean) {
    this.emailFrontCheck = flag;
  },
  emailBackCheck: false as boolean,
  setEmailBackCheck(flag: boolean) {
    this.emailBackCheck = flag;
  },
  passwordCheck: true as boolean,
  setPasswordCheck(flag: boolean) {
    this.passwordCheck = flag;
  },
  rePasswordCheck: true as boolean,
  setRePasswordCheck(flag: boolean) {
    this.rePasswordCheck = flag;
  },
  usernameCheck: true as boolean,
  setUsernameCheck(flag: boolean) {
    this.usernameCheck = flag;
  },
  phoneNumberCheck: true as boolean,
  setPhoneNumberCheck(flag: boolean) {
    this.phoneNumberCheck = flag;
  },

  userInfo: {} as UserInfoType,
  setUserInfo(userInfo: UserInfoType) {
    this.userInfo = Object.assign({}, userInfo);
  },
});

export default UserStore;
