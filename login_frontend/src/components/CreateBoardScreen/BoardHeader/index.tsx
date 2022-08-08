import BoardStore from '@/stores/BoardStore';
import UserStore from '@/stores/UserStore';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const BoardHeader: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <View style={styles.subContainer}>
        <Text style={styles.userIdText}>{UserStore.userInfo.userId}</Text>
        <View style={styles.statusContainer}>
          <Pressable
            onPress={() => {
              BoardStore.setBoardStatus('PUBLIC');
            }}>
            <Text
              style={
                BoardStore.boardStatus === 'PUBLIC'
                  ? styles.selectedText
                  : styles.unSelectedText
              }>
              전체 공개
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              BoardStore.setBoardStatus('PRIVATE');
            }}>
            <Text
              style={
                BoardStore.boardStatus === 'PRIVATE'
                  ? styles.selectedText
                  : styles.unSelectedText
              }>
              나만 보기
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default observer(BoardHeader);
