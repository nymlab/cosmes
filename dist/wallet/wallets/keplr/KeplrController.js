import { Secp256k1PubKey } from "../../../client/index.js";
import { base64 } from "../../../codec/index.js";
import { WalletName } from "../../constants/WalletName.js";
import { WalletType } from "../../constants/WalletType.js";
import { onWindowEvent } from "../../utils/window.js";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2.js";
import { WalletController } from "../WalletController.js";
import { WalletError } from "../WalletError.js";
import { KeplrExtension } from "./KeplrExtension.js";
import { KeplrWalletConnectV2 } from "./KeplrWalletConnectV2.js";
export class KeplrController extends WalletController {
    constructor(wcProjectId) {
        super(WalletName.KEPLR);
        this.wc = new WalletConnectV2(wcProjectId, {
            // https://github.com/chainapsis/keplr-wallet/blob/master/packages/wc-qrcode-modal/src/modal.tsx#L61-L75
            name: "Keplr",
            android: "intent://wcV2#Intent;package=com.chainapsis.keplr;scheme=keplrwallet;end;",
            ios: "keplrwallet://wcV2",
        });
        this.registerAccountChangeHandlers();
    }
    async isInstalled(type) {
        return type === WalletType.EXTENSION ? "keplr" in window : true;
    }
    async connectWalletConnect(chains) {
        const wallets = new Map();
        await WalletError.wrap(this.wc.connect(chains.map(({ chainId }) => chainId)));
        for (let i = 0; i < chains.length; i++) {
            const { chainId, rpc, gasPrice } = chains[i];
            const { pubkey, address } = await WalletError.wrap(this.wc.getAccount(chainId));
            const key = new Secp256k1PubKey({
                key: base64.decode(pubkey),
                chainId,
            });
            wallets.set(chainId, new KeplrWalletConnectV2(this.id, this.wc, chainId, key, address, rpc, gasPrice, true // TODO: use sign mode direct when supported
            ));
        }
        return { wallets, wc: this.wc };
    }
    async connectExtension(chains) {
        const wallets = new Map();
        const ext = window.keplr;
        if (!ext) {
            throw new Error("Keplr extension is not installed");
        }
        await WalletError.wrap(ext.enable(chains.map(({ chainId }) => chainId)));
        for (const { chainId, rpc, gasPrice } of Object.values(chains)) {
            const { bech32Address, pubKey, isNanoLedger } = await WalletError.wrap(ext.getKey(chainId));
            const key = new Secp256k1PubKey({
                key: pubKey,
                chainId,
            });
            wallets.set(chainId, new KeplrExtension(this.id, ext, chainId, key, bech32Address, rpc, gasPrice, isNanoLedger));
        }
        return wallets;
    }
    registerAccountChangeHandlers() {
        onWindowEvent("keplr_keystorechange", () => this.changeAccount(WalletType.EXTENSION));
        this.wc.onAccountChange(() => this.changeAccount(WalletType.WALLETCONNECT));
    }
}
//# sourceMappingURL=KeplrController.js.map