import BoardStore from '@/stores/BoardStore';
import {getAllBoards} from '@/utils/api/board';
import {useFocusEffect} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {FC} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Board from '../Board';

const CreateBoard: FC = () => {
  return (
    <View
      style={{
        borderWidth: 2,
        marginVertical: 20,
        height: 50,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        paddingLeft: 10,
        borderRadius: 20,
      }}>
      <Text style={{color: '#000000'}}>글 쓰기</Text>
    </View>
  );
};

export default observer(CreateBoard);
