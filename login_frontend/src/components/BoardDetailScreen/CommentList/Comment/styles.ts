import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginBottom: 30,
    paddingRight: 10,
    paddingLeft: 10,
    height: 250,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },
  userImage: {
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'white',
    marginRight: 10,
  },
  titleContainer: {
    borderBottomWidth: 1,
    marginTop: 7,
  },
  contentContainer: {
    marginTop: 7,
    height: 80,
  },
  footerLine: {
    borderBottomWidth: 1,
    marginTop: 20,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  userIdText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
  },
  createdDateText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '500',
  },
  titleText: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '600',
  },
  contentText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  footerText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
});
