import UserStore from '@/stores/UserStore';
import {observer} from 'mobx-react';
import React, {FC, useCallback} from 'react';
import {KeyboardAvoidingView, TextInput} from 'react-native';
import {styles} from './styles';

const LoginInput: FC = () => {
  const onChangeUserId = useCallback((text: string) => {
    UserStore.setUserId(text);
  }, []);
  const onChangePassword = useCallback((text: string) => {
    UserStore.setPassword(text);
  }, []);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <TextInput
        style={[styles.textContainer, styles.mb10]}
        onChangeText={text => {
          onChangeUserId(text);
        }}
        placeholder="아이디를 입력하세요."
      />
      <TextInput
        style={styles.textContainer}
        onChangeText={text => {
          onChangePassword(text);
        }}
        placeholder="비밀번호를 입력하세요."
      />
    </KeyboardAvoidingView>
  );
};

export default observer(LoginInput);
