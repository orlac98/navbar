import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/ionicons';

import ProfileScreen from './screens/ProfileScreen';
import TasksScreen from './screens/TasksScreen';


const TasksStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
        <Icon.Button name="ios-menu" size={25}
        backgroundColor="#009387" onPress={() => navigation.openDrawer
        ()}></Icon.Button>
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
           <Icon.Button name="ios-menu" size={25}
           backgroundColor="#009387" onPress={() => navigation.openDrawer
           ()}></Icon.Button>
         )
  
          }} />
          
        </ProfileStack.Navigator>
  );
  

const App =() =>{
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tasks">
        <Drawer.Screen name="Tasks" component={TasksStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      </Drawer.Navigator>
      {/*  */}
    </NavigationContainer>
  );
}

export default App;