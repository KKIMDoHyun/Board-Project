import BoardStore from '@/stores/BoardStore';
import {createBoard} from '@/utils/api/board';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React from 'react';
import {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

const Button: FC = () => {
  const navigation = useNavigation<any>();
  const submitBoard = () => {
    console.log('제출');
    const boardData = {
      title: BoardStore.boardTitle,
      content: BoardStore.boardContent,
      status: BoardStore.boardStatus,
    };
    createBoard(boardData)
      .then(res => {
        console.log(res.data);
        BoardStore.setBoardClear();
        navigation.navigate('BottomTabs');
      })
      .catch(err => console.log(err));
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
