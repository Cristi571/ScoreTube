
// Main components
import { Text, View } from 'react-native';
// MAnage phone top/bottom status bar
import { StatusBar } from 'expo-status-bar';
// Extern prepared styles
import AppStyles from './styles/AppStyles';
// App Screens
import { LaunchScreen } from "./screens";   // default screen at app launch
import { SignupScreen } from "./screens";   // form to create account
import { LoginScreen } from "./screens";    // form to connect to existing account
// Navigation deps:
// To install:
// > npm install @react-navigation/native
// > npm install @react-navigation/native-stack
// > npx expo install react-native-screens react-native-safe-area-context
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



export default function App() {
    return (
        <View style={AppStyles.mainContainer}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='LaunchScreen' component={LaunchScreen}
                    />

                    {/* <Stack.Screen />
                    <Stack.Screen /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}