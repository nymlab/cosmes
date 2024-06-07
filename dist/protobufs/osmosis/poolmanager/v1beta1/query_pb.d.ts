import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./genesis_pb.js";
import { SwapAmountInRoute, SwapAmountOutRoute } from "./swap_route_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * =============================== Params
 *
 * @generated from message osmosis.poolmanager.v1beta1.ParamsRequest
 */
export declare class ParamsRequest extends Message<ParamsRequest> {
    constructor(data?: PartialMessage<ParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.ParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsRequest;
    static equals(a: ParamsRequest | PlainMessage<ParamsRequest> | undefined, b: ParamsRequest | PlainMessage<ParamsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.ParamsResponse
 */
export declare class ParamsResponse extends Message<ParamsResponse> {
    /**
     * @generated from field: osmosis.poolmanager.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<ParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.ParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsResponse;
    static equals(a: ParamsResponse | PlainMessage<ParamsResponse> | undefined, b: ParamsResponse | PlainMessage<ParamsResponse> | undefined): boolean;
}
/**
 * =============================== EstimateSwapExactAmountIn
 *
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest
 */
export declare class EstimateSwapExactAmountInRequest extends Message<EstimateSwapExactAmountInRequest> {
    /**
     * @generated from field: uint64 pool_id = 2 [deprecated = true];
     * @deprecated
     */
    poolId: bigint;
    /**
     * @generated from field: string token_in = 3;
     */
    tokenIn: string;
    /**
     * @generated from field: repeated osmosis.poolmanager.v1beta1.SwapAmountInRoute routes = 4;
     */
    routes: SwapAmountInRoute[];
    constructor(data?: PartialMessage<EstimateSwapExactAmountInRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSwapExactAmountInRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountInRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountInRequest;
    static equals(a: EstimateSwapExactAmountInRequest | PlainMessage<EstimateSwapExactAmountInRequest> | undefined, b: EstimateSwapExactAmountInRequest | PlainMessage<EstimateSwapExactAmountInRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest
 */
export declare class EstimateSwapExactAmountInWithPrimitiveTypesRequest extends Message<EstimateSwapExactAmountInWithPrimitiveTypesRequest> {
    /**
     * @generated from field: uint64 pool_id = 1 [deprecated = true];
     * @deprecated
     */
    poolId: bigint;
    /**
     * @generated from field: string token_in = 2;
     */
    tokenIn: string;
    /**
     * @generated from field: repeated uint64 routes_pool_id = 3;
     */
    routesPoolId: bigint[];
    /**
     * @generated from field: repeated string routes_token_out_denom = 4;
     */
    routesTokenOutDenom: string[];
    constructor(data?: PartialMessage<EstimateSwapExactAmountInWithPrimitiveTypesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSwapExactAmountInWithPrimitiveTypesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountInWithPrimitiveTypesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountInWithPrimitiveTypesRequest;
    static equals(a: EstimateSwapExactAmountInWithPrimitiveTypesRequest | PlainMessage<EstimateSwapExactAmountInWithPrimitiveTypesRequest> | undefined, b: EstimateSwapExactAmountInWithPrimitiveTypesRequest | PlainMessage<EstimateSwapExactAmountInWithPrimitiveTypesRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest
 */
export declare class EstimateSinglePoolSwapExactAmountInRequest extends Message<EstimateSinglePoolSwapExactAmountInRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string token_in = 2;
     */
    tokenIn: string;
    /**
     * @generated from field: string token_out_denom = 3;
     */
    tokenOutDenom: string;
    constructor(data?: PartialMessage<EstimateSinglePoolSwapExactAmountInRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSinglePoolSwapExactAmountInRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSinglePoolSwapExactAmountInRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSinglePoolSwapExactAmountInRequest;
    static equals(a: EstimateSinglePoolSwapExactAmountInRequest | PlainMessage<EstimateSinglePoolSwapExactAmountInRequest> | undefined, b: EstimateSinglePoolSwapExactAmountInRequest | PlainMessage<EstimateSinglePoolSwapExactAmountInRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse
 */
export declare class EstimateSwapExactAmountInResponse extends Message<EstimateSwapExactAmountInResponse> {
    /**
     * @generated from field: string token_out_amount = 1;
     */
    tokenOutAmount: string;
    constructor(data?: PartialMessage<EstimateSwapExactAmountInResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSwapExactAmountInResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountInResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountInResponse;
    static equals(a: EstimateSwapExactAmountInResponse | PlainMessage<EstimateSwapExactAmountInResponse> | undefined, b: EstimateSwapExactAmountInResponse | PlainMessage<EstimateSwapExactAmountInResponse> | undefined): boolean;
}
/**
 * =============================== EstimateSwapExactAmountOut
 *
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest
 */
export declare class EstimateSwapExactAmountOutRequest extends Message<EstimateSwapExactAmountOutRequest> {
    /**
     * @generated from field: uint64 pool_id = 2 [deprecated = true];
     * @deprecated
     */
    poolId: bigint;
    /**
     * @generated from field: repeated osmosis.poolmanager.v1beta1.SwapAmountOutRoute routes = 3;
     */
    routes: SwapAmountOutRoute[];
    /**
     * @generated from field: string token_out = 4;
     */
    tokenOut: string;
    constructor(data?: PartialMessage<EstimateSwapExactAmountOutRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSwapExactAmountOutRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountOutRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountOutRequest;
    static equals(a: EstimateSwapExactAmountOutRequest | PlainMessage<EstimateSwapExactAmountOutRequest> | undefined, b: EstimateSwapExactAmountOutRequest | PlainMessage<EstimateSwapExactAmountOutRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest
 */
export declare class EstimateSwapExactAmountOutWithPrimitiveTypesRequest extends Message<EstimateSwapExactAmountOutWithPrimitiveTypesRequest> {
    /**
     * @generated from field: uint64 pool_id = 1 [deprecated = true];
     * @deprecated
     */
    poolId: bigint;
    /**
     * @generated from field: repeated uint64 routes_pool_id = 2;
     */
    routesPoolId: bigint[];
    /**
     * @generated from field: repeated string routes_token_in_denom = 3;
     */
    routesTokenInDenom: string[];
    /**
     * @generated from field: string token_out = 4;
     */
    tokenOut: string;
    constructor(data?: PartialMessage<EstimateSwapExactAmountOutWithPrimitiveTypesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
    static equals(a: EstimateSwapExactAmountOutWithPrimitiveTypesRequest | PlainMessage<EstimateSwapExactAmountOutWithPrimitiveTypesRequest> | undefined, b: EstimateSwapExactAmountOutWithPrimitiveTypesRequest | PlainMessage<EstimateSwapExactAmountOutWithPrimitiveTypesRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest
 */
export declare class EstimateSinglePoolSwapExactAmountOutRequest extends Message<EstimateSinglePoolSwapExactAmountOutRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string token_in_denom = 2;
     */
    tokenInDenom: string;
    /**
     * @generated from field: string token_out = 3;
     */
    tokenOut: string;
    constructor(data?: PartialMessage<EstimateSinglePoolSwapExactAmountOutRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSinglePoolSwapExactAmountOutRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSinglePoolSwapExactAmountOutRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSinglePoolSwapExactAmountOutRequest;
    static equals(a: EstimateSinglePoolSwapExactAmountOutRequest | PlainMessage<EstimateSinglePoolSwapExactAmountOutRequest> | undefined, b: EstimateSinglePoolSwapExactAmountOutRequest | PlainMessage<EstimateSinglePoolSwapExactAmountOutRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse
 */
export declare class EstimateSwapExactAmountOutResponse extends Message<EstimateSwapExactAmountOutResponse> {
    /**
     * @generated from field: string token_in_amount = 1;
     */
    tokenInAmount: string;
    constructor(data?: PartialMessage<EstimateSwapExactAmountOutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSwapExactAmountOutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountOutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountOutResponse;
    static equals(a: EstimateSwapExactAmountOutResponse | PlainMessage<EstimateSwapExactAmountOutResponse> | undefined, b: EstimateSwapExactAmountOutResponse | PlainMessage<EstimateSwapExactAmountOutResponse> | undefined): boolean;
}
/**
 * =============================== NumPools
 *
 * @generated from message osmosis.poolmanager.v1beta1.NumPoolsRequest
 */
export declare class NumPoolsRequest extends Message<NumPoolsRequest> {
    constructor(data?: PartialMessage<NumPoolsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.NumPoolsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NumPoolsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NumPoolsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NumPoolsRequest;
    static equals(a: NumPoolsRequest | PlainMessage<NumPoolsRequest> | undefined, b: NumPoolsRequest | PlainMessage<NumPoolsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.NumPoolsResponse
 */
export declare class NumPoolsResponse extends Message<NumPoolsResponse> {
    /**
     * @generated from field: uint64 num_pools = 1;
     */
    numPools: bigint;
    constructor(data?: PartialMessage<NumPoolsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.NumPoolsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NumPoolsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NumPoolsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NumPoolsResponse;
    static equals(a: NumPoolsResponse | PlainMessage<NumPoolsResponse> | undefined, b: NumPoolsResponse | PlainMessage<NumPoolsResponse> | undefined): boolean;
}
/**
 * =============================== Pool
 *
 * @generated from message osmosis.poolmanager.v1beta1.PoolRequest
 */
export declare class PoolRequest extends Message<PoolRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<PoolRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.PoolRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolRequest;
    static equals(a: PoolRequest | PlainMessage<PoolRequest> | undefined, b: PoolRequest | PlainMessage<PoolRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.PoolResponse
 */
export declare class PoolResponse extends Message<PoolResponse> {
    /**
     * @generated from field: google.protobuf.Any pool = 1;
     */
    pool?: Any;
    constructor(data?: PartialMessage<PoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.PoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolResponse;
    static equals(a: PoolResponse | PlainMessage<PoolResponse> | undefined, b: PoolResponse | PlainMessage<PoolResponse> | undefined): boolean;
}
/**
 * =============================== AllPools
 *
 * @generated from message osmosis.poolmanager.v1beta1.AllPoolsRequest
 */
export declare class AllPoolsRequest extends Message<AllPoolsRequest> {
    constructor(data?: PartialMessage<AllPoolsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.AllPoolsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllPoolsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllPoolsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllPoolsRequest;
    static equals(a: AllPoolsRequest | PlainMessage<AllPoolsRequest> | undefined, b: AllPoolsRequest | PlainMessage<AllPoolsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.AllPoolsResponse
 */
export declare class AllPoolsResponse extends Message<AllPoolsResponse> {
    /**
     * @generated from field: repeated google.protobuf.Any pools = 1;
     */
    pools: Any[];
    constructor(data?: PartialMessage<AllPoolsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.AllPoolsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllPoolsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllPoolsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllPoolsResponse;
    static equals(a: AllPoolsResponse | PlainMessage<AllPoolsResponse> | undefined, b: AllPoolsResponse | PlainMessage<AllPoolsResponse> | undefined): boolean;
}
/**
 * =======================================================
 * ListPoolsByDenomRequest
 *
 * @generated from message osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest
 */
export declare class ListPoolsByDenomRequest extends Message<ListPoolsByDenomRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<ListPoolsByDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPoolsByDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPoolsByDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPoolsByDenomRequest;
    static equals(a: ListPoolsByDenomRequest | PlainMessage<ListPoolsByDenomRequest> | undefined, b: ListPoolsByDenomRequest | PlainMessage<ListPoolsByDenomRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse
 */
export declare class ListPoolsByDenomResponse extends Message<ListPoolsByDenomResponse> {
    /**
     * @generated from field: repeated google.protobuf.Any pools = 1;
     */
    pools: Any[];
    constructor(data?: PartialMessage<ListPoolsByDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPoolsByDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPoolsByDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPoolsByDenomResponse;
    static equals(a: ListPoolsByDenomResponse | PlainMessage<ListPoolsByDenomResponse> | undefined, b: ListPoolsByDenomResponse | PlainMessage<ListPoolsByDenomResponse> | undefined): boolean;
}
/**
 * ==========================================================
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 *
 * @generated from message osmosis.poolmanager.v1beta1.SpotPriceRequest
 */
export declare class SpotPriceRequest extends Message<SpotPriceRequest> {
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
    constructor(data?: PartialMessage<SpotPriceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.SpotPriceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotPriceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotPriceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotPriceRequest;
    static equals(a: SpotPriceRequest | PlainMessage<SpotPriceRequest> | undefined, b: SpotPriceRequest | PlainMessage<SpotPriceRequest> | undefined): boolean;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 *
 * @generated from message osmosis.poolmanager.v1beta1.SpotPriceResponse
 */
export declare class SpotPriceResponse extends Message<SpotPriceResponse> {
    /**
     * String of the Dec. Ex) 10.203uatom
     *
     * @generated from field: string spot_price = 1;
     */
    spotPrice: string;
    constructor(data?: PartialMessage<SpotPriceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.SpotPriceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotPriceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotPriceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotPriceResponse;
    static equals(a: SpotPriceResponse | PlainMessage<SpotPriceResponse> | undefined, b: SpotPriceResponse | PlainMessage<SpotPriceResponse> | undefined): boolean;
}
/**
 * =============================== TotalPoolLiquidity
 *
 * @generated from message osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest
 */
export declare class TotalPoolLiquidityRequest extends Message<TotalPoolLiquidityRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<TotalPoolLiquidityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TotalPoolLiquidityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TotalPoolLiquidityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TotalPoolLiquidityRequest;
    static equals(a: TotalPoolLiquidityRequest | PlainMessage<TotalPoolLiquidityRequest> | undefined, b: TotalPoolLiquidityRequest | PlainMessage<TotalPoolLiquidityRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse
 */
export declare class TotalPoolLiquidityResponse extends Message<TotalPoolLiquidityResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin liquidity = 1;
     */
    liquidity: Coin[];
    constructor(data?: PartialMessage<TotalPoolLiquidityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TotalPoolLiquidityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TotalPoolLiquidityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TotalPoolLiquidityResponse;
    static equals(a: TotalPoolLiquidityResponse | PlainMessage<TotalPoolLiquidityResponse> | undefined, b: TotalPoolLiquidityResponse | PlainMessage<TotalPoolLiquidityResponse> | undefined): boolean;
}
/**
 * =============================== TotalLiquidity
 *
 * @generated from message osmosis.poolmanager.v1beta1.TotalLiquidityRequest
 */
export declare class TotalLiquidityRequest extends Message<TotalLiquidityRequest> {
    constructor(data?: PartialMessage<TotalLiquidityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.TotalLiquidityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TotalLiquidityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TotalLiquidityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TotalLiquidityRequest;
    static equals(a: TotalLiquidityRequest | PlainMessage<TotalLiquidityRequest> | undefined, b: TotalLiquidityRequest | PlainMessage<TotalLiquidityRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.TotalLiquidityResponse
 */
export declare class TotalLiquidityResponse extends Message<TotalLiquidityResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin liquidity = 1;
     */
    liquidity: Coin[];
    constructor(data?: PartialMessage<TotalLiquidityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.TotalLiquidityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TotalLiquidityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TotalLiquidityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TotalLiquidityResponse;
    static equals(a: TotalLiquidityResponse | PlainMessage<TotalLiquidityResponse> | undefined, b: TotalLiquidityResponse | PlainMessage<TotalLiquidityResponse> | undefined): boolean;
}
/**
 * =============================== TotalVolumeForPool
 *
 * @generated from message osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest
 */
export declare class TotalVolumeForPoolRequest extends Message<TotalVolumeForPoolRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<TotalVolumeForPoolRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TotalVolumeForPoolRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TotalVolumeForPoolRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TotalVolumeForPoolRequest;
    static equals(a: TotalVolumeForPoolRequest | PlainMessage<TotalVolumeForPoolRequest> | undefined, b: TotalVolumeForPoolRequest | PlainMessage<TotalVolumeForPoolRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse
 */
export declare class TotalVolumeForPoolResponse extends Message<TotalVolumeForPoolResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin volume = 1;
     */
    volume: Coin[];
    constructor(data?: PartialMessage<TotalVolumeForPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TotalVolumeForPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TotalVolumeForPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TotalVolumeForPoolResponse;
    static equals(a: TotalVolumeForPoolResponse | PlainMessage<TotalVolumeForPoolResponse> | undefined, b: TotalVolumeForPoolResponse | PlainMessage<TotalVolumeForPoolResponse> | undefined): boolean;
}
/**
 * =============================== TradingPairTakerFee
 *
 * @generated from message osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest
 */
export declare class TradingPairTakerFeeRequest extends Message<TradingPairTakerFeeRequest> {
    /**
     * @generated from field: string denom_0 = 1;
     */
    denom0: string;
    /**
     * @generated from field: string denom_1 = 2;
     */
    denom1: string;
    constructor(data?: PartialMessage<TradingPairTakerFeeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradingPairTakerFeeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradingPairTakerFeeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradingPairTakerFeeRequest;
    static equals(a: TradingPairTakerFeeRequest | PlainMessage<TradingPairTakerFeeRequest> | undefined, b: TradingPairTakerFeeRequest | PlainMessage<TradingPairTakerFeeRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse
 */
export declare class TradingPairTakerFeeResponse extends Message<TradingPairTakerFeeResponse> {
    /**
     * @generated from field: string taker_fee = 1;
     */
    takerFee: string;
    constructor(data?: PartialMessage<TradingPairTakerFeeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradingPairTakerFeeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradingPairTakerFeeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradingPairTakerFeeResponse;
    static equals(a: TradingPairTakerFeeResponse | PlainMessage<TradingPairTakerFeeResponse> | undefined, b: TradingPairTakerFeeResponse | PlainMessage<TradingPairTakerFeeResponse> | undefined): boolean;
}
/**
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 *
 * @generated from message osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest
 */
export declare class EstimateTradeBasedOnPriceImpactRequest extends Message<EstimateTradeBasedOnPriceImpactRequest> {
    /**
     * from_coin is the total amount of tokens that the user wants to sell.
     *
     * @generated from field: cosmos.base.v1beta1.Coin from_coin = 1;
     */
    fromCoin?: Coin;
    /**
     * to_coin_denom is the denom identifier of the token that the user wants to
     * buy.
     *
     * @generated from field: string to_coin_denom = 2;
     */
    toCoinDenom: string;
    /**
     * pool_id is the identifier of the liquidity pool that the trade will occur
     * on.
     *
     * @generated from field: uint64 pool_id = 3;
     */
    poolId: bigint;
    /**
     * max_price_impact is the maximum percentage that the user is willing
     * to affect the price of the liquidity pool.
     *
     * @generated from field: string max_price_impact = 4;
     */
    maxPriceImpact: string;
    /**
     * external_price is an optional external price that the user can enter.
     * It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at
     * any time.
     *
     * @generated from field: string external_price = 5;
     */
    externalPrice: string;
    constructor(data?: PartialMessage<EstimateTradeBasedOnPriceImpactRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateTradeBasedOnPriceImpactRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateTradeBasedOnPriceImpactRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateTradeBasedOnPriceImpactRequest;
    static equals(a: EstimateTradeBasedOnPriceImpactRequest | PlainMessage<EstimateTradeBasedOnPriceImpactRequest> | undefined, b: EstimateTradeBasedOnPriceImpactRequest | PlainMessage<EstimateTradeBasedOnPriceImpactRequest> | undefined): boolean;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 *
 * @generated from message osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse
 */
export declare class EstimateTradeBasedOnPriceImpactResponse extends Message<EstimateTradeBasedOnPriceImpactResponse> {
    /**
     * input_coin is the actual input amount that would be tradeable
     * under the specified price impact.
     *
     * @generated from field: cosmos.base.v1beta1.Coin input_coin = 1;
     */
    inputCoin?: Coin;
    /**
     * output_coin is the amount of tokens of the ToCoinDenom type
     * that will be received for the actual InputCoin trade.
     *
     * @generated from field: cosmos.base.v1beta1.Coin output_coin = 2;
     */
    outputCoin?: Coin;
    constructor(data?: PartialMessage<EstimateTradeBasedOnPriceImpactResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateTradeBasedOnPriceImpactResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateTradeBasedOnPriceImpactResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateTradeBasedOnPriceImpactResponse;
    static equals(a: EstimateTradeBasedOnPriceImpactResponse | PlainMessage<EstimateTradeBasedOnPriceImpactResponse> | undefined, b: EstimateTradeBasedOnPriceImpactResponse | PlainMessage<EstimateTradeBasedOnPriceImpactResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map