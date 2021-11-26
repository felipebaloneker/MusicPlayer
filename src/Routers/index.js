import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Songs} from '../screens/Songs'
import {Player} from '../screens/Player'
import {Albums} from '../screens/Albums'
import {screenStyle} from './screenStyle'

const Tab = createMaterialTopTabNavigator();

export function Routers(){
    return(
            <Tab.Navigator
            screenOptions={screenStyle}
            >
                <Tab.Screen name="Player" component={Player}/>
                <Tab.Screen name='Songs' component={Songs}/>
                <Tab.Screen name='Albums' component={Albums}/>
            </Tab.Navigator>
    )
}