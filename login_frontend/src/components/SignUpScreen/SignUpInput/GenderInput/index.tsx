import UserStore from '@/stores/UserStore';
import {observer} from 'mobx-react';
import React from 'react';
import {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const GenderInput: FC = () => {
  return (
    <View style={styles.mt17}>
      <Text style={styles.titleText}>성별</Text>
      <View style={styles.genderContainer}>
        <Pressable onPress={() => UserStore.setGender('MALE')}>
          <View
            style={[
              styles.genderCheckBox,
              UserStore.gender === 'MALE'
                ? styles.bgColor_black
                : styles.bgColor_white,
            ]}
          />
        </Pressable>
        <Text style={[styles.ml10, styles.titleText]}>남자</Text>

        <View style={styles.femailContainer}>
          <Pressable onPress={() => UserStore.setGender('FEMALE')}>
            <View
              style={[
                styles.genderCheckBox,
                UserStore.gender === 'FEMALE'
                  ? styles.bgColor_black
                  : styles.bgColor_white,
              ]}
            />
          </Pressable>
          <Text style={[styles.ml10, styles.titleText]}>여자</Text>
        </View>
      </View>
    </View>
  );
};

export default observer(GenderInput);
