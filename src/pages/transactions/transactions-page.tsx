import React, { useState, useEffect } from 'react';
import PageHeader from '@components/header/page.header';

import { listTransactions } from '@services/transaction.service';
import { TransactionPageContainer, TransactionsList, TransactionItem, TransactionItemInfo, TransactionItemValueText, TransactionItemDateText, TransactionItemTitleText } from '@pages/transactions/transactions-page.styled';
import { Button, ActivityIndicator, Text } from 'react-native';

export default function TransactionsPage({ navigation }: any) {
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setLoading] = useState(false);


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
        <TransactionPageContainer>
            <PageHeader pageTitle="All Transactions" returnFn={() => navigation.navigate("Home")} />
            {isLoading && <ActivityIndicator />}
            <TransactionsList>
                {transactions && transactions.map((item, index) =>
                    <TransactionItem key={index}>
                        <TransactionItemInfo flexValue={1}>
                            <TransactionItemTitleText>A desc vem aqui</TransactionItemTitleText>
                            <TransactionItemDateText>vencimento: {new Date(item["dueDate"]).toLocaleDateString()}</TransactionItemDateText>
                        </TransactionItemInfo>
                        <TransactionItemInfo flexValue={1}>
                            <TransactionItemValueText>{item["value"]}</TransactionItemValueText>
                        </TransactionItemInfo>
                    </TransactionItem>)}
            </TransactionsList>
            <Button title="Add" onPress={() => navigation.navigate("AddTransaction")} />
        </TransactionPageContainer>
    )
}
