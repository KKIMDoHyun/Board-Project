import BoardStore from '@/stores/BoardStore';
import {getAllBoards} from '@/utils/api/board';
import {useFocusEffect} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Board from '../Board';

const CreateBoard: FC = () => {
  return (
    <View style={{borderWidth: 1}}>
      <Text>글 쓰기</Text>
    </View>
  );
};

export default observer(CreateBoard);
