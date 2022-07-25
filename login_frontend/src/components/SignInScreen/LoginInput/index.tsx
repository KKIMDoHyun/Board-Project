import UserStore from '@/stores/UserStore';
import {useFocusEffect} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {KeyboardAvoidingView, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

const LoginInput: FC = () => {
  const [userIdFocus, setUserIdFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const onChangeUserId = useCallback((text: string) => {
    UserStore.setSignInUserId(text);
  }, []);
  const onChangePassword = useCallback((text: string) => {
    UserStore.setSignInPassword(text);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onFocus={() => setUserIdFocus(true)}
        onBlur={() => setUserIdFocus(false)}
        style={[
          styles.textContainer,
          styles.mb10,
          userIdFocus ? styles.textInputFocus : null,
        ]}
        onChangeText={text => {
          onChangeUserId(text);
        }}
        maxLength={20}
        value={UserStore.signInUserId}
        placeholder="아이디를 입력하세요."
      />
      <TextInput
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordFocus(false)}
        style={[
          styles.textContainer,
          passwordFocus ? styles.textInputFocus : null,
        ]}
        onChangeText={text => {
          onChangePassword(text);
        }}
        maxLength={20}
        value={UserStore.signInPassword}
        secureTextEntry={true}
        placeholder="비밀번호를 입력하세요."
      />
    </SafeAreaView>
  );
};

export default observer(LoginInput);
