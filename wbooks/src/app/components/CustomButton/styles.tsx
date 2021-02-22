import { StyleSheet } from 'react-native';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';

const styles = StyleSheet.create({
  primaryContainer: {
    backgroundColor: Colors.primary,
    height: 44,
    borderRadius: 100
  },
  primaryText: {
    ...Fonts.PrimaryButton,
    paddingVertical: 10,
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
  secondaryContainer: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary
  },
  secondaryText: {
    ...Fonts.SecondaryButton
  }
});

export default styles;
