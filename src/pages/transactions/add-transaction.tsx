import React from 'react';
import { View, Text, Button } from 'react-native';

import PageHeader from '@components/header/page.header';
import AddTransactionForm from '@components/transactions/add-form';
import { TransactionPageContainer } from '@pages/transactions/transactions-page.styled';
import { GroupControls } from '@components/transactions/forms.styled';

const AddTransaction = ({ navigation, props }: any) => {

    const returnToTransactions = (msg: string) => {
        navigation.navigate("TransactionsPage");
    }

    return (
        <TransactionPageContainer>
            <PageHeader pageTitle="Add Transaction" returnFn={() => navigation.navigate("TransactionsPage")} />
            <AddTransactionForm cancelForm={returnToTransactions} />
        </TransactionPageContainer>
    )
}
export default AddTransaction;