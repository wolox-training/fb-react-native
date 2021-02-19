import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

interface Props {
  label: string;
  secondary?: boolean;
}

function CustomButton({ label, secondary }: Props) {
  return (
    <TouchableOpacity style={[styles.primaryContainer, secondary && styles.secondaryContainer]}>
      <Text style={[styles.primaryText, secondary && styles.secondaryText]}>{label}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
