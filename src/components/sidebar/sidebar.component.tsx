import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import SidebarItem from '@components/sidebar/siderbar-item.component';


const Sidebar = ({ navigation }: any) => {
    const _routes = [
        { name: 'Main', icon: 'home' },
        { name: 'Payables', icon: 'cash-multiple' }
    ];
    const [ routes, setRoutes ] = useState(_routes);
    return (
        <FlatList data={ routes }
                  renderItem={ ({ item }) =>
                      <SidebarItem item={ item } navigate={ navigation.navigate }/>
                  }
                  keyExtractor={ item => item.name }/>
    );
};

export default Sidebar;