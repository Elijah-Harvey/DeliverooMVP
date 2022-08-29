import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import {TailwindProvider} from 'tailwindcss-react-native';
import RestaurantScreen from './screens/RestaurantScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

export default App;