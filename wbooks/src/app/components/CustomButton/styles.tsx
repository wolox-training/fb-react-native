import { StyleSheet } from 'react-native';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';

const styles = StyleSheet.create({
  primaryContainer: {
    height: 44,
    backgroundColor: Colors.primary,
    borderRadius: 100
  },
  primaryText: {
    ...Fonts.PrimaryButton,
    paddingVertical: 10,
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
  secondaryContainer: {
    height: 44,
    backgroundColor: Colors.white,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.primary
  },
  secondaryText: {
    ...Fonts.SecondaryButton,
    paddingVertical: 10,
    alignSelf: 'center',
    textTransform: 'uppercase'
  }
});

export default styles;
