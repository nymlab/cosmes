import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./mint_pb.js";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.mint.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: cosmos.mint.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.mint.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QueryInflationRequest is the request type for the Query/Inflation RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryInflationRequest
 */
export declare class QueryInflationRequest extends Message<QueryInflationRequest> {
    constructor(data?: PartialMessage<QueryInflationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.mint.v1beta1.QueryInflationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInflationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInflationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInflationRequest;
    static equals(a: QueryInflationRequest | PlainMessage<QueryInflationRequest> | undefined, b: QueryInflationRequest | PlainMessage<QueryInflationRequest> | undefined): boolean;
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryInflationResponse
 */
export declare class QueryInflationResponse extends Message<QueryInflationResponse> {
    /**
     * inflation is the current minting inflation value.
     *
     * @generated from field: bytes inflation = 1;
     */
    inflation: Uint8Array;
    constructor(data?: PartialMessage<QueryInflationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.mint.v1beta1.QueryInflationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInflationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInflationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInflationResponse;
    static equals(a: QueryInflationResponse | PlainMessage<QueryInflationResponse> | undefined, b: QueryInflationResponse | PlainMessage<QueryInflationResponse> | undefined): boolean;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryAnnualProvisionsRequest
 */
export declare class QueryAnnualProvisionsRequest extends Message<QueryAnnualProvisionsRequest> {
    constructor(data?: PartialMessage<QueryAnnualProvisionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.mint.v1beta1.QueryAnnualProvisionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAnnualProvisionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAnnualProvisionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAnnualProvisionsRequest;
    static equals(a: QueryAnnualProvisionsRequest | PlainMessage<QueryAnnualProvisionsRequest> | undefined, b: QueryAnnualProvisionsRequest | PlainMessage<QueryAnnualProvisionsRequest> | undefined): boolean;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryAnnualProvisionsResponse
 */
export declare class QueryAnnualProvisionsResponse extends Message<QueryAnnualProvisionsResponse> {
    /**
     * annual_provisions is the current minting annual provisions value.
     *
     * @generated from field: bytes annual_provisions = 1;
     */
    annualProvisions: Uint8Array;
    constructor(data?: PartialMessage<QueryAnnualProvisionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.mint.v1beta1.QueryAnnualProvisionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAnnualProvisionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAnnualProvisionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAnnualProvisionsResponse;
    static equals(a: QueryAnnualProvisionsResponse | PlainMessage<QueryAnnualProvisionsResponse> | undefined, b: QueryAnnualProvisionsResponse | PlainMessage<QueryAnnualProvisionsResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map