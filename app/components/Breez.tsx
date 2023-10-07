import { EnvironmentType, NodeConfig, NodeConfigType, connect, defaultConfig, mnemonicToSeed } from '@breeztech/react-native-breez-sdk';

async function BreezNode() {
    const phrase = process.env.MNEMONIC_PHRASE!;
    const inviteCode = process.env.BREEZ_INVITE_CODE!;
    const apiKey = process.env.BREEZ_INVITE_KEY!;

    console.log(phrase, inviteCode, apiKey)

    // const seed = await mnemonicToSeed(phrase);
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