import { StyleSheet } from "react-native";

export default StyleSheet.create({
    bloomButtonView: {
        flex: 0, 
        flexDirection: 'row' 
    },
    bloomLockIcon: {
        flex: 0,
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:15,
    },
    bloomLogoPadding: {
       paddingLeft: -10,
       paddingRight: 10
    },
    bloomTextAndLogo: {
        flex: 0,
        marginRight: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginLeft: -33
    },
    bloomLinearGradient: {
        borderRadius: 5,
        paddingTop:12,
        paddingBottom:12,
        marginLeft: -30,
        marginRight: 23

    },
    bloomImageBackground: {
        opacity: 0.95,
        width: '90%',
        marginLeft: 60,
    }
});