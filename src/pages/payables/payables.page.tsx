import React, { useState, useEffect } from 'react';
import PageHeader from '@components/header/page.header';

import { retrievePayables } from '@services/payables.service';
import { PayablesPageContainer, PayablesList, PayableItem, PayableItemInfo, PayableItemValueText, PayableItemDateText, PayableItemTitleText } from '@pages/payables/payables.page.styled';
import { ActivityIndicator } from 'react-native';
import { parseToCurrency } from '@shared/number.utils'
import { ButtonRounded } from '@components/buttons/generic-buttons';
import { GeneralConst } from '@shared/general.constants';

export default function PayablesPage({ navigation }: any) {
    const [payablesList, setPayables] = useState([]);
    const [isLoading, setLoading] = useState(false);

    async function _fetch() {
        let result = await retrievePayables();
        setPayables(result);
        setLoading(false);
    }

    useEffect(() => {
        if (payablesList && payablesList.length === 0) {
            setLoading(true);
            _fetch()
        }
    }, [payablesList]);

    return (
        <>
            <PayablesPageContainer>
                <PageHeader pageTitle="Todos os boletos" returnFn={() => navigation.navigate(GeneralConst.homePage)} />

                {isLoading && <ActivityIndicator />}
                <PayablesList>
                    {
                        payablesList && payablesList.map((item, index) =>
                            <PayableItem key={index}>
                                <PayableItemInfo flexValue={1}>
                                    <PayableItemTitleText>{item["title"]}</PayableItemTitleText>
                                    <PayableItemDateText>vencimento: {new Date(item["dueDate"]).toLocaleDateString()}</PayableItemDateText>
                                </PayableItemInfo>
                                <PayableItemInfo flexValue={1}>
                                    <PayableItemValueText>{parseToCurrency(item["value"], 2)}</PayableItemValueText>
                                </PayableItemInfo>
                            </PayableItem>)
                    }
                </PayablesList>
            </PayablesPageContainer>
            <ButtonRounded icon="add" onClickFn={() => navigation.navigate(GeneralConst.createPayablePage)}></ButtonRounded>
        </>
    )
}
