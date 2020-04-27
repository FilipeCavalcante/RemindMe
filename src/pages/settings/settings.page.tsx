import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { clearStorage } from '@gateways/gateway';
import PageHeader from '@components/header/page.header';

export default function SettingsPage({ navigation }: any) {

    return (
        <>
            <PageHeader pageTitle="Settings" openDrawer={ navigation.openDrawer }/>
            <TouchableOpacity onPress={ () => clearStorage() }>
                <Text>Limpar dados</Text>
            </TouchableOpacity>
        </>
    )
}