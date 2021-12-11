import React,{Component,createContext} from 'react'
import * as MediaLibrary from 'expo-media-library'

export const AudioContext = createContext()
export class AudioList extends Component{
    constructor(props){
        super(props)
        this.state = {
            trackFiles: []
        }
    }

   trackList = async()=>{   
        const permission = await MediaLibrary.getPermissionsAsync();
        if(!permission.granted){
            await MediaLibrary.requestPermissionsAsync();
        }
        if(permission.granted){
            let track = await MediaLibrary.getAssetsAsync(
                {mediaType:'audio'}
            )
            track = await MediaLibrary.getAssetsAsync(
                {mediaType:'audio',first:track.totalCount}

            )
            console.log(track.assets.length)
            this.setState({...this.state, trackFiles:track.assets})
        }
    }

    componentDidMount(){
      this.trackList()
    }

    render(){
        return(
            <AudioContext.Provider value={{trackFiles: this.state.trackFiles}}>
                {this.props.children}
            </AudioContext.Provider>
        )
    }
}
export default AudioList;