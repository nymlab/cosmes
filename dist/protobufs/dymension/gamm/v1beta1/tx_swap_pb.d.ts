import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { SwapAmountInRoute, SwapAmountOutRoute } from "../../poolmanager/v1beta1/swap_route_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * ===================== MsgSwapExactAmountIn
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgSwapExactAmountIn
 */
export declare class MsgSwapExactAmountIn extends Message<MsgSwapExactAmountIn> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated dymensionxyz.dymension.poolmanager.v1beta1.SwapAmountInRoute routes = 2;
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
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgSwapExactAmountIn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountIn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountIn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountIn;
    static equals(a: MsgSwapExactAmountIn | PlainMessage<MsgSwapExactAmountIn> | undefined, b: MsgSwapExactAmountIn | PlainMessage<MsgSwapExactAmountIn> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgSwapExactAmountInResponse
 */
export declare class MsgSwapExactAmountInResponse extends Message<MsgSwapExactAmountInResponse> {
    /**
     * @generated from field: string token_out_amount = 1;
     */
    tokenOutAmount: string;
    constructor(data?: PartialMessage<MsgSwapExactAmountInResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgSwapExactAmountInResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountInResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountInResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountInResponse;
    static equals(a: MsgSwapExactAmountInResponse | PlainMessage<MsgSwapExactAmountInResponse> | undefined, b: MsgSwapExactAmountInResponse | PlainMessage<MsgSwapExactAmountInResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgSwapExactAmountOut
 */
export declare class MsgSwapExactAmountOut extends Message<MsgSwapExactAmountOut> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated dymensionxyz.dymension.poolmanager.v1beta1.SwapAmountOutRoute routes = 2;
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
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgSwapExactAmountOut";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountOut;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOut;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOut;
    static equals(a: MsgSwapExactAmountOut | PlainMessage<MsgSwapExactAmountOut> | undefined, b: MsgSwapExactAmountOut | PlainMessage<MsgSwapExactAmountOut> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgSwapExactAmountOutResponse
 */
export declare class MsgSwapExactAmountOutResponse extends Message<MsgSwapExactAmountOutResponse> {
    /**
     * @generated from field: string token_in_amount = 1;
     */
    tokenInAmount: string;
    constructor(data?: PartialMessage<MsgSwapExactAmountOutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgSwapExactAmountOutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountOutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOutResponse;
    static equals(a: MsgSwapExactAmountOutResponse | PlainMessage<MsgSwapExactAmountOutResponse> | undefined, b: MsgSwapExactAmountOutResponse | PlainMessage<MsgSwapExactAmountOutResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_swap_pb.d.ts.map