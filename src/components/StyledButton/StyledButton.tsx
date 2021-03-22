import React from "react"
import { Pressable, Text, View, } from "react-native"
import { buttonStyles } from "./styles"


export const StyledButton = (props: any) => {

    const {
        type,
        content,
        onPress,
    } = props;


    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={buttonStyles.container}>
            <Pressable
                style={[buttonStyles.button, { backgroundColor: backgroundColor }]}
                onPress={() => { onPress() }}
            >
                <Text style={[buttonStyles.buttonText, { color: textColor }]}>{content}</Text>

            </Pressable>

        </View>
    )
};
