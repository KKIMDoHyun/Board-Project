import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const FooterButton: FC = () => {
  return <View style={styles.container}></View>;
};

export default observer(FooterButton);
