import React from 'react';

import {observable} from 'mobx';
import {LoginStoreType} from './types/LoginStore.type';

const LoginStore: LoginStoreType = observable({
  autoLoginToggle: false as boolean,
  setAutoLoginToggle(toggle: boolean) {
    this.autoLoginToggle = toggle;
  },

  // accessToken: '',
  // setAccessToken(token: string) {
  //   this.accessToken = token;
  // },
  // refreshToken: '',
  // setRefreshToken(token: string) {
  //   this.refreshToken = token;
  // },
  cookie: '',
  setCookie(cookie: any) {
    this.cookie = cookie;
  },
});

export default LoginStore;
