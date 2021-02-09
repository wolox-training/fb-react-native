import { TextStyle } from 'react-native';

import Colors from './colors';

const Fonts: Record<string, TextStyle> = {
  H1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text
  },
  H2: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.grey
  },
  H3: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.white
  },
  H4: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.text
  },
  P1: {
    fontSize: 15,
    fontWeight: '100',
    color: Colors.grey
  },
  P2: {
    fontSize: 12,
    fontWeight: 'normal',
    color: Colors.text
  },
  P3: {
    fontSize: 10,
    fontWeight: 'normal',
    color: Colors.inactive
  },
  P4: {
    fontSize: 15,
    fontWeight: '100',
    color: Colors.text
  },
  P5: {
    fontSize: 10,
    fontStyle: 'italic',
    color: Colors.inactive
  },
  PrimaryButton: {
    fontSize: 15,
    fontStyle: 'normal',
    color: Colors.white
  },
  SecondaryButton: {
    fontSize: 15,
    fontStyle: 'normal',
    color: Colors.primary
  }
};

export default Fonts;
