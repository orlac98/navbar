import  React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button
        title="Click Here"
        onPress={() => alert("Button Clicked")}
        />
      </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
     alignItems: 'center',
      justifyContent: 'center' 
    },
});

