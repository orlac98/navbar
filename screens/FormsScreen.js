import  React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const FormsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>forms Screen</Text>
        
      </View>
    );
};

export default FormsScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
     alignItems: 'center',
      justifyContent: 'center' 
    },
});

