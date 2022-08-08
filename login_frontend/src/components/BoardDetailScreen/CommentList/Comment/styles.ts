import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
    borderWidth: 1,
    height: 100,
    paddingLeft: 5,
    paddingTop: 5,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderWidth: 1,
    borderRadius: 100,
    width: 35,
    height: 35,
    marginRight: 10,
  },
  blackText: {
    color: '#000000',
  },
  font16: {
    fontSize: 16,
  },
  contentText: {
    color: '#000000',
    fontSize: 16,
    marginTop: 8,
  },
});
