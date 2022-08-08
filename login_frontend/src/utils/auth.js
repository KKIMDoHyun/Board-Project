import AsyncStorage from '@react-native-community/async-storage';

AsyncStorage.setItem(
  'userData',
  JSON.stringify({token: token, userId: userId}),
);

const userData = await AsyncStorage.getItem('userData');
