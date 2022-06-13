import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  signUpAndAutoLoginBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: '#7a7974',
    fontSize: 15,
    fontWeight: '500',
  },
  autoLoginBtnText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 15,
    textDecorationLine: 'none',
  },
  loginBtn: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'salmon',
    height: 50,
  },
  loginBtnText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 20,
  },
});
