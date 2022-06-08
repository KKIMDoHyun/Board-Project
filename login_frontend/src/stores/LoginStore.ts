import React from 'react';

import {observable} from 'mobx';

const LoginStore = observable({
  autoLoginToggle: false as boolean,
  setAutoLoginToggle(toggle: boolean) {
    this.autoLoginToggle = toggle;
  },
});

export default LoginStore;
