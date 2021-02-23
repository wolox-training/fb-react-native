import { StyleSheet } from 'react-native';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    backgroundColor: Colors.white,
    marginTop: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    elevation: 1
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
  dataBook: { marginLeft: 20, marginEnd: 60 },
  textTitle: Fonts.H1,
  textAvailability: Fonts.H4,
  textBasic: Fonts.P1,
  buttonContainer: {
    marginVertical: 7
  }
});

export default styles;
