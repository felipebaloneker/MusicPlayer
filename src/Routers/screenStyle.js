import { theme } from "../global/styles/theme";
export const screenStyle = {
    tabBarLabelStyle:{
        fontSize:12,
        fontFamily:theme.fonts.text400,
    },
    tabBarActiveTintColor:theme.colors.active,
    tabBarInactiveTintColor:theme.colors.textColor,
    tabBarStyle:{
        backgroundColor:theme.colors.primary,
    },
    tabBarIndicatorStyle:{
        backgroundColor:theme.colors.active,
        borderRadius:5,
    },
}
