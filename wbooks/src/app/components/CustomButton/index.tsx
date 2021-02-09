import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

interface Props {
  label: string;
  type: string;
}

function CustomButton({ label, type }: Props) {
  return (
    <TouchableOpacity style={type === 'primary' ? styles.primaryContainer : styles.secondaryContainer}>
      <Text style={type === 'primary' ? styles.primaryText : styles.secondaryText}>{label}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
