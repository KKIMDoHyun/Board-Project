import DeleteBoardModal from '@/components/Modal/DeleteBoardModal';
import BoardStore from '@/stores/BoardStore';
import {BoardType} from '@/stores/types/BoardStore.type';
import UserStore from '@/stores/UserStore';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useState} from 'react';
import {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

type BoardProps = {
  board: BoardType;
};
const Board: FC<BoardProps> = ({board}) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.userImage} />
          <View>
            <Text style={styles.userIdText}>{board.user.userId}</Text>
            <Text style={styles.createdDateText}>{board.created_at}</Text>
          </View>
        </View>
        {board.user.userId === UserStore.userInfo.userId ? (
          <View style={{flexDirection: 'row'}}>
            <Pressable
              onPress={() => {
                BoardStore.setBoardId(board.id);
                BoardStore.setBoardStatus(board.status);
                BoardStore.setBoardTitle(board.title);
                BoardStore.setBoardContent(board.content);
                BoardStore.setBoardModifyMode(true);
                navigation.navigate('CreateBoard');
              }}
              style={styles.modifyBtnContainer}>
              <Text>수정하기</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                BoardStore.setBoardId(board.id);
                BoardStore.setDeleteBoardModalVisible(true);
              }}
              style={styles.modifyBtnContainer}>
              <Text>삭제하기</Text>
            </Pressable>
          </View>
        ) : null}
      </View>
      <Pressable
        style={styles.bodyContainer}
        onPress={() => {
          BoardStore.setSelectedBoardId(board.id);
          navigation.navigate('BoardDetail');
        }}>
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
      </Pressable>
      <View style={styles.footerLine} />
      <View style={styles.footerContainer}>
        <Pressable
          onPress={() => {
            console.log('좋아요');
          }}>
          <Text style={styles.footerText}>좋아요</Text>
        </Pressable>
        <Text style={styles.footerText}>│</Text>
        <Text style={styles.footerText}>댓글 {board.comments.length}</Text>
      </View>
    </View>
  );
};

export default observer(Board);
