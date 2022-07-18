import UserStore from '@/stores/UserStore';
import {idRedundancyCheck} from '@/utils/api/auth';
import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const SignUpInput: FC = () => {
  const [idCheck, setIdCheck] = useState(true);
  const [enableIdCheck, setEnableIdCheck] = useState(false);
  const [userIdErrMessage, setUserIdErrMessage] = useState('');
  const onChangeId = useCallback((text: string) => {
    UserStore.setUserId(text);
    if (text === '') {
      setIdCheck(false);
    } else {
      setEnableIdCheck(false);
      setIdCheck(true);
      setUserIdErrMessage('');
    }
  }, []);
  // const onChangeEmail = useCallback((text: string) => {
  //   UserStore.setEmail(text);
  // }, []);
  // const onChangeUsername = useCallback((text: string) => {
  //   UserStore.setUsername(text);
  // }, []);
  // const onChangePhoneNumber = useCallback((text: string) => {
  //   const regex = /^[0-9\b -]{0,13}$/;
  //   if (regex.test(text)) {
  //     console.log(text);
  //     UserStore.setPhoneNumber(text);
  //   } else {
  //     UserStore.setPhoneNumber('');
  //   }
  // }, []);
  // const onChangePassword = useCallback((text: string) => {
  //   UserStore.setPassword(text);
  // }, []);
  // const onChangeCheckPassword = useCallback((text: string) => {
  //   UserStore.setCheckPassword(text);
  // }, []);
  return (
    <>
      <View style={styles.mb17}>
        <Text style={styles.titleText}>아이디</Text>
        <View>
          <TextInput
            style={[
              styles.textInput,
              !idCheck || userIdErrMessage.length > 0
                ? {borderColor: 'red'}
                : enableIdCheck
                ? {borderColor: 'blue'}
                : {borderColor: 'gray'},
            ]}
            onFocus={() => {
              if (UserStore.userId === '') {
                setIdCheck(false);
              } else {
                setIdCheck(true);
              }
            }}
            onChangeText={text => {
              onChangeId(text);
            }}
          />
          <Pressable
            onPress={() => {
              if (UserStore.userId.length > 5 && UserStore.userId.length < 20) {
                idRedundancyCheck({userId: UserStore.userId})
                  .then(res => {
                    console.log('중복확인', res.data);
                    setIdCheck(res.data);
                    setEnableIdCheck(res.data);
                  })
                  .catch(err => {
                    console.log(err.response.data);
                    setUserIdErrMessage(err.response.data.message[0]);
                  });
              } else {
                setUserIdErrMessage('아이디는 5~20 글자여야 합니다.');
              }
            }}>
            <View style={styles.redundancyCheckBox}>
              <Text style={styles.redundancyCheckText}>중복확인</Text>
            </View>
          </Pressable>
        </View>
        {!idCheck ? (
          <Text style={{color: 'red', marginTop: 7}}>필수 항목입니다</Text>
        ) : null}
        {enableIdCheck ? (
          <Text style={{color: 'blue', marginTop: 7}}>
            사용 가능한 아이디입니다
          </Text>
        ) : null}
        {userIdErrMessage.length > 0 ? (
          <Text style={{color: 'red', marginTop: 7}}>{userIdErrMessage}</Text>
        ) : null}
      </View>
      {/* <View style={styles.mb17}>
        <Text style={styles.titleText}>이메일</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            onChangeEmail(text);
          }}
        />
      </View>
      <View style={styles.mb17}>
        <Text style={styles.titleText}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            onChangePassword(text);
          }}
        />
      </View>
      <View style={styles.mb50}>
        <Text style={styles.titleText}>비밀번호 확인</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            onChangeCheckPassword(text);
          }}
        />
      </View>

      <View style={styles.mb17}>
        <Text style={styles.titleText}>이름</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            onChangeUsername(text);
          }}
        />
      </View>
      <View style={styles.mb17}>
        <Text style={styles.titleText}>성별</Text>
        <View style={styles.genderContainer}>
          <Pressable onPress={() => UserStore.setGender('MALE')}>
            <View style={[styles.genderRow, styles.mr50]}>
              <View
                style={[
                  styles.genderCheckBox,
                  UserStore.gender === 'MALE'
                    ? styles.bgColor_black
                    : styles.bgColor_white,
                ]}
              />
              <Text style={[styles.ml10, styles.titleText]}>남자</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => UserStore.setGender('FEMALE')}>
            <View style={styles.genderRow}>
              <View
                style={[
                  styles.genderCheckBox,
                  UserStore.gender === 'FEMALE'
                    ? styles.bgColor_black
                    : styles.bgColor_white,
                ]}
              />
              <Text style={[styles.ml10, styles.titleText]}>여자</Text>
            </View>
          </Pressable>
        </View>
      </View>
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
