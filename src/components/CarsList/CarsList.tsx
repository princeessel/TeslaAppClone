import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import { CarItem } from "../CarItem";

import cars from './cars';


const CarsList: React.FC=() => {
    return (
        <View>
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