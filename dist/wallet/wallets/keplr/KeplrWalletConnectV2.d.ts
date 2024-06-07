import { PlainMessage } from "@bufbuild/protobuf";
import { Secp256k1PubKey } from "../../../client/index.js";
import { CosmosBaseV1beta1Coin as Coin, CosmosTxV1beta1Fee as Fee } from "../../../protobufs/index.js";
import { WalletName } from "../../../wallet/index.js";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2.js";
import { ConnectedWallet, SignArbitraryResponse, UnsignedTx } from "../ConnectedWallet.js";
export declare class KeplrWalletConnectV2 extends ConnectedWallet {
    private readonly wc;
    private readonly useAmino;
    constructor(walletName: WalletName, wc: WalletConnectV2, chainId: string, pubKey: Secp256k1PubKey, address: string, rpc: string, gasPrice: PlainMessage<Coin>, useAmino: boolean);
    signArbitrary(_data: string): Promise<SignArbitraryResponse>;
    signAndBroadcastTx({ msgs, memo, timeoutHeight }: UnsignedTx, fee: Fee, accountNumber: bigint, sequence: bigint): Promise<string>;
}
//# sourceMappingURL=KeplrWalletConnectV2.d.ts.map