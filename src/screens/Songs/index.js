import React,{Component} from "react";
import {View,Text, ScrollView} from 'react-native'
import { styles } from './styles'
import { AudioContext } from '../../context/AudioList'

export class Songs extends Component{
    static contextType = AudioContext

    render(){
        return(
            <ScrollView style={styles.container}>
                {this.context.trackFiles.map(track => 
                    <View style={styles.textContainer}>
                        <Text style={styles.text} key={track.id}>{track.filename}</Text> 
                    </View>
                )}
            </ScrollView>
        )
    }
    
}