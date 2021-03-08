import { StyleSheet } from 'react-native';
import Colors from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.secondary
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 7
  },
  input: {
    flexGrow: 1,
    height: 17,
    marginHorizontal: 10,
    paddingVertical: 0
  },
  find: {
    flex: 1,
    justifyContent: 'center'
  },
  textFind: {
    textAlign: 'center'
  },
  searchIcon: {
    width: 17,
    height: 17,
    resizeMode: 'contain'
  },
  removeIcon: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    tintColor: Colors.grey
  },
  removeIconActive: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    tintColor: Colors.alert
  }
});

export default styles;
