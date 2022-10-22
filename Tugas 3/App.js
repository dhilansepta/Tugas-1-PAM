import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';

const Stack = createNativeStackNavigator();

export default function App () {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name= 'First' component={FirstScreen} options={{headerShown:false}}/>
          <Stack.Screen name= 'Second' component={SecondScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};
