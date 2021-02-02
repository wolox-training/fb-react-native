import { StyleSheet } from 'react-native';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 12,
    minHeight: 90
  },
  infoContainer: {
    flex: 0.75,
    paddingVertical: 15
  },
  imageContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: Fonts.H2,
  textAuthor: Fonts.P1
});

export default styles;
