import { StyleSheet } from 'react-native';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 5,
    paddingVertical: 15,
    paddingRight: 15,
    shadowColor: Colors.black,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    elevation: 1
  },
  dataBook: {
    flex: 0.75
  },
  image: {
    flex: 0.25,
    width: 39,
    height: 60,
    resizeMode: 'contain'
  },
  textTitle: Fonts.H2,
  textAuthor: Fonts.P1
});

export default styles;
