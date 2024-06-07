import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message dymensionxyz.dymension.poolmanager.v1beta1.SwapAmountInRoute
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
    static readonly typeName = "dymensionxyz.dymension.poolmanager.v1beta1.SwapAmountInRoute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapAmountInRoute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapAmountInRoute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapAmountInRoute;
    static equals(a: SwapAmountInRoute | PlainMessage<SwapAmountInRoute> | undefined, b: SwapAmountInRoute | PlainMessage<SwapAmountInRoute> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.poolmanager.v1beta1.SwapAmountOutRoute
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
    static readonly typeName = "dymensionxyz.dymension.poolmanager.v1beta1.SwapAmountOutRoute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapAmountOutRoute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapAmountOutRoute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapAmountOutRoute;
    static equals(a: SwapAmountOutRoute | PlainMessage<SwapAmountOutRoute> | undefined, b: SwapAmountOutRoute | PlainMessage<SwapAmountOutRoute> | undefined): boolean;
}
//# sourceMappingURL=swap_route_pb.d.ts.map