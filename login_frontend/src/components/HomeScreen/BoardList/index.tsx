import BoardStore from '@/stores/BoardStore';
import {BoardType} from '@/stores/types/BoardStore.type';
import {useFocusEffect} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {FC, useCallback} from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Board from '../Board';
import {styles} from './styles';

type BoardProps = {
  item: BoardType;
};
const BoardData: FC<BoardProps> = ({item}) => {
  return <Board board={item} />;
};
const BoardList: FC = () => {
  useFocusEffect(
    useCallback(() => {
      BoardStore.fetchBoardList();
    }, []),
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator
        data={BoardStore.boardList}
        renderItem={BoardData}
        keyExtractor={item => {
          return String(item.id);
        }}
      />
    </SafeAreaView>
  );
};

export default observer(BoardList);
