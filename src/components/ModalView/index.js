import React, {ReactNode} from 'react';
import {View, Modal,Text,ModalProps } from 'react-native';

export function ModalView({children, ...rest}){
    return(
        <Modal
        animationType='slideInUp'
        {...rest}
        >
            <View>
                <Text>
                    Modal
                </Text>
            </View>
        </Modal>
    )
}