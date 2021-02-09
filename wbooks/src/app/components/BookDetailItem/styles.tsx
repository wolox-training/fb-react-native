import { StyleSheet } from 'react-native';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    minHeight: 270,
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: 'space-around',
    backgroundColor: Colors.white
  },
  detailContainer: {
    flexDirection: 'row'
  },
  image: {
    flex: 0.35,
    height: 110,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  dataBook: {
    flex: 0.65,
    paddingRight: 10
  },
  textTitle: Fonts.H1,
  textAvailability: Fonts.H4,
  textAuthor: Fonts.P1,
  textYear: Fonts.P1,
  textGenre: Fonts.P1,
  buttonContainer: {
    height: 98,
    marginVertical: 7,
    justifyContent: 'space-between'
  }
});

export default styles;
