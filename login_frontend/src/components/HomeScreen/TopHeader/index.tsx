import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const TopHeader: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>어플</Text>
    </View>
  );
};

export default observer(TopHeader);
