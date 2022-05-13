import {View, Text} from 'react-native';
import React from 'react';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';

export default function App() {
  return <AuthStack />;
}
