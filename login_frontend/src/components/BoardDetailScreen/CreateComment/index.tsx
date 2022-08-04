import {observer} from 'mobx-react';
import React from 'react';
import {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const CreateComment: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>글 쓰기</Text>
    </View>
  );
};

export default observer(CreateComment);
