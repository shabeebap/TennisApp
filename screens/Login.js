import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import React from 'react';
import {Button, Icon, Image} from '@rneui/base';
import {Input} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.logoDiv}>
        <Image
          resizeMode="contain"
          source={require('../assets/images/punisher.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.userInput}>
        <View style={styles.inputUser}>
          <Text style={styles.emailText}>Email Address</Text>
          <Input
            inputContainerStyle={{borderBottomWidth: 0}}
            style={styles.inputfField}
            placeholder=""
            leftIcon={
              <Icon
                name="mail"
                size={20}
                color="gray"
                style={styles.iconText}
              />
            }
          />
        </View>
        <View style={styles.inputUser}>
          <Text style={styles.emailText}>Password</Text>
          <Input
            placeholder=""
            secureTextEntry={true}
            inputContainerStyle={{borderBottomWidth: 0}}
            leftIcon={
              <Icon
                name="lock"
                size={20}
                color="gray"
                style={styles.iconText}
              />
            }
          />
        </View>
      </View>
      <Button
        title="Login"
        onPress={() => {
          console.log('first');
          navigation.navigate('Profile');
        }}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        containerStyle={styles.containerStyle}
      />

      <View style={styles.forgotPswd}>
        <Text style={styles.signup}>Signup</Text>
        <Text style={styles.signup}>Forgot Password?</Text>
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
  logoDiv: {
    backgroundColor: '#3D4785',
    width: 130,
    height: 130,
    borderRadius: 70,
    marginTop: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  emailText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 16,
    marginLeft: 16,
  },
  inputUser: {
    width: SCREEN_WIDTH - 60,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 8,
    shadowRadius: 2,
    elevation: 8,
    marginTop: 24,
  },
  userInput: {
    marginTop: 40,
  },
  inputfField: {
    borderBottomWidth: 0,
  },
  iconText: {
    marginLeft: 4,
  },
  buttonStyle: {
    backgroundColor: '#3E4685',
    borderRadius: 26,
    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
    height: 50,
  },
  loginDiv: {
    width: '100%',
  },
  signup: {
    fontSize: 14,
    fontWeight: '500',
  },
  forgotPswd: {
    width: '80%',
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerStyle: {
    width: '100%',
    paddingHorizontal: 30,
  },
});
