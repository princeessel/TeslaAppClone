import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import CarItem from './components/CarItem/CarItem';

const App: React.FC = () => {


  return (
    <View style={styles.container}>
      <CarItem 
        name={'Model 3'}
        tagline={'Order Online for '}
        taglineCTA={'Touchless Delivery'}
        image={require('./assets/images/Model3.jpeg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
