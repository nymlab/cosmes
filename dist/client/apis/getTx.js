import { CosmosTxV1beta1ServiceGetTxService as GetTxService, } from "../../protobufs/index.js";
import { RpcClient } from "../clients/RpcClient.js";
/**
 * Returns the tx matching the given hash. Throws if the tx is not found.
 */
export async function getTx(endpoint, params) {
    const res = await RpcClient.query(endpoint, GetTxService, params);
    if (!res.tx || !res.txResponse) {
        throw new Error("Tx not found");
    }
    return res;
}
//# sourceMappingURL=getTx.js.map