import { RpcClient } from "../clients/RpcClient.js";
/**
 * Broadcasts a tx to the network and returns the tx hash if successful.
 */
export async function broadcastTx(endpoint, { tx, ...params }) {
    return RpcClient.broadcastTx(endpoint, tx.toSignedProto(params));
}
//# sourceMappingURL=broadcastTx.js.map