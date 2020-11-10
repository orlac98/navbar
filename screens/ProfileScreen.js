import  React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button
        title="Go to Tasks screen"
        onPress={() => navigation.navigate("TasksScreen")}
        />
      </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
     alignItems: 'center',
      justifyContent: 'center' 
    },
});

