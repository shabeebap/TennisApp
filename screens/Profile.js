import {View, Dimensions, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Image, Text} from '@rneui/base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
          <Text style={styles.logoSubText}>UI/UX Designer</Text>
        </View>
      </View>
      <View style={styles.overview}>
        <View style={styles.overviewHead}>
          <View style={styles.bellIcon}>
            <Text style={styles.overviewText}>Overview</Text>
            <FontAwesome name="bell-o" size={24} color="#3D4785" />
          </View>
          <View>
            <Text>Sep 13,2022</Text>
          </View>
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
    elevation: 18,
    shadowColor: 'gray',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 30,
    color: '#3D4785',
    fontWeight: '900',
  },
  logoSubText: {
    fontSize: 16,
    fontWeight: '600',
  },
  overview: {
    margin: 14,
    width: '90%',
    height: '50%',
  },
  overviewHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 4,
  },
  bellIcon: {
    flexDirection: 'row',
    marginLeft: 6,
  },
  overviewText: {
    fontSize: 30,
    color: '#3D4785',
    fontWeight: '900',
  },
});
