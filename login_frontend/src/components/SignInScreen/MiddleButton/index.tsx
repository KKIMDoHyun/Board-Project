import {observer} from 'mobx-react';
import React, {FC, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import UserStore from '@/stores/UserStore';
import {useNavigation} from '@react-navigation/native';
import AdditionalFuncStore from '@/stores/additionalFuncStore';

const MiddleButton: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={20}
        fillColor="salmon"
        text="로그인 상태 유지"
        iconStyle={styles.checkboxIcon}
        textStyle={styles.autoLoginBtnText}
        onPress={(isChecked: boolean) => {
          UserStore.setAutoLoginToggle(isChecked);
        }}
      />
      <View style={styles.errMessageContainer}>
        {AdditionalFuncStore.errMessage ? (
          <Text style={styles.errMessage}>
            {AdditionalFuncStore.errMessage}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default observer(MiddleButton);
