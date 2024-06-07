import { QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryCFMMConcentratedPoolLinksRequest, QueryCFMMConcentratedPoolLinksResponse, QueryConcentratedPoolIdLinkFromCFMMRequest, QueryConcentratedPoolIdLinkFromCFMMResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolsRequest, QueryPoolsResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse } from "./query_pb.js";
/**
 * @generated from rpc osmosis.gamm.v1beta1.Query.Pools
 */
export declare const QueryPoolsService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "Pools";
    readonly Request: typeof QueryPoolsRequest;
    readonly Response: typeof QueryPoolsResponse;
};
/**
 * Deprecated: please use the alternative in x/poolmanager
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.NumPools
 * @deprecated
 */
export declare const QueryNumPoolsService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "NumPools";
    readonly Request: typeof QueryNumPoolsRequest;
    readonly Response: typeof QueryNumPoolsResponse;
};
/**
 * @generated from rpc osmosis.gamm.v1beta1.Query.TotalLiquidity
 */
export declare const QueryTotalLiquidityService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "TotalLiquidity";
    readonly Request: typeof QueryTotalLiquidityRequest;
    readonly Response: typeof QueryTotalLiquidityResponse;
};
/**
 * PoolsWithFilter allows you to query specific pools with requested
 * parameters
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.PoolsWithFilter
 */
export declare const QueryPoolsWithFilterService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "PoolsWithFilter";
    readonly Request: typeof QueryPoolsWithFilterRequest;
    readonly Response: typeof QueryPoolsWithFilterResponse;
};
/**
 * Deprecated: please use the alternative in x/poolmanager
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.Pool
 * @deprecated
 */
export declare const QueryPoolService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "Pool";
    readonly Request: typeof QueryPoolRequest;
    readonly Response: typeof QueryPoolResponse;
};
/**
 * PoolType returns the type of the pool.
 * Returns "Balancer" as a string literal when the pool is a balancer pool.
 * Errors if the pool is failed to be type caseted.
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.PoolType
 */
export declare const QueryPoolTypeService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "PoolType";
    readonly Request: typeof QueryPoolTypeRequest;
    readonly Response: typeof QueryPoolTypeResponse;
};
/**
 * Simulates joining pool without a swap. Returns the amount of shares you'd
 * get and tokens needed to provide
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.CalcJoinPoolNoSwapShares
 */
export declare const QueryCalcJoinPoolNoSwapSharesService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "CalcJoinPoolNoSwapShares";
    readonly Request: typeof QueryCalcJoinPoolNoSwapSharesRequest;
    readonly Response: typeof QueryCalcJoinPoolNoSwapSharesResponse;
};
/**
 * @generated from rpc osmosis.gamm.v1beta1.Query.CalcJoinPoolShares
 */
export declare const QueryCalcJoinPoolSharesService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "CalcJoinPoolShares";
    readonly Request: typeof QueryCalcJoinPoolSharesRequest;
    readonly Response: typeof QueryCalcJoinPoolSharesResponse;
};
/**
 * @generated from rpc osmosis.gamm.v1beta1.Query.CalcExitPoolCoinsFromShares
 */
export declare const QueryCalcExitPoolCoinsFromSharesService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "CalcExitPoolCoinsFromShares";
    readonly Request: typeof QueryCalcExitPoolCoinsFromSharesRequest;
    readonly Response: typeof QueryCalcExitPoolCoinsFromSharesResponse;
};
/**
 * @generated from rpc osmosis.gamm.v1beta1.Query.PoolParams
 */
export declare const QueryPoolParamsService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "PoolParams";
    readonly Request: typeof QueryPoolParamsRequest;
    readonly Response: typeof QueryPoolParamsResponse;
};
/**
 * Deprecated: please use the alternative in x/poolmanager
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.TotalPoolLiquidity
 * @deprecated
 */
export declare const QueryTotalPoolLiquidityService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "TotalPoolLiquidity";
    readonly Request: typeof QueryTotalPoolLiquidityRequest;
    readonly Response: typeof QueryTotalPoolLiquidityResponse;
};
/**
 * @generated from rpc osmosis.gamm.v1beta1.Query.TotalShares
 */
export declare const QueryTotalSharesService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "TotalShares";
    readonly Request: typeof QueryTotalSharesRequest;
    readonly Response: typeof QueryTotalSharesResponse;
};
/**
 * SpotPrice defines a gRPC query handler that returns the spot price given
 * a base denomination and a quote denomination.
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.SpotPrice
 * @deprecated
 */
export declare const QuerySpotPriceService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "SpotPrice";
    readonly Request: typeof QuerySpotPriceRequest;
    readonly Response: typeof QuerySpotPriceResponse;
};
/**
 * Deprecated: please use the alternative in x/poolmanager
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.EstimateSwapExactAmountIn
 * @deprecated
 */
export declare const QueryEstimateSwapExactAmountInService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "EstimateSwapExactAmountIn";
    readonly Request: typeof QuerySwapExactAmountInRequest;
    readonly Response: typeof QuerySwapExactAmountInResponse;
};
/**
 * Deprecated: please use the alternative in x/poolmanager
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.EstimateSwapExactAmountOut
 * @deprecated
 */
export declare const QueryEstimateSwapExactAmountOutService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "EstimateSwapExactAmountOut";
    readonly Request: typeof QuerySwapExactAmountOutRequest;
    readonly Response: typeof QuerySwapExactAmountOutResponse;
};
/**
 * ConcentratedPoolIdLinkFromBalancer returns the pool id of the concentrated
 * pool that is linked with the given CFMM pool.
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.ConcentratedPoolIdLinkFromCFMM
 */
export declare const QueryConcentratedPoolIdLinkFromCFMMService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "ConcentratedPoolIdLinkFromCFMM";
    readonly Request: typeof QueryConcentratedPoolIdLinkFromCFMMRequest;
    readonly Response: typeof QueryConcentratedPoolIdLinkFromCFMMResponse;
};
/**
 * CFMMConcentratedPoolLinks returns migration links between CFMM and
 * Concentrated pools.
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.CFMMConcentratedPoolLinks
 */
export declare const QueryCFMMConcentratedPoolLinksService: {
    readonly typeName: "osmosis.gamm.v1beta1.Query";
    readonly method: "CFMMConcentratedPoolLinks";
    readonly Request: typeof QueryCFMMConcentratedPoolLinksRequest;
    readonly Response: typeof QueryCFMMConcentratedPoolLinksResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map