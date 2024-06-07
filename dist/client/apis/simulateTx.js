import { CosmosTxV1beta1ServiceSimulateService as SimulateService } from "../../protobufs/index.js";
import { RpcClient } from "../clients/RpcClient.js";
/**
 * Simulates a tx for the purpose of estimating gas fees.
 */
export async function simulateTx(endpoint, { tx, ...params }) {
    return RpcClient.query(endpoint, SimulateService, {
        txBytes: tx.toUnsignedProto(params).toBinary(),
    });
}
//# sourceMappingURL=simulateTx.js.map