import BoardStore from '@/stores/BoardStore';
import {BoardType} from '@/stores/types/BoardStore.type';
import {getAllBoards} from '@/utils/api/board';
import {useFocusEffect} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useCallback, useEffect} from 'react';
import {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Board from '../Board';

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
      console.log('get BoardList', BoardStore.boardList);
    }, []),
  );
  return (
    <SafeAreaView style={{flex: 1, width: '100%'}}>
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
