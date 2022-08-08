import BoardHeader from '@/components/CreateBoardScreen/BoardHeader';
import Button from '@/components/CreateBoardScreen/Button';
import Content from '@/components/CreateBoardScreen/Content';
import Title from '@/components/CreateBoardScreen/Title';
import BoardStore from '@/stores/BoardStore';
import {observer} from 'mobx-react';
import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const CreateBoardScreen: FC = () => {
  useEffect(() => {
    return () => {
      BoardStore.setBoardClear();
    };
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <BoardHeader />
        <Title />
        <Content />
      </View>
      <Button />
    </View>
  );
};

export default observer(CreateBoardScreen);
