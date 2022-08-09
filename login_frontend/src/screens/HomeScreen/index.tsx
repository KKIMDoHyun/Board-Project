import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import BoardList from '@/components/HomeScreen/BoardList';
import CreateBoardBar from '@/components/HomeScreen/CreateBoardBar';
import TopHeader from '@/components/HomeScreen/TopHeader';
import BoardStore from '@/stores/BoardStore';
import DeleteBoardModal from '@/components/Modal/DeleteBoardModal';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <TopHeader />
      <CreateBoardBar />
      <BoardList />
      {BoardStore.deleteBoardModalVisible ? <DeleteBoardModal /> : null}
    </View>
  );
};

export default observer(HomeScreen);
