import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ParamChange } from "./params_pb.js";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.params.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    /**
     * subspace defines the module to query the parameter for.
     *
     * @generated from field: string subspace = 1;
     */
    subspace: string;
    /**
     * key defines the key of the parameter in the subspace.
     *
     * @generated from field: string key = 2;
     */
    key: string;
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.params.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.params.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * param defines the queried parameter.
     *
     * @generated from field: cosmos.params.v1beta1.ParamChange param = 1;
     */
    param?: ParamChange;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.params.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.params.v1beta1.QuerySubspacesRequest
 */
export declare class QuerySubspacesRequest extends Message<QuerySubspacesRequest> {
    constructor(data?: PartialMessage<QuerySubspacesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.params.v1beta1.QuerySubspacesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubspacesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubspacesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubspacesRequest;
    static equals(a: QuerySubspacesRequest | PlainMessage<QuerySubspacesRequest> | undefined, b: QuerySubspacesRequest | PlainMessage<QuerySubspacesRequest> | undefined): boolean;
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.params.v1beta1.QuerySubspacesResponse
 */
export declare class QuerySubspacesResponse extends Message<QuerySubspacesResponse> {
    /**
     * @generated from field: repeated cosmos.params.v1beta1.Subspace subspaces = 1;
     */
    subspaces: Subspace[];
    constructor(data?: PartialMessage<QuerySubspacesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.params.v1beta1.QuerySubspacesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubspacesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubspacesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubspacesResponse;
    static equals(a: QuerySubspacesResponse | PlainMessage<QuerySubspacesResponse> | undefined, b: QuerySubspacesResponse | PlainMessage<QuerySubspacesResponse> | undefined): boolean;
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.params.v1beta1.Subspace
 */
export declare class Subspace extends Message<Subspace> {
    /**
     * @generated from field: string subspace = 1;
     */
    subspace: string;
    /**
     * @generated from field: repeated string keys = 2;
     */
    keys: string[];
    constructor(data?: PartialMessage<Subspace>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.params.v1beta1.Subspace";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Subspace;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Subspace;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Subspace;
    static equals(a: Subspace | PlainMessage<Subspace> | undefined, b: Subspace | PlainMessage<Subspace> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map