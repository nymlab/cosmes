import { CosmosBankV1beta1QueryAllBalancesService as QueryAllBalancesService } from "../../protobufs/index.js";
import { RpcClient } from "../clients/RpcClient.js";
export async function getNativeBalances(endpoint, params) {
    // TODO: handle pagination
    const { balances } = await RpcClient.query(endpoint, QueryAllBalancesService, params);
    return balances;
}
//# sourceMappingURL=getNativeBalances.js.map