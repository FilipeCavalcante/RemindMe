import React from 'react';

import PageHeader from '@components/header/page.header';
import CreatePayableForm from '@components/payables/create-payable.form';
import { PayablesPageContainer } from '@pages/payables/payables.page.styled';
import { GeneralConst } from '@shared/general.constants';
import { Alert } from 'react-native';

export default function CreatePayablePage({ navigation, props }: any) {
    const returnToPayablePage = () => {
        navigation.navigate(GeneralConst.payablePage);
    };

    return (
        <PayablesPageContainer>
            <PageHeader pageTitle="Novo boleto" openDrawer={ navigation.openDrawer }/>
            <CreatePayableForm cancelForm={returnToPayablePage} />
        </PayablesPageContainer>
    );
}
