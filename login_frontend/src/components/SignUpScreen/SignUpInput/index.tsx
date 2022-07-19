import UserStore from '@/stores/UserStore';
import {idRedundancyCheck} from '@/utils/api/auth';
import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import EmailInput from './EmailInput';
import {styles} from './styles';
import UserIdInput from './UserIdInput';

const SignUpInput: FC = () => {
  // const onChangeUsername = useCallback((text: string) => {
  //   UserStore.setUsername(text);
  // }, []);
  // const onChangePhoneNumber = useCallback((text: string) => {
  //   const regex = /^[0-9\b -]{0,13}$/;
  //   if (regex.test(text)) {
  //     console.log(text);
  //     UserStore.setPhoneNumber(text);
  //   } else {
  //     UserStore.setPhoneNumber('');
  //   }
  // }, []);
  // const onChangePassword = useCallback((text: string) => {
  //   UserStore.setPassword(text);
  // }, []);
  // const onChangeCheckPassword = useCallback((text: string) => {
  //   UserStore.setCheckPassword(text);
  // }, []);
  return (
    <>
      <UserIdInput />
      <EmailInput />

      {/* 비밀번호 */}
      {/* <View style={styles.mb17}>
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
        <View style={styles.genderContainer}>
          <Pressable onPress={() => UserStore.setGender('MALE')}>
            <View style={[styles.genderRow, styles.mr50]}>
              <View
                style={[
                  styles.genderCheckBox,
                  UserStore.gender === 'MALE'
                    ? styles.bgColor_black
                    : styles.bgColor_white,
                ]}
              />
              <Text style={[styles.ml10, styles.titleText]}>남자</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => UserStore.setGender('FEMALE')}>
            <View style={styles.genderRow}>
              <View
                style={[
                  styles.genderCheckBox,
                  UserStore.gender === 'FEMALE'
                    ? styles.bgColor_black
                    : styles.bgColor_white,
                ]}
              />
              <Text style={[styles.ml10, styles.titleText]}>여자</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.mb17}>
        <Text style={styles.titleText}>휴대전화</Text>
        <TextInput
          style={styles.textInput}
          autoCorrect={false}
          keyboardType="numeric"
          onChangeText={text => {
            // const regex = /^[0-9\b -]{0,13}$/;
            // if (regex.test(text)) {
            //   onChangePhoneNumber(text);
            // }
            console.log(text);
          }}
          maxLength={11}
        />
      </View> */}
    </>
  );
};

export default observer(SignUpInput);
