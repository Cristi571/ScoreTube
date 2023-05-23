
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import AppStyles from './styles/AppStyles';
// Required : Navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LaunchScreen } from './screens';
import { SignupScreen } from './screens';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={AppStyles.mainContainer}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='LaunchScreen' component={LaunchScreen}
            options={{headerShown: false}} />

            <Stack.Screen name='SignupScreen' component={SignupScreen}
            options={
              {
                title:'Sign up', 
                headerStyle: {
                  backgroundColor: '#E7CBCB',
                },
                headerTintColor: '#fff',
                headerBackTitleStyle: {
                  color: '#000'
                }
              }
            } />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="inverted" />
    </View>
  );
}
