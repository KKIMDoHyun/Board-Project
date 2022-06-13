import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const FooterButton: FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>카카오</Text>
      </View>
    </View>
  );
};

export default observer(FooterButton);
