import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ScreenStack from './src/components/screens/ScreenStack';


const App = () => {
 
  return (
    <NavigationContainer>
      <ScreenStack/>
    </NavigationContainer>
  );
};


export default App;
