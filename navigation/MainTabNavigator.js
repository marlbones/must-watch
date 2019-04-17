import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import MovieScreen from '../screens/MovieScreen';
import AboutScreen from '../screens/AboutScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
    }
  },
  Movie: {
    screen: () => <MovieScreen displayAddButton />,
  }
});

HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: 'Search',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? 'ios-search'
            : 'md-search'
        }
      />
    ),
  }
};

const ListStack = createStackNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: {
      title: "Must-Watch List"
    }
  },
  Movie: {
    screen: MovieScreen,
  }
});

ListStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    title: "Must Watch",
    tabBarLabel: 'Watch List',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
      />
    ),
  }
};

const AboutStack = createStackNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: "About"
    }
  },
});

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ListStack,
  AboutStack,
});
