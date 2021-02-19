import { StyleSheet } from 'react-native';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: 'space-around',
    backgroundColor: Colors.white
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 23
  },
  image: {
    width: 70,
    height: 120,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  dataBook: {
    marginHorizontal: 30
  },
  textTitle: Fonts.H1,
  textAvailability: Fonts.H4,
  textBasic: Fonts.P1,
  buttonContainer: {
    marginVertical: 7
  }
});

export default styles;
