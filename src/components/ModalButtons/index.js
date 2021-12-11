import React from 'react';
import {View} from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import { styles } from "./styles";
import { RectButton} from 'react-native-gesture-handler';

export function ModalButtons(){
    return(
            <View style={styles.btnContainer}> 
                     <View style={styles.btnControl}>
                        <RectButton>
                            <MaterialCommunityIcons
                            name='repeat'
                            size={30}
                            color={theme.colors.inative3}
                            />
                        </RectButton>
                    </View>        
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
                    <View style={styles.btnControl}>
                        <RectButton>
                            <MaterialCommunityIcons
                            name='shuffle-variant'
                            size={30}
                            color={theme.colors.inative3}
                            />
                        </RectButton>
                    </View>
                </View>
    )
}