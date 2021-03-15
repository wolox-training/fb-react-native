import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

interface Props {
  placeholder: string | undefined;
}

function FormInput(placeholder: Props) {
  return <TextInput style={styles.input} {...placeholder} />;
}
export default FormInput;
