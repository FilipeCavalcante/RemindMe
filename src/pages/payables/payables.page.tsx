import React, { useState, useEffect } from 'react';
import PageHeader from '@components/header/page.header';
import Payable from '@components/payables/payable.component';

import { retrievePayables, sortPayableBy, deletePayable } from '@services/payables.service';
import { PayablesPageContainer } from '@pages/payables/payables.page.styled';
import { ButtonRounded, IconButton } from '@components/buttons/generic-buttons';
import { GeneralConst } from '@shared/general.constants';
import { LoadingIndicator } from '@components/controls/indicators.component';
import { IPayableDto } from '@models/payables.model';
import { SortType } from '@shared/enums/sortType.enum';
import { ButtonArea } from '@components/buttons/generic-buttons.style';
import { DefaultColors } from '@assets/css/global';
import { FlatList, Alert } from 'react-native';
import { GatewayConstants } from '@shared/keyConstants';

export default function PayablesPage({ navigation }: any) {
    const [payablesList, setPayables] = useState<IPayableDto[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [refreshPage, setRefreshPage] = useState(true);

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

    const deleteItem = (item: IPayableDto): any => {
        Alert.alert(`Removendo item ${item.id}`);
    };

    return (
        <>
            <LoadingIndicator isVisible={isLoading} size={60} />
            <PageHeader
                pageTitle="Boletos"
                openDrawer={navigation.openDrawer}
            />
            <PayablesPageContainer>
                <FlatList
                    data={payablesList}
                    keyStractor={(item: IPayableDto) => item.id}
                    renderItem={(data: any, index: Number) => (
                        <Payable
                            dataItem={data.item}
                            index={index}
                            handleDelete={deleteItem}
                        />
                    )}
                />
            </PayablesPageContainer>

            <ButtonArea>
                <ButtonRounded
                    icon="add"
                    onClickFn={() =>
                        navigation.navigate(GeneralConst.createPayablePage)}
                />
                <IconButton
                    size={28}
                    icon="refresh"
                    onClickFn={doRefreshPage}
                />
            </ButtonArea>
        </>
    );
}
