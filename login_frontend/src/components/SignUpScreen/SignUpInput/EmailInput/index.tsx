import UserStore from '@/stores/UserStore';
import {observer} from 'mobx-react';
import React, {useState} from 'react';
import {FC, useCallback} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Dropdown} from 'react-native-element-dropdown';
const EmailInput: FC = () => {
  const data = [
    {label: 'naver.com', value: 'naver.com'},
    {label: 'gmail.com', value: 'gmail.com'},
  ];
  const [errMessage, setErrMessage] = useState('');
  const onChangeEmail = useCallback((text: string) => {
    UserStore.setEmail(text);
    if (text === '') {
      setErrMessage('필수 항목입니다.');
    } else {
      setErrMessage('');
    }
  }, []);

  return (
    <View style={styles.mb17}>
      <Text style={styles.titleText}>이메일</Text>
      <View style={styles.container}>
        <TextInput
          maxLength={20}
          style={[
            styles.textInput,
            errMessage.length > 0
              ? {borderColor: 'red'}
              : {borderColor: 'gray'},
          ]}
          onChangeText={text => {
            onChangeEmail(text);
          }}
          onFocus={() => {
            if (UserStore.email === '') {
              setErrMessage('필수 항목입니다.');
            } else if (UserStore.email.length < 5) {
              setErrMessage('최소 5글자 이상 입력하세요.');
            }
          }}
          onBlur={() => {
            if (0 < UserStore.email.length && UserStore.email.length < 5) {
              setErrMessage('최소 5글자 이상 입력하세요.');
            }
          }}
        />
        <Text style={styles.emailText}>@</Text>
        <Dropdown
          data={data}
          style={styles.dropdownStyle}
          selectedTextStyle={styles.selectedTextStyle}
          placeholderStyle={styles.placeholderStyle}
          placeholder="이메일을 선택하세요"
          autoScroll={false}
          labelField="label"
          valueField="value"
          onChange={item => console.log(item)}
        />
      </View>
      {errMessage.length > 0 ? (
        <Text style={[styles.textRed, styles.mt7]}>{errMessage}</Text>
      ) : null}
    </View>
  );
};

export default observer(EmailInput);
