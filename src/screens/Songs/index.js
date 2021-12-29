import React,{Component} from "react";
import {View,Text, ScrollView} from 'react-native'
import { styles } from './styles'
import { AudioContext } from '../../context/AudioList'
import { Audio }from 'expo-av'

export class Songs extends Component{
    static contextType = AudioContext
    constructor(props){
        super(props);
        this.state={
            playbackObject:null,
            soundObject:null,
        }
        this.currentItem = {}
    }

    playTrack = async (track)=>{
        console.log(track)
        const playback = new Audio.Sound();
        const status = await playback.loadAsync(
            {uri: track.uri},
            {shouldPlay:true}
        )
        this.setState({...this.state, playbackObject:playback,soundObject:status})
        await sound.playAsync();
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                {this.context.trackFiles.map(track => 
                <View style={styles.textContainer}
                key={track.id}
                >
                    <Text style={styles.text} 
                    key={track.id}
                    onPress={()=>this.playTrack(track)}
                    >
                        {track.filename}
                    </Text> 
                </View>
                )}
            </ScrollView>
        )
    }
    
}