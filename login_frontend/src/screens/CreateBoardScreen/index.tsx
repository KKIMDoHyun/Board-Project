import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const CreateBoardScreen: FC = () => {
  return (
    <View
      style={{
        height: '100%',
      }}>
      <View>
        <Text>글 작성하기</Text>
      </View>
    </View>
  );
};

export default observer(CreateBoardScreen);
