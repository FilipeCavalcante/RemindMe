import React, { useState, useEffect } from 'react';
import PageHeader from '@components/header/page.header';

import { listTransactions } from '@services/transaction.service';
import { TransactionPageContainer, TransactionsList, TransactionItem, TransactionItemInfo, TransactionItemValueText, TransactionItemDateText, TransactionItemTitleText } from '@pages/transactions/transactions-page.styled';
import { ActivityIndicator } from 'react-native';
import { parseToCurrency } from '@shared/number.utils'
import { ButtonRounded } from '@components/buttons/generic-buttons';

export default function TransactionsPage({ navigation }: any) {
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const renderItems = () => {
        return (
            transactions && transactions.map((item, index) =>
                <TransactionItem key={index}>
                    <TransactionItemInfo flexValue={1}>
                        <TransactionItemTitleText>{item["title"]}</TransactionItemTitleText>
                        <TransactionItemDateText>vencimento: {new Date(item["dueDate"]).toLocaleDateString()}</TransactionItemDateText>
                    </TransactionItemInfo>
                    <TransactionItemInfo flexValue={1}>
                        <TransactionItemValueText>{parseToCurrency(item["value"], 2)}</TransactionItemValueText>
                    </TransactionItemInfo>
                </TransactionItem>)
        )
    }

    async function _fetch() {
        let result = await listTransactions();
        setTransactions(result);
        setLoading(false);
    }

    useEffect(() => {
        if (transactions && transactions.length === 0) {
            setLoading(true);
            _fetch()
        }
    }, [transactions]);

    return (
        <>
            <TransactionPageContainer>
                <PageHeader pageTitle="All Transactions" returnFn={() => navigation.navigate("Home")} />
                {isLoading && <ActivityIndicator />}
                <TransactionsList>
                    {renderItems()}
                </TransactionsList>


            </TransactionPageContainer>
            <ButtonRounded icon="add" onClickFn={() => navigation.navigate("AddTransaction")}></ButtonRounded>
        </>
    )
}
