import  React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const SigninScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>files Screen</Text>
        
      </View>
    );
};

export default SigninScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
     alignItems: 'center',
      justifyContent: 'center' 
    },
});

