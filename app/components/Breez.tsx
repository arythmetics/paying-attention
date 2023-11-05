import { EnvironmentType, NodeConfig, NodeConfigType, connect, defaultConfig, mnemonicToSeed } from '@breeztech/react-native-breez-sdk';
import { MNEMONIC_PHRASE, BREEZ_INVITE_CODE, BREEZ_API_KEY } from "@env"

async function BreezNode() {
    const phrase = MNEMONIC_PHRASE;
    const inviteCode = BREEZ_INVITE_CODE;
    const apiKey = BREEZ_API_KEY;

    const seed = await mnemonicToSeed(phrase);
    console.log(seed);
    // const nodeConfig : NodeConfig = {
    // type: NodeConfigType.GREENLIGHT,
    // config: {
    //     inviteCode: inviteCode
    //     }
    // }
    // let config = await defaultConfig(EnvironmentType.PRODUCTION, apiKey, nodeConfig);

    // try {
    //     const sdkServices = await connect(config, seed);
    // } catch (error) {
    //     console.log(error)
    // }
}

export default BreezNode