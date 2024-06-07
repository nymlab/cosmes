import { PlainMessage } from "@bufbuild/protobuf";
import { Adapter, PollTxParams, Secp256k1PubKey } from "../../client/index.js";
import { CosmosBaseV1beta1Coin as Coin, CosmosTxV1beta1Fee as Fee, CosmosTxV1beta1GetTxResponse as GetTxResponse } from "../../protobufs/index.js";
import type { WalletName } from "../constants/WalletName.js";
import type { WalletType } from "../constants/WalletType.js";
export type UnsignedTx = {
    msgs: Adapter[];
    memo?: string | undefined;
    timeoutHeight?: bigint | undefined;
};
export type PollTxOptions = Pick<PollTxParams, "intervalSeconds" | "maxAttempts">;
export type SignArbitraryResponse = {
    data: string;
    pubKey: string;
    signature: string;
};
/**
 * Represents a connected wallet that is ready to sign transactions.
 * Use `WalletController` to create an instance of this class.
 */
export declare abstract class ConnectedWallet {
    /** The identifier of this wallet. */
    readonly id: WalletName;
    /** The type of connection to the wallet. */
    readonly type: WalletType;
    /** The chain ID this wallet is connected to. */
    readonly chainId: string;
    /** The public key. */
    readonly pubKey: Secp256k1PubKey;
    /** The bech32 address. */
    readonly address: string;
    /** The RPC endpoint to use for interacting with the chain. */
    readonly rpc: string;
    /** The gas price to use for transactions. */
    readonly gasPrice: Coin;
    private accountNumber;
    private sequence;
    constructor(id: WalletName, type: WalletType, chainId: string, pubKey: Secp256k1PubKey, address: string, rpc: string, gasPrice: PlainMessage<Coin>);
    /**
     * Returns the account number and sequence for the connected address. If `fromCache`
     * is true, the cached values (if they are available) will be returned instead of
     * querying the auth module.
     *
     * @throws if the account does not exist in the auth module.
     */
    getAuthInfo(fromCache?: boolean): Promise<{
        accountNumber: bigint;
        sequence: bigint;
    }>;
    /**
     * Simulates the tx and returns an estimate of the gas fees required.
     *
     * @throws if the tx fails to simulate.
     */
    estimateFee({ msgs, memo }: UnsignedTx, feeMultiplier?: number): Promise<Fee>;
    /**
     * Signs and broadcasts the given `unsignedTx`, returning the tx hash if successful.
     * The `fee` parameter can (and should) be obtained by running `estimateFee` on
     * the `unsignedTx` prior to calling this method.
     *
     * **Important**: successful execution of this method does not guarantee that the
     * tx was successfully included in a block. Use `pollTx` to poll for the result of
     * the tx.
     *
     * @throws if the user denies the signing of the tx.
     * @throws if the tx fails to broadcast.
     */
    broadcastTx(unsignedTx: UnsignedTx, fee: Fee): Promise<string>;
    /**
     * Polls for the tx matching the given `txHash` every `intervalSeconds` until it is
     * included in a block or when `maxAttempts` is reached (default: 2s, 64 attempts).
     *
     * @throws if the tx is not included in a block after the given `maxAttempts`.
     */
    pollTx(txHash: string, { maxAttempts, intervalSeconds }?: PollTxOptions): Promise<Required<PlainMessage<GetTxResponse>>>;
    /**
     * Executes `broadcastTx` and `pollTx` sequentially, returning the result of the
     * tx. If `feeOrFeeMultiplier` is `undefined` or a number, an additional call to
     * `estimateFee` will be made. Use this if there is no need to independently
     * execute the three methods.
     */
    broadcastTxSync(unsignedTx: UnsignedTx, feeOrFeeMultiplier?: Fee | number, pollOpts?: PollTxOptions): Promise<Required<PlainMessage<GetTxResponse>>>;
    /**
     * Signs the UTF-8 encoded `data` string. Note that some mobile wallets do not
     * support this method.
     *
     * @throws if the user denies the signing of the data.
     * @throws if the wallet does not support signing arbitrary data.
     */
    abstract signArbitrary(data: string): Promise<SignArbitraryResponse>;
    /**
     * Signs the given `unsignedTx` and broadcasts the resulting signed tx, returning
     * the hex encoded tx hash if successful. This abstract method should be implemented
     * by the concrete child classes.
     */
    protected abstract signAndBroadcastTx(unsignedTx: UnsignedTx, fee: Fee, accountNumber: bigint, sequence: bigint): Promise<string>;
}
//# sourceMappingURL=ConnectedWallet.d.ts.map