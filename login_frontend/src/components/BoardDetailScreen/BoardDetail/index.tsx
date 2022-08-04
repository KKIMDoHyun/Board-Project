import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import BoardStore from '@/stores/BoardStore';

const BoardDetail: FC = () => {
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
        <Text style={styles.titleText} numberOfLines={1}>
          {BoardStore.board.title}
        </Text>
      </View>
      <View style={styles.titleUnderLine} />
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{BoardStore.board.content}</Text>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>좋아요</Text>
        <Text style={styles.footerText}>│</Text>
        <Text style={styles.footerText}>
          댓글 {BoardStore.board.comments.length}
        </Text>
      </View>
    </View>
  );
};

export default observer(BoardDetail);
