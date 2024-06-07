import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * ===================== GetSwapFeeQueryMsg
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsg
 */
export declare class GetSwapFeeQueryMsg extends Message<GetSwapFeeQueryMsg> {
    /**
     * get_swap_fee is the query structure to get swap fee.
     *
     * @generated from field: osmosis.cosmwasmpool.v1beta1.EmptyStruct get_swap_fee = 1;
     */
    getSwapFee?: EmptyStruct;
    constructor(data?: PartialMessage<GetSwapFeeQueryMsg>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsg";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSwapFeeQueryMsg;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSwapFeeQueryMsg;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSwapFeeQueryMsg;
    static equals(a: GetSwapFeeQueryMsg | PlainMessage<GetSwapFeeQueryMsg> | undefined, b: GetSwapFeeQueryMsg | PlainMessage<GetSwapFeeQueryMsg> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsgResponse
 */
export declare class GetSwapFeeQueryMsgResponse extends Message<GetSwapFeeQueryMsgResponse> {
    /**
     * swap_fee is the swap fee for this swap estimate.
     *
     * @generated from field: string swap_fee = 3;
     */
    swapFee: string;
    constructor(data?: PartialMessage<GetSwapFeeQueryMsgResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsgResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSwapFeeQueryMsgResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSwapFeeQueryMsgResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSwapFeeQueryMsgResponse;
    static equals(a: GetSwapFeeQueryMsgResponse | PlainMessage<GetSwapFeeQueryMsgResponse> | undefined, b: GetSwapFeeQueryMsgResponse | PlainMessage<GetSwapFeeQueryMsgResponse> | undefined): boolean;
}
/**
 * ===================== SpotPriceQueryMsg
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.SpotPrice
 */
export declare class SpotPrice extends Message<SpotPrice> {
    /**
     * quote_asset_denom is the quote asset of the spot query.
     *
     * @generated from field: string quote_asset_denom = 1;
     */
    quoteAssetDenom: string;
    /**
     * base_asset_denom is the base asset of the spot query.
     *
     * @generated from field: string base_asset_denom = 2;
     */
    baseAssetDenom: string;
    constructor(data?: PartialMessage<SpotPrice>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.SpotPrice";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotPrice;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotPrice;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotPrice;
    static equals(a: SpotPrice | PlainMessage<SpotPrice> | undefined, b: SpotPrice | PlainMessage<SpotPrice> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsg
 */
export declare class SpotPriceQueryMsg extends Message<SpotPriceQueryMsg> {
    /**
     * spot_price is the structure containing request field of the spot price
     * query message.
     *
     * @generated from field: osmosis.cosmwasmpool.v1beta1.SpotPrice spot_price = 1;
     */
    spotPrice?: SpotPrice;
    constructor(data?: PartialMessage<SpotPriceQueryMsg>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsg";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotPriceQueryMsg;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotPriceQueryMsg;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotPriceQueryMsg;
    static equals(a: SpotPriceQueryMsg | PlainMessage<SpotPriceQueryMsg> | undefined, b: SpotPriceQueryMsg | PlainMessage<SpotPriceQueryMsg> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsgResponse
 */
export declare class SpotPriceQueryMsgResponse extends Message<SpotPriceQueryMsgResponse> {
    /**
     * spot_price is the spot price returned.
     *
     * @generated from field: string spot_price = 1;
     */
    spotPrice: string;
    constructor(data?: PartialMessage<SpotPriceQueryMsgResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsgResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotPriceQueryMsgResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotPriceQueryMsgResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotPriceQueryMsgResponse;
    static equals(a: SpotPriceQueryMsgResponse | PlainMessage<SpotPriceQueryMsgResponse> | undefined, b: SpotPriceQueryMsgResponse | PlainMessage<SpotPriceQueryMsgResponse> | undefined): boolean;
}
/**
 * ===================== GetTotalPoolLiquidityQueryMsg
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.EmptyStruct
 */
export declare class EmptyStruct extends Message<EmptyStruct> {
    constructor(data?: PartialMessage<EmptyStruct>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.EmptyStruct";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmptyStruct;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmptyStruct;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmptyStruct;
    static equals(a: EmptyStruct | PlainMessage<EmptyStruct> | undefined, b: EmptyStruct | PlainMessage<EmptyStruct> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsg
 */
export declare class GetTotalPoolLiquidityQueryMsg extends Message<GetTotalPoolLiquidityQueryMsg> {
    /**
     * get_total_pool_liquidity is the structure containing request field of the
     * total pool liquidity query message.
     *
     * @generated from field: osmosis.cosmwasmpool.v1beta1.EmptyStruct get_total_pool_liquidity = 1;
     */
    getTotalPoolLiquidity?: EmptyStruct;
    constructor(data?: PartialMessage<GetTotalPoolLiquidityQueryMsg>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsg";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTotalPoolLiquidityQueryMsg;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTotalPoolLiquidityQueryMsg;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTotalPoolLiquidityQueryMsg;
    static equals(a: GetTotalPoolLiquidityQueryMsg | PlainMessage<GetTotalPoolLiquidityQueryMsg> | undefined, b: GetTotalPoolLiquidityQueryMsg | PlainMessage<GetTotalPoolLiquidityQueryMsg> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsgResponse
 */
export declare class GetTotalPoolLiquidityQueryMsgResponse extends Message<GetTotalPoolLiquidityQueryMsgResponse> {
    /**
     *  total_pool_liquidity is the total liquidity in the pool denominated in
     *  coins.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin total_pool_liquidity = 1;
     */
    totalPoolLiquidity: Coin[];
    constructor(data?: PartialMessage<GetTotalPoolLiquidityQueryMsgResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsgResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTotalPoolLiquidityQueryMsgResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTotalPoolLiquidityQueryMsgResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTotalPoolLiquidityQueryMsgResponse;
    static equals(a: GetTotalPoolLiquidityQueryMsgResponse | PlainMessage<GetTotalPoolLiquidityQueryMsgResponse> | undefined, b: GetTotalPoolLiquidityQueryMsgResponse | PlainMessage<GetTotalPoolLiquidityQueryMsgResponse> | undefined): boolean;
}
/**
 * ===================== GetTotalSharesQueryMsg
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsg
 */
export declare class GetTotalSharesQueryMsg extends Message<GetTotalSharesQueryMsg> {
    /**
     * get_total_shares is the structure containing request field of the
     * total shares query message.
     *
     * @generated from field: osmosis.cosmwasmpool.v1beta1.EmptyStruct get_total_shares = 1;
     */
    getTotalShares?: EmptyStruct;
    constructor(data?: PartialMessage<GetTotalSharesQueryMsg>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsg";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTotalSharesQueryMsg;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTotalSharesQueryMsg;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTotalSharesQueryMsg;
    static equals(a: GetTotalSharesQueryMsg | PlainMessage<GetTotalSharesQueryMsg> | undefined, b: GetTotalSharesQueryMsg | PlainMessage<GetTotalSharesQueryMsg> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsgResponse
 */
export declare class GetTotalSharesQueryMsgResponse extends Message<GetTotalSharesQueryMsgResponse> {
    /**
     * total_shares is the amount of shares returned.
     *
     * @generated from field: string total_shares = 1;
     */
    totalShares: string;
    constructor(data?: PartialMessage<GetTotalSharesQueryMsgResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsgResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTotalSharesQueryMsgResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTotalSharesQueryMsgResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTotalSharesQueryMsgResponse;
    static equals(a: GetTotalSharesQueryMsgResponse | PlainMessage<GetTotalSharesQueryMsgResponse> | undefined, b: GetTotalSharesQueryMsgResponse | PlainMessage<GetTotalSharesQueryMsgResponse> | undefined): boolean;
}
//# sourceMappingURL=pool_query_msg_pb.d.ts.map