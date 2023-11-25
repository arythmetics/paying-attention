import { EnvironmentType, NodeConfig, NodeConfigVariant, connect, defaultConfig, mnemonicToSeed, BreezEvent, nodeInfo } from '@breeztech/react-native-breez-sdk';
import { MNEMONIC_PHRASE, BREEZ_INVITE_CODE, BREEZ_API_KEY } from "@env"

async function BreezNode() {
    const onBreezEvent = (e: BreezEvent) => {
        console.log(`Received event ${e.type}`)
    }

    const phrase = MNEMONIC_PHRASE;
    const inviteCode = BREEZ_INVITE_CODE;
    const apiKey = BREEZ_API_KEY;

    const seed = await mnemonicToSeed(phrase);
    const nodeConfig : NodeConfig = {
        type: NodeConfigVariant.GREENLIGHT,
        config: {
            inviteCode
        }
    }
    let config = await defaultConfig(EnvironmentType.PRODUCTION, apiKey, nodeConfig);

    try {
        await connect(config, seed, onBreezEvent);
        const nodeState = await nodeInfo();
        const balanceLn = nodeState.channelsBalanceMsat
        const balanceOnchain = nodeState.onchainBalanceMsat
        console.log(`LN Balance: ${balanceLn}`);
        console.log(`On Chain Balance: ${balanceOnchain}`);
    } catch (error) {
        console.log(error)
    }
}

export default BreezNode