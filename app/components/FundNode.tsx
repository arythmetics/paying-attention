import { Text } from 'react-native'
import React, { useContext } from 'react'
import { BreezNodeContext } from './Breez'

export default function FundNode (): React.ReactElement {
  const nodeState = useContext(BreezNodeContext)
  const nodeBalance = nodeState?.channelsBalanceMsat
  return <Text>
        {nodeBalance ?? "loading..."}
    </Text>
}
