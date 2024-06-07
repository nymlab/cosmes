import { PlainMessage } from "@bufbuild/protobuf";
import { Secp256k1PubKey } from "../../../client/index.js";
import { CosmosBaseV1beta1Coin as Coin, CosmosTxV1beta1Fee as Fee } from "../../../protobufs/index.js";
import type { Keplr } from "../../../registry/index.js";
import { WalletName } from "../../constants/WalletName.js";
import { ConnectedWallet, SignArbitraryResponse, UnsignedTx } from "../ConnectedWallet.js";
export declare class KeplrExtension extends ConnectedWallet {
    private readonly ext;
    private readonly useAmino;
    constructor(walletName: WalletName, ext: Keplr, chainId: string, pubKey: Secp256k1PubKey, address: string, rpc: string, gasPrice: PlainMessage<Coin>, useAmino: boolean);
    signArbitrary(data: string): Promise<SignArbitraryResponse>;
    protected signAndBroadcastTx({ msgs, memo, timeoutHeight }: UnsignedTx, fee: Fee, accountNumber: bigint, sequence: bigint): Promise<string>;
}
//# sourceMappingURL=KeplrExtension.d.ts.map