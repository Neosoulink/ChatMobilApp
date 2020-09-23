import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';

// Views
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerShown : false
			}}>
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="ChatScreen" component={ChatScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
});
