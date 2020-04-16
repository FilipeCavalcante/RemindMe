import React from 'react';
import { View, Text, Button } from 'react-native';

import PageHeader from '@components/pages/page.header';
import { Transaction_AddForm } from '@components/transactions/add-form';
import { TransactionPageContainer } from '@assets/css/transactions-page.styled';

const AddTransaction = ({ navigation, props }: any) => {
    return (
        <TransactionPageContainer>
            <PageHeader pageTitle="Add Transaction" returnFn={() => navigation.navigate("TransactionsPage")} />
            <Transaction_AddForm />
        </TransactionPageContainer>
    )
}
export default AddTransaction;