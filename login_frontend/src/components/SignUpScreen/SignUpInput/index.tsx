import UserStore from '@/stores/UserStore';
import {observer} from 'mobx-react';
import React, {FC, useCallback} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const SignUpInput: FC = () => {
  const [genderChecked, setGenderChecked] = React.useState(false);
  const {
    setUserId,
    setEmail,
    setUsername,
    setGender,
    setPhoneNumber,
    setPassword,
    setCheckPassword,
  } = UserStore;

  const onChangeId = useCallback(
    (text: string) => {
      setUserId(text);
    },
    [setUserId],
  );
  const onChangeEmail = useCallback(
    (text: string) => {
      setEmail(text);
    },
    [setEmail],
  );
  const onChangeUsername = useCallback(
    (text: string) => {
      setUsername(text);
    },
    [setUsername],
  );
  const onChangePhoneNumber = useCallback(
    (text: string) => {
      setPhoneNumber(text);
    },
    [setPhoneNumber],
  );
  const onChangePassword = useCallback(
    (text: string) => {
      setPassword(text);
    },
    [setPassword],
  );
  const onChangeCheckPassword = useCallback(
    (text: string) => {
      setCheckPassword(text);
    },
    [setCheckPassword],
  );
  return (
    <>
      <View style={styles.lineContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>아이디</Text>
        </View>
        <TextInput
          style={styles.idTextInput}
          onChangeText={text => {
            onChangeId(text);
          }}
          placeholder="아이디를 입력하세요."
        />
        <Pressable>
          <Text style={[styles.titleText, styles.ml20]}>중복확인</Text>
        </Pressable>
      </View>

      <View style={styles.lineContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>이메일</Text>
        </View>
        <TextInput
          style={styles.emailTextInput}
          onChangeText={text => {
            onChangeEmail(text);
          }}
          placeholder="이메일을 입력하세요."
        />
      </View>

      <View style={styles.lineContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>이름</Text>
        </View>
        <TextInput
          style={styles.userNameTextInput}
          onChangeText={text => {
            onChangeUsername(text);
          }}
          placeholder="이름을 입력하세요."
        />
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>성별</Text>
        </View>
        {/*  */}
        <Pressable>
          <View style={{flexDirection: 'row', marginRight: 30}}>
            <View
              style={{
                width: 20,
                height: 20,
                borderWidth: 1,
                borderRadius: 80,
              }}></View>
            <Text style={{marginLeft: 10}}>남자</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 20,
                height: 20,
                borderWidth: 1,
                borderRadius: 80,
              }}></View>
            <Text style={{marginLeft: 10}}>여자</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>핸드폰 번호</Text>
        </View>
        <TextInput
          style={styles.phoneNumberTextInput}
          onChangeText={text => {
            onChangePhoneNumber(text);
          }}
          placeholder="핸드폰 번호를 입력하세요."
        />
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>비밀번호</Text>
        </View>
        <TextInput
          style={styles.passwordTextInput}
          onChangeText={text => {
            onChangePassword(text);
          }}
          placeholder="비밀번호를 입력하세요."
        />
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>비밀번호 확인</Text>
        </View>
        <TextInput
          style={styles.passwordTextInput}
          onChangeText={text => {
            onChangeCheckPassword(text);
          }}
          placeholder="비밀번호를 재입력하세요."
        />
      </View>
    </>
  );
};

export default observer(SignUpInput);
