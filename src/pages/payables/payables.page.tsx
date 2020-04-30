import React, { useState, useEffect } from 'react';
import PageHeader from '@components/header/page.header';

import { retrievePayables, sortPayableBy } from '@services/payables.service';
import {
    PayablesPageContainer,
    PayablesList,
    PayableItem,
    PayableItemInfo,
    PayableItemValueText,
    PayableItemDateText,
    PayableItemTitleText,
    PayableItemBarcodeText,
} from '@pages/payables/payables.page.styled';
import { ButtonRounded } from '@components/buttons/generic-buttons';
import { GeneralConst } from '@shared/general.constants';
import { LoadingIndicator } from '@components/controls/indicators.component';
import { IPayableDto } from '@models/payables.model';
import { SortType } from '@shared/enums/sortType.enum';
import { Alert } from 'react-native';

export default function PayablesPage({ navigation }: any) {
    const [payablesList, setPayables] = useState<IPayableDto[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [lastTap, setLastTap] = useState(null);

    const handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
            copyBarCode();
        } else {
            setLastTap(now);
        }
    };

    const copyBarCode = () => {
        Alert.alert('bar code');
    };

    useEffect(() => {
        async function loadPayablesList() {
            let result = await retrievePayables(0, 10);
            result = sortPayableBy(result, SortType.String, 'dueDate', 'asc');
            setPayables(result);
            setLoading(false);
        }

        loadPayablesList();
    }, []);

    return (
        <>
            <LoadingIndicator isVisible={isLoading} size={60} />
            <PageHeader
                pageTitle='Boletos'
                openDrawer={navigation.openDrawer}
            />
            <PayablesPageContainer>
                <PayablesList>
                    {payablesList.map((item) => (
                        <PayableItem
                            key={item.id}
                            onPress={() => handleDoubleTap()}>
                            <PayableItemInfo flexValue={1}>
                                <PayableItemTitleText>
                                    {item.title}
                                </PayableItemTitleText>
                                <PayableItemDateText>
                                    vencimento:{' '}
                                    {item.dueDate?.toLocaleDateString()}
                                </PayableItemDateText>
                                {item.barCode !== '' && (
                                    <PayableItemBarcodeText>
                                        código de barra : {item.barCode}
                                    </PayableItemBarcodeText>
                                )}
                            </PayableItemInfo>
                            <PayableItemInfo flexValue={1}>
                                <PayableItemValueText>
                                    {item.value}
                                </PayableItemValueText>
                            </PayableItemInfo>
                        </PayableItem>
                    ))}
                </PayablesList>
            </PayablesPageContainer>
            <ButtonRounded
                icon='add'
                onClickFn={() =>
                    navigation.navigate(GeneralConst.createPayablePage)
                }
            />
        </>
    );
}
