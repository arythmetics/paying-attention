import {
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import FundNode from "./components/FundNode";

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
        title="Fund Meditation Node"
        onPress={async () => {
          try {
            await FundNode();
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
