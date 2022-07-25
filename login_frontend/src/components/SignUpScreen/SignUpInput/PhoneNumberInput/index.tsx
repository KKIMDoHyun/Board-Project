import UserStore from '@/stores/UserStore';
import {observer} from 'mobx-react';
import React, {useCallback} from 'react';
import {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const PhoneNumberInput: FC = () => {
  const onChangePhoneNumber = useCallback((text: string) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(text)) {
      UserStore.setPhoneNumber(text);
    }
    if (text.length === 10) {
      UserStore.setPhoneNumber(
        UserStore.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'),
      );
    }
    if (text.length === 12) {
      UserStore.setPhoneNumber(
        UserStore.phoneNumber
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'),
      );
      UserStore.setPhoneNumberCheck(true);
    }
    if (text.length === 13) {
      UserStore.setPhoneNumber(
        UserStore.phoneNumber
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      );
      UserStore.setPhoneNumberCheck(true);
    }
    if (text.length <= 8) {
      UserStore.setPhoneNumber(UserStore.phoneNumber.replace(/-/g, ''));
    }
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
          value={UserStore.phoneNumber}
          onChangeText={text => {
            onChangePhoneNumber(text);
          }}
          keyboardType="phone-pad"
          onBlur={() => {
            if (UserStore.phoneNumber === '') {
              UserStore.setPhoneNumberCheck(false);
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
