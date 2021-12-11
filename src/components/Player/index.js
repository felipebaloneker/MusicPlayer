import React from 'react';
import {View,Text,Image } from 'react-native';
import { styles } from "./styles";
import { ModalButtons } from '../ModalButtons';
import Vinyl from '../../assets/images/vinyl.png'

export function Player(){
    return(
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Music World</Text>
                </View>
                <View style={styles.main}> 
                    <View style={styles.trackArt}>
                            <Image
                            style={styles.albumArt}
                            source={Vinyl}
                            />  
                    </View> 

                    <View>
                        <View style={styles.timeContainer}>
                            <View style={styles.trackStatus}>
                                <View style={styles.trackPosition}>
                                </View>
                            </View> 

                            <View style={styles.trackTime}>
                                <Text style={styles.time}>1:23</Text>
                                <Text style={styles.time}>5:00</Text>
                            </View>
                        </View>

                        <View style={styles.textContainer}>
                            <Text style={styles.trackName}>StarBoy ft.Daft Punk</Text>
                            <Text style={styles.trackAlbum}>The Wekeend</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.footer}>
                    <ModalButtons/>
                </View>
            </View>
    )
}