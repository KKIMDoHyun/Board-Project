import UserStore from '@/stores/UserStore';
import {idRedundancyCheck} from '@/utils/api/auth';
import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const UserIdInput: FC = () => {
  const [errMessage, setErrMessage] = useState('');
  const onChangeId = useCallback((text: string) => {
    UserStore.setUserId(text);
    if (text === '') {
      setErrMessage('필수 항목입니다.');
    } else {
      setErrMessage('');
    }
    UserStore.setUserIdCheck(false);
  }, []);

  return (
    <>
      <Text style={styles.titleText}>아이디</Text>
      <View>
        <TextInput
          style={[
            styles.textInput,
            UserStore.userIdCheck
              ? styles.borderBlue
              : errMessage === ''
              ? styles.borderGray
              : styles.borderRed,
          ]}
          maxLength={20}
          onBlur={() => {
            if (UserStore.userId === '') {
              setErrMessage('필수 항목입니다.');
            }
          }}
          onChangeText={text => {
            onChangeId(text);
          }}
        />
        <Pressable
          onPress={() => {
            if (UserStore.userId.length >= 5 && UserStore.userId.length <= 20) {
              idRedundancyCheck({userId: UserStore.userId})
                .then(res => {
                  console.log('중복확인', res.data);
                  if (res.data) {
                    UserStore.setUserIdCheck(true);
                    setErrMessage('사용가능한 아이디입니다.');
                  } else {
                    UserStore.setUserIdCheck(false);
                    setErrMessage('이미 가입된 아이디입니다.');
                  }
                })
                .catch(err => {
                  setErrMessage(err.response.data.message[0]);
                });
            } else if (UserStore.userId.length > 0) {
              setErrMessage('아이디는 5~20글자로 입력해주세요.');
            }
          }}>
          <View style={styles.redundancyCheckBox}>
            <Text style={styles.redundancyCheckText}>중복확인</Text>
          </View>
        </Pressable>
      </View>
      {errMessage.length > 0 ? (
        <Text
          style={[
            styles.mt7,
            UserStore.userIdCheck ? styles.textBlue : styles.textRed,
          ]}>
          {errMessage}
        </Text>
      ) : null}
    </>
  );
};

export default observer(UserIdInput);
