import React from "react"
import { View, ImageBackground, Text } from "react-native"
import { StyledButton } from "../StyledButton";
import { carItemStyles } from "./styles"


interface IProps {
  car: any
}
const CarItem: React.FC<IProps> = ({ car }) => {

  const { name, tagline, taglineCTA, image } = car;

  return (
    <View style={carItemStyles.carContainer}>
      <ImageBackground
        source={image}
        style={carItemStyles.image}
      />
      <View style={carItemStyles.titlesContainer}>
        <Text style={carItemStyles.title}>{name}</Text>
        <Text style={carItemStyles.subtitle}>
          {tagline}
          <Text style={carItemStyles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>
      <View style={carItemStyles.buttonContainer}>
        <StyledButton
          type={'primary'}
          content={'Custom Order'}
          onPress={() => { console.warn('Custom Order button clicked') }}
        />
        <StyledButton
          type={'secondary'}
          content={'Existing Inventory'}
          onPress={() => { console.warn('Existing Inventory button clicked') }}
        />
      </View>
    </View>
  )
}

export default React.memo(CarItem)
