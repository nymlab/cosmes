import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * ===================== CalcOutAmtGivenIn
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn
 */
export declare class CalcOutAmtGivenIn extends Message<CalcOutAmtGivenIn> {
    /**
     * token_in is the token to be sent to the pool.
     *
     * @generated from field: cosmos.base.v1beta1.Coin token_in = 1;
     */
    tokenIn?: Coin;
    /**
     * token_out_denom is the token denom to be received from the pool.
     *
     * @generated from field: string token_out_denom = 2;
     */
    tokenOutDenom: string;
    /**
     * swap_fee is the swap fee for this swap estimate.
     *
     * @generated from field: string swap_fee = 3;
     */
    swapFee: string;
    constructor(data?: PartialMessage<CalcOutAmtGivenIn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalcOutAmtGivenIn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalcOutAmtGivenIn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalcOutAmtGivenIn;
    static equals(a: CalcOutAmtGivenIn | PlainMessage<CalcOutAmtGivenIn> | undefined, b: CalcOutAmtGivenIn | PlainMessage<CalcOutAmtGivenIn> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest
 */
export declare class CalcOutAmtGivenInRequest extends Message<CalcOutAmtGivenInRequest> {
    /**
     * calc_out_amt_given_in is the structure containing all the request
     * information for this query.
     *
     * @generated from field: osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn calc_out_amt_given_in = 1;
     */
    calcOutAmtGivenIn?: CalcOutAmtGivenIn;
    constructor(data?: PartialMessage<CalcOutAmtGivenInRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalcOutAmtGivenInRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalcOutAmtGivenInRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalcOutAmtGivenInRequest;
    static equals(a: CalcOutAmtGivenInRequest | PlainMessage<CalcOutAmtGivenInRequest> | undefined, b: CalcOutAmtGivenInRequest | PlainMessage<CalcOutAmtGivenInRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse
 */
export declare class CalcOutAmtGivenInResponse extends Message<CalcOutAmtGivenInResponse> {
    /**
     * token_out is the token out computed from this swap estimate call.
     *
     * @generated from field: cosmos.base.v1beta1.Coin token_out = 1;
     */
    tokenOut?: Coin;
    constructor(data?: PartialMessage<CalcOutAmtGivenInResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalcOutAmtGivenInResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalcOutAmtGivenInResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalcOutAmtGivenInResponse;
    static equals(a: CalcOutAmtGivenInResponse | PlainMessage<CalcOutAmtGivenInResponse> | undefined, b: CalcOutAmtGivenInResponse | PlainMessage<CalcOutAmtGivenInResponse> | undefined): boolean;
}
/**
 * ===================== CalcInAmtGivenOut
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut
 */
export declare class CalcInAmtGivenOut extends Message<CalcInAmtGivenOut> {
    /**
     * token_out is the token out to be receoved from the pool.
     *
     * @generated from field: cosmos.base.v1beta1.Coin token_out = 1;
     */
    tokenOut?: Coin;
    /**
     * token_in_denom is the token denom to be sentt to the pool.
     *
     * @generated from field: string token_in_denom = 2;
     */
    tokenInDenom: string;
    /**
     * swap_fee is the swap fee for this swap estimate.
     *
     * @generated from field: string swap_fee = 3;
     */
    swapFee: string;
    constructor(data?: PartialMessage<CalcInAmtGivenOut>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalcInAmtGivenOut;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalcInAmtGivenOut;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalcInAmtGivenOut;
    static equals(a: CalcInAmtGivenOut | PlainMessage<CalcInAmtGivenOut> | undefined, b: CalcInAmtGivenOut | PlainMessage<CalcInAmtGivenOut> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest
 */
export declare class CalcInAmtGivenOutRequest extends Message<CalcInAmtGivenOutRequest> {
    /**
     * calc_in_amt_given_out is the structure containing all the request
     * information for this query.
     *
     * @generated from field: osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut calc_in_amt_given_out = 1;
     */
    calcInAmtGivenOut?: CalcInAmtGivenOut;
    constructor(data?: PartialMessage<CalcInAmtGivenOutRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalcInAmtGivenOutRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalcInAmtGivenOutRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalcInAmtGivenOutRequest;
    static equals(a: CalcInAmtGivenOutRequest | PlainMessage<CalcInAmtGivenOutRequest> | undefined, b: CalcInAmtGivenOutRequest | PlainMessage<CalcInAmtGivenOutRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse
 */
export declare class CalcInAmtGivenOutResponse extends Message<CalcInAmtGivenOutResponse> {
    /**
     * token_in is the token in computed from this swap estimate call.
     *
     * @generated from field: cosmos.base.v1beta1.Coin token_in = 1;
     */
    tokenIn?: Coin;
    constructor(data?: PartialMessage<CalcInAmtGivenOutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalcInAmtGivenOutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalcInAmtGivenOutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalcInAmtGivenOutResponse;
    static equals(a: CalcInAmtGivenOutResponse | PlainMessage<CalcInAmtGivenOutResponse> | undefined, b: CalcInAmtGivenOutResponse | PlainMessage<CalcInAmtGivenOutResponse> | undefined): boolean;
}
//# sourceMappingURL=module_query_msg_pb.d.ts.map