import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message osmosis.poolmanager.v1beta1.SwapAmountInRoute
 */
export declare class SwapAmountInRoute extends Message<SwapAmountInRoute> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string token_out_denom = 2;
     */
    tokenOutDenom: string;
    constructor(data?: PartialMessage<SwapAmountInRoute>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.SwapAmountInRoute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapAmountInRoute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapAmountInRoute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapAmountInRoute;
    static equals(a: SwapAmountInRoute | PlainMessage<SwapAmountInRoute> | undefined, b: SwapAmountInRoute | PlainMessage<SwapAmountInRoute> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.SwapAmountOutRoute
 */
export declare class SwapAmountOutRoute extends Message<SwapAmountOutRoute> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string token_in_denom = 2;
     */
    tokenInDenom: string;
    constructor(data?: PartialMessage<SwapAmountOutRoute>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.SwapAmountOutRoute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapAmountOutRoute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapAmountOutRoute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapAmountOutRoute;
    static equals(a: SwapAmountOutRoute | PlainMessage<SwapAmountOutRoute> | undefined, b: SwapAmountOutRoute | PlainMessage<SwapAmountOutRoute> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.SwapAmountInSplitRoute
 */
export declare class SwapAmountInSplitRoute extends Message<SwapAmountInSplitRoute> {
    /**
     * @generated from field: repeated osmosis.poolmanager.v1beta1.SwapAmountInRoute pools = 1;
     */
    pools: SwapAmountInRoute[];
    /**
     * @generated from field: string token_in_amount = 2;
     */
    tokenInAmount: string;
    constructor(data?: PartialMessage<SwapAmountInSplitRoute>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.SwapAmountInSplitRoute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapAmountInSplitRoute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapAmountInSplitRoute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapAmountInSplitRoute;
    static equals(a: SwapAmountInSplitRoute | PlainMessage<SwapAmountInSplitRoute> | undefined, b: SwapAmountInSplitRoute | PlainMessage<SwapAmountInSplitRoute> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.SwapAmountOutSplitRoute
 */
export declare class SwapAmountOutSplitRoute extends Message<SwapAmountOutSplitRoute> {
    /**
     * @generated from field: repeated osmosis.poolmanager.v1beta1.SwapAmountOutRoute pools = 1;
     */
    pools: SwapAmountOutRoute[];
    /**
     * @generated from field: string token_out_amount = 2;
     */
    tokenOutAmount: string;
    constructor(data?: PartialMessage<SwapAmountOutSplitRoute>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.SwapAmountOutSplitRoute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapAmountOutSplitRoute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapAmountOutSplitRoute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapAmountOutSplitRoute;
    static equals(a: SwapAmountOutSplitRoute | PlainMessage<SwapAmountOutSplitRoute> | undefined, b: SwapAmountOutSplitRoute | PlainMessage<SwapAmountOutSplitRoute> | undefined): boolean;
}
//# sourceMappingURL=swap_route_pb.d.ts.map