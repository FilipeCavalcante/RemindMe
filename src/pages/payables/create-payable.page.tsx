import React from 'react';

import PageHeader from '@components/header/page.header';
import CreatePayableForm from '@components/payables/create-payable.form';
import { PayablesPageContainer } from '@pages/payables/payables.page.styled';
import { GeneralConst } from '@shared/general.constants';
import { ScrollView } from 'react-native';

export default function CreatePayablePage({ navigation }: any) {
    const returnToPayablePage = (result: boolean) => {
        navigation.navigate(GeneralConst.payablePage, { toRefreshPage: true });
    };

    return (
        <PayablesPageContainer>
            <PageHeader
                pageTitle='Novo boleto'
                openDrawer={navigation.openDrawer}
            />
            <ScrollView>
                <CreatePayableForm submitForm={returnToPayablePage} />
            </ScrollView>
        </PayablesPageContainer>
    );
}
