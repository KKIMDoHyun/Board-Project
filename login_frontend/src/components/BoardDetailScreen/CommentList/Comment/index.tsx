import BoardStore from '@/stores/BoardStore';
import {BoardType, CommentType} from '@/stores/types/BoardStore.type';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {FC} from 'react';
import {Pressable, Text, View} from 'react-native';

type CommentProps = {
  comment: CommentType;
};
const Comment: FC<CommentProps> = ({comment}) => {
  const navigation = useNavigation<any>();
  return (
    <View
      style={{
        flex: 1,
        marginBottom: 15,
        borderWidth: 1,
        height: 100,
        paddingLeft: 5,
        paddingTop: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 100,
            width: 35,
            height: 35,
            marginRight: 10,
          }}
        />
        <View>
          <Text style={{color: '#000000'}}>{comment.created_at}</Text>
          <Text style={{color: '#000000', fontSize: 16}}>
            {comment.user.userId}
          </Text>
        </View>
      </View>
      <Text style={{color: '#000000', fontSize: 16, marginTop: 8}}>
        {comment.content}
      </Text>
    </View>
  );
};

export default observer(Comment);
