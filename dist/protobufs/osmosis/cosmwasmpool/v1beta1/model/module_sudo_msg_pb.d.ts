import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * ===================== SwapExactAmountIn
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.SwapExactAmountIn
 */
export declare class SwapExactAmountIn extends Message<SwapExactAmountIn> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * token_in is the token to be sent to the pool.
     *
     * @generated from field: cosmos.base.v1beta1.Coin token_in = 2;
     */
    tokenIn?: Coin;
    /**
     * token_out_denom is the token denom to be received from the pool.
     *
     * @generated from field: string token_out_denom = 3;
     */
    tokenOutDenom: string;
    /**
     * token_out_min_amount is the minimum amount of token_out to be received from
     * the pool.
     *
     * @generated from field: string token_out_min_amount = 4;
     */
    tokenOutMinAmount: string;
    /**
     * swap_fee is the swap fee for this swap estimate.
     *
     * @generated from field: string swap_fee = 5;
     */
    swapFee: string;
    constructor(data?: PartialMessage<SwapExactAmountIn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.SwapExactAmountIn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapExactAmountIn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapExactAmountIn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapExactAmountIn;
    static equals(a: SwapExactAmountIn | PlainMessage<SwapExactAmountIn> | undefined, b: SwapExactAmountIn | PlainMessage<SwapExactAmountIn> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsg
 */
export declare class SwapExactAmountInSudoMsg extends Message<SwapExactAmountInSudoMsg> {
    /**
     * swap_exact_amount_in is the structure containing all the request
     * information for this message.
     *
     * @generated from field: osmosis.cosmwasmpool.v1beta1.SwapExactAmountIn swap_exact_amount_in = 1;
     */
    swapExactAmountIn?: SwapExactAmountIn;
    constructor(data?: PartialMessage<SwapExactAmountInSudoMsg>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsg";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapExactAmountInSudoMsg;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapExactAmountInSudoMsg;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapExactAmountInSudoMsg;
    static equals(a: SwapExactAmountInSudoMsg | PlainMessage<SwapExactAmountInSudoMsg> | undefined, b: SwapExactAmountInSudoMsg | PlainMessage<SwapExactAmountInSudoMsg> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsgResponse
 */
export declare class SwapExactAmountInSudoMsgResponse extends Message<SwapExactAmountInSudoMsgResponse> {
    /**
     * token_out_amount is the token out computed from this swap estimate call.
     *
     * @generated from field: string token_out_amount = 1;
     */
    tokenOutAmount: string;
    constructor(data?: PartialMessage<SwapExactAmountInSudoMsgResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsgResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapExactAmountInSudoMsgResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapExactAmountInSudoMsgResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapExactAmountInSudoMsgResponse;
    static equals(a: SwapExactAmountInSudoMsgResponse | PlainMessage<SwapExactAmountInSudoMsgResponse> | undefined, b: SwapExactAmountInSudoMsgResponse | PlainMessage<SwapExactAmountInSudoMsgResponse> | undefined): boolean;
}
/**
 * ===================== SwapExactAmountOut
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.SwapExactAmountOut
 */
export declare class SwapExactAmountOut extends Message<SwapExactAmountOut> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * token_out is the token to be sent out of the pool.
     *
     * @generated from field: cosmos.base.v1beta1.Coin token_out = 2;
     */
    tokenOut?: Coin;
    /**
     * token_in_denom is the token denom to be sent too the pool.
     *
     * @generated from field: string token_in_denom = 3;
     */
    tokenInDenom: string;
    /**
     * token_in_max_amount is the maximum amount of token_in to be sent to the
     * pool.
     *
     * @generated from field: string token_in_max_amount = 4;
     */
    tokenInMaxAmount: string;
    /**
     * swap_fee is the swap fee for this swap estimate.
     *
     * @generated from field: string swap_fee = 5;
     */
    swapFee: string;
    constructor(data?: PartialMessage<SwapExactAmountOut>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.SwapExactAmountOut";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapExactAmountOut;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapExactAmountOut;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapExactAmountOut;
    static equals(a: SwapExactAmountOut | PlainMessage<SwapExactAmountOut> | undefined, b: SwapExactAmountOut | PlainMessage<SwapExactAmountOut> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsg
 */
export declare class SwapExactAmountOutSudoMsg extends Message<SwapExactAmountOutSudoMsg> {
    /**
     * swap_exact_amount_out is the structure containing all the request
     * information for this message.
     *
     * @generated from field: osmosis.cosmwasmpool.v1beta1.SwapExactAmountOut swap_exact_amount_out = 1;
     */
    swapExactAmountOut?: SwapExactAmountOut;
    constructor(data?: PartialMessage<SwapExactAmountOutSudoMsg>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsg";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapExactAmountOutSudoMsg;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapExactAmountOutSudoMsg;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapExactAmountOutSudoMsg;
    static equals(a: SwapExactAmountOutSudoMsg | PlainMessage<SwapExactAmountOutSudoMsg> | undefined, b: SwapExactAmountOutSudoMsg | PlainMessage<SwapExactAmountOutSudoMsg> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsgResponse
 */
export declare class SwapExactAmountOutSudoMsgResponse extends Message<SwapExactAmountOutSudoMsgResponse> {
    /**
     * token_in_amount is the token in computed from this swap estimate call.
     *
     * @generated from field: string token_in_amount = 1;
     */
    tokenInAmount: string;
    constructor(data?: PartialMessage<SwapExactAmountOutSudoMsgResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsgResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapExactAmountOutSudoMsgResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapExactAmountOutSudoMsgResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapExactAmountOutSudoMsgResponse;
    static equals(a: SwapExactAmountOutSudoMsgResponse | PlainMessage<SwapExactAmountOutSudoMsgResponse> | undefined, b: SwapExactAmountOutSudoMsgResponse | PlainMessage<SwapExactAmountOutSudoMsgResponse> | undefined): boolean;
}
//# sourceMappingURL=module_sudo_msg_pb.d.ts.map