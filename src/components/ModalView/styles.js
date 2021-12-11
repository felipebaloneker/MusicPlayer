import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay
  },
    container: {
        flex: 1,
        marginTop:15,
      },
      bar: {
        width:100,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.inative3,
        alignSelf: 'center',
        marginTop: 13,
      }
})