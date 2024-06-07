import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FeeToken } from "./feetoken_pb.js";
/**
 * @generated from message osmosis.txfees.v1beta1.QueryFeeTokensRequest
 */
export declare class QueryFeeTokensRequest extends Message<QueryFeeTokensRequest> {
    constructor(data?: PartialMessage<QueryFeeTokensRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.txfees.v1beta1.QueryFeeTokensRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeTokensRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeTokensRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeTokensRequest;
    static equals(a: QueryFeeTokensRequest | PlainMessage<QueryFeeTokensRequest> | undefined, b: QueryFeeTokensRequest | PlainMessage<QueryFeeTokensRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.txfees.v1beta1.QueryFeeTokensResponse
 */
export declare class QueryFeeTokensResponse extends Message<QueryFeeTokensResponse> {
    /**
     * @generated from field: repeated osmosis.txfees.v1beta1.FeeToken fee_tokens = 1;
     */
    feeTokens: FeeToken[];
    constructor(data?: PartialMessage<QueryFeeTokensResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.txfees.v1beta1.QueryFeeTokensResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeTokensResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeTokensResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeTokensResponse;
    static equals(a: QueryFeeTokensResponse | PlainMessage<QueryFeeTokensResponse> | undefined, b: QueryFeeTokensResponse | PlainMessage<QueryFeeTokensResponse> | undefined): boolean;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 *
 * @generated from message osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest
 */
export declare class QueryDenomSpotPriceRequest extends Message<QueryDenomSpotPriceRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryDenomSpotPriceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomSpotPriceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomSpotPriceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomSpotPriceRequest;
    static equals(a: QueryDenomSpotPriceRequest | PlainMessage<QueryDenomSpotPriceRequest> | undefined, b: QueryDenomSpotPriceRequest | PlainMessage<QueryDenomSpotPriceRequest> | undefined): boolean;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 *
 * @generated from message osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse
 */
export declare class QueryDenomSpotPriceResponse extends Message<QueryDenomSpotPriceResponse> {
    /**
     * @generated from field: uint64 poolID = 1;
     */
    poolID: bigint;
    /**
     * @generated from field: string spot_price = 2;
     */
    spotPrice: string;
    constructor(data?: PartialMessage<QueryDenomSpotPriceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomSpotPriceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomSpotPriceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomSpotPriceResponse;
    static equals(a: QueryDenomSpotPriceResponse | PlainMessage<QueryDenomSpotPriceResponse> | undefined, b: QueryDenomSpotPriceResponse | PlainMessage<QueryDenomSpotPriceResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.txfees.v1beta1.QueryDenomPoolIdRequest
 */
export declare class QueryDenomPoolIdRequest extends Message<QueryDenomPoolIdRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryDenomPoolIdRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.txfees.v1beta1.QueryDenomPoolIdRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomPoolIdRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomPoolIdRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomPoolIdRequest;
    static equals(a: QueryDenomPoolIdRequest | PlainMessage<QueryDenomPoolIdRequest> | undefined, b: QueryDenomPoolIdRequest | PlainMessage<QueryDenomPoolIdRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.txfees.v1beta1.QueryDenomPoolIdResponse
 */
export declare class QueryDenomPoolIdResponse extends Message<QueryDenomPoolIdResponse> {
    /**
     * @generated from field: uint64 poolID = 1;
     */
    poolID: bigint;
    constructor(data?: PartialMessage<QueryDenomPoolIdResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.txfees.v1beta1.QueryDenomPoolIdResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomPoolIdResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomPoolIdResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomPoolIdResponse;
    static equals(a: QueryDenomPoolIdResponse | PlainMessage<QueryDenomPoolIdResponse> | undefined, b: QueryDenomPoolIdResponse | PlainMessage<QueryDenomPoolIdResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.txfees.v1beta1.QueryBaseDenomRequest
 */
export declare class QueryBaseDenomRequest extends Message<QueryBaseDenomRequest> {
    constructor(data?: PartialMessage<QueryBaseDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.txfees.v1beta1.QueryBaseDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBaseDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBaseDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBaseDenomRequest;
    static equals(a: QueryBaseDenomRequest | PlainMessage<QueryBaseDenomRequest> | undefined, b: QueryBaseDenomRequest | PlainMessage<QueryBaseDenomRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.txfees.v1beta1.QueryBaseDenomResponse
 */
export declare class QueryBaseDenomResponse extends Message<QueryBaseDenomResponse> {
    /**
     * @generated from field: string base_denom = 1;
     */
    baseDenom: string;
    constructor(data?: PartialMessage<QueryBaseDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.txfees.v1beta1.QueryBaseDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBaseDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBaseDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBaseDenomResponse;
    static equals(a: QueryBaseDenomResponse | PlainMessage<QueryBaseDenomResponse> | undefined, b: QueryBaseDenomResponse | PlainMessage<QueryBaseDenomResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.txfees.v1beta1.QueryEipBaseFeeRequest
 */
export declare class QueryEipBaseFeeRequest extends Message<QueryEipBaseFeeRequest> {
    constructor(data?: PartialMessage<QueryEipBaseFeeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.txfees.v1beta1.QueryEipBaseFeeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEipBaseFeeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEipBaseFeeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEipBaseFeeRequest;
    static equals(a: QueryEipBaseFeeRequest | PlainMessage<QueryEipBaseFeeRequest> | undefined, b: QueryEipBaseFeeRequest | PlainMessage<QueryEipBaseFeeRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.txfees.v1beta1.QueryEipBaseFeeResponse
 */
export declare class QueryEipBaseFeeResponse extends Message<QueryEipBaseFeeResponse> {
    /**
     * @generated from field: string base_fee = 1;
     */
    baseFee: string;
    constructor(data?: PartialMessage<QueryEipBaseFeeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.txfees.v1beta1.QueryEipBaseFeeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEipBaseFeeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEipBaseFeeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEipBaseFeeResponse;
    static equals(a: QueryEipBaseFeeResponse | PlainMessage<QueryEipBaseFeeResponse> | undefined, b: QueryEipBaseFeeResponse | PlainMessage<QueryEipBaseFeeResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map