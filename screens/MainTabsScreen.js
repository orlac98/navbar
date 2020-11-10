import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons'
import { View, Text, Button, } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';







const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Task Screen</Text>
        <Button
        title="Go to Profile screen"
        onPress={() => navigation.navigate("ProfileScreen")}
        />
      </View>
    );
  };
  
  const DetailScreen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
  