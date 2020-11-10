import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabsScreen from './screens/MainTabsScreen';
// import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();


  

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tasks">
        <Drawer.Screen name="Tasks" component={MainTabsScreen} />
        {/* <Drawer.Screen name="Profile" component={ProfileStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;