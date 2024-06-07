import { QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * Params queries the parameters of x/feemarket module.
 *
 * @generated from rpc ethermint.feemarket.v1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "ethermint.feemarket.v1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * BaseFee queries the base fee of the parent block of the current block.
 *
 * @generated from rpc ethermint.feemarket.v1.Query.BaseFee
 */
export declare const QueryBaseFeeService: {
    readonly typeName: "ethermint.feemarket.v1.Query";
    readonly method: "BaseFee";
    readonly Request: typeof QueryBaseFeeRequest;
    readonly Response: typeof QueryBaseFeeResponse;
};
/**
 * BlockGas queries the gas used at a given block height
 *
 * @generated from rpc ethermint.feemarket.v1.Query.BlockGas
 */
export declare const QueryBlockGasService: {
    readonly typeName: "ethermint.feemarket.v1.Query";
    readonly method: "BlockGas";
    readonly Request: typeof QueryBlockGasRequest;
    readonly Response: typeof QueryBlockGasResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map