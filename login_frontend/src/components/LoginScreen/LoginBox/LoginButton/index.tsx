import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import LoginStore from '@/stores/LoginStore';

const LoginButton: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.autoLoginBtn}>
        <BouncyCheckbox
          size={20}
          fillColor="salmon"
          text="자동로그인"
          iconStyle={{borderColor: 'salmon'}}
          textStyle={styles.autoLoginBtnText}
          onPress={(isChecked: boolean) => {
            LoginStore.setAutoLoginToggle(isChecked);
          }}
        />
      </View>
      <View style={styles.loginBtn}>
        <Pressable>
          <Text style={styles.loginBtnText}>로그인</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default observer(LoginButton);
