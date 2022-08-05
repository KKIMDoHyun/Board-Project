import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import BoardDetail from '@/components/BoardDetailScreen/BoardDetail';
import CommentList from '@/components/BoardDetailScreen/CommentList';

const BoardDetailScreen: FC = () => {
  return (
    <View
      style={{
        height: '100%',
      }}>
      <BoardDetail />
      {/* <CommentList /> */}
    </View>
  );
};

export default observer(BoardDetailScreen);
