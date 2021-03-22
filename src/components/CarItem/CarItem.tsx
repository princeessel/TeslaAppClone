import React from "react"
import { View, ImageBackground, Text, StyleSheet } from "react-native"
import { StyledButton } from "../StyledButton/StyledButton"
import { carItemStyles } from './styles'



const CarItem: React.FC = (props:any) => {

  const {name, tagline, taglineCTA, image} = props;

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
