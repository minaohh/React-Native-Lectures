import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComponentScreen from './src/screens/ComponentScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import BoxScreen from './src/screens/BoxScreen';
import CounterScreen from './src/screens/CounterScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Components" component={ComponentScreen} />
        <Stack.Screen name="Lists" component={ListScreen} />
        <Stack.Screen name="Images" component={ImageScreen} />
        <Stack.Screen name="Box Screen" component={BoxScreen} />
        {/* <Stack.Screen name="CounterScreen" component={CounterScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
