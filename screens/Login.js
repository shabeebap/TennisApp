import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.root}>
      <View style={styles.logoDiv}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#F3F8FD',
    height: '100%',
  },
  logoDiv: {
    backgroundColor: '#3D4785',
    width: 100,
    height: 100,
  },
});
