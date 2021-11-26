import React from 'react';
import {useFonts} from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/global/styles/theme'
import { Header } from './src/components/Header'
import {Routers} from "./src/Routers"
import AppLoading from 'expo-app-loading'

export default function App() {
    const [fontLoaded] = useFonts({
      Inter_400Regular,
      Inter_500Medium,
    })
    if(!fontLoaded){
      return <AppLoading/>
    }
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={theme.colors.primary}
        translucent={false}
        barStyle='light-content'
      />
      <Header/>
      <Routers/>
    </NavigationContainer>
  )
}