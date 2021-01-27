import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MovieScreen from '../screens/MovieScreen';
import MusicScreen from '../screens/MusicScreen';
import BookScreen from '../screens/BookScreen';
import SkillScreen from '../screens/SkillScreen';
import FinanceScreen from '../screens/FinanceScreen';

const MovieStack = createStackNavigator({
  Movie: MovieScreen,
});

MovieStack.navigationOptions = {
  tabBarLabel: '影视',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const MusicStack = createStackNavigator({
  Music: MusicScreen,
});

MusicStack.navigationOptions = {
  tabBarLabel: '音乐',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const BookStack = createStackNavigator({
  Book: BookScreen,
});

BookStack.navigationOptions = {
  tabBarLabel: '书籍',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'movie-creation'}
    />
  ),
};

const FinanceStack = createStackNavigator({
  Finance: FinanceScreen,
});

FinanceStack.navigationOptions = {
  tabBarLabel: '金融',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'dollar' : 'dollar'}
    />
  ),
};

const SkillStack = createStackNavigator({
  Skill: SkillScreen,
});

SkillStack.navigationOptions = {
  tabBarLabel: '技术',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  MovieStack,
  MusicStack,
  BookStack,
  FinanceStack,
  SkillStack,
});
