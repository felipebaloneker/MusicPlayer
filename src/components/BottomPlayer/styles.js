import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
    container:{
        height:80,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:theme.colors.primary, 
        borderTopWidth:3,
        borderTopColor:theme.colors.border,
        elevation:10,
        shadowColor:theme.colors.secondary,
        shadowOpacity:0.5,
        shadowOffset: {width: 0, height: -4}
    },
    text:{
        color:theme.colors.textColor
    }
})