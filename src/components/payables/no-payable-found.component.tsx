import React from 'react';
import { View, Text } from 'react-native';
import { DefaultColors } from '@assets/css/global';

export default function NoPayablesFoundComponent() {
    return (<View style={{ padding: 10 }}><Text style={{ fontSize: 16, color: DefaultColors.color2, alignSelf: 'center' }}>Nenhum item encontrado</Text></View>)
}