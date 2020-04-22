import React from 'react';

import PageHeader from '@components/header/page.header';
import CreatePayableForm from '@components/payables/create-payable.form';
import { PayablesPageContainer } from '@pages/payables/payables.page.styled';
import { GeneralConst } from '@shared/general.constants'

export default function CreatePayablePage({ navigation, props }: any) {

    const returnToPayablePage = (msg: string) => {
        navigation.navigate(GeneralConst.payablePage);
    }

    return (
        <PayablesPageContainer>
            <PageHeader pageTitle="Novo boleto" returnFn={() => navigation.navigate(GeneralConst.payablePage)} />
            <CreatePayableForm cancelForm={returnToPayablePage} />
        </PayablesPageContainer>
    )
}