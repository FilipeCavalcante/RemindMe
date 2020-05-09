import React, { useState, useEffect } from 'react'
import PageHeader from '@components/header/page.header';
import EditPayableForm from '@components/payables/edit-payable.form';

import { retrievePayableBy } from '@services/payables.service';
import { ScrollView, Alert } from 'react-native';
import { IPayableDto, PayableDto } from '@models/payables.model';
import { GeneralConst } from '@shared/general.constants';


export default function EditPayablePage({ navigation }: any) {
    const [isLoading, setLoading] = useState(true);
    const [headerTitle, setPageHeaderTitle] = useState('Editar Boleto')
    const [item, setItem] = useState<IPayableDto>(new PayableDto());



    const loadItem = () => {
        const itemId = navigation.getParam("itemId");
        retrievePayableBy(itemId).then(response => {
            setPageHeaderTitle(`Editar boleto: ${response.title}`);
            setItem(response);
            setLoading(false);
        });
    }


    useEffect(() => {
        if (isLoading) {
            loadItem()
        }

    }, [isLoading])


    return (<>
        <PageHeader
            pageTitle={headerTitle}
            openDrawer={navigation.openDrawer}
        />
        <ScrollView>
            <EditPayableForm data={item} submitForm={() => { navigation.navigate(GeneralConst.payablePage) }} />
        </ScrollView>
    </>)
}