import UserStore from '@/stores/UserStore';
import {observer} from 'mobx-react';
import React from 'react';
import {FC} from 'react';
import {styles} from './styles';
import {Dropdown} from 'react-native-element-dropdown';
const EmailBack: FC = () => {
  const data = [
    {label: 'naver.com', value: 'naver.com'},
    {label: 'gmail.com', value: 'gmail.com'},
  ];
  return (
    <Dropdown
      data={data}
      style={styles.dropdownStyle}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      placeholder="이메일을 선택하세요"
      labelField="label"
      valueField="value"
      onChange={item => {
        UserStore.setEmailBack(item.value);
        UserStore.setEmailBackCheck(true);
      }}
    />
  );
};

export default observer(EmailBack);
