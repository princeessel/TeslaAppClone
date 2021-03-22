import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    },
    button: {
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white'
    }
});