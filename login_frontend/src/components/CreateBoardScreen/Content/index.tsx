import BoardStore from '@/stores/BoardStore';
import {observer} from 'mobx-react';
import React from 'react';
import {FC} from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

const Content: FC = () => {
  const writing_content = (text: string) => {
    BoardStore.setBoardContent(text);
  };
  return (
    <TextInput
      style={styles.container}
      onChangeText={text => {
        writing_content(text);
      }}
      placeholder="글 내용을 작성하세요."
      multiline
      value={BoardStore.boardContent}
    />
  );
};

export default observer(Content);
