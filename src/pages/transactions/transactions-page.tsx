import React from 'react';
import { TransactionPageContainer } from '@pages/transactions/transactions-page.styled';
import { View, Text, Button } from 'react-native';
import PageHeader from '@components/header/page.header';

export default function TransactionsPage({ navigation }: any) {

    return (
        <TransactionPageContainer>
            <PageHeader pageTitle="All Transactions" returnFn={() => navigation.navigate("Home")} />
            <Button title="Add" onPress={() => navigation.navigate("AddTransaction")} />
        </TransactionPageContainer>
    )
}
