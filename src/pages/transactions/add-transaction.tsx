import React from 'react';
import { View, Text, Button } from 'react-native';

import PageHeader from '@components/header/page.header';
import AddTransactionForm from '@components/transactions/add-form';
import { TransactionPageContainer } from '@pages/transactions/transactions-page.styled';

const AddTransaction = ({ navigation, props }: any) => {
    return (
        <TransactionPageContainer>
            <PageHeader pageTitle="Add Transaction" returnFn={() => navigation.navigate("TransactionsPage")} />
            <AddTransactionForm />
        </TransactionPageContainer>
    )
}
export default AddTransaction;