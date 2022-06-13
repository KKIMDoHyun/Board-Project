import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const LoginInput: FC = () => {
  const [email, setEmail] = useState('');
  const onChangeEmail = useCallback((text: string) => {
    setEmail(text);
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          width: '100%',
          height: 40,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onChangeText={text => {
          onChangeEmail(text);
        }}
        placeholder="이메일을 입력하세요."
      />
      <TextInput
        style={{
          width: '100%',
          height: 40,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={text => {
          onChangeEmail(text);
        }}
        placeholder="비밀번호를 입력하세요."
      />
    </View>
  );
};

export default observer(LoginInput);
