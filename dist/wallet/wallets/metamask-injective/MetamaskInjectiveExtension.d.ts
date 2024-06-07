import { PlainMessage } from "@bufbuild/protobuf";
import { Secp256k1PubKey } from "../../../client/index.js";
import { CosmosBaseV1beta1Coin as Coin, CosmosTxV1beta1Fee as Fee } from "../../../protobufs/index.js";
import { WalletName } from "../../constants/WalletName.js";
import { ConnectedWallet, SignArbitraryResponse, UnsignedTx } from "../ConnectedWallet.js";
import { Ethereum } from "./types.js";
export declare class MetamaskInjectiveExtension extends ConnectedWallet {
    private readonly ext;
    private readonly ethAddress;
    constructor(walletName: WalletName, ext: Ethereum, chainId: string, pubKey: Secp256k1PubKey, ethAddress: string, bech32Address: string, rpc: string, gasPrice: PlainMessage<Coin>);
    signArbitrary(data: string): Promise<SignArbitraryResponse>;
    protected signAndBroadcastTx({ msgs, memo, timeoutHeight }: UnsignedTx, fee: Fee, accountNumber: bigint, sequence: bigint): Promise<string>;
    /**
     * Returns the TypedData to be signed by MetaMask's `eth_signTypedData_v4` method.
     *
     * @see https://github.com/InjectiveLabs/injective-ts/blob/cd1e67f7fd039c93dd4c5134d2d8dbfe5d009d79/packages/sdk-ts/src/core/modules/tx/eip712/eip712.ts#L14
     */
    private getTypedData;
}
//# sourceMappingURL=MetamaskInjectiveExtension.d.ts.map