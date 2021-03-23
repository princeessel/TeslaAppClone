import React, { ReactElement, useCallback } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { TCar } from "../../types/car";
import { CarItem } from "../CarItem";
import { cars } from "./cars";

import { carItemStyles } from "./styles";


const CarsList: React.FC = () => {
      
    const renderCarItem = useCallback(({ item }: { item: TCar }): ReactElement => {
        return (
            <CarItem
                key={item.name}
                car={item}
            />
        );
    }, [])

    return (
        <View style={carItemStyles.container}>
            <FlatList
                data={cars}
                renderItem={renderCarItem}
                keyExtractor={item => item.name}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get("window").height}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
};

export default React.memo(CarsList);