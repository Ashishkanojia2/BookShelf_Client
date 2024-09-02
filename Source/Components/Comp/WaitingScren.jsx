import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {global} from '../GlobalComponent/GlobalStyle';

const WaitingScren = () => {
  return (
    <View>
      <Text style={{fontSize: 50}}>WaitingScreen</Text>
      <Text style={{fontSize: 30}}>
        it's take a couple of minutes for loading the application so please
        wait..
      </Text>
      <ActivityIndicator
        size={'small'}
        color={global.bgColor}></ActivityIndicator>
    </View>
  );
};

export default WaitingScren;

const styles = StyleSheet.create({});
