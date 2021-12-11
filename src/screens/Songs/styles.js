import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:theme.colors.primary,
        color:theme.colors.textColor,
    },
    textContainer:{
        height:70,
        borderBottomWidth:1,
        borderBottomColor:theme.colors.border,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    text:{
        color:theme.colors.textColor,
        fontSize:12,
        fontFamily:theme.fonts.text500,
    }
})