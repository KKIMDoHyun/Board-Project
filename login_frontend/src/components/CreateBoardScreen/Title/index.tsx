import BoardStore from '@/stores/BoardStore';
import {observer} from 'mobx-react';
import React from 'react';
import {FC} from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

const Title: FC = () => {
  const writing_title = (text: string) => {
    BoardStore.setBoardTitle(text);
  };
  return (
    <TextInput
      style={styles.container}
      onChangeText={text => {
        writing_title(text);
      }}
      placeholder="제목을 쓰세요."
      multiline
      value={BoardStore.boardTitle}
    />
  );
};

export default observer(Title);
