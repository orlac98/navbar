import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ProfileScreen from './ProfileScreen';
import TasksScreen from './TasksScreen';
import FilesScreen from './FilesScreen';
import FormsScreen from './FormsScreen';



const TasksStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabsScreen = () => (
<Tab.Navigator
      initialRouteName="Tasks"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Tasks"
        component={TasksStackScreen}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Files"
        component={FilesScreen}
        options={{
          tabBarLabel: 'Files',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Forms"
        component={FormsScreen}
        options={{
          tabBarLabel: 'Forms',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>


);

export default MainTabsScreen;

const TasksStackScreen = ({navigation}) => (
    <TasksStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
              },
              headerTintColor: '#fff',
              headerTintStyle: {
                fontWeight: 'bold'
              }
              }}>
            <TasksStack.Screen name="TasksScreen" component={TasksScreen} 
            options={{
           title: 'Overview',
           headerLeft: () => (
            <Ionicons.Button name="ios-menu" size={25}
            backgroundColor="#009387" onPress={() => navigation.openDrawer
            ()}></Ionicons.Button>
           )
            }} />
            
          </TasksStack.Navigator>
    );
    
    const ProfileStackScreen = ({navigation}) => (
      <ProfileStack.Navigator screenOptions={{
              headerStyle: {
                  backgroundColor: '#009387',
                },
                headerTintColor: '#fff',
                headerTintStyle: {
                  fontWeight: 'bold'
                }
                }}>
    
              <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen}
               options={{
             headerLeft: () => (
               <Ionicons.Button name="ios-menu" size={25}
               backgroundColor="#009387" onPress={() => navigation.openDrawer
               ()}></Ionicons.Button>
             )
      
              }} />
              
            </ProfileStack.Navigator>
      );