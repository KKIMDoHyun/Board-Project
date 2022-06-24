import React from 'react';

import {observable} from 'mobx';
import {GenderType, SignUpStoreType} from './types/SignUpStore.type';

const SignUpStore: SignUpStoreType = observable({
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

export default SignUpStore;
