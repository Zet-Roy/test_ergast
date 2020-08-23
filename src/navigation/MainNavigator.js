import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ListDrivers, Biography, RaceResult} from '../screens';

const MainStack = createStackNavigator();

const defaultOptions = {
  headerTransparent: true,
  title: '',
  headerLeft: null,
  headerBackTitle: ' ',
};

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={defaultOptions}
      mode="modal"
      initialRouteName="ListDrivers">
      <MainStack.Screen name="ListDrivers" component={ListDrivers} />
      <MainStack.Screen name="Biography" component={Biography} />
      <MainStack.Screen name="RaceResult" component={RaceResult} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
