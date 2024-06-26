import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { Grant, GrantAuthorization } from "./authz_pb.js";
/**
 * QueryGrantsRequest is the request type for the Query/Grants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGrantsRequest
 */
export declare class QueryGrantsRequest extends Message<QueryGrantsRequest> {
    /**
     * @generated from field: string granter = 1;
     */
    granter: string;
    /**
     * @generated from field: string grantee = 2;
     */
    grantee: string;
    /**
     * Optional, msg_type_url, when set, will query only grants matching given msg type.
     *
     * @generated from field: string msg_type_url = 3;
     */
    msgTypeUrl: string;
    /**
     * pagination defines an pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 4;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryGrantsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.QueryGrantsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGrantsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGrantsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGrantsRequest;
    static equals(a: QueryGrantsRequest | PlainMessage<QueryGrantsRequest> | undefined, b: QueryGrantsRequest | PlainMessage<QueryGrantsRequest> | undefined): boolean;
}
/**
 * QueryGrantsResponse is the response type for the Query/Authorizations RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGrantsResponse
 */
export declare class QueryGrantsResponse extends Message<QueryGrantsResponse> {
    /**
     * authorizations is a list of grants granted for grantee by granter.
     *
     * @generated from field: repeated cosmos.authz.v1beta1.Grant grants = 1;
     */
    grants: Grant[];
    /**
     * pagination defines an pagination for the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryGrantsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.QueryGrantsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGrantsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGrantsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGrantsResponse;
    static equals(a: QueryGrantsResponse | PlainMessage<QueryGrantsResponse> | undefined, b: QueryGrantsResponse | PlainMessage<QueryGrantsResponse> | undefined): boolean;
}
/**
 * QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranterGrantsRequest
 */
export declare class QueryGranterGrantsRequest extends Message<QueryGranterGrantsRequest> {
    /**
     * @generated from field: string granter = 1;
     */
    granter: string;
    /**
     * pagination defines an pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryGranterGrantsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.QueryGranterGrantsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGranterGrantsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGranterGrantsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGranterGrantsRequest;
    static equals(a: QueryGranterGrantsRequest | PlainMessage<QueryGranterGrantsRequest> | undefined, b: QueryGranterGrantsRequest | PlainMessage<QueryGranterGrantsRequest> | undefined): boolean;
}
/**
 * QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranterGrantsResponse
 */
export declare class QueryGranterGrantsResponse extends Message<QueryGranterGrantsResponse> {
    /**
     * grants is a list of grants granted by the granter.
     *
     * @generated from field: repeated cosmos.authz.v1beta1.GrantAuthorization grants = 1;
     */
    grants: GrantAuthorization[];
    /**
     * pagination defines an pagination for the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryGranterGrantsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.QueryGranterGrantsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGranterGrantsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGranterGrantsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGranterGrantsResponse;
    static equals(a: QueryGranterGrantsResponse | PlainMessage<QueryGranterGrantsResponse> | undefined, b: QueryGranterGrantsResponse | PlainMessage<QueryGranterGrantsResponse> | undefined): boolean;
}
/**
 * QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranteeGrantsRequest
 */
export declare class QueryGranteeGrantsRequest extends Message<QueryGranteeGrantsRequest> {
    /**
     * @generated from field: string grantee = 1;
     */
    grantee: string;
    /**
     * pagination defines an pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryGranteeGrantsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.QueryGranteeGrantsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGranteeGrantsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGranteeGrantsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGranteeGrantsRequest;
    static equals(a: QueryGranteeGrantsRequest | PlainMessage<QueryGranteeGrantsRequest> | undefined, b: QueryGranteeGrantsRequest | PlainMessage<QueryGranteeGrantsRequest> | undefined): boolean;
}
/**
 * QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranteeGrantsResponse
 */
export declare class QueryGranteeGrantsResponse extends Message<QueryGranteeGrantsResponse> {
    /**
     * grants is a list of grants granted to the grantee.
     *
     * @generated from field: repeated cosmos.authz.v1beta1.GrantAuthorization grants = 1;
     */
    grants: GrantAuthorization[];
    /**
     * pagination defines an pagination for the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryGranteeGrantsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.QueryGranteeGrantsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGranteeGrantsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGranteeGrantsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGranteeGrantsResponse;
    static equals(a: QueryGranteeGrantsResponse | PlainMessage<QueryGranteeGrantsResponse> | undefined, b: QueryGranteeGrantsResponse | PlainMessage<QueryGranteeGrantsResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map