import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button, Header} from '@rneui/base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.root}>
      <Header
        backgroundColor="transparent"
        leftComponent={<MyCustomLeftComponent />}
        rightComponent={<MyCustomRightComponent />}
      />
      <View>
        <View>
          <Text style={styles.heading}>Clubs</Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="start"
          // snapToInterval={SCREEN_WIDTH / 1.4}
          horizontal={true}
          style={styles.scrollView}>
          <Pressable style={[styles.card, styles.ml10]}>
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.cardText}>Women's Club</Text>
                <Button
                  title="All levels"
                  buttonStyle={styles.buttonStyle}
                  titleStyle={styles.titleStyle}
                  containerStyle={styles.containerStyle}
                />
              </View>
              <Text style={styles.bottomText}>2 events</Text>
            </View>
            <Image
              resizeMode="contain"
              source={require('./assets/images/tennisfemale.png')}
              style={styles.cardImage}
            />
          </Pressable>

          <Pressable style={[styles.card]}>
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.cardText}>Men's Club</Text>
                <Button
                  title="All levels"
                  buttonStyle={styles.buttonStyle}
                  titleStyle={styles.titleStyle}
                  containerStyle={styles.containerStyle}
                />
              </View>
              <Text style={styles.bottomText}>2 events</Text>
            </View>
            <Image
              resizeMode="contain"
              source={require('./assets/images/ronaldo.png')}
              style={styles.cardImage}
            />
          </Pressable>
          <Pressable style={[styles.card, styles.marginRight30]}>
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.cardText}>Men's Club</Text>
                <Button
                  title="All levels"
                  buttonStyle={styles.buttonStyle}
                  titleStyle={styles.titleStyle}
                  containerStyle={styles.containerStyle}
                />
              </View>
              <Text style={styles.bottomText}>2 events</Text>
            </View>
            <Image
              resizeMode="contain"
              source={require('./assets/images/ronaldo.png')}
              style={styles.cardImage}
            />
          </Pressable>
        </ScrollView>
        <View style={styles.downDiv}>
          <Text style={styles.subHead}>Train</Text>
          <Text style={styles.subText}>Alles</Text>
        </View>
      </View>
    </View>
  );
}

const MyCustomLeftComponent = () => (
  <Pressable style={styles.menuButton}>
    <FontAwesome5 name="bars" size={20} color="white" style={styles.bar} />
  </Pressable>
);
const MyCustomRightComponent = () => (
  <Pressable style={styles.searchButton}>
    <Ionicons name="ios-search-sharp" size={24} color="black" />
  </Pressable>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuButton: {
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: 'transparent',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#F3F0EC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    paddingLeft: 10,
    fontSize: 40,
    paddingTop: 3,
    fontWeight: '700',
    color: 'black',
  },
  card: {
    overflow: 'hidden',
    width: SCREEN_WIDTH / 1.4,
    height: 350,
    backgroundColor: '#F3F0EC',
    borderRadius: 30,
    position: 'relative',
    marginHorizontal: 7.5,
    marginTop: 25,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    elevation: 3,
    marginVertical: 5,
  },
  cardText: {
    fontSize: 30,
    color: 'black',
    fontWeight: '600',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingTop: 20,
    width: '60%',
  },
  buttonStyle: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: '35%',
  },
  titleStyle: {
    color: 'black',
  },
  containerStyle: {
    paddingLeft: 30,
    paddingTop: 10,
  },
  cardImage: {
    width: '75%',
    height: 300,
    position: 'absolute',
    left: 100,
    bottom: 0,
    transform: [{rotateY: '180deg'}],
  },
  bottomText: {
    color: 'black',
    paddingLeft: 30,
    fontSize: 18,
    paddingBottom: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  marginRight30: {marginRight: 30},
  downDiv: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginVertical: 20,
  },
  subHead: {
    paddingLeft: 15,
    fontSize: 28,
    fontWeight: '700',
    color: 'black',
  },
  subText: {
    paddingRight: 15,
    fontSize: 19,
    fontWeight: '700',
    color: 'green',
  },
  scrollView: {
    paddingLeft: 15,
  },
});
