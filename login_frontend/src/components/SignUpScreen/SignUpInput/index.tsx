import UserStore from '@/stores/UserStore';
import {idRedundancyCheck} from '@/utils/api/auth';
import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
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
      {/* 
      <View style={styles.mb17}>
        <Text style={styles.titleText}>휴대전화</Text>
        <TextInput
          style={styles.textInput}
          autoCorrect={false}
          keyboardType="numeric"
          onChangeText={text => {
            // const regex = /^[0-9\b -]{0,13}$/;
            // if (regex.test(text)) {
            //   onChangePhoneNumber(text);
            // }
            console.log(text);
          }}
          maxLength={11}
        />
      </View> */}
    </>
  );
};

export default observer(SignUpInput);
