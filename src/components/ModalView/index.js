import React, {ReactNode} from 'react';
import {View, Modal,Text,ModalProps } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { styles } from './styles';

export function ModalView({children, ...rest}){
    return(
        <Modal
        transparent
        animationType='slide'
        {...rest}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                <View style={styles.bar}/>
                    {children}
                </View>
            </View>
        </Modal>
    )
}