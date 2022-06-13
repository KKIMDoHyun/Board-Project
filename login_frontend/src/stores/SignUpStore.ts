import React from 'react';

import {observable} from 'mobx';

const SignUpStore = observable({
  id: '',
  setId(id: string) {
    this.id = id;
  },
  email: '',
  setEmail(email: string) {
    this.email = email;
  },
  username: '',
  setUsername(username: string) {
    this.username = username;
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