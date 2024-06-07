import type { IQRCodeModal } from "@walletconnect/legacy-types";
export type MobileAppDetails = {
    name: string;
    android: string;
    ios: string;
    isStation?: boolean | undefined;
};
export declare class QRCodeModal implements IQRCodeModal {
    private readonly id;
    private readonly details;
    constructor(details: MobileAppDetails);
    open(uri: string): void;
    close(): void;
    private generateAndroidIntent;
    private generateIosIntent;
}
//# sourceMappingURL=QRCodeModal.d.ts.map