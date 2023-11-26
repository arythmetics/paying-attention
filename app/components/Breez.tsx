import { EnvironmentType, NodeConfig, NodeConfigVariant, connect, defaultConfig, mnemonicToSeed, BreezEvent, nodeInfo, NodeState, receivePayment } from '@breeztech/react-native-breez-sdk';
import { MNEMONIC_PHRASE, BREEZ_API_KEY } from "@env"
import { ReactNode, createContext, useEffect, useState } from 'react';

export const BreezNodeContext = createContext<NodeState | null>(null);

export default function BreezNodeProvider({ children }: { children: ReactNode }) {
    const [nodeState, setNodeState] = useState<NodeState | null>(null);
    const phrase = MNEMONIC_PHRASE;
    const apiKey = BREEZ_API_KEY;
    const onBreezEvent = (e: BreezEvent) => {
        console.log(`Received event ${e.type}`)
    }

    useEffect(() => {
        async function connectToNode() {
            const seed = await mnemonicToSeed(phrase);
            const nodeConfig : NodeConfig = {
                type: NodeConfigVariant.GREENLIGHT,
                config: {}
            }
            let config = await defaultConfig(EnvironmentType.PRODUCTION, apiKey, nodeConfig);
            try {
                await connect(config, seed, onBreezEvent);
                const nodeState = await nodeInfo();
                setNodeState(nodeState);
            } catch (error) {
                console.log(error)
            }
        }
        connectToNode();
    }, []);
    
    return (
        <BreezNodeContext.Provider value={nodeState}>
          {children}
        </BreezNodeContext.Provider>
    );
}
