import React, { Component } from 'react'
import {Text, View } from 'react-native'
import * as MediaLibrary from 'expo-media-library';

export class AudioProvider extends Component {
    constructor(props){
        super(props)
    }
    getPermisssion = async () =>{
        const permission = await MediaLibrary.getPermissionsAsync()
        console.log(permission)
    }
    componentDidMount(){
        getPermission()
    }

    return(){
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}