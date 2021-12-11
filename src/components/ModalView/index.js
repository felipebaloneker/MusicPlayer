import React, {ReactNode} from 'react';
import {View, Modal,Text,ModalProps } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { styles } from './styles';

export function ModalView({children, ...rest}){
    return(
        <Modal
        transparent
        animationType='slideInUp'
        {...rest}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}