import React from 'react'
import { EnvironmentType, type NodeConfig, NodeConfigVariant, connect, defaultConfig, mnemonicToSeed, type BreezEvent, nodeInfo, type NodeState, receivePayment } from '@breeztech/react-native-breez-sdk'
import { MNEMONIC_PHRASE, BREEZ_API_KEY } from '@env'
import { type ReactNode, createContext, useEffect, useState } from 'react'

export const BreezNodeContext = createContext<NodeState | null>(null)

export default function BreezNodeProvider ({ children }: { children: ReactNode }): React.ReactElement {
  const [nodeState, setNodeState] = useState<NodeState | null>(null)
  const phrase: string = MNEMONIC_PHRASE
  const apiKey: string = BREEZ_API_KEY
  const onBreezEvent = (e: BreezEvent): void => {
    console.log(`Received event ${e.type}`)
  }

  useEffect(() => {
    const connectToNode = async (): Promise<void> => {
      const seed = await mnemonicToSeed(phrase)
      const nodeConfig: NodeConfig = {
        type: NodeConfigVariant.GREENLIGHT,
        config: {}
      }
      const config = await defaultConfig(EnvironmentType.PRODUCTION, apiKey, nodeConfig)
      try {
        await connect(config, seed, onBreezEvent)
        const nodeState = await nodeInfo()
        setNodeState(nodeState)
      } catch (error) {
        console.log(error)
      }
    }
    void connectToNode()
  }, [])

  return (
        <BreezNodeContext.Provider value={nodeState}>
          {children}
        </BreezNodeContext.Provider>
  )
}
