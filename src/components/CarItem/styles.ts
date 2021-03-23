import { Dimensions, StyleSheet } from "react-native";

export const carItemStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    carContainer: {
        width: '100%',
        height: Dimensions.get("window").height,
    },
    titlesContainer: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '600',
        color: 'gray'
    },
    subtitleCTA: {
        textDecorationLine: 'underline'

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 50,

    }

});