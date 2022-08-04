import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React from 'react';
import {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const CreateBoardBar: FC = () => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate('CreateBoard');
      }}>
      <Text style={styles.text}>글 쓰기</Text>
    </Pressable>
  );
};

export default observer(CreateBoardBar);
