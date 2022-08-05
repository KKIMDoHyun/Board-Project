import BoardHeader from '@/components/CreateBoardScreen/BoardHeader';
import Button from '@/components/CreateBoardScreen/Button';
import Content from '@/components/CreateBoardScreen/Content';
import Title from '@/components/CreateBoardScreen/Title';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const CreateBoardScreen: FC = () => {
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
