import WalletConnect from "@walletconnect/legacy-client";
import { MobileAppDetails } from "./QRCodeModal.js";
type ConnectOptions = Required<Pick<ConstructorParameters<typeof WalletConnect>[0], "bridge" | "signingMethods">>;
export declare class WalletConnectV1 {
    private readonly sessionStorageKey;
    private readonly mobileAppDetails;
    private readonly connectOpts;
    private readonly onDisconnectCbs;
    constructor(sessionStorageKey: string, mobileAppDetails: MobileAppDetails, connectOpts: ConnectOptions);
    /**
     * Returns the current session if it exists, else, creates a new session.
     */
    connect(): Promise<WalletConnect>;
    onDisconnect(cb: () => unknown): () => void;
    /**
     * Saves the session to local storage. Should only be called once the user actually
     * approves the connection to the chain.
     */
    cacheSession(wc: WalletConnect): void;
}
export {};
//# sourceMappingURL=WalletConnectV1.d.ts.map