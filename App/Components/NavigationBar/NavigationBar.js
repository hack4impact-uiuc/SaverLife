import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NavigationService from '../../Services/NavigationService';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {navigationBar} from './NavigationBarStyle';

function NavigationBar() {
    return( <View style={navigationBar.navigationBarContainer}>
      <TouchableOpacity style={navigationBar.navigationBarItem} onPress={() => NavigationService.navigate('Savings', [])}>
        <Text style={{fontSize: 26}}>1</Text>
        <Text style={{fontSize: 13}}>Savings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={navigationBar.navigationBarItem} onPress={() => NavigationService.navigate('MainScreen', [])}>
        <Text style={{fontSize: 26}}>2</Text>
        <Text style={{fontSize: 13}}>Articles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={navigationBar.navigationBarItem} onPress={() => NavigationService.navigate('3')}>
        <Text style={{fontSize: 26}}>3</Text>
        <Text style={{fontSize: 13}}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={navigationBar.navigationBarItem} onPress={() => NavigationService.navigate('4')}>
        <Text style={{fontSize: 26}}>4</Text>
        <Text style={{fontSize: 13}}>Settings</Text>
      </TouchableOpacity>
    </View>
    );
}

export default NavigationBar;