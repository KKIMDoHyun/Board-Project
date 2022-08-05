import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderWidth: 1,
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
  },
  subContainer: {
    marginLeft: 15,
  },
  statusContainer: {
    flexDirection: 'row',
    width: 140,
    justifyContent: 'space-between',
    marginTop: 5,
  },
  userIdText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
  },
  selectedText: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '400',
    padding: 5,
    borderWidth: 1,
    backgroundColor: 'salmon',
  },
  unSelectedText: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '400',
    padding: 5,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
});
