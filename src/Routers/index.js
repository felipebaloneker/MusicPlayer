import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Songs} from '../screens/Songs'
import {Favorite} from '../screens/Favorite'
import {Albums} from '../screens/Albums'
import {screenStyle} from './screenStyle'

const Tab = createMaterialTopTabNavigator();

export function Routers(){
    return(
            <Tab.Navigator
            screenOptions={screenStyle}
            >
                <Tab.Screen name='Songs' component={Songs}/>
                <Tab.Screen name='Albums' component={Albums}/>
                <Tab.Screen name="Favorite" component={Favorite}/>
            </Tab.Navigator>
    )
}