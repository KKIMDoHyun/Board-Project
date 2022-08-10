import BoardStore from '@/stores/BoardStore';
import {addComment} from '@/utils/api/comment';
import {observer} from 'mobx-react';
import React, {useCallback, useState} from 'react';
import {FC} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const CreateComment: FC = () => {
  const [comment, setComment] = useState('');
  const commentAddBtn = () => {
    const commentData = {
      boardId: BoardStore.board.id,
      _content: comment,
    };
    addComment(commentData)
      .then(res => {
        console.log('AddComment', res.data);
        const comments = [res.data, ...BoardStore.comments];
        BoardStore.setComments(comments);
        setComment('');
      })
      .catch(err => console.log(err));
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        onChangeText={text => {
          setComment(text);
        }}
        placeholder="댓글을 입력하세요."
        value={comment}
      />
      <Pressable
        style={{
          position: 'absolute',
          right: 0,
          borderWidth: 1,
          borderRadius: 10,
          padding: 13,
        }}
        onPress={() => {
          commentAddBtn();
        }}>
        <Text style={{color: '#000000', fontWeight: '600'}}>입력</Text>
      </Pressable>
    </View>
  );
};

export default observer(CreateComment);
