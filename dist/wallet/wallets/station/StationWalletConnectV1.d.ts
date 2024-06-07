import { PlainMessage } from "@bufbuild/protobuf";
import WalletConnect from "@walletconnect/legacy-client";
import { Secp256k1PubKey } from "../../../client/index.js";
import { CosmosBaseV1beta1Coin as Coin, CosmosTxV1beta1Fee as Fee } from "../../../protobufs/index.js";
import { ConnectedWallet, SignArbitraryResponse, UnsignedTx } from "../ConnectedWallet.js";
export declare class StationWalletConnectV1 extends ConnectedWallet {
    private readonly wc;
    constructor(wc: WalletConnect, chainId: string, pubKey: Secp256k1PubKey, address: string, rpc: string, gasPrice: PlainMessage<Coin>);
    signArbitrary(data: string): Promise<SignArbitraryResponse>;
    signAndBroadcastTx({ msgs, memo }: UnsignedTx, fee: Fee): Promise<string>;
    private sendRequest;
}
//# sourceMappingURL=StationWalletConnectV1.d.ts.map