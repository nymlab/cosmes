import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./mint_pb.js";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message osmosis.mint.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.mint.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message osmosis.mint.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: osmosis.mint.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.mint.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QueryEpochProvisionsRequest is the request type for the
 * Query/EpochProvisions RPC method.
 *
 * @generated from message osmosis.mint.v1beta1.QueryEpochProvisionsRequest
 */
export declare class QueryEpochProvisionsRequest extends Message<QueryEpochProvisionsRequest> {
    constructor(data?: PartialMessage<QueryEpochProvisionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.mint.v1beta1.QueryEpochProvisionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEpochProvisionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEpochProvisionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEpochProvisionsRequest;
    static equals(a: QueryEpochProvisionsRequest | PlainMessage<QueryEpochProvisionsRequest> | undefined, b: QueryEpochProvisionsRequest | PlainMessage<QueryEpochProvisionsRequest> | undefined): boolean;
}
/**
 * QueryEpochProvisionsResponse is the response type for the
 * Query/EpochProvisions RPC method.
 *
 * @generated from message osmosis.mint.v1beta1.QueryEpochProvisionsResponse
 */
export declare class QueryEpochProvisionsResponse extends Message<QueryEpochProvisionsResponse> {
    /**
     * epoch_provisions is the current minting per epoch provisions value.
     *
     * @generated from field: bytes epoch_provisions = 1;
     */
    epochProvisions: Uint8Array;
    constructor(data?: PartialMessage<QueryEpochProvisionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.mint.v1beta1.QueryEpochProvisionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEpochProvisionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEpochProvisionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEpochProvisionsResponse;
    static equals(a: QueryEpochProvisionsResponse | PlainMessage<QueryEpochProvisionsResponse> | undefined, b: QueryEpochProvisionsResponse | PlainMessage<QueryEpochProvisionsResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map