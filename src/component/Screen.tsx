import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ScreenProps = {
  children: JSX.Element;
};
export default function Screen({children}: ScreenProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
