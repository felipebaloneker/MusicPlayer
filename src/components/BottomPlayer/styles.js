import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
    container:{
        height:80,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:theme.colors.primary, 
        borderTopWidth:3,
        borderTopColor:theme.colors.border,
        elevation:10,
        shadowColor:theme.colors.border,
        shadowOpacity:0.8,
        shadowOffset: {width: 0, height: -4},
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