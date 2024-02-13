import { Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { BreezNodeContext } from './Breez'
import { BuyBitcoinProvider, buyBitcoin } from '@breeztech/react-native-breez-sdk'

export default function FundNode (): React.ReactElement {
  const [buyBitcoinUrl, setBuyBitcoinUrl] = useState<string | null>(null)
  const nodeState = useContext(BreezNodeContext)
  const nodeBalance = nodeState?.channelsBalanceMsat;
  
  useEffect(() => {
      buyBitcoin({
        provider: BuyBitcoinProvider.MOONPAY
      })
      .then(res => setBuyBitcoinUrl(res.url))
      .catch(err => console.error(err))
  }, []);
  
  return <Text>
        {nodeBalance ?? "loading..."}
        {buyBitcoinUrl ?? "loading..."}
    </Text>
}
