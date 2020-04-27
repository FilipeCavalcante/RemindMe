import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import SidebarItem from '@components/sidebar/siderbar-item.component';
import { DefaultRoutes } from '@routes/routes';

const Sidebar = ({ navigation }: any) => {
   
    const [ routes, setRoutes ] = useState(DefaultRoutes);
    return (
        <FlatList data={ routes }
                  renderItem={ ({ item }) =>
                      <SidebarItem item={ item } navigate={ navigation.navigate }/>
                  }
                  keyExtractor={ item => item.name }/>
    );
};

export default Sidebar;