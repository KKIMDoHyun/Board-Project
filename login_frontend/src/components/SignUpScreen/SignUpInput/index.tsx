import {observer} from 'mobx-react';
import React, {FC} from 'react';
import EmailInput from './EmailInput';
import GenderInput from './GenderInput';
import PasswordInput from './PasswordInput';
import PhoneNumberInput from './PhoneNumberInput';
import RePasswordInput from './RePasswordInput';
import UserIdInput from './UserIdInput';
import UsernameInput from './UsernameInput';

const SignUpInput: FC = () => {
  return (
    <>
      <UserIdInput />
      <EmailInput />
      <PasswordInput />
      <RePasswordInput />
      <UsernameInput />
      <GenderInput />
      <PhoneNumberInput />
    </>
  );
};

export default observer(SignUpInput);
