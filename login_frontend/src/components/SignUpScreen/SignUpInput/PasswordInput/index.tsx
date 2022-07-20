import UserStore from '@/stores/UserStore';
import {useFocusEffect} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useCallback, useState} from 'react';
import {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const PasswordInput: FC = () => {
  const [errMessage, setErrMessage] = useState('');
  useFocusEffect(() => {
    if (!UserStore.passwordCheck && UserStore.password === '') {
      setErrMessage('필수 항목입니다.');
    }
  });
  const onChangePassword = useCallback((text: string) => {
    UserStore.setPassword(text);
  }, []);

  return (
    <>
      <View style={styles.mt17}>
        <Text style={styles.titleText}>비밀번호</Text>
        <TextInput
          style={[
            styles.textInput,
            UserStore.passwordCheck
              ? errMessage === ''
                ? styles.borderGray
                : styles.borderBlue
              : styles.borderRed,
          ]}
          maxLength={20}
          secureTextEntry
          onChangeText={text => {
            onChangePassword(text);
          }}
          onBlur={() => {
            // 정규식이나 조건
            if (UserStore.password === '') {
              UserStore.setPasswordCheck(false);
              setErrMessage('필수 항목입니다.');
            } else if (
              UserStore.password.length > 0 &&
              UserStore.password.length < 4
            ) {
              UserStore.setPasswordCheck(false);
              setErrMessage('비밀번호는 최소 4자입니다.');
            } else {
              UserStore.setPasswordCheck(true);
              setErrMessage('사용가능한 비밀번호입니다.');
            }
          }}
        />
        {errMessage.length > 0 ? (
          <Text
            style={[
              styles.mt7,
              UserStore.passwordCheck ? styles.textBlue : styles.textRed,
            ]}>
            {errMessage}
          </Text>
        ) : null}
      </View>
    </>
  );
};

export default observer(PasswordInput);
