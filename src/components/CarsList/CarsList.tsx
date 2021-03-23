import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import { CarItem } from "../CarItem";
import { Header } from "../Header";

import cars from './cars';
import { carItemStyles } from "./styles";


const CarsList: React.FC = () => {
    return (
        <View style={carItemStyles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem key={item.name} car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get("window").height}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
};

export default React.memo(CarsList);