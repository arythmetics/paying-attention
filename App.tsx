import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Home from './app/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WalletInfo from './app/components/WalletInfo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="WalletInfo" component={WalletInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};