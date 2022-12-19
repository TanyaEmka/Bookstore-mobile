import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from './screens/ShopScreen';
import BookScreen from './screens/BookScreen';
import store from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='BookStore' component={ShopScreen} />
                    <Stack.Screen name='Book' component={BookScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}