import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import { styles } from './styles'

const AudioList = () => {
    const getPermisssion = async () =>{
        const permission = await MediaLibrary.getPermissionsAsync()
        console.log(permission)
    }
    useEffect(() =>{
        getPermisssion()
    },[])
    return (
        <View style={styles.container}>
            <Text>Audio List</Text>
        </View>
    )
}

export default AudioList;