import { WalletType } from "../../constants/WalletType.js";
import { WalletConnectV1 } from "../../walletconnect/WalletConnectV1.js";
import { ConnectedWallet } from "../ConnectedWallet.js";
import { ChainInfo, WalletController } from "../WalletController.js";
export declare class StationController extends WalletController {
    private readonly wc;
    constructor();
    isInstalled(type: WalletType): Promise<boolean>;
    protected connectWalletConnect<T extends string>(chains: ChainInfo<T>[]): Promise<{
        wallets: Map<T, ConnectedWallet>;
        wc: WalletConnectV1;
    }>;
    protected connectExtension<T extends string>(chains: ChainInfo<T>[]): Promise<Map<T, ConnectedWallet>>;
    protected registerAccountChangeHandlers(): void;
    private getPubKey;
}
//# sourceMappingURL=StationController.d.ts.map