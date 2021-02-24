import { StyleSheet } from 'react-native';
import Colors from '@constants/colors';

// TODO: Move this constants inside AppNavigator folder in the TabBar PR

const styles = StyleSheet.create({
  header: { resizeMode: 'stretch', width: '100%', backgroundColor: Colors.secondary },
  back: { marginLeft: 5 }
});

export default styles;
