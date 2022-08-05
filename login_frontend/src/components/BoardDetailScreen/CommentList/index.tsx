import BoardStore from '@/stores/BoardStore';
import {instance} from '@/utils/api';
import {getComments} from '@/utils/api/comment';
import {observer} from 'mobx-react';
import React, {FC, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CreateComment from '../CreateComment';
import Comment from './Comment';
import {styles} from './styles';

const CommentData: FC = ({item}) => {
  return <Comment comment={item} />;
};

const Comments: FC = () => {
  // useEffect(() => {
  //   BoardStore.fetchComments(BoardStore.board.id);
  // }, []);
  return (
    <View style={styles.container}>
      <CreateComment />
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          showsHorizontalScrollIndicator
          data={BoardStore.comments}
          renderItem={CommentData}
          keyExtractor={item => {
            return String(item.id);
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default observer(Comments);
