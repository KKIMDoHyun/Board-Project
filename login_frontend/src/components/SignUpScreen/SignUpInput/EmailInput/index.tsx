import UserStore from '@/stores/UserStore';
import {observer} from 'mobx-react';
import React, {useState} from 'react';
import {FC, useCallback} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import EmailBack from './EmailBack';
const EmailInput: FC = () => {
  const [errMessage, setErrMessage] = useState('');
  const onChangeEmail = useCallback((text: string) => {
    UserStore.setEmailFront(text);
  }, []);

  return (
    <View style={styles.mt17}>
      <Text style={styles.titleText}>이메일</Text>
      <View style={styles.container}>
        <TextInput
          style={[
            styles.textInput,
            !UserStore.emailFrontCheck && errMessage !== ''
              ? {borderColor: 'red'}
              : {borderColor: 'gray'},
          ]}
          onChangeText={text => {
            onChangeEmail(text);
          }}
          maxLength={20}
          onBlur={() => {
            if (
              UserStore.emailFront.length > 0 &&
              UserStore.emailFront.length < 5
            ) {
              setErrMessage('최소 5글자 이상 입력하세요.');
              UserStore.setEmailFrontCheck(false);
            } else if (UserStore.emailFront.length === 0) {
              setErrMessage('필수 항목입니다.');
              UserStore.setEmailFrontCheck(false);
            } else {
              setErrMessage('');
              UserStore.setEmailFrontCheck(true);
            }
          }}
        />
        <Text style={styles.emailText}>@</Text>
        <EmailBack />
      </View>
      {!UserStore.emailFrontCheck && errMessage !== '' ? (
        <Text style={[styles.textRed, styles.mt7]}>{errMessage}</Text>
      ) : null}

      {!UserStore.emailBackCheck ? (
        <Text style={[styles.textRed, styles.mt7]}>
          이메일 형식을 선택하세요.
        </Text>
      ) : null}
    </View>
  );
};

export default observer(EmailInput);
