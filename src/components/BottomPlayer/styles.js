import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
    container:{
        height:80,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:theme.colors.secondary, 
        padding:10,
        borderTopLeftRadius:24,
        borderTopRightRadius:24,
    },
    text:{
        color:theme.colors.textColor
    },
    artContainer:{
        flex:1,
        width:200,
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',

    },
    artImage:{
        width:50,
        height:50,
        borderRadius:60,
        marginRight:5,
    },
})