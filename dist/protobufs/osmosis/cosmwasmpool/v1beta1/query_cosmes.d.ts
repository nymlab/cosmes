import { ContractInfoByPoolIdRequest, ContractInfoByPoolIdResponse, ParamsRequest, ParamsResponse, PoolsRequest, PoolsResponse } from "./query_pb.js";
/**
 * Pools returns all cosmwasm pools
 *
 * @generated from rpc osmosis.cosmwasmpool.v1beta1.Query.Pools
 */
export declare const QueryPoolsService: {
    readonly typeName: "osmosis.cosmwasmpool.v1beta1.Query";
    readonly method: "Pools";
    readonly Request: typeof PoolsRequest;
    readonly Response: typeof PoolsResponse;
};
/**
 * Params returns the parameters of the x/cosmwasmpool module.
 *
 * @generated from rpc osmosis.cosmwasmpool.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "osmosis.cosmwasmpool.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof ParamsRequest;
    readonly Response: typeof ParamsResponse;
};
/**
 * @generated from rpc osmosis.cosmwasmpool.v1beta1.Query.ContractInfoByPoolId
 */
export declare const QueryContractInfoByPoolIdService: {
    readonly typeName: "osmosis.cosmwasmpool.v1beta1.Query";
    readonly method: "ContractInfoByPoolId";
    readonly Request: typeof ContractInfoByPoolIdRequest;
    readonly Response: typeof ContractInfoByPoolIdResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map