import React, { useState } from 'react';
import {View,Text, Image} from 'react-native'
import { styles } from "./styles";
import {ModalView} from '../ModalView'
import Vinyl from '../../assets/images/vinyl.png'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {Player} from '../Player'
import { PlayerButtons } from '../PlayerButtons';

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
                <PlayerButtons/>
                <ModalView visible={openPlayer} >   
                    <Player/>  
                </ModalView>
            </View>
        </GestureRecognizer>
    )
}