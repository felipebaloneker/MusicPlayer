import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:theme.colors.primary,
    },
    text:{
        color:theme.colors.textColor,
        fontSize:12,
        fontFamily:theme.fonts.text500,
    }
})