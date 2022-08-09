import BoardStore from '@/stores/BoardStore';
import {BoardType} from '@/stores/types/BoardStore.type';
import UserStore from '@/stores/UserStore';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React from 'react';
import {FC} from 'react';
import {
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from './styles';

const DeleteBoardModal: FC = () => {
  return (
    // <View
    //   style={{
    //     width: '100%',
    //     height: '100%',
    //     position: 'absolute',
    //     backgroundColor: 'rgba( 255, 255, 255, 0.5 )',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   }}>
    //   <Modal transparent>
    //     <View
    //       style={{
    //         width: 300,
    //         height: 300,
    //         backgroundColor: '#FFFFFF',
    //         borderWidth: 2,
    //       }}>
    //       <Text>dd</Text>
    //       {/* <Modal transparent>
    //       <View></View>
    //     </Modal> */}
    //     </View>
    //   </Modal>
    // </View>
    <Modal
      transparent
      onRequestClose={() => {
        BoardStore.setDeleteBoardModalVisible(false);
      }}>
      <Pressable
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
        onPress={() => {
          BoardStore.setDeleteBoardModalVisible(false);
        }}>
        <TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 16,
              paddingTop: 19,
              paddingHorizontal: 17,
              paddingBottom: 32,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: '#7D7D7D',
              width: 300,
              height: 200,
            }}>
            <View
              style={{
                height: '70%',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                정말 삭제하시겠습니까?
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                justifyContent: 'space-between',
              }}>
              <Pressable
                style={{
                  borderWidth: 1,
                  padding: 10,
                  width: 80,
                  alignItems: 'center',
                }}
                onPress={() => {
                  BoardStore.setDeleteBoardModalVisible(false);
                }}>
                <Text>취소</Text>
              </Pressable>
              <Pressable
                style={{
                  borderWidth: 1,
                  padding: 10,
                  width: 80,
                  alignItems: 'center',
                }}
                onPress={() => {
                  BoardStore.deleteBoard(BoardStore.boardId);
                  BoardStore.setDeleteBoardModalVisible(false);
                }}>
                <Text>확인</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Pressable>
    </Modal>
  );
};

export default observer(DeleteBoardModal);
