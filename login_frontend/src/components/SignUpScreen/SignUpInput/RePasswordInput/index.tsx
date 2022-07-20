import UserStore from '@/stores/UserStore';
import {useFocusEffect} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useCallback, useState} from 'react';
import {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const RePasswordInput: FC = () => {
  const [errMessage, setErrMessage] = useState('');
  useFocusEffect(() => {
    if (!UserStore.rePasswordCheck && UserStore.rePassword === '') {
      setErrMessage('필수 항목입니다');
    }
    if (
      UserStore.rePassword !== '' &&
      UserStore.rePassword !== UserStore.password
    ) {
      setErrMessage('비밀번호가 일치하지 않습니다.');
    }
  });
  const onChangeCheckPassword = useCallback((text: string) => {
    UserStore.setRePassword(text);
  }, []);
  return (
    <>
      <View style={styles.mt17}>
        <Text style={styles.titleText}>비밀번호 확인</Text>
        <TextInput
          style={[
            styles.textInput,
            UserStore.rePasswordCheck
              ? errMessage === ''
                ? styles.borderGray
                : styles.borderBlue
              : styles.borderRed,
          ]}
          maxLength={20}
          secureTextEntry
          onChangeText={text => {
            onChangeCheckPassword(text);
          }}
          onBlur={() => {
            if (UserStore.rePassword === '') {
              UserStore.setRePasswordCheck(false);
              setErrMessage('필수 항목입니다.');
            } else if (UserStore.rePassword === UserStore.password) {
              setErrMessage('비밀번호와 일치합니다.');
              UserStore.setRePasswordCheck(true);
            } else {
              setErrMessage('비밀번호가 일치하지 않습니다.');
              UserStore.setRePasswordCheck(false);
            }
          }}
        />
        {errMessage.length > 0 ? (
          <Text
            style={[
              styles.mt7,
              UserStore.rePasswordCheck ? styles.textBlue : styles.textRed,
            ]}>
            {errMessage}
          </Text>
        ) : null}
      </View>
    </>
  );
};

export default observer(RePasswordInput);
