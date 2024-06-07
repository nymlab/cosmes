import { CosmosAuthV1beta1QueryAccountService as QueryAccountService } from "../../protobufs/index.js";
import { RpcClient } from "../clients/RpcClient.js";
export async function getAccount(endpoint, params) {
    const { account } = await RpcClient.query(endpoint, QueryAccountService, params);
    if (!account) {
        throw new Error("Account not found");
    }
    return account;
}
//# sourceMappingURL=getAccount.js.map