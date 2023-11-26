import { NavigationContainer } from '@react-navigation/native';
import Home from './app/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WalletInfo from './app/components/WalletInfo';
import BreezNodeProvider from './app/components/Breez';
import FundNode from './app/components/FundNode';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BreezNodeProvider>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="WalletInfo" component={WalletInfo} />
            <Stack.Screen name="FundNode" component={FundNode} />
        </Stack.Navigator>
      </NavigationContainer>
    </BreezNodeProvider>
  );
};