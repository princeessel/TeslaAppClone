import React from "react";
import { Image, View } from "react-native";
import { headerStyles } from "./styles";

const Header: React.FC = () => {

    return (
        <View style={headerStyles.container}>
            <Image
                style={headerStyles.logo}
                source={require('../../assets/images/logo.png')}
            />
            <Image
                style={headerStyles.menu}
                source={require('../../assets/images/menu.png')}

            />
        </View>
    )
};

export default React.memo(Header)