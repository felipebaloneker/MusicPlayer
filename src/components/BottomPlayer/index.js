import React from "react";
import { RectButton} from 'react-native-gesture-handler';
import {View,Text} from 'react-native'
import { styles } from "./styles";
import { MaterialCommunityIcons} from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';


export function BottomPlayer(){
    return(
        <View style={styles.container}>
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
        </View>
        
    )
}