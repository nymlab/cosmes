import { QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryParamsRequest, QueryParamsResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolsRequest, QueryPoolsResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse } from "./query_pb.js";
/**
 * Params returns lockup params.
 *
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.Pools
 */
export declare const QueryPoolsService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "Pools";
    readonly Request: typeof QueryPoolsRequest;
    readonly Response: typeof QueryPoolsResponse;
};
/**
 * Deprecated: please use the alternative in x/poolmanager
 *
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.NumPools
 * @deprecated
 */
export declare const QueryNumPoolsService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "NumPools";
    readonly Request: typeof QueryNumPoolsRequest;
    readonly Response: typeof QueryNumPoolsResponse;
};
/**
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.TotalLiquidity
 */
export declare const QueryTotalLiquidityService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "TotalLiquidity";
    readonly Request: typeof QueryTotalLiquidityRequest;
    readonly Response: typeof QueryTotalLiquidityResponse;
};
/**
 * PoolsWithFilter allows you to query specific pools with requested
 * parameters
 *
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.PoolsWithFilter
 */
export declare const QueryPoolsWithFilterService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "PoolsWithFilter";
    readonly Request: typeof QueryPoolsWithFilterRequest;
    readonly Response: typeof QueryPoolsWithFilterResponse;
};
/**
 * Per Pool gRPC Endpoints
 *
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.Pool
 */
export declare const QueryPoolService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "Pool";
    readonly Request: typeof QueryPoolRequest;
    readonly Response: typeof QueryPoolResponse;
};
/**
 * Simulates joining pool without a swap. Returns the amount of shares you'd
 * get and tokens needed to provide
 *
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.CalcJoinPoolNoSwapShares
 */
export declare const QueryCalcJoinPoolNoSwapSharesService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "CalcJoinPoolNoSwapShares";
    readonly Request: typeof QueryCalcJoinPoolNoSwapSharesRequest;
    readonly Response: typeof QueryCalcJoinPoolNoSwapSharesResponse;
};
/**
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.CalcJoinPoolShares
 */
export declare const QueryCalcJoinPoolSharesService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "CalcJoinPoolShares";
    readonly Request: typeof QueryCalcJoinPoolSharesRequest;
    readonly Response: typeof QueryCalcJoinPoolSharesResponse;
};
/**
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.CalcExitPoolCoinsFromShares
 */
export declare const QueryCalcExitPoolCoinsFromSharesService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "CalcExitPoolCoinsFromShares";
    readonly Request: typeof QueryCalcExitPoolCoinsFromSharesRequest;
    readonly Response: typeof QueryCalcExitPoolCoinsFromSharesResponse;
};
/**
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.PoolParams
 */
export declare const QueryPoolParamsService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "PoolParams";
    readonly Request: typeof QueryPoolParamsRequest;
    readonly Response: typeof QueryPoolParamsResponse;
};
/**
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.TotalPoolLiquidity
 */
export declare const QueryTotalPoolLiquidityService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "TotalPoolLiquidity";
    readonly Request: typeof QueryTotalPoolLiquidityRequest;
    readonly Response: typeof QueryTotalPoolLiquidityResponse;
};
/**
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.TotalShares
 */
export declare const QueryTotalSharesService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "TotalShares";
    readonly Request: typeof QueryTotalSharesRequest;
    readonly Response: typeof QueryTotalSharesResponse;
};
/**
 * SpotPrice defines a gRPC query handler that returns the spot price given
 * a base denomination and a quote denomination.
 *
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.SpotPrice
 * @deprecated
 */
export declare const QuerySpotPriceService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "SpotPrice";
    readonly Request: typeof QuerySpotPriceRequest;
    readonly Response: typeof QuerySpotPriceResponse;
};
/**
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.EstimateSwapExactAmountIn
 */
export declare const QueryEstimateSwapExactAmountInService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "EstimateSwapExactAmountIn";
    readonly Request: typeof QuerySwapExactAmountInRequest;
    readonly Response: typeof QuerySwapExactAmountInResponse;
};
/**
 * @generated from rpc dymensionxyz.dymension.gamm.v1beta1.Query.EstimateSwapExactAmountOut
 */
export declare const QueryEstimateSwapExactAmountOutService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v1beta1.Query";
    readonly method: "EstimateSwapExactAmountOut";
    readonly Request: typeof QuerySwapExactAmountOutRequest;
    readonly Response: typeof QuerySwapExactAmountOutResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map