import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./genesis_pb.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { SwapAmountInRoute, SwapAmountOutRoute } from "../../poolmanager/v1beta1/swap_route_pb.js";
/**
 * ================================================== Params
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * @generated from field: dymensionxyz.dymension.gamm.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * =============================== Pool
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryPoolRequest
 */
export declare class QueryPoolRequest extends Message<QueryPoolRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<QueryPoolRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryPoolRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPoolRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPoolRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPoolRequest;
    static equals(a: QueryPoolRequest | PlainMessage<QueryPoolRequest> | undefined, b: QueryPoolRequest | PlainMessage<QueryPoolRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryPoolResponse
 */
export declare class QueryPoolResponse extends Message<QueryPoolResponse> {
    /**
     * @generated from field: google.protobuf.Any pool = 1;
     */
    pool?: Any;
    constructor(data?: PartialMessage<QueryPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPoolResponse;
    static equals(a: QueryPoolResponse | PlainMessage<QueryPoolResponse> | undefined, b: QueryPoolResponse | PlainMessage<QueryPoolResponse> | undefined): boolean;
}
/**
 * =============================== Pools
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryPoolsRequest
 */
export declare class QueryPoolsRequest extends Message<QueryPoolsRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryPoolsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryPoolsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPoolsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPoolsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPoolsRequest;
    static equals(a: QueryPoolsRequest | PlainMessage<QueryPoolsRequest> | undefined, b: QueryPoolsRequest | PlainMessage<QueryPoolsRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryPoolsResponse
 */
export declare class QueryPoolsResponse extends Message<QueryPoolsResponse> {
    /**
     * @generated from field: repeated google.protobuf.Any pools = 1;
     */
    pools: Any[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryPoolsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryPoolsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPoolsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPoolsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPoolsResponse;
    static equals(a: QueryPoolsResponse | PlainMessage<QueryPoolsResponse> | undefined, b: QueryPoolsResponse | PlainMessage<QueryPoolsResponse> | undefined): boolean;
}
/**
 * =============================== NumPools
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryNumPoolsRequest
 * @deprecated
 */
export declare class QueryNumPoolsRequest extends Message<QueryNumPoolsRequest> {
    constructor(data?: PartialMessage<QueryNumPoolsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryNumPoolsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNumPoolsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNumPoolsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNumPoolsRequest;
    static equals(a: QueryNumPoolsRequest | PlainMessage<QueryNumPoolsRequest> | undefined, b: QueryNumPoolsRequest | PlainMessage<QueryNumPoolsRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryNumPoolsResponse
 * @deprecated
 */
export declare class QueryNumPoolsResponse extends Message<QueryNumPoolsResponse> {
    /**
     * @generated from field: uint64 num_pools = 1;
     */
    numPools: bigint;
    constructor(data?: PartialMessage<QueryNumPoolsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryNumPoolsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNumPoolsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNumPoolsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNumPoolsResponse;
    static equals(a: QueryNumPoolsResponse | PlainMessage<QueryNumPoolsResponse> | undefined, b: QueryNumPoolsResponse | PlainMessage<QueryNumPoolsResponse> | undefined): boolean;
}
/**
 * =============================== CalcJoinPoolShares
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryCalcJoinPoolSharesRequest
 */
export declare class QueryCalcJoinPoolSharesRequest extends Message<QueryCalcJoinPoolSharesRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin tokens_in = 2;
     */
    tokensIn: Coin[];
    constructor(data?: PartialMessage<QueryCalcJoinPoolSharesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryCalcJoinPoolSharesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCalcJoinPoolSharesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCalcJoinPoolSharesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCalcJoinPoolSharesRequest;
    static equals(a: QueryCalcJoinPoolSharesRequest | PlainMessage<QueryCalcJoinPoolSharesRequest> | undefined, b: QueryCalcJoinPoolSharesRequest | PlainMessage<QueryCalcJoinPoolSharesRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryCalcJoinPoolSharesResponse
 */
export declare class QueryCalcJoinPoolSharesResponse extends Message<QueryCalcJoinPoolSharesResponse> {
    /**
     * @generated from field: string share_out_amount = 1;
     */
    shareOutAmount: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin tokens_out = 2;
     */
    tokensOut: Coin[];
    constructor(data?: PartialMessage<QueryCalcJoinPoolSharesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryCalcJoinPoolSharesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCalcJoinPoolSharesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCalcJoinPoolSharesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCalcJoinPoolSharesResponse;
    static equals(a: QueryCalcJoinPoolSharesResponse | PlainMessage<QueryCalcJoinPoolSharesResponse> | undefined, b: QueryCalcJoinPoolSharesResponse | PlainMessage<QueryCalcJoinPoolSharesResponse> | undefined): boolean;
}
/**
 * =============================== CalcExitPoolCoinsFromShares
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest
 */
export declare class QueryCalcExitPoolCoinsFromSharesRequest extends Message<QueryCalcExitPoolCoinsFromSharesRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string share_in_amount = 2;
     */
    shareInAmount: string;
    constructor(data?: PartialMessage<QueryCalcExitPoolCoinsFromSharesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCalcExitPoolCoinsFromSharesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCalcExitPoolCoinsFromSharesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCalcExitPoolCoinsFromSharesRequest;
    static equals(a: QueryCalcExitPoolCoinsFromSharesRequest | PlainMessage<QueryCalcExitPoolCoinsFromSharesRequest> | undefined, b: QueryCalcExitPoolCoinsFromSharesRequest | PlainMessage<QueryCalcExitPoolCoinsFromSharesRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse
 */
export declare class QueryCalcExitPoolCoinsFromSharesResponse extends Message<QueryCalcExitPoolCoinsFromSharesResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin tokens_out = 1;
     */
    tokensOut: Coin[];
    constructor(data?: PartialMessage<QueryCalcExitPoolCoinsFromSharesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCalcExitPoolCoinsFromSharesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCalcExitPoolCoinsFromSharesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCalcExitPoolCoinsFromSharesResponse;
    static equals(a: QueryCalcExitPoolCoinsFromSharesResponse | PlainMessage<QueryCalcExitPoolCoinsFromSharesResponse> | undefined, b: QueryCalcExitPoolCoinsFromSharesResponse | PlainMessage<QueryCalcExitPoolCoinsFromSharesResponse> | undefined): boolean;
}
/**
 * =============================== PoolParams
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryPoolParamsRequest
 */
export declare class QueryPoolParamsRequest extends Message<QueryPoolParamsRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<QueryPoolParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryPoolParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPoolParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPoolParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPoolParamsRequest;
    static equals(a: QueryPoolParamsRequest | PlainMessage<QueryPoolParamsRequest> | undefined, b: QueryPoolParamsRequest | PlainMessage<QueryPoolParamsRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryPoolParamsResponse
 */
export declare class QueryPoolParamsResponse extends Message<QueryPoolParamsResponse> {
    /**
     * @generated from field: google.protobuf.Any params = 1;
     */
    params?: Any;
    constructor(data?: PartialMessage<QueryPoolParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryPoolParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPoolParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPoolParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPoolParamsResponse;
    static equals(a: QueryPoolParamsResponse | PlainMessage<QueryPoolParamsResponse> | undefined, b: QueryPoolParamsResponse | PlainMessage<QueryPoolParamsResponse> | undefined): boolean;
}
/**
 * =============================== PoolLiquidity
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryTotalPoolLiquidityRequest
 */
export declare class QueryTotalPoolLiquidityRequest extends Message<QueryTotalPoolLiquidityRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<QueryTotalPoolLiquidityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryTotalPoolLiquidityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalPoolLiquidityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalPoolLiquidityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalPoolLiquidityRequest;
    static equals(a: QueryTotalPoolLiquidityRequest | PlainMessage<QueryTotalPoolLiquidityRequest> | undefined, b: QueryTotalPoolLiquidityRequest | PlainMessage<QueryTotalPoolLiquidityRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryTotalPoolLiquidityResponse
 */
export declare class QueryTotalPoolLiquidityResponse extends Message<QueryTotalPoolLiquidityResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin liquidity = 1;
     */
    liquidity: Coin[];
    constructor(data?: PartialMessage<QueryTotalPoolLiquidityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryTotalPoolLiquidityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalPoolLiquidityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalPoolLiquidityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalPoolLiquidityResponse;
    static equals(a: QueryTotalPoolLiquidityResponse | PlainMessage<QueryTotalPoolLiquidityResponse> | undefined, b: QueryTotalPoolLiquidityResponse | PlainMessage<QueryTotalPoolLiquidityResponse> | undefined): boolean;
}
/**
 * =============================== TotalShares
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryTotalSharesRequest
 */
export declare class QueryTotalSharesRequest extends Message<QueryTotalSharesRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<QueryTotalSharesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryTotalSharesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalSharesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalSharesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalSharesRequest;
    static equals(a: QueryTotalSharesRequest | PlainMessage<QueryTotalSharesRequest> | undefined, b: QueryTotalSharesRequest | PlainMessage<QueryTotalSharesRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryTotalSharesResponse
 */
export declare class QueryTotalSharesResponse extends Message<QueryTotalSharesResponse> {
    /**
     * @generated from field: cosmos.base.v1beta1.Coin total_shares = 1;
     */
    totalShares?: Coin;
    constructor(data?: PartialMessage<QueryTotalSharesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryTotalSharesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalSharesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalSharesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalSharesResponse;
    static equals(a: QueryTotalSharesResponse | PlainMessage<QueryTotalSharesResponse> | undefined, b: QueryTotalSharesResponse | PlainMessage<QueryTotalSharesResponse> | undefined): boolean;
}
/**
 * =============================== CalcJoinPoolNoSwapShares
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest
 */
export declare class QueryCalcJoinPoolNoSwapSharesRequest extends Message<QueryCalcJoinPoolNoSwapSharesRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin tokens_in = 2;
     */
    tokensIn: Coin[];
    constructor(data?: PartialMessage<QueryCalcJoinPoolNoSwapSharesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCalcJoinPoolNoSwapSharesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCalcJoinPoolNoSwapSharesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCalcJoinPoolNoSwapSharesRequest;
    static equals(a: QueryCalcJoinPoolNoSwapSharesRequest | PlainMessage<QueryCalcJoinPoolNoSwapSharesRequest> | undefined, b: QueryCalcJoinPoolNoSwapSharesRequest | PlainMessage<QueryCalcJoinPoolNoSwapSharesRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse
 */
export declare class QueryCalcJoinPoolNoSwapSharesResponse extends Message<QueryCalcJoinPoolNoSwapSharesResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin tokens_out = 1;
     */
    tokensOut: Coin[];
    /**
     * @generated from field: string shares_out = 2;
     */
    sharesOut: string;
    constructor(data?: PartialMessage<QueryCalcJoinPoolNoSwapSharesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCalcJoinPoolNoSwapSharesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCalcJoinPoolNoSwapSharesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCalcJoinPoolNoSwapSharesResponse;
    static equals(a: QueryCalcJoinPoolNoSwapSharesResponse | PlainMessage<QueryCalcJoinPoolNoSwapSharesResponse> | undefined, b: QueryCalcJoinPoolNoSwapSharesResponse | PlainMessage<QueryCalcJoinPoolNoSwapSharesResponse> | undefined): boolean;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QuerySpotPriceRequest
 * @deprecated
 */
export declare class QuerySpotPriceRequest extends Message<QuerySpotPriceRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string base_asset_denom = 2;
     */
    baseAssetDenom: string;
    /**
     * @generated from field: string quote_asset_denom = 3;
     */
    quoteAssetDenom: string;
    constructor(data?: PartialMessage<QuerySpotPriceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QuerySpotPriceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotPriceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotPriceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotPriceRequest;
    static equals(a: QuerySpotPriceRequest | PlainMessage<QuerySpotPriceRequest> | undefined, b: QuerySpotPriceRequest | PlainMessage<QuerySpotPriceRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryPoolsWithFilterRequest
 */
export declare class QueryPoolsWithFilterRequest extends Message<QueryPoolsWithFilterRequest> {
    /**
     * String of the coins in single string seperated by comma. Ex)
     * 10uatom,100uosmo
     *
     * @generated from field: string min_liquidity = 1;
     */
    minLiquidity: string;
    /**
     * @generated from field: string pool_type = 2;
     */
    poolType: string;
    /**
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 3;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryPoolsWithFilterRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryPoolsWithFilterRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPoolsWithFilterRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPoolsWithFilterRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPoolsWithFilterRequest;
    static equals(a: QueryPoolsWithFilterRequest | PlainMessage<QueryPoolsWithFilterRequest> | undefined, b: QueryPoolsWithFilterRequest | PlainMessage<QueryPoolsWithFilterRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryPoolsWithFilterResponse
 */
export declare class QueryPoolsWithFilterResponse extends Message<QueryPoolsWithFilterResponse> {
    /**
     * @generated from field: repeated google.protobuf.Any pools = 1;
     */
    pools: Any[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryPoolsWithFilterResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryPoolsWithFilterResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPoolsWithFilterResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPoolsWithFilterResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPoolsWithFilterResponse;
    static equals(a: QueryPoolsWithFilterResponse | PlainMessage<QueryPoolsWithFilterResponse> | undefined, b: QueryPoolsWithFilterResponse | PlainMessage<QueryPoolsWithFilterResponse> | undefined): boolean;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QuerySpotPriceResponse
 * @deprecated
 */
export declare class QuerySpotPriceResponse extends Message<QuerySpotPriceResponse> {
    /**
     * String of the Dec. Ex) 10.203uatom
     *
     * @generated from field: string spot_price = 1;
     */
    spotPrice: string;
    constructor(data?: PartialMessage<QuerySpotPriceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QuerySpotPriceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotPriceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotPriceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotPriceResponse;
    static equals(a: QuerySpotPriceResponse | PlainMessage<QuerySpotPriceResponse> | undefined, b: QuerySpotPriceResponse | PlainMessage<QuerySpotPriceResponse> | undefined): boolean;
}
/**
 * =============================== EstimateSwapExactAmountIn
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QuerySwapExactAmountInRequest
 */
export declare class QuerySwapExactAmountInRequest extends Message<QuerySwapExactAmountInRequest> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    /**
     * @generated from field: string token_in = 3;
     */
    tokenIn: string;
    /**
     * @generated from field: repeated dymensionxyz.dymension.poolmanager.v1beta1.SwapAmountInRoute routes = 4;
     */
    routes: SwapAmountInRoute[];
    constructor(data?: PartialMessage<QuerySwapExactAmountInRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QuerySwapExactAmountInRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySwapExactAmountInRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySwapExactAmountInRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySwapExactAmountInRequest;
    static equals(a: QuerySwapExactAmountInRequest | PlainMessage<QuerySwapExactAmountInRequest> | undefined, b: QuerySwapExactAmountInRequest | PlainMessage<QuerySwapExactAmountInRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QuerySwapExactAmountInResponse
 */
export declare class QuerySwapExactAmountInResponse extends Message<QuerySwapExactAmountInResponse> {
    /**
     * @generated from field: string token_out_amount = 1;
     */
    tokenOutAmount: string;
    constructor(data?: PartialMessage<QuerySwapExactAmountInResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QuerySwapExactAmountInResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySwapExactAmountInResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySwapExactAmountInResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySwapExactAmountInResponse;
    static equals(a: QuerySwapExactAmountInResponse | PlainMessage<QuerySwapExactAmountInResponse> | undefined, b: QuerySwapExactAmountInResponse | PlainMessage<QuerySwapExactAmountInResponse> | undefined): boolean;
}
/**
 * =============================== EstimateSwapExactAmountOut
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QuerySwapExactAmountOutRequest
 */
export declare class QuerySwapExactAmountOutRequest extends Message<QuerySwapExactAmountOutRequest> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    /**
     * @generated from field: repeated dymensionxyz.dymension.poolmanager.v1beta1.SwapAmountOutRoute routes = 3;
     */
    routes: SwapAmountOutRoute[];
    /**
     * @generated from field: string token_out = 4;
     */
    tokenOut: string;
    constructor(data?: PartialMessage<QuerySwapExactAmountOutRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QuerySwapExactAmountOutRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySwapExactAmountOutRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySwapExactAmountOutRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySwapExactAmountOutRequest;
    static equals(a: QuerySwapExactAmountOutRequest | PlainMessage<QuerySwapExactAmountOutRequest> | undefined, b: QuerySwapExactAmountOutRequest | PlainMessage<QuerySwapExactAmountOutRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QuerySwapExactAmountOutResponse
 */
export declare class QuerySwapExactAmountOutResponse extends Message<QuerySwapExactAmountOutResponse> {
    /**
     * @generated from field: string token_in_amount = 1;
     */
    tokenInAmount: string;
    constructor(data?: PartialMessage<QuerySwapExactAmountOutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QuerySwapExactAmountOutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySwapExactAmountOutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySwapExactAmountOutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySwapExactAmountOutResponse;
    static equals(a: QuerySwapExactAmountOutResponse | PlainMessage<QuerySwapExactAmountOutResponse> | undefined, b: QuerySwapExactAmountOutResponse | PlainMessage<QuerySwapExactAmountOutResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryTotalLiquidityRequest
 */
export declare class QueryTotalLiquidityRequest extends Message<QueryTotalLiquidityRequest> {
    constructor(data?: PartialMessage<QueryTotalLiquidityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryTotalLiquidityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalLiquidityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalLiquidityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalLiquidityRequest;
    static equals(a: QueryTotalLiquidityRequest | PlainMessage<QueryTotalLiquidityRequest> | undefined, b: QueryTotalLiquidityRequest | PlainMessage<QueryTotalLiquidityRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.QueryTotalLiquidityResponse
 */
export declare class QueryTotalLiquidityResponse extends Message<QueryTotalLiquidityResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin liquidity = 1;
     */
    liquidity: Coin[];
    constructor(data?: PartialMessage<QueryTotalLiquidityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.QueryTotalLiquidityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalLiquidityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalLiquidityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalLiquidityResponse;
    static equals(a: QueryTotalLiquidityResponse | PlainMessage<QueryTotalLiquidityResponse> | undefined, b: QueryTotalLiquidityResponse | PlainMessage<QueryTotalLiquidityResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map