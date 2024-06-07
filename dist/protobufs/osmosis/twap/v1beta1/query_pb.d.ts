import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Params } from "./genesis_pb.js";
/**
 * @generated from message osmosis.twap.v1beta1.ArithmeticTwapRequest
 */
export declare class ArithmeticTwapRequest extends Message<ArithmeticTwapRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string base_asset = 2;
     */
    baseAsset: string;
    /**
     * @generated from field: string quote_asset = 3;
     */
    quoteAsset: string;
    /**
     * @generated from field: google.protobuf.Timestamp start_time = 4;
     */
    startTime?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp end_time = 5;
     */
    endTime?: Timestamp;
    constructor(data?: PartialMessage<ArithmeticTwapRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.ArithmeticTwapRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArithmeticTwapRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArithmeticTwapRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArithmeticTwapRequest;
    static equals(a: ArithmeticTwapRequest | PlainMessage<ArithmeticTwapRequest> | undefined, b: ArithmeticTwapRequest | PlainMessage<ArithmeticTwapRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.twap.v1beta1.ArithmeticTwapResponse
 */
export declare class ArithmeticTwapResponse extends Message<ArithmeticTwapResponse> {
    /**
     * @generated from field: string arithmetic_twap = 1;
     */
    arithmeticTwap: string;
    constructor(data?: PartialMessage<ArithmeticTwapResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.ArithmeticTwapResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArithmeticTwapResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArithmeticTwapResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArithmeticTwapResponse;
    static equals(a: ArithmeticTwapResponse | PlainMessage<ArithmeticTwapResponse> | undefined, b: ArithmeticTwapResponse | PlainMessage<ArithmeticTwapResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.twap.v1beta1.ArithmeticTwapToNowRequest
 */
export declare class ArithmeticTwapToNowRequest extends Message<ArithmeticTwapToNowRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string base_asset = 2;
     */
    baseAsset: string;
    /**
     * @generated from field: string quote_asset = 3;
     */
    quoteAsset: string;
    /**
     * @generated from field: google.protobuf.Timestamp start_time = 4;
     */
    startTime?: Timestamp;
    constructor(data?: PartialMessage<ArithmeticTwapToNowRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.ArithmeticTwapToNowRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArithmeticTwapToNowRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArithmeticTwapToNowRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArithmeticTwapToNowRequest;
    static equals(a: ArithmeticTwapToNowRequest | PlainMessage<ArithmeticTwapToNowRequest> | undefined, b: ArithmeticTwapToNowRequest | PlainMessage<ArithmeticTwapToNowRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.twap.v1beta1.ArithmeticTwapToNowResponse
 */
export declare class ArithmeticTwapToNowResponse extends Message<ArithmeticTwapToNowResponse> {
    /**
     * @generated from field: string arithmetic_twap = 1;
     */
    arithmeticTwap: string;
    constructor(data?: PartialMessage<ArithmeticTwapToNowResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.ArithmeticTwapToNowResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArithmeticTwapToNowResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArithmeticTwapToNowResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArithmeticTwapToNowResponse;
    static equals(a: ArithmeticTwapToNowResponse | PlainMessage<ArithmeticTwapToNowResponse> | undefined, b: ArithmeticTwapToNowResponse | PlainMessage<ArithmeticTwapToNowResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.twap.v1beta1.GeometricTwapRequest
 */
export declare class GeometricTwapRequest extends Message<GeometricTwapRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string base_asset = 2;
     */
    baseAsset: string;
    /**
     * @generated from field: string quote_asset = 3;
     */
    quoteAsset: string;
    /**
     * @generated from field: google.protobuf.Timestamp start_time = 4;
     */
    startTime?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp end_time = 5;
     */
    endTime?: Timestamp;
    constructor(data?: PartialMessage<GeometricTwapRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.GeometricTwapRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeometricTwapRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeometricTwapRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeometricTwapRequest;
    static equals(a: GeometricTwapRequest | PlainMessage<GeometricTwapRequest> | undefined, b: GeometricTwapRequest | PlainMessage<GeometricTwapRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.twap.v1beta1.GeometricTwapResponse
 */
export declare class GeometricTwapResponse extends Message<GeometricTwapResponse> {
    /**
     * @generated from field: string geometric_twap = 1;
     */
    geometricTwap: string;
    constructor(data?: PartialMessage<GeometricTwapResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.GeometricTwapResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeometricTwapResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeometricTwapResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeometricTwapResponse;
    static equals(a: GeometricTwapResponse | PlainMessage<GeometricTwapResponse> | undefined, b: GeometricTwapResponse | PlainMessage<GeometricTwapResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.twap.v1beta1.GeometricTwapToNowRequest
 */
export declare class GeometricTwapToNowRequest extends Message<GeometricTwapToNowRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string base_asset = 2;
     */
    baseAsset: string;
    /**
     * @generated from field: string quote_asset = 3;
     */
    quoteAsset: string;
    /**
     * @generated from field: google.protobuf.Timestamp start_time = 4;
     */
    startTime?: Timestamp;
    constructor(data?: PartialMessage<GeometricTwapToNowRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.GeometricTwapToNowRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeometricTwapToNowRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeometricTwapToNowRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeometricTwapToNowRequest;
    static equals(a: GeometricTwapToNowRequest | PlainMessage<GeometricTwapToNowRequest> | undefined, b: GeometricTwapToNowRequest | PlainMessage<GeometricTwapToNowRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.twap.v1beta1.GeometricTwapToNowResponse
 */
export declare class GeometricTwapToNowResponse extends Message<GeometricTwapToNowResponse> {
    /**
     * @generated from field: string geometric_twap = 1;
     */
    geometricTwap: string;
    constructor(data?: PartialMessage<GeometricTwapToNowResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.GeometricTwapToNowResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeometricTwapToNowResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeometricTwapToNowResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeometricTwapToNowResponse;
    static equals(a: GeometricTwapToNowResponse | PlainMessage<GeometricTwapToNowResponse> | undefined, b: GeometricTwapToNowResponse | PlainMessage<GeometricTwapToNowResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.twap.v1beta1.ParamsRequest
 */
export declare class ParamsRequest extends Message<ParamsRequest> {
    constructor(data?: PartialMessage<ParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.ParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsRequest;
    static equals(a: ParamsRequest | PlainMessage<ParamsRequest> | undefined, b: ParamsRequest | PlainMessage<ParamsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.twap.v1beta1.ParamsResponse
 */
export declare class ParamsResponse extends Message<ParamsResponse> {
    /**
     * @generated from field: osmosis.twap.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<ParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.ParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsResponse;
    static equals(a: ParamsResponse | PlainMessage<ParamsResponse> | undefined, b: ParamsResponse | PlainMessage<ParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map