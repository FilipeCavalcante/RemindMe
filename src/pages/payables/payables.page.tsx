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
import { ButtonRounded, IconButton } from '@components/buttons/generic-buttons';
import { GeneralConst } from '@shared/general.constants';
import { LoadingIndicator } from '@components/controls/indicators.component';
import { IPayableDto } from '@models/payables.model';
import { SortType } from '@shared/enums/sortType.enum';
import { Alert } from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import { ButtonArea } from '@components/buttons/generic-buttons.style';

export default function PayablesPage({ navigation }: any) {
    const [payablesList, setPayables] = useState<IPayableDto[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [lastTap, setLastTap] = useState(null);
    const [lastTapItemId, setLastTapItemId] = useState('');
    const [refreshPage, setRefreshPage] = useState(true);

    const handleDoubleTap = (item: IPayableDto) => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (
            item.id === lastTapItemId &&
            lastTap &&
            now - lastTap < DOUBLE_PRESS_DELAY
        ) {
            copyBarCode(item);
        } else {
            setLastTap(now);
            setLastTapItemId(item.id);
        }
    };

    const copyBarCode = (item: IPayableDto) => {
        if (!item.barCode || item.barCode === '') {
            Alert.alert('Nenhum código de barra cadastrado');
            return;
        }

        Clipboard.setString(item.barCode);
        Alert.alert('Código de barra copiado para área de trabalho');
    };

    const isOverdue = (item: IPayableDto) => {
        return item.dueDate < new Date();
    };

    useEffect(() => {
        async function loadPayablesList() {
            let result = await retrievePayables(0, 10);
            result = sortPayableBy(result, SortType.String, 'dueDate', 'asc');
            setPayables(result);
            setLoading(false);
            setRefreshPage(false);
        }

        if (refreshPage) {
            setLoading(true);
            loadPayablesList();
        }
    }, [refreshPage]);

    const doRefreshPage = () => {
        setRefreshPage(true);
    };

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
                            isOverdued={isOverdue(item)}
                            key={item.id}
                            onPress={() => handleDoubleTap(item)}>
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
            <ButtonArea>
                <ButtonRounded
                    icon='add'
                    onClickFn={() =>
                        navigation.navigate(GeneralConst.createPayablePage)
                    }
                />
                <IconButton
                    size={28}
                    icon='refresh'
                    onClickFn={doRefreshPage}
                />
            </ButtonArea>
        </>
    );
}
