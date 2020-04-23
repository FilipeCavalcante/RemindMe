import React, { useState, useEffect } from 'react';
import PageHeader from '@components/header/page.header';
import moment from 'moment';

import { retrievePayables } from '@services/payables.service';
import {
    PayablesPageContainer,
    PayablesList,
    PayableItem,
    PayableItemInfo,
    PayableItemValueText,
    PayableItemDateText,
    PayableItemTitleText,
} from '@pages/payables/payables.page.styled';
import { parseToCurrency } from '@shared/number.utils';
import { ButtonRounded } from '@components/buttons/generic-buttons';
import { GeneralConst } from '@shared/general.constants';
import { LoadingIndicator } from '@components/controls/indicators.component';
import { IPayableDto } from '@models/payables.model';

export default function PayablesPage({ navigation }: any) {
    const [payablesList, setPayables] = useState<IPayableDto[]>([]);
    const [isLoading, setLoading] = useState(true);

    async function _fetch() {
        let result = await retrievePayables();
        setPayables(result);
        setLoading(false);
        console.debug(result);
    }

    useEffect(() => {
        if (payablesList && payablesList.length === 0) {
            _fetch();
        }
    }, [payablesList]);

    return (
        <>
            <LoadingIndicator isVisible={isLoading} size={60} />
            <PayablesPageContainer>
                <PageHeader
                    pageTitle="Todos os boletos"
                    returnFn={() => navigation.navigate(GeneralConst.homePage)}
                />
                <PayablesList>
                    {payablesList &&
                        payablesList.length > 0 &&
                        payablesList.map((item, index) => (
                            <PayableItem key={index}>
                                <PayableItemInfo flexValue={1}>
                                    <PayableItemTitleText>
                                        {item.title}
                                    </PayableItemTitleText>
                                    <PayableItemDateText>
                                        vencimento:{' '}
                                        {moment(item.dueDate).format(
                                            'DD/MM/YYYY',
                                        )}
                                    </PayableItemDateText>
                                </PayableItemInfo>
                                <PayableItemInfo flexValue={1}>
                                    <PayableItemValueText>
                                        {parseToCurrency(item.value, 2)}
                                    </PayableItemValueText>
                                </PayableItemInfo>
                            </PayableItem>
                        ))}
                </PayablesList>
            </PayablesPageContainer>
            <ButtonRounded
                icon="add"
                onClickFn={() =>
                    navigation.navigate(GeneralConst.createPayablePage)
                }></ButtonRounded>
        </>
    );
}
