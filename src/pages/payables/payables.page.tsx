import React, { useState, useEffect } from 'react';
import PageHeader from '@components/header/page.header';
import Payable from '@components/payables/payable.component';
import PayableListHeaderComponent from '@components/payables/payable-list-header.component';
import NoPayablesFoundComponent from '@components/payables/no-payable-found.component';


import { retrievePayables, sortPayableBy, deletePayable, markPayableAsPaid } from '@services/payables.service';
import { PayablesPageContainer } from '@pages/payables/payables.page.styled';
import { ButtonRounded, IconButton } from '@components/buttons/generic-buttons';
import { GeneralConst } from '@shared/general.constants';
import { LoadingIndicator } from '@components/controls/indicators.component';
import { IPayableDto } from '@models/payables.model';
import { SortType } from '@shared/enums/sortType.enum';
import { ButtonArea } from '@components/buttons/generic-buttons.style';
import { DefaultColors } from '@assets/css/global';
import { FlatList, SafeAreaView, View, Easing, ScrollView } from 'react-native';
import { GatewayConstants } from '@shared/keyConstants';
import Animated from 'react-native-reanimated';

export default function PayablesPage({ navigation }: any) {
    const [payablesList, setPayables] = useState<IPayableDto[]>([]);
    const [isLoading, setLoadingPage] = useState(true);
    const [refreshPage, setRefreshPage] = useState(navigation.getParam("toRefreshPage") || true);

    useEffect(() => {
        if (refreshPage) {
            loadPayablesList();
        }
    }, [refreshPage]);

    async function loadPayablesList() {
        setPayables([]);
        let result = await retrievePayables(0, 10);
        result = sortPayableBy(result, SortType.String, 'dueDate', 'asc');
        setPayables(result);
        setRefreshPage(false);
        setLoadingPage(false);
    }

    const deleteItem = (item: IPayableDto, index: number): any => {
        deletePayable(item.id)
            .then(() => {
                doRefreshPage();
            });
    }


    const goToEditPage = (item: IPayableDto) => {
        navigation.navigate(GeneralConst.editPayablePage, { itemId: item.id });
    }

    const markAsPaid = (item: IPayableDto) => {
        markPayableAsPaid(item, true).then(() => {
            doRefreshPage();
        })
    }

    const doRefreshPage = () => {
        setLoadingPage(true);
        setRefreshPage(true);
    }

    return (
        <>
            <PageHeader
                pageTitle="Boletos"
                openDrawer={navigation.openDrawer}
            />
            <ScrollView>
                <PayablesPageContainer>
                    {payablesList.length >= 0 && <FlatList
                        data={payablesList}
                        keyStractor={(item: IPayableDto) => item.id}
                        ListHeaderComponent={PayableListHeaderComponent}
                        ListEmptyComponent={NoPayablesFoundComponent}
                        renderItem={(data: any, index: Number) => (
                            <Payable
                                dataItem={data.item}
                                index={index}
                                handleDelete={deleteItem}
                                handleMarkAsPaid={markAsPaid}
                                editPage={goToEditPage}
                            />
                        )}
                        refreshing={isLoading}
                        onRefresh={doRefreshPage}
                    />}
                </PayablesPageContainer>
            </ScrollView>

            <ButtonArea>
                <ButtonRounded icon="add" size={40} onClickFn={() => navigation.navigate(GeneralConst.createPayablePage)} />
            </ButtonArea>
        </>
    );
}
