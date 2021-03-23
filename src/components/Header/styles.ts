import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        justifyContent: 'space-between',
        top: 50,
        zIndex: 100,
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',


    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
});