import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import {Header} from '@rneui/base';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Club() {
  return (
    <View style={styles.root}>
      <Header
        backgroundColor="transparent"
        leftComponent={<MyCustomLeftComponent />}
      />
      <View style={styles.imgContainer}>
        <Image
          resizeMode="contain"
          source={require('../assets/images/tennisfemale.png')}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.cardContent}></View>
    </View>
  );
}
const MyCustomLeftComponent = () => (
  <Pressable style={styles.menuButton}>
    <AntDesign name="left" size={24} color="black" />
  </Pressable>
);
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#EDEEF3',
  },
  menuButton: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    backgroundColor: '#EDEEF3',
    width: '100%',
    height: '52%',
  },
  cardImage: {
    width: '75%',
    height: 400,
    left: 60,
    top: 20,
    transform: [{rotateY: '180deg'}],
  },
  cardContent: {
    backgroundColor: '#181415',
    height: '48%',
    borderRadius: 30,
  },
});
