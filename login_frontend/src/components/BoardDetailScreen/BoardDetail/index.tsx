import {observer} from 'mobx-react';
import React, {FC, useCallback, useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import BoardStore from '@/stores/BoardStore';
import {useFocusEffect} from '@react-navigation/native';
import useSWR from 'swr';
import axios from 'axios';

const BoardDetail: FC = () => {
  // useFocusEffect(
  //   useCallback(() => {
  //     // @ts-ignore
  //     BoardStore.fetchBoard(BoardStore.selectedBoardId);
  //     // BoardStore.fetchComments(BoardStore.selectedBoardId);
  //     console.log('Board', BoardStore.board);
  //   }, []),
  // );

  if (!BoardStore.board || !BoardStore.board.user) {
    console.log('null');
    return null;
  } else {
    console.log('DDD', BoardStore.board.user);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userImage} />
        <View>
          <Text style={styles.userIdText}>{BoardStore.board.user.userId}</Text>
          <Text style={styles.createdDateText}>
            {BoardStore.board.created_at}
          </Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{BoardStore.board.title}</Text>
      </View>
      <View style={styles.titleUnderLine} />
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{BoardStore.board.content}</Text>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>좋아요</Text>
        <Text style={styles.footerText}>│</Text>
        <Text style={styles.footerText}>댓글 {BoardStore.comments.length}</Text>
      </View>
    </View>
  );
};

export default observer(BoardDetail);
