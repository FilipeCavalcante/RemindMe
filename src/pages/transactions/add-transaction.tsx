import React from 'react';
import { View, Text, Button } from 'react-native';

const AddTransaction = ({ navigation }) => {
    return (
        <View>
            <Text>Add new Transaction page</Text>
            <Button title="Main page" onPress={() => { navigation.navigate("Home") }} />
        </View>
    )
}

export default AddTransaction;