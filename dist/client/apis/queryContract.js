import { utf8 } from "../../codec/index.js";
import { CosmwasmWasmV1QuerySmartContractStateService as QuerySmartContractStateService } from "../../protobufs/index.js";
import { RpcClient } from "../clients/RpcClient.js";
/**
 * Queries the contract at `address` with the given `query` JSON message,
 * and returns the parsed JSON response.
 */
export async function queryContract(endpoint, { address, query }) {
    const { data } = await RpcClient.query(endpoint, QuerySmartContractStateService, {
        address,
        queryData: utf8.decode(JSON.stringify(query)),
    });
    return JSON.parse(utf8.encode(data));
}
//# sourceMappingURL=queryContract.js.map