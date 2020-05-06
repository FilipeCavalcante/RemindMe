import React, { useState } from 'react';
import Clipboard from '@react-native-community/clipboard';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Alert, TouchableWithoutFeedback } from 'react-native';
import {
    PayableItem,
    PayableItemInfo,
    PayableItemTitleText,
    PayableItemDateText,
    PayableItemBarcodeText,
    PayableItemValueText,
} from '@pages/payables/payables.page.styled';
import { IPayableDto } from '@models/payables.model';
import DeleteSwipe from './delete-payable-swipe.component';
import SwipeAction from '@components/swipe-actions/swipe.component';
import { DefaultColors } from '@assets/css/global';

export default function Payable({ dataItem, index, handleDelete }: any) {
    const [lastTap, setLastTap] = useState<number>(-1);
    const [lastTapItemId, setLastTapItemId] = useState('-1');

    const copyBarCode = (item: IPayableDto) => {
        if (!item.barCode || item.barCode === '') {
            Alert.alert('Nenhum código de barra cadastrado');
            return;
        }

        Clipboard.setString(item.barCode);
        Alert.alert('Código de barra copiado para área de trabalho');
    };

    const handleDoubleTap = (item: IPayableDto) => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (
            item.id === lastTapItemId
            && lastTap
            && now - lastTap < DOUBLE_PRESS_DELAY
        ) {
            copyBarCode(item);
        } else {
            setLastTap(now);
            setLastTapItemId(item.id);
        }
    };

    return (
        <Swipeable
            renderLeftActions={(progress, dragX) => (
                <SwipeAction
                    progress={progress}
                    dragX={dragX}
                    leftAction={true}
                    textAction={"Excluir"}
                    colors={{ text: DefaultColors.white, background: DefaultColors.danger }}
                    handleAction={() => handleDelete(dataItem)}
                />)}
            renderRightActions={(progress, dragX) =>
                <SwipeAction
                    progress={progress}
                    dragX={dragX}
                    leftAction={false}
                    textAction={"Pagar"}
                    colors={{ text: DefaultColors.white, background: DefaultColors.info }}
                    handleAction={() => Alert.alert("Right action")}
                />
            }
        >
            <TouchableWithoutFeedback onPress={() => handleDoubleTap(dataItem)}>
                <PayableItem>
                    <PayableItemInfo flexValue={1}>
                        <PayableItemTitleText>{dataItem.title}</PayableItemTitleText>
                        <PayableItemDateText> vencimento: {dataItem.dueDate?.toLocaleDateString()} </PayableItemDateText>
                        {dataItem.barCode !== '' && (
                            <PayableItemBarcodeText> código de barra : {dataItem.barCode} </PayableItemBarcodeText>
                        )}
                    </PayableItemInfo>
                    <PayableItemInfo flexValue={1}>
                        <PayableItemValueText>{dataItem.value}</PayableItemValueText>
                    </PayableItemInfo>
                </PayableItem>
            </TouchableWithoutFeedback>
        </Swipeable>
    );
}
