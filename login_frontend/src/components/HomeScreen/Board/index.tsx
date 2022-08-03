import BoardStore from '@/stores/BoardStore';
import {BoardType} from '@/stores/types/BoardStore.type';
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

type BoardProps = {
  board: BoardType;
};
const Board: FC<BoardProps> = ({board}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userImage}></View>
        <View>
          <Text style={styles.userIdText}>{board.user.userId}</Text>
          <Text style={styles.createdDateText}>{board.created_at}</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText} numberOfLines={1}>
          {board.title}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText} numberOfLines={3}>
          {board.content}
        </Text>
      </View>
      <View style={styles.footerLine}></View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>좋아요</Text>
        <Text style={styles.footerText}>│</Text>
        <Text style={styles.footerText}>댓글 {board.comments.length}</Text>
      </View>
    </View>
  );
};

export default observer(Board);
