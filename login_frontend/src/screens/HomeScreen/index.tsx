import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import BoardList from '@/components/HomeScreen/BoardList';
import CreateBoardBar from '@/components/HomeScreen/CreateBoardBar';
import TopHeader from '@/components/HomeScreen/TopHeader';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <TopHeader />
      <CreateBoardBar />
      <BoardList />
    </View>
  );
};

export default observer(HomeScreen);
