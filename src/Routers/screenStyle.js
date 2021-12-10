import { theme } from "../global/styles/theme";
export const screenStyle = {
    tabBarLabelStyle:{
        color:theme.colors.textColor,
        fontSize:12,
        fontFamily:theme.fonts.text400,
    },
    tabBarStyle:{
        backgroundColor:theme.colors.primary,
        paddingRight:60,
    },
    tabBarIndicatorStyle:{
        backgroundColor:theme.colors.active,
        width:20,
        boxShadow:'none',
        alginSelf:'flex-start'

    }
}
