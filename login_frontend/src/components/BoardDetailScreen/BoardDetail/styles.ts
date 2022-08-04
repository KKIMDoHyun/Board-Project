import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '100%',
    height: 400,
    marginTop: 100,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingLeft: 30,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'white',
    marginRight: 10,
  },
  titleContainer: {
    paddingLeft: 20,
    marginTop: 7,
    marginBottom: 10,
  },
  titleUnderLine: {
    borderWidth: 1,
    marginHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 7,
  },
  footerLine: {
    borderBottomWidth: 1,
    marginTop: 20,
  },
  footerContainer: {
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  userIdText: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '500',
  },
  createdDateText: {
    color: 'gray',
    fontSize: 16,
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
    fontSize: 15,
    fontWeight: '500',
  },
});
