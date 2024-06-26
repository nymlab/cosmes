import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Grant } from "./feegrant_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
/**
 * QueryAllowanceRequest is the request type for the Query/Allowance RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowanceRequest
 */
export declare class QueryAllowanceRequest extends Message<QueryAllowanceRequest> {
    /**
     * granter is the address of the user granting an allowance of their funds.
     *
     * @generated from field: string granter = 1;
     */
    granter: string;
    /**
     * grantee is the address of the user being granted an allowance of another user's funds.
     *
     * @generated from field: string grantee = 2;
     */
    grantee: string;
    constructor(data?: PartialMessage<QueryAllowanceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.QueryAllowanceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllowanceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllowanceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllowanceRequest;
    static equals(a: QueryAllowanceRequest | PlainMessage<QueryAllowanceRequest> | undefined, b: QueryAllowanceRequest | PlainMessage<QueryAllowanceRequest> | undefined): boolean;
}
/**
 * QueryAllowanceResponse is the response type for the Query/Allowance RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowanceResponse
 */
export declare class QueryAllowanceResponse extends Message<QueryAllowanceResponse> {
    /**
     * allowance is a allowance granted for grantee by granter.
     *
     * @generated from field: cosmos.feegrant.v1beta1.Grant allowance = 1;
     */
    allowance?: Grant;
    constructor(data?: PartialMessage<QueryAllowanceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.QueryAllowanceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllowanceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllowanceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllowanceResponse;
    static equals(a: QueryAllowanceResponse | PlainMessage<QueryAllowanceResponse> | undefined, b: QueryAllowanceResponse | PlainMessage<QueryAllowanceResponse> | undefined): boolean;
}
/**
 * QueryAllowancesRequest is the request type for the Query/Allowances RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesRequest
 */
export declare class QueryAllowancesRequest extends Message<QueryAllowancesRequest> {
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
    constructor(data?: PartialMessage<QueryAllowancesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.QueryAllowancesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllowancesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllowancesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllowancesRequest;
    static equals(a: QueryAllowancesRequest | PlainMessage<QueryAllowancesRequest> | undefined, b: QueryAllowancesRequest | PlainMessage<QueryAllowancesRequest> | undefined): boolean;
}
/**
 * QueryAllowancesResponse is the response type for the Query/Allowances RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesResponse
 */
export declare class QueryAllowancesResponse extends Message<QueryAllowancesResponse> {
    /**
     * allowances are allowance's granted for grantee by granter.
     *
     * @generated from field: repeated cosmos.feegrant.v1beta1.Grant allowances = 1;
     */
    allowances: Grant[];
    /**
     * pagination defines an pagination for the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryAllowancesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.QueryAllowancesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllowancesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllowancesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllowancesResponse;
    static equals(a: QueryAllowancesResponse | PlainMessage<QueryAllowancesResponse> | undefined, b: QueryAllowancesResponse | PlainMessage<QueryAllowancesResponse> | undefined): boolean;
}
/**
 * QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest
 */
export declare class QueryAllowancesByGranterRequest extends Message<QueryAllowancesByGranterRequest> {
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
    constructor(data?: PartialMessage<QueryAllowancesByGranterRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllowancesByGranterRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllowancesByGranterRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllowancesByGranterRequest;
    static equals(a: QueryAllowancesByGranterRequest | PlainMessage<QueryAllowancesByGranterRequest> | undefined, b: QueryAllowancesByGranterRequest | PlainMessage<QueryAllowancesByGranterRequest> | undefined): boolean;
}
/**
 * QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse
 */
export declare class QueryAllowancesByGranterResponse extends Message<QueryAllowancesByGranterResponse> {
    /**
     * allowances that have been issued by the granter.
     *
     * @generated from field: repeated cosmos.feegrant.v1beta1.Grant allowances = 1;
     */
    allowances: Grant[];
    /**
     * pagination defines an pagination for the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryAllowancesByGranterResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllowancesByGranterResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllowancesByGranterResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllowancesByGranterResponse;
    static equals(a: QueryAllowancesByGranterResponse | PlainMessage<QueryAllowancesByGranterResponse> | undefined, b: QueryAllowancesByGranterResponse | PlainMessage<QueryAllowancesByGranterResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map