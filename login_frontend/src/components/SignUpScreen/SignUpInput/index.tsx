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
      <View style={styles.mb17}>
        <Text style={styles.titleText}>아이디</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            onChangeId(text);
          }}
        />
      </View>
      <View style={styles.mb17}>
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
        <View style={{flexDirection: 'row', marginTop: 10}}>
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
      </View>
      <View style={styles.mb17}>
        <Text style={styles.titleText}>휴대전화</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            onChangePhoneNumber(text);
          }}
        />
      </View>
    </>
  );
};

export default observer(SignUpInput);
