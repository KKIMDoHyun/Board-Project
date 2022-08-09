import BoardStore from '@/stores/BoardStore';
import {createBoard, modifyBoard} from '@/utils/api/board';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React from 'react';
import {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

const Button: FC = () => {
  const navigation = useNavigation<any>();
  const submitBoard = () => {
    const boardData = {
      title: BoardStore.boardTitle,
      content: BoardStore.boardContent,
      status: BoardStore.boardStatus,
    };
    if (BoardStore.boardModifyMode) {
      modifyBoard(BoardStore.boardId, boardData)
        .then(res => {
          navigation.navigate('BottomTabs');
        })
        .catch(err => console.log(err));
    } else {
      createBoard(boardData)
        .then(res => {
          navigation.navigate('BottomTabs');
        })
        .catch(err => console.log(err));
    }
  };
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        submitBoard();
      }}>
      <Text style={styles.text}>작성하기</Text>
    </Pressable>
  );
};

export default observer(Button);
