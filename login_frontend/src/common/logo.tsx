import LoginButton from '@/components/SignInScreen/LoginButton';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const Logo: FC = () => {
  return (
    <View style={styles.logo}>
      <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
        로고
      </Text>
    </View>
  );
};

export default observer(Logo);
