import UserStore from '@/stores/UserStore';
import {observer} from 'mobx-react';
import React, {useCallback, useState} from 'react';
import {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const UsernameInput: FC = () => {
  const onChangeUsername = useCallback((text: string) => {
    UserStore.setUsername(text);
  }, []);
  return (
    <>
      <View style={styles.mt17}>
        <Text style={styles.titleText}>이름</Text>
        <TextInput
          style={[
            styles.textInput,
            !UserStore.usernameCheck ? styles.borderRed : styles.borderGray,
          ]}
          onChangeText={text => {
            onChangeUsername(text);
          }}
          onBlur={() => {
            if (UserStore.username === '') {
              UserStore.setUsernameCheck(false);
            } else {
              UserStore.setUsernameCheck(true);
            }
          }}
        />
      </View>
      {!UserStore.usernameCheck ? (
        <Text style={styles.textRed}>필수 항목입니다.</Text>
      ) : null}
    </>
  );
};
export default observer(UsernameInput);
