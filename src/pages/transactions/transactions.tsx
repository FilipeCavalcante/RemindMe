import React from 'react';
import { TransactionPageContainer } from '@assets/css/transactions-page.styled';
import { View, Text, Button } from 'react-native';
import PageHeader from '@components/pages/page.header';

const TransactionsPage = ({ navigation }) => {

    return (
        <TransactionPageContainer>
            <PageHeader pageTitle="All Transactions" returnFn={() => navigation.navigate("Home")} />
            <Button title="Add" onPress={() => navigation.navigate("AddTransaction")} />
        </TransactionPageContainer>
    )
}

export default TransactionsPage;