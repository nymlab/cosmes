import { RpcClient, Tx, } from "../../../client/index.js";
import { WalletError, WalletType } from "../../../wallet/index.js";
import { ConnectedWallet, } from "../ConnectedWallet.js";
export class KeplrWalletConnectV2 extends ConnectedWallet {
    constructor(walletName, wc, chainId, pubKey, address, rpc, gasPrice, useAmino) {
        super(walletName, WalletType.WALLETCONNECT, chainId, pubKey, address, rpc, gasPrice);
        this.wc = wc;
        this.useAmino = useAmino;
    }
    async signArbitrary(_data) {
        // ! Not implemented by Keplr
        // https://github.com/chainapsis/keplr-wallet/blob/master/packages/wc-client/src/index.ts#L379
        throw new Error("Method not implemented.");
    }
    async signAndBroadcastTx({ msgs, memo, timeoutHeight }, fee, accountNumber, sequence) {
        const tx = new Tx({
            chainId: this.chainId,
            pubKey: this.pubKey,
            msgs: msgs,
        });
        const params = {
            accountNumber,
            sequence,
            fee,
            memo,
            timeoutHeight,
        };
        let txRaw;
        if (this.useAmino) {
            const { signed, signature } = await WalletError.wrap(this.wc.signAmino(this.chainId, this.address, tx.toStdSignDoc(params)));
            txRaw = tx.toSignedAmino(signed, signature.signature);
        }
        else {
            const { signed, signature } = await WalletError.wrap(this.wc.signDirect(this.chainId, this.address, tx.toSignDoc(params)));
            txRaw = tx.toSignedDirect(signed, signature.signature);
        }
        return RpcClient.broadcastTx(this.rpc, txRaw);
    }
}
//# sourceMappingURL=KeplrWalletConnectV2.js.map