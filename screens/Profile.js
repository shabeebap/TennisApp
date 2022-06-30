import {View, Dimensions, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Image, Text} from '@rneui/base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Profile() {
  return (
    <View style={styles.root}>
      <View style={styles.profileDiv}>
        <View style={styles.iconDiv}>
          <Pressable style={styles.menuButton}>
            <FontAwesome5
              name="bars"
              size={20}
              color="#3E4685"
              style={styles.bar}
            />
          </Pressable>
          <Pressable style={styles.menuButton}>
            <Entypo name="dots-two-vertical" size={24} color="#3E4685" />
          </Pressable>
        </View>
        <View style={styles.logoDiv}>
          <Image
            resizeMode="contain"
            source={require('../assets/images/punisher.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.lTextDiv}>
          <Text style={styles.logoText}>The Punisher</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#F3F8FD',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  profileDiv: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: '50%',
    marginTop: 30,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  logoDiv: {
    backgroundColor: '#3D4785',
    width: 130,
    height: 130,
    borderRadius: 70,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 90,
    marginVertical: 10,
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  iconDiv: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lTextDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 30,
    color: '#3D4785',
    fontWeight: '900',
  },
});
