import React,{Component,createContext} from 'react'
import * as MediaLibrary from 'expo-media-library'

export const AudioContext = createContext()
export class AudioList extends Component{


   trackList = async()=>{
        const permission = await MediaLibrary.getPermissionsAsync();
        if(permission.granted){
            const track = await MediaLibrary.getAssetsAsync(
                {mediaType:'audio'}
            )
            track = await MediaLibrary.getAssetsAsync({
                mediaType:'audio',
                first:media.totalCount,
            })
            this.setState({...this.state, trackFiles:track.assets})
            console.log(track)
        }
    }

    componentDidMount(){
      this.trackList()
    }

    render(){
        return(
            <AudioContext.Provider value={{trackFiles:trackFiles}}>
                {this.props.children}
            </AudioContext.Provider>
        )
    }
}
export default AudioList;