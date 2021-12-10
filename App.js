import React from 'react';
import {useFonts} from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/global/styles/theme'
import { Header } from './src/components/Header'
import {Routers} from "./src/Routers"
import {AudioList} from './src/context/AudioList'
import AppLoading from 'expo-app-loading'
import { BottomPlayer } from "./src/components/BottomPlayer";

export default function App() {
    const [fontLoaded] = useFonts({
      Inter_400Regular,
      Inter_500Medium,
    })
    if(!fontLoaded){
      return <AppLoading/>
    }
  return (
    <AudioList>
      <NavigationContainer>
        <StatusBar
          backgroundColor={theme.colors.primary}
          translucent={false}
          barStyle='light-content'
        />
        <Header/>
        <Routers/>
        <BottomPlayer/>
     </NavigationContainer>
    </AudioList>
  )
}