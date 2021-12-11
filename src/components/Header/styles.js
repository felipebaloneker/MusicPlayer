import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        padding:10,
        height:90,
    },
    text:{
        color:theme.colors.textColor,
        fontSize:20,
        fontFamily:theme.fonts.text500,
    }
})