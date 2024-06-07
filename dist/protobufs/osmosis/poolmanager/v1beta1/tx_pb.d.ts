import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { SwapAmountInRoute, SwapAmountInSplitRoute, SwapAmountOutRoute, SwapAmountOutSplitRoute } from "./swap_route_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * ===================== MsgSwapExactAmountIn
 *
 * @generated from message osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn
 */
export declare class MsgSwapExactAmountIn extends Message<MsgSwapExactAmountIn> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated osmosis.poolmanager.v1beta1.SwapAmountInRoute routes = 2;
     */
    routes: SwapAmountInRoute[];
    /**
     * @generated from field: cosmos.base.v1beta1.Coin token_in = 3;
     */
    tokenIn?: Coin;
    /**
     * @generated from field: string token_out_min_amount = 4;
     */
    tokenOutMinAmount: string;
    constructor(data?: PartialMessage<MsgSwapExactAmountIn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountIn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountIn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountIn;
    static equals(a: MsgSwapExactAmountIn | PlainMessage<MsgSwapExactAmountIn> | undefined, b: MsgSwapExactAmountIn | PlainMessage<MsgSwapExactAmountIn> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.MsgSwapExactAmountInResponse
 */
export declare class MsgSwapExactAmountInResponse extends Message<MsgSwapExactAmountInResponse> {
    /**
     * @generated from field: string token_out_amount = 1;
     */
    tokenOutAmount: string;
    constructor(data?: PartialMessage<MsgSwapExactAmountInResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.MsgSwapExactAmountInResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountInResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountInResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountInResponse;
    static equals(a: MsgSwapExactAmountInResponse | PlainMessage<MsgSwapExactAmountInResponse> | undefined, b: MsgSwapExactAmountInResponse | PlainMessage<MsgSwapExactAmountInResponse> | undefined): boolean;
}
/**
 * ===================== MsgSplitRouteSwapExactAmountIn
 *
 * @generated from message osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn
 */
export declare class MsgSplitRouteSwapExactAmountIn extends Message<MsgSplitRouteSwapExactAmountIn> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated osmosis.poolmanager.v1beta1.SwapAmountInSplitRoute routes = 2;
     */
    routes: SwapAmountInSplitRoute[];
    /**
     * @generated from field: string token_in_denom = 3;
     */
    tokenInDenom: string;
    /**
     * @generated from field: string token_out_min_amount = 4;
     */
    tokenOutMinAmount: string;
    constructor(data?: PartialMessage<MsgSplitRouteSwapExactAmountIn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSplitRouteSwapExactAmountIn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSplitRouteSwapExactAmountIn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSplitRouteSwapExactAmountIn;
    static equals(a: MsgSplitRouteSwapExactAmountIn | PlainMessage<MsgSplitRouteSwapExactAmountIn> | undefined, b: MsgSplitRouteSwapExactAmountIn | PlainMessage<MsgSplitRouteSwapExactAmountIn> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountInResponse
 */
export declare class MsgSplitRouteSwapExactAmountInResponse extends Message<MsgSplitRouteSwapExactAmountInResponse> {
    /**
     * @generated from field: string token_out_amount = 1;
     */
    tokenOutAmount: string;
    constructor(data?: PartialMessage<MsgSplitRouteSwapExactAmountInResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountInResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSplitRouteSwapExactAmountInResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSplitRouteSwapExactAmountInResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSplitRouteSwapExactAmountInResponse;
    static equals(a: MsgSplitRouteSwapExactAmountInResponse | PlainMessage<MsgSplitRouteSwapExactAmountInResponse> | undefined, b: MsgSplitRouteSwapExactAmountInResponse | PlainMessage<MsgSplitRouteSwapExactAmountInResponse> | undefined): boolean;
}
/**
 * ===================== MsgSwapExactAmountOut
 *
 * @generated from message osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut
 */
export declare class MsgSwapExactAmountOut extends Message<MsgSwapExactAmountOut> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated osmosis.poolmanager.v1beta1.SwapAmountOutRoute routes = 2;
     */
    routes: SwapAmountOutRoute[];
    /**
     * @generated from field: string token_in_max_amount = 3;
     */
    tokenInMaxAmount: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin token_out = 4;
     */
    tokenOut?: Coin;
    constructor(data?: PartialMessage<MsgSwapExactAmountOut>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountOut;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOut;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOut;
    static equals(a: MsgSwapExactAmountOut | PlainMessage<MsgSwapExactAmountOut> | undefined, b: MsgSwapExactAmountOut | PlainMessage<MsgSwapExactAmountOut> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.MsgSwapExactAmountOutResponse
 */
export declare class MsgSwapExactAmountOutResponse extends Message<MsgSwapExactAmountOutResponse> {
    /**
     * @generated from field: string token_in_amount = 1;
     */
    tokenInAmount: string;
    constructor(data?: PartialMessage<MsgSwapExactAmountOutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.MsgSwapExactAmountOutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountOutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOutResponse;
    static equals(a: MsgSwapExactAmountOutResponse | PlainMessage<MsgSwapExactAmountOutResponse> | undefined, b: MsgSwapExactAmountOutResponse | PlainMessage<MsgSwapExactAmountOutResponse> | undefined): boolean;
}
/**
 * ===================== MsgSplitRouteSwapExactAmountOut
 *
 * @generated from message osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut
 */
export declare class MsgSplitRouteSwapExactAmountOut extends Message<MsgSplitRouteSwapExactAmountOut> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated osmosis.poolmanager.v1beta1.SwapAmountOutSplitRoute routes = 2;
     */
    routes: SwapAmountOutSplitRoute[];
    /**
     * @generated from field: string token_out_denom = 3;
     */
    tokenOutDenom: string;
    /**
     * @generated from field: string token_in_max_amount = 4;
     */
    tokenInMaxAmount: string;
    constructor(data?: PartialMessage<MsgSplitRouteSwapExactAmountOut>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSplitRouteSwapExactAmountOut;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSplitRouteSwapExactAmountOut;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSplitRouteSwapExactAmountOut;
    static equals(a: MsgSplitRouteSwapExactAmountOut | PlainMessage<MsgSplitRouteSwapExactAmountOut> | undefined, b: MsgSplitRouteSwapExactAmountOut | PlainMessage<MsgSplitRouteSwapExactAmountOut> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOutResponse
 */
export declare class MsgSplitRouteSwapExactAmountOutResponse extends Message<MsgSplitRouteSwapExactAmountOutResponse> {
    /**
     * @generated from field: string token_in_amount = 1;
     */
    tokenInAmount: string;
    constructor(data?: PartialMessage<MsgSplitRouteSwapExactAmountOutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSplitRouteSwapExactAmountOutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSplitRouteSwapExactAmountOutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSplitRouteSwapExactAmountOutResponse;
    static equals(a: MsgSplitRouteSwapExactAmountOutResponse | PlainMessage<MsgSplitRouteSwapExactAmountOutResponse> | undefined, b: MsgSplitRouteSwapExactAmountOutResponse | PlainMessage<MsgSplitRouteSwapExactAmountOutResponse> | undefined): boolean;
}
/**
 * ===================== MsgSetDenomPairTakerFee
 *
 * @generated from message osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee
 */
export declare class MsgSetDenomPairTakerFee extends Message<MsgSetDenomPairTakerFee> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated osmosis.poolmanager.v1beta1.DenomPairTakerFee denom_pair_taker_fee = 2;
     */
    denomPairTakerFee: DenomPairTakerFee[];
    constructor(data?: PartialMessage<MsgSetDenomPairTakerFee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetDenomPairTakerFee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetDenomPairTakerFee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetDenomPairTakerFee;
    static equals(a: MsgSetDenomPairTakerFee | PlainMessage<MsgSetDenomPairTakerFee> | undefined, b: MsgSetDenomPairTakerFee | PlainMessage<MsgSetDenomPairTakerFee> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFeeResponse
 */
export declare class MsgSetDenomPairTakerFeeResponse extends Message<MsgSetDenomPairTakerFeeResponse> {
    /**
     * @generated from field: bool success = 1;
     */
    success: boolean;
    constructor(data?: PartialMessage<MsgSetDenomPairTakerFeeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFeeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetDenomPairTakerFeeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetDenomPairTakerFeeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetDenomPairTakerFeeResponse;
    static equals(a: MsgSetDenomPairTakerFeeResponse | PlainMessage<MsgSetDenomPairTakerFeeResponse> | undefined, b: MsgSetDenomPairTakerFeeResponse | PlainMessage<MsgSetDenomPairTakerFeeResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.DenomPairTakerFee
 */
export declare class DenomPairTakerFee extends Message<DenomPairTakerFee> {
    /**
     * denom0 and denom1 get automatically lexigographically sorted
     * when being stored, so the order of input here does not matter.
     *
     * @generated from field: string denom0 = 1;
     */
    denom0: string;
    /**
     * @generated from field: string denom1 = 2;
     */
    denom1: string;
    /**
     * @generated from field: string taker_fee = 3;
     */
    takerFee: string;
    constructor(data?: PartialMessage<DenomPairTakerFee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.DenomPairTakerFee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DenomPairTakerFee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DenomPairTakerFee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DenomPairTakerFee;
    static equals(a: DenomPairTakerFee | PlainMessage<DenomPairTakerFee> | undefined, b: DenomPairTakerFee | PlainMessage<DenomPairTakerFee> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map