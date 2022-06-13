import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  signUpContainer: {
    backgroundColor: '#FFFFFF',
    width: 430,
    height: 700,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    width: 90,
    alignItems: 'center',
    marginRight: 10,
  },
  titleText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  ml20: {
    marginLeft: 20,
  },
  idTextInput: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  emailTextInput: {
    width: '60%',
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  userNameTextInput: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  phoneNumberTextInput: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  passwordTextInput: {
    width: '60%',
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});
