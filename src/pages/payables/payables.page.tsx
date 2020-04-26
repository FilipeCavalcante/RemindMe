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
import { IPayableDto, PayableDto } from '@models/payables.model';
import { Alert, FlatList } from 'react-native';

export default function PayablesPage({ navigation }: any) {
    const [ payablesList, setPayables ] = useState<IPayableDto[]>([]);
    const [ isLoading, setLoading ] = useState(true);

    async function _fetch() {
        let result = await retrievePayables();
        setPayables(result);
        setLoading(false);
    }

    useEffect(() => {
        if (payablesList && payablesList.length === 0) {
            _fetch();
        }
    }, [ payablesList ]);

    return (
        <>
            <LoadingIndicator isVisible={ isLoading } size={ 60 }/>
            <PageHeader pageTitle="Boletos" openDrawer={ navigation.openDrawer }/>
            <FlatList data={ payablesList }
                      renderItem={ ({ item }) =>
                          <PayableItem>
                              <PayableItemInfo flexValue={ 1 }>
                                  <PayableItemTitleText>
                                      { item.title }
                                  </PayableItemTitleText>
                                  <PayableItemDateText>
                                      vencimento: { item.dueDate }
                                  </PayableItemDateText>
                              </PayableItemInfo>
                              <PayableItemInfo flexValue={ 1 }>
                                  <PayableItemValueText>
                                      { parseToCurrency(item.value, 2) }
                                  </PayableItemValueText>
                              </PayableItemInfo>
                          </PayableItem>
                      }
                      keyExtractor={ (item, index) => item.id }/>
            <ButtonRounded
                icon="add"
                onClickFn={ () => navigation.navigate(GeneralConst.createPayablePage) }/>
        </>
    )
        ;
}
