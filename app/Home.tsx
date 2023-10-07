import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import WalletInfo from "./components/WalletInfo";

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import BreezNode from "./components/Breez";

type RootStackParamList = {
  Home: undefined;
  WalletInfo: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'WalletInfo'>; 

const Home = ({navigation}: {navigation: HomeScreenNavigationProp}) => {
  return (
    <View style={styles.container}>
      <Text>Paying Attention</Text>
      <Button
        title="Connect Meditator's Wallet"
        onPress={() => navigation.navigate("WalletInfo")}
      />
      <Button 
        title="Register Breez Node"
        onPress={async () => {
          try {
            await BreezNode();
          } catch (error) {
            console.error(error);
          }
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
