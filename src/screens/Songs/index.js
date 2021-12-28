import React,{Component} from "react";
import {View,Text, ScrollView} from 'react-native'
import { styles } from './styles'
import { AudioContext } from '../../context/AudioList'
import { RectButton } from "react-native-gesture-handler";

export class Songs extends Component{
    static contextType = AudioContext

    render(){
        return(
            <ScrollView style={styles.container}>
                {this.context.trackFiles.map(track => 
                <View style={styles.textContainer}
                key={track.id}
                >
                    <Text style={styles.text} 
                    key={track.id}
                    onPress={()=>{console.log('pressed')}}
                    >
                        {track.filename}
                    </Text> 
                </View>
                )}
            </ScrollView>
        )
    }
    
}