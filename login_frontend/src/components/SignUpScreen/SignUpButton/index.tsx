import SignUpStore from '@/stores/SignUpStore';
import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {Dimensions, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const SignUpButton: FC = () => {
  return (
    <>
      <View>
        <Pressable
          style={styles.container}
          onPress={() => {
            console.log('D');
          }}>
          <Text style={styles.signUpText}>가입하기</Text>
        </Pressable>
      </View>
    </>
  );
};

export default observer(SignUpButton);
