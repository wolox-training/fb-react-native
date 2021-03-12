import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

function SearchInput(onChange: any) {
  return <TextInput style={styles.input} onChange={onChange} />;
}

export default SearchInput;
