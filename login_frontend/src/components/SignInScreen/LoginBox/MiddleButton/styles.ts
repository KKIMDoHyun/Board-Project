import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'red',
  },
  signUpAndAutoLoginBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errMessage: {
    color: 'blue',
    marginBottom: 5,
  },
  signUpText: {
    color: '#7a7974',
    fontSize: 15,
    fontWeight: '500',
  },
  checkboxIcon: {
    borderColor: 'salmon',
  },
  autoLoginBtnText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 15,
    textDecorationLine: 'none',
  },
});
