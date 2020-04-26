import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const SidebarItem = ({ item, navigate }: any) => {
    return (
        <TouchableOpacity style={ styles.listItem } onPress={ () => {navigate(item.name)} }>
            <Icon name={ item.icon } size={ 24 } style={styles.icon}/>
            <Text style={ styles.title }>{ item.name }</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    icon: {
      marginLeft: 10,  
    },
    listItem: {
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        fontSize: 18,
        marginLeft: 20
    },
});

export default SidebarItem;
