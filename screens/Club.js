import {View, StyleSheet, Pressable, Image, Text} from 'react-native';
import React from 'react';
import {Button, Header} from '@rneui/base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

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
      <View style={styles.cardContent}>
        <View style={styles.cardTopview}>
          <View style={styles.cardTopElement} />
        </View>
        <View style={styles.cardHead}>
          <Text style={styles.textHead}>Women's league</Text>
          <Text style={styles.subText}>
            Women's tennis is one of the most popular sports for women.The most
            popular sports for women.
          </Text>
        </View>
        <View style={styles.cardIcon}>
          <View style={styles.iconType}>
            <AntDesign name="clockcircleo" size={30} color="white" />
            <Text style={styles.iconText}>18:00- 20:00</Text>
          </View>
          <View style={styles.iconType}>
            <AntDesign name="clockcircleo" size={30} color="white" />
            <Text style={styles.iconText}>18:00- 20:00</Text>
          </View>
          <View style={styles.iconType}>
            <AntDesign name="clockcircleo" size={30} color="white" />
            <Text style={styles.iconText}>18:00- 20:00</Text>
          </View>
        </View>
        <Button
          title="Participate $30"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          containerStyle={styles.containerStyle}
        />
      </View>
    </View>
  );
}
const MyCustomLeftComponent = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.goBack('Home')}
      style={styles.menuButton}>
      <AntDesign name="left" size={24} color="black" />
    </Pressable>
  );
};

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
    height: '46%',
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
    height: '54%',
    borderRadius: 30,
  },
  cardTopElement: {
    height: 6,
    backgroundColor: '#484546',
    width: '20%',
    borderRadius: 10,
  },
  cardTopview: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
  cardHead: {
    padding: 4,
    margin: 15,
  },
  textHead: {
    color: 'white',
    fontSize: 34,
    fontWeight: '600',
  },
  subText: {
    color: '#6F6E6F',
    fontSize: 18,
    maxWidth: '90%',
    paddingTop: 10,
  },
  iconType: {
    width: 110,
    height: 100,
    borderColor: '#6F6E6F',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 8,
  },
  cardIcon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 8,
  },
  buttonStyle: {
    backgroundColor: '#036940',
    borderRadius: 12,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    height: 50,
  },
});
