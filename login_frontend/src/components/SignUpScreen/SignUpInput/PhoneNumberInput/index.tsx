import UserStore from '@/stores/UserStore';
import {observer} from 'mobx-react';
import React, {useCallback, useState} from 'react';
import {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const PhoneNumberInput: FC = () => {
  const onChangePhoneNumber = useCallback((text: string) => {
    UserStore.setPhoneNumber(text);
  }, []);
  return (
    <>
      <View style={styles.mt17}>
        <Text style={styles.titleText}>휴대전화</Text>
        <TextInput
          style={[
            styles.textInput,
            !UserStore.phoneNumberCheck ? styles.borderRed : styles.borderGray,
          ]}
          onChangeText={text => {
            onChangePhoneNumber(text);
          }}
          onBlur={() => {
            if (UserStore.phoneNumber === '') {
              UserStore.setPhoneNumberCheck(false);
            } else {
              UserStore.setPhoneNumberCheck(true);
            }
          }}
        />
      </View>
      {!UserStore.phoneNumberCheck ? (
        <Text style={styles.textRed}>필수 항목입니다.</Text>
      ) : null}
    </>
  );
};
export default observer(PhoneNumberInput);
