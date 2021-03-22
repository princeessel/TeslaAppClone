import React from "react"
import { View, ImageBackground, Text } from "react-native"
import { StyledButton } from "../StyledButton/StyledButton"
import { carItemStyles } from './styles'

const CarItem: React.FC = () => {
  return (
    <View style={carItemStyles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={carItemStyles.image}
      />
      <View style={carItemStyles.titlesContainer}>
        <Text style={carItemStyles.title}>{'Model S'}</Text>
        <Text style={carItemStyles.subtitle}>{'Starting at $55,670'}</Text>
      </View>
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
  )
}

export default React.memo(CarItem)
