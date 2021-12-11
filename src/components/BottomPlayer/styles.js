import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
    container:{
        height:80,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:theme.colors.primary, 
        elevation:5,
        borderTopWidth:2,
        borderTopColor:theme.colors.border,
        shadowColor:theme.colors.primary,
        shadowOpacity:0.7,
        shadowOffset: {width: 2, height: -20},
        padding:10,
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