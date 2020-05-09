import React, { useState } from 'react';
import Clipboard from '@react-native-community/clipboard';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Alert, TouchableOpacity, Text, View } from 'react-native';
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
import { NavigationActions } from 'react-navigation';
import { PayableInfoRow, payableItemStyle } from './payable.styled';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Payable({ dataItem, index, handleDelete, handleMarkAsPaid, editPage }: { dataItem: IPayableDto, index: Number, handleDelete: any, handleMarkAsPaid: any, editPage: any }) {
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
            renderLeftActions={(progress, dragX) =>
                <SwipeAction
                    progress={progress}
                    dragX={dragX}
                    leftAction={true}
                    textAction={"Excluir"}
                    colors={{ text: DefaultColors.white, background: DefaultColors.danger }}
                    handleAction={() => handleDelete(dataItem, index)}
                />}
            renderRightActions={(progress, dragX) =>
                <SwipeAction
                    progress={progress}
                    dragX={dragX}
                    leftAction={false}
                    textAction={"Marcar pago"}
                    colors={{ text: DefaultColors.white, background: DefaultColors.info }}
                    handleAction={() => handleMarkAsPaid(dataItem)}
                />
            }
        >
            <TouchableOpacity onLongPress={() => copyBarCode(dataItem)} onPress={() => editPage(dataItem)}>
                <PayableItem>
                    <PayableInfoRow flexRow={1} style={{ position: 'relative' }}>
                        <Text style={payableItemStyle.title}>{dataItem.title}</Text>
                        <Icon name='check-circle' color={DefaultColors.success} size={26} style={payableItemStyle.icon} />
                    </PayableInfoRow>
                    <PayableInfoRow flexRow={1}>
                        <View style={payableItemStyle.info}>
                            <Text style={payableItemStyle.infoTitle}>Vencimento</Text>
                            <Text style={{ fontWeight: 'bold' }}>{new Date(dataItem.dueDate).toLocaleDateString()}</Text>
                        </View>
                        <View style={payableItemStyle.info}>
                            <Text style={payableItemStyle.infoTitle}>Código de Barra</Text>
                            <Text style={{ fontWeight: 'bold' }}>{`${dataItem.barCode?.slice(0, 10)}(...)`}</Text>
                        </View>
                        <View style={payableItemStyle.info}>
                            <Text style={payableItemStyle.infoTitle}>Valor</Text>
                            <Text style={{ fontWeight: 'bold' }}>{dataItem.value}</Text>
                        </View>
                    </PayableInfoRow>
                </PayableItem>
            </TouchableOpacity>

        </Swipeable>
    );
}
