import BoardStore from '@/stores/BoardStore';
import {getAllBoards} from '@/utils/api/board';
import {useFocusEffect} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Board from '../Board';

const BoardData: FC = ({item}) => {
  return <Board board={item} />;
};
const BoardList: FC = () => {
  useEffect(() => {
    BoardStore.fetchBoards();
  }, []);
  return (
    <SafeAreaView style={{width: '100%', marginTop: '20%'}}>
      <FlatList
        showsHorizontalScrollIndicator
        data={BoardStore.boards}
        renderItem={BoardData}
        keyExtractor={item => {
          return String(item.id);
        }}
      />
    </SafeAreaView>
  );
};

export default observer(BoardList);
