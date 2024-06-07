import { AllPoolsRequest, AllPoolsResponse, EstimateSinglePoolSwapExactAmountInRequest, EstimateSinglePoolSwapExactAmountOutRequest, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountInWithPrimitiveTypesRequest, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, EstimateSwapExactAmountOutWithPrimitiveTypesRequest, EstimateTradeBasedOnPriceImpactRequest, EstimateTradeBasedOnPriceImpactResponse, ListPoolsByDenomRequest, ListPoolsByDenomResponse, NumPoolsRequest, NumPoolsResponse, ParamsRequest, ParamsResponse, PoolRequest, PoolResponse, SpotPriceRequest, SpotPriceResponse, TotalLiquidityRequest, TotalLiquidityResponse, TotalPoolLiquidityRequest, TotalPoolLiquidityResponse, TotalVolumeForPoolRequest, TotalVolumeForPoolResponse, TradingPairTakerFeeRequest, TradingPairTakerFeeResponse } from "./query_pb.js";
/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof ParamsRequest;
    readonly Response: typeof ParamsResponse;
};
/**
 * Estimates swap amount out given in.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSwapExactAmountIn
 */
export declare const QueryEstimateSwapExactAmountInService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "EstimateSwapExactAmountIn";
    readonly Request: typeof EstimateSwapExactAmountInRequest;
    readonly Response: typeof EstimateSwapExactAmountInResponse;
};
/**
 * EstimateSwapExactAmountInWithPrimitiveTypes is an alternative query for
 * EstimateSwapExactAmountIn. Supports query via GRPC-Gateway by using
 * primitive types instead of repeated structs. Each index in the
 * routes_pool_id field corresponds to the respective routes_token_out_denom
 * value, thus they are required to have the same length and are grouped
 * together as pairs.
 * example usage:
 * http://0.0.0.0:1317/osmosis/poolmanager/v1beta1/1/estimate/
 * swap_exact_amount_in_with_primitive_types?token_in=100000stake&routes_token_out_denom=uatom
 * &routes_token_out_denom=uion&routes_pool_id=1&routes_pool_id=2
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSwapExactAmountInWithPrimitiveTypes
 */
export declare const QueryEstimateSwapExactAmountInWithPrimitiveTypesService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "EstimateSwapExactAmountInWithPrimitiveTypes";
    readonly Request: typeof EstimateSwapExactAmountInWithPrimitiveTypesRequest;
    readonly Response: typeof EstimateSwapExactAmountInResponse;
};
/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSinglePoolSwapExactAmountIn
 */
export declare const QueryEstimateSinglePoolSwapExactAmountInService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "EstimateSinglePoolSwapExactAmountIn";
    readonly Request: typeof EstimateSinglePoolSwapExactAmountInRequest;
    readonly Response: typeof EstimateSwapExactAmountInResponse;
};
/**
 * Estimates swap amount in given out.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSwapExactAmountOut
 */
export declare const QueryEstimateSwapExactAmountOutService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "EstimateSwapExactAmountOut";
    readonly Request: typeof EstimateSwapExactAmountOutRequest;
    readonly Response: typeof EstimateSwapExactAmountOutResponse;
};
/**
 * Estimates swap amount in given out.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSwapExactAmountOutWithPrimitiveTypes
 */
export declare const QueryEstimateSwapExactAmountOutWithPrimitiveTypesService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "EstimateSwapExactAmountOutWithPrimitiveTypes";
    readonly Request: typeof EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
    readonly Response: typeof EstimateSwapExactAmountOutResponse;
};
/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSinglePoolSwapExactAmountOut
 */
export declare const QueryEstimateSinglePoolSwapExactAmountOutService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "EstimateSinglePoolSwapExactAmountOut";
    readonly Request: typeof EstimateSinglePoolSwapExactAmountOutRequest;
    readonly Response: typeof EstimateSwapExactAmountOutResponse;
};
/**
 * Returns the total number of pools existing in Osmosis.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.NumPools
 */
export declare const QueryNumPoolsService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "NumPools";
    readonly Request: typeof NumPoolsRequest;
    readonly Response: typeof NumPoolsResponse;
};
/**
 * Pool returns the Pool specified by the pool id
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.Pool
 */
export declare const QueryPoolService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "Pool";
    readonly Request: typeof PoolRequest;
    readonly Response: typeof PoolResponse;
};
/**
 * AllPools returns all pools on the Osmosis chain sorted by IDs.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.AllPools
 */
export declare const QueryAllPoolsService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "AllPools";
    readonly Request: typeof AllPoolsRequest;
    readonly Response: typeof AllPoolsResponse;
};
/**
 * ListPoolsByDenom return all pools by denom
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.ListPoolsByDenom
 */
export declare const QueryListPoolsByDenomService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "ListPoolsByDenom";
    readonly Request: typeof ListPoolsByDenomRequest;
    readonly Response: typeof ListPoolsByDenomResponse;
};
/**
 * SpotPrice defines a gRPC query handler that returns the spot price given
 * a base denomination and a quote denomination.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.SpotPrice
 */
export declare const QuerySpotPriceService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "SpotPrice";
    readonly Request: typeof SpotPriceRequest;
    readonly Response: typeof SpotPriceResponse;
};
/**
 * TotalPoolLiquidity returns the total liquidity of the specified pool.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.TotalPoolLiquidity
 */
export declare const QueryTotalPoolLiquidityService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "TotalPoolLiquidity";
    readonly Request: typeof TotalPoolLiquidityRequest;
    readonly Response: typeof TotalPoolLiquidityResponse;
};
/**
 * TotalLiquidity returns the total liquidity across all pools.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.TotalLiquidity
 */
export declare const QueryTotalLiquidityService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "TotalLiquidity";
    readonly Request: typeof TotalLiquidityRequest;
    readonly Response: typeof TotalLiquidityResponse;
};
/**
 * TotalVolumeForPool returns the total volume of the specified pool.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.TotalVolumeForPool
 */
export declare const QueryTotalVolumeForPoolService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "TotalVolumeForPool";
    readonly Request: typeof TotalVolumeForPoolRequest;
    readonly Response: typeof TotalVolumeForPoolResponse;
};
/**
 * TradingPairTakerFee returns the taker fee for a given set of denoms
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.TradingPairTakerFee
 */
export declare const QueryTradingPairTakerFeeService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "TradingPairTakerFee";
    readonly Request: typeof TradingPairTakerFeeRequest;
    readonly Response: typeof TradingPairTakerFeeResponse;
};
/**
 * EstimateTradeBasedOnPriceImpact returns an estimated trade based on price
 * impact, if a trade cannot be estimated a 0 input and 0 output would be
 * returned.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateTradeBasedOnPriceImpact
 */
export declare const QueryEstimateTradeBasedOnPriceImpactService: {
    readonly typeName: "osmosis.poolmanager.v1beta1.Query";
    readonly method: "EstimateTradeBasedOnPriceImpact";
    readonly Request: typeof EstimateTradeBasedOnPriceImpactRequest;
    readonly Response: typeof EstimateTradeBasedOnPriceImpactResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map