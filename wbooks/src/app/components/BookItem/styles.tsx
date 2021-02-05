import { StyleSheet } from 'react-native';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 5,
    minHeight: 90,
    paddingVertical: 15
  },
  dataBook: {
    flex: 0.75,
    paddingRight: 10
  },
  image: {
    flex: 0.25,
    resizeMode: 'contain'
  },
  textTitle: Fonts.H2,
  textAuthor: Fonts.P1
});

export default styles;
