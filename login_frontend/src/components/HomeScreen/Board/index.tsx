import BoardStore from '@/stores/BoardStore';
import {BoardType} from '@/stores/types/BoardStore.type';
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {FC} from 'react';
import {ImageBackground, Text, View} from 'react-native';

type BoardProps = {
  board: BoardType;
};
const Board: FC<BoardProps> = ({board}) => {
  return (
    <View
      style={{
        backgroundColor: '#e2f5e1',
        borderWidth: 1,
        marginBottom: 30,
        paddingRight: 10,
        paddingLeft: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          paddingTop: 10,
        }}>
        <View
          style={{
            borderWidth: 1,
            width: 40,
            height: 40,
            borderRadius: 100,
            backgroundColor: 'white',
            marginRight: 10,
          }}></View>
        <Text>{board.user.userId}</Text>
      </View>
      <View style={{borderBottomWidth: 1, marginTop: 7}}>
        <Text
          style={{color: '#000000', fontSize: 20, fontWeight: '600'}}
          numberOfLines={1}>
          {board.title}
        </Text>
      </View>
      <View>
        <Text>{board.content}</Text>
      </View>
    </View>
  );
};

export default observer(Board);
