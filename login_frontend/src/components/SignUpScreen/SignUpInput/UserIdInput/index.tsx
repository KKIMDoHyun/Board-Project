import UserStore from '@/stores/UserStore';
import {idRedundancyCheck} from '@/utils/api/auth';
import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const UserIdInput: FC = () => {
  const [errMessage, setErrMessage] = useState('');
  const [idCheck, setIdCheck] = useState(false);
  const onChangeId = useCallback((text: string) => {
    UserStore.setUserId(text);
    if (text === '') {
      setErrMessage('필수 항목입니다.');
    } else {
      setErrMessage('');
    }
    setIdCheck(false);
  }, []);

  return (
    <View style={styles.mb17}>
      <Text style={styles.titleText}>아이디</Text>
      <View>
        <TextInput
          style={[
            styles.textInput,
            idCheck
              ? styles.borderBlue
              : errMessage === ''
              ? styles.borderGray
              : styles.borderRed,
          ]}
          maxLength={20}
          onFocus={() => {
            setIdCheck(false);
            if (UserStore.userId === '') {
              setErrMessage('필수 항목입니다.');
            } else {
              setErrMessage('');
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
                    setIdCheck(true);
                    setErrMessage('사용가능한 아이디입니다.');
                  } else {
                    setIdCheck(false);
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
      <Text style={idCheck ? styles.textBlue : styles.textRed}>
        {errMessage}
      </Text>
    </View>
  );
};

export default observer(UserIdInput);
