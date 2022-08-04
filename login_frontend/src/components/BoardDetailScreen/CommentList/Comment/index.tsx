import BoardStore from '@/stores/BoardStore';
import {BoardType, CommentType} from '@/stores/types/BoardStore.type';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {FC} from 'react';
import {Pressable, Text, View} from 'react-native';

type CommentProps = {
  comment: CommentType;
};
const Comment: FC<CommentProps> = ({comment}) => {
  const navigation = useNavigation<any>();
  console.log(comment);
  return (
    <View>
      <Text>{comment.content}</Text>
      <Text>{comment.created_at}</Text>
      <Text>{comment.user.userId}</Text>
      <Text>{comment.user.username}</Text>
    </View>
    // <Pressable

    //   style={styles.container}
    //   onPress={() => {
    //     BoardStore.setBoard(board);
    //     navigation.navigate('BoardDetail');
    //   }}>
    //   <View style={styles.header}>
    //     <View style={styles.userImage} />
    //     <View>
    //       <Text style={styles.userIdText}>{board.user.userId}</Text>
    //       <Text style={styles.createdDateText}>{board.created_at}</Text>
    //     </View>
    //   </View>
    //   <View style={styles.titleContainer}>
    //     <Text style={styles.titleText} numberOfLines={1}>
    //       {board.title}
    //     </Text>
    //   </View>
    //   <View style={styles.contentContainer}>
    //     <Text style={styles.contentText} numberOfLines={3}>
    //       {board.content}
    //     </Text>
    //   </View>
    //   <View style={styles.footerLine} />
    //   <View style={styles.footerContainer}>
    //     <Text style={styles.footerText}>좋아요</Text>
    //     <Text style={styles.footerText}>│</Text>
    //     <Text style={styles.footerText}>댓글 {board.comments.length}</Text>
    //   </View>
    // </Pressable>
  );
};

export default observer(Comment);