import React,{Component} from "react";
import {View,Text} from 'react-native'
import { styles } from './styles'
import {AudioList } from '../../context/AudioList'

export class Songs extends Component{
    //static contextType = AudioList

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>AudioLibrary</Text>
            </View>
        )
    }
    
}