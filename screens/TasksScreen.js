import  React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';




const TasksScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Task Screen</Text>
        <Button
        title="Go to Profile screen"
        onPress={() => navigation.navigate("ProfileScreen")}
        />
      </View>
    );
  };

  export default TasksScreen;

  const styles = StyleSheet.create({
    container: {
    flex: 1,
     alignItems: 'center',
      justifyContent: 'center' 
    },
});

