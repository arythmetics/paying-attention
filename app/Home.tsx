import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native'
import React from 'react'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import FundNode from './components/FundNode'

interface RootStackParamList {
  Home: undefined
  WalletInfo: undefined
  [key: string]: undefined | object
}

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'WalletInfo'>

const Home = ({ navigation }: { navigation: HomeScreenNavigationProp }): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Paying Attention</Text>
      <Button
        title="Connect Meditator's Wallet"
        onPress={() => { navigation.navigate('WalletInfo') }}
      />
      <Button
        title="Fund Meditation Node"
        onPress={() => { navigation.navigate('FundNode')}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home
