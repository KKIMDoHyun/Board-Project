import {observer} from 'mobx-react';
import React, {FC, useCallback} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import BoardDetail from '@/components/BoardDetailScreen/BoardDetail';
import CommentList from '@/components/BoardDetailScreen/CommentList';
import BoardStore from '@/stores/BoardStore';
import {useFocusEffect} from '@react-navigation/native';

const BoardDetailScreen: FC = () => {
  useFocusEffect(
    useCallback(() => {
      BoardStore.fetchBoard(BoardStore.selectedBoardId);
      BoardStore.fetchComments(BoardStore.selectedBoardId);
    }, []),
  );
  return (
    <View style={styles.container}>
      <BoardDetail />
      <CommentList />
    </View>
  );
};

export default observer(BoardDetailScreen);
