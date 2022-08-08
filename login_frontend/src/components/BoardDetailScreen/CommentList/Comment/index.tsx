import BoardStore from '@/stores/BoardStore';
import {BoardType, CommentType} from '@/stores/types/BoardStore.type';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

type CommentProps = {
  comment: CommentType;
};
const Comment: FC<CommentProps> = ({comment}) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View style={styles.image} />
        <View>
          <Text style={styles.blackText}>{comment.created_at}</Text>
          <Text style={[styles.blackText, styles.font16]}>
            {comment.user.userId}
          </Text>
        </View>
      </View>
      <Text style={styles.contentText}>{comment.content}</Text>
    </View>
  );
};

export default observer(Comment);
