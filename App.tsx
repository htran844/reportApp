import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import Auth from './src/screens/Auth/Auth';
import Register from './src/screens/Auth/Register';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  // logic check xem dang nhap chua
  const isLogin = false

  return (
    <NavigationContainer>
      {isLogin ?
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        :
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="Auth" component={Auth} /> */}
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>}

    </NavigationContainer>
  );
}


export default App;
