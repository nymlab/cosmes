import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { SwapAmountInRoute, SwapAmountOutRoute } from "../../poolmanager/v1beta1/swap_route_pb.js";
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 *
 * @generated from message osmosis.gamm.v1beta1.MsgJoinPool
 */
export declare class MsgJoinPool extends Message<MsgJoinPool> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    /**
     * @generated from field: string share_out_amount = 3;
     */
    shareOutAmount: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin token_in_maxs = 4;
     */
    tokenInMaxs: Coin[];
    constructor(data?: PartialMessage<MsgJoinPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgJoinPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinPool;
    static equals(a: MsgJoinPool | PlainMessage<MsgJoinPool> | undefined, b: MsgJoinPool | PlainMessage<MsgJoinPool> | undefined): boolean;
}
/**
 * @generated from message osmosis.gamm.v1beta1.MsgJoinPoolResponse
 */
export declare class MsgJoinPoolResponse extends Message<MsgJoinPoolResponse> {
    /**
     * @generated from field: string share_out_amount = 1;
     */
    shareOutAmount: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin token_in = 2;
     */
    tokenIn: Coin[];
    constructor(data?: PartialMessage<MsgJoinPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgJoinPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinPoolResponse;
    static equals(a: MsgJoinPoolResponse | PlainMessage<MsgJoinPoolResponse> | undefined, b: MsgJoinPoolResponse | PlainMessage<MsgJoinPoolResponse> | undefined): boolean;
}
/**
 * ===================== MsgExitPool
 *
 * @generated from message osmosis.gamm.v1beta1.MsgExitPool
 */
export declare class MsgExitPool extends Message<MsgExitPool> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    /**
     * @generated from field: string share_in_amount = 3;
     */
    shareInAmount: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin token_out_mins = 4;
     */
    tokenOutMins: Coin[];
    constructor(data?: PartialMessage<MsgExitPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgExitPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitPool;
    static equals(a: MsgExitPool | PlainMessage<MsgExitPool> | undefined, b: MsgExitPool | PlainMessage<MsgExitPool> | undefined): boolean;
}
/**
 * @generated from message osmosis.gamm.v1beta1.MsgExitPoolResponse
 */
export declare class MsgExitPoolResponse extends Message<MsgExitPoolResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin token_out = 1;
     */
    tokenOut: Coin[];
    constructor(data?: PartialMessage<MsgExitPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgExitPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitPoolResponse;
    static equals(a: MsgExitPoolResponse | PlainMessage<MsgExitPoolResponse> | undefined, b: MsgExitPoolResponse | PlainMessage<MsgExitPoolResponse> | undefined): boolean;
}
/**
 * ===================== MsgSwapExactAmountIn
 *
 * @generated from message osmosis.gamm.v1beta1.MsgSwapExactAmountIn
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
    static readonly typeName = "osmosis.gamm.v1beta1.MsgSwapExactAmountIn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountIn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountIn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountIn;
    static equals(a: MsgSwapExactAmountIn | PlainMessage<MsgSwapExactAmountIn> | undefined, b: MsgSwapExactAmountIn | PlainMessage<MsgSwapExactAmountIn> | undefined): boolean;
}
/**
 * @generated from message osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse
 */
export declare class MsgSwapExactAmountInResponse extends Message<MsgSwapExactAmountInResponse> {
    /**
     * @generated from field: string token_out_amount = 1;
     */
    tokenOutAmount: string;
    constructor(data?: PartialMessage<MsgSwapExactAmountInResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountInResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountInResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountInResponse;
    static equals(a: MsgSwapExactAmountInResponse | PlainMessage<MsgSwapExactAmountInResponse> | undefined, b: MsgSwapExactAmountInResponse | PlainMessage<MsgSwapExactAmountInResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.gamm.v1beta1.MsgSwapExactAmountOut
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
    static readonly typeName = "osmosis.gamm.v1beta1.MsgSwapExactAmountOut";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountOut;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOut;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOut;
    static equals(a: MsgSwapExactAmountOut | PlainMessage<MsgSwapExactAmountOut> | undefined, b: MsgSwapExactAmountOut | PlainMessage<MsgSwapExactAmountOut> | undefined): boolean;
}
/**
 * @generated from message osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse
 */
export declare class MsgSwapExactAmountOutResponse extends Message<MsgSwapExactAmountOutResponse> {
    /**
     * @generated from field: string token_in_amount = 1;
     */
    tokenInAmount: string;
    constructor(data?: PartialMessage<MsgSwapExactAmountOutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountOutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOutResponse;
    static equals(a: MsgSwapExactAmountOutResponse | PlainMessage<MsgSwapExactAmountOutResponse> | undefined, b: MsgSwapExactAmountOutResponse | PlainMessage<MsgSwapExactAmountOutResponse> | undefined): boolean;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 *
 * @generated from message osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn
 */
export declare class MsgJoinSwapExternAmountIn extends Message<MsgJoinSwapExternAmountIn> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin token_in = 3;
     */
    tokenIn?: Coin;
    /**
     * repeated cosmos.base.v1beta1.Coin tokensIn = 5 [
     *   (gogoproto.moretags) = "yaml:\"tokens_in\"",
     *   (gogoproto.nullable) = false
     * ];
     *
     * @generated from field: string share_out_min_amount = 4;
     */
    shareOutMinAmount: string;
    constructor(data?: PartialMessage<MsgJoinSwapExternAmountIn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinSwapExternAmountIn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinSwapExternAmountIn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinSwapExternAmountIn;
    static equals(a: MsgJoinSwapExternAmountIn | PlainMessage<MsgJoinSwapExternAmountIn> | undefined, b: MsgJoinSwapExternAmountIn | PlainMessage<MsgJoinSwapExternAmountIn> | undefined): boolean;
}
/**
 * @generated from message osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse
 */
export declare class MsgJoinSwapExternAmountInResponse extends Message<MsgJoinSwapExternAmountInResponse> {
    /**
     * @generated from field: string share_out_amount = 1;
     */
    shareOutAmount: string;
    constructor(data?: PartialMessage<MsgJoinSwapExternAmountInResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinSwapExternAmountInResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinSwapExternAmountInResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinSwapExternAmountInResponse;
    static equals(a: MsgJoinSwapExternAmountInResponse | PlainMessage<MsgJoinSwapExternAmountInResponse> | undefined, b: MsgJoinSwapExternAmountInResponse | PlainMessage<MsgJoinSwapExternAmountInResponse> | undefined): boolean;
}
/**
 * ===================== MsgJoinSwapShareAmountOut
 *
 * @generated from message osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut
 */
export declare class MsgJoinSwapShareAmountOut extends Message<MsgJoinSwapShareAmountOut> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    /**
     * @generated from field: string token_in_denom = 3;
     */
    tokenInDenom: string;
    /**
     * @generated from field: string share_out_amount = 4;
     */
    shareOutAmount: string;
    /**
     * @generated from field: string token_in_max_amount = 5;
     */
    tokenInMaxAmount: string;
    constructor(data?: PartialMessage<MsgJoinSwapShareAmountOut>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinSwapShareAmountOut;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinSwapShareAmountOut;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinSwapShareAmountOut;
    static equals(a: MsgJoinSwapShareAmountOut | PlainMessage<MsgJoinSwapShareAmountOut> | undefined, b: MsgJoinSwapShareAmountOut | PlainMessage<MsgJoinSwapShareAmountOut> | undefined): boolean;
}
/**
 * @generated from message osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse
 */
export declare class MsgJoinSwapShareAmountOutResponse extends Message<MsgJoinSwapShareAmountOutResponse> {
    /**
     * @generated from field: string token_in_amount = 1;
     */
    tokenInAmount: string;
    constructor(data?: PartialMessage<MsgJoinSwapShareAmountOutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinSwapShareAmountOutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinSwapShareAmountOutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinSwapShareAmountOutResponse;
    static equals(a: MsgJoinSwapShareAmountOutResponse | PlainMessage<MsgJoinSwapShareAmountOutResponse> | undefined, b: MsgJoinSwapShareAmountOutResponse | PlainMessage<MsgJoinSwapShareAmountOutResponse> | undefined): boolean;
}
/**
 * ===================== MsgExitSwapShareAmountIn
 *
 * @generated from message osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn
 */
export declare class MsgExitSwapShareAmountIn extends Message<MsgExitSwapShareAmountIn> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    /**
     * @generated from field: string token_out_denom = 3;
     */
    tokenOutDenom: string;
    /**
     * @generated from field: string share_in_amount = 4;
     */
    shareInAmount: string;
    /**
     * @generated from field: string token_out_min_amount = 5;
     */
    tokenOutMinAmount: string;
    constructor(data?: PartialMessage<MsgExitSwapShareAmountIn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitSwapShareAmountIn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitSwapShareAmountIn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitSwapShareAmountIn;
    static equals(a: MsgExitSwapShareAmountIn | PlainMessage<MsgExitSwapShareAmountIn> | undefined, b: MsgExitSwapShareAmountIn | PlainMessage<MsgExitSwapShareAmountIn> | undefined): boolean;
}
/**
 * @generated from message osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse
 */
export declare class MsgExitSwapShareAmountInResponse extends Message<MsgExitSwapShareAmountInResponse> {
    /**
     * @generated from field: string token_out_amount = 1;
     */
    tokenOutAmount: string;
    constructor(data?: PartialMessage<MsgExitSwapShareAmountInResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitSwapShareAmountInResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitSwapShareAmountInResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitSwapShareAmountInResponse;
    static equals(a: MsgExitSwapShareAmountInResponse | PlainMessage<MsgExitSwapShareAmountInResponse> | undefined, b: MsgExitSwapShareAmountInResponse | PlainMessage<MsgExitSwapShareAmountInResponse> | undefined): boolean;
}
/**
 * ===================== MsgExitSwapExternAmountOut
 *
 * @generated from message osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut
 */
export declare class MsgExitSwapExternAmountOut extends Message<MsgExitSwapExternAmountOut> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin token_out = 3;
     */
    tokenOut?: Coin;
    /**
     * @generated from field: string share_in_max_amount = 4;
     */
    shareInMaxAmount: string;
    constructor(data?: PartialMessage<MsgExitSwapExternAmountOut>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitSwapExternAmountOut;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitSwapExternAmountOut;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitSwapExternAmountOut;
    static equals(a: MsgExitSwapExternAmountOut | PlainMessage<MsgExitSwapExternAmountOut> | undefined, b: MsgExitSwapExternAmountOut | PlainMessage<MsgExitSwapExternAmountOut> | undefined): boolean;
}
/**
 * @generated from message osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse
 */
export declare class MsgExitSwapExternAmountOutResponse extends Message<MsgExitSwapExternAmountOutResponse> {
    /**
     * @generated from field: string share_in_amount = 1;
     */
    shareInAmount: string;
    constructor(data?: PartialMessage<MsgExitSwapExternAmountOutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitSwapExternAmountOutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitSwapExternAmountOutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitSwapExternAmountOutResponse;
    static equals(a: MsgExitSwapExternAmountOutResponse | PlainMessage<MsgExitSwapExternAmountOutResponse> | undefined, b: MsgExitSwapExternAmountOutResponse | PlainMessage<MsgExitSwapExternAmountOutResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map