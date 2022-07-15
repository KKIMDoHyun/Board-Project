import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'salmon',
    height: 50,
    borderRadius: 5,
  },
  loginBtnText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 20,
  },
  line: {
    marginTop: 25,
    width: '80%',
    borderWidth: 0.5,
    borderColor: 'gray',
    alignSelf: 'center',
  },
  subContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '300',
  },
  mh6: {
    marginHorizontal: 6,
  },
});
