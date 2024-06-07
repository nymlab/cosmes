import { Prettify } from "../../typeutils/prettify.js";
import { ToSignedProtoParams, Tx } from "../models/Tx.js";
export type BroadcastTxParams = Prettify<ToSignedProtoParams & {
    tx: Tx;
}>;
/**
 * Broadcasts a tx to the network and returns the tx hash if successful.
 */
export declare function broadcastTx(endpoint: string, { tx, ...params }: BroadcastTxParams): Promise<string>;
//# sourceMappingURL=broadcastTx.d.ts.map