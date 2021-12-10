import React, { useState } from 'react';
import { RectButton} from 'react-native-gesture-handler';
import {View,ScrollView,Text, Image} from 'react-native'
import { styles } from "./styles";
import { MaterialCommunityIcons} from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import {ModalView} from '../ModalView'
import Vinyl from '../../assets/images/vinyl.png'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export function BottomPlayer(){
    const [openPlayer,setOpenPlayer] = useState(false)
    
    function clickOpenPlayer(){
        openPlayer ? (
            setOpenPlayer(false)
        ):(
            setOpenPlayer(true)
        )
    }

    return(
        <GestureRecognizer
        onSwipeUp={clickOpenPlayer}
        onSwipeDown={clickOpenPlayer}
        >
            <View
            style={styles.container}
            >
                <View style={styles.artContainer}>
                        <Image
                        style={styles.artImage}
                        source={Vinyl}
                        />
                    <Text style={styles.text}>Song Name</Text>
                </View>
                <View style={styles.btnContainer}>         
                    <View style={styles.btnBack}>
                        <RectButton>
                            <MaterialCommunityIcons
                                name='skip-previous'
                                size={30}
                                color={theme.colors.active}
                                />
                        </RectButton>
                    </View>
                    <View style={styles.btnPlay}>
                        <RectButton>
                            <MaterialCommunityIcons
                            name='play'
                            size={30}
                            color={theme.colors.textColor}
                            />
                        </RectButton>
                    </View>
                    <View style={styles.btnNext}>
                        <RectButton>
                            <MaterialCommunityIcons
                                name='skip-next'
                                size={30}
                                color={theme.colors.active}
                                />
                        </RectButton>
                    </View>
                </View>
                <ModalView visible={openPlayer} >     
                </ModalView>
            </View>
        </GestureRecognizer>
    )
}