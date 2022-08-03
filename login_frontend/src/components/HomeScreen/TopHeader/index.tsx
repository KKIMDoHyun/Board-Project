import BoardStore from '@/stores/BoardStore';
import {getAllBoards} from '@/utils/api/board';
import {useFocusEffect} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Board from '../Board';

const TopHeader: FC = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#e2f5e1',
      }}>
      <Text style={{color: '#000000', fontSize: 30, fontWeight: '700'}}>
        어플
      </Text>
    </View>
  );
};

export default observer(TopHeader);
