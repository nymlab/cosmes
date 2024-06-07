import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Namespace, Voucher } from "./permissions_pb.js";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message injective.permissions.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message injective.permissions.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: injective.permissions.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QueryAllNamespacesRequest is the request type for the Query/AllNamespaces RPC
 * method.
 *
 * @generated from message injective.permissions.v1beta1.QueryAllNamespacesRequest
 */
export declare class QueryAllNamespacesRequest extends Message<QueryAllNamespacesRequest> {
    constructor(data?: PartialMessage<QueryAllNamespacesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.QueryAllNamespacesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllNamespacesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllNamespacesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllNamespacesRequest;
    static equals(a: QueryAllNamespacesRequest | PlainMessage<QueryAllNamespacesRequest> | undefined, b: QueryAllNamespacesRequest | PlainMessage<QueryAllNamespacesRequest> | undefined): boolean;
}
/**
 * QueryAllNamespacesResponse is the response type for the Query/AllNamespaces
 * RPC method.
 *
 * @generated from message injective.permissions.v1beta1.QueryAllNamespacesResponse
 */
export declare class QueryAllNamespacesResponse extends Message<QueryAllNamespacesResponse> {
    /**
     * @generated from field: repeated injective.permissions.v1beta1.Namespace namespaces = 1;
     */
    namespaces: Namespace[];
    constructor(data?: PartialMessage<QueryAllNamespacesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.QueryAllNamespacesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllNamespacesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllNamespacesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllNamespacesResponse;
    static equals(a: QueryAllNamespacesResponse | PlainMessage<QueryAllNamespacesResponse> | undefined, b: QueryAllNamespacesResponse | PlainMessage<QueryAllNamespacesResponse> | undefined): boolean;
}
/**
 * QueryNamespaceByDenomRequest is the request type for the
 * Query/NamespaceByDenom RPC method.
 *
 * @generated from message injective.permissions.v1beta1.QueryNamespaceByDenomRequest
 */
export declare class QueryNamespaceByDenomRequest extends Message<QueryNamespaceByDenomRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: bool include_roles = 2;
     */
    includeRoles: boolean;
    constructor(data?: PartialMessage<QueryNamespaceByDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.QueryNamespaceByDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNamespaceByDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNamespaceByDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNamespaceByDenomRequest;
    static equals(a: QueryNamespaceByDenomRequest | PlainMessage<QueryNamespaceByDenomRequest> | undefined, b: QueryNamespaceByDenomRequest | PlainMessage<QueryNamespaceByDenomRequest> | undefined): boolean;
}
/**
 * QueryNamespaceByDenomResponse is the response type for the
 * Query/NamespaceByDenom RPC method.
 *
 * @generated from message injective.permissions.v1beta1.QueryNamespaceByDenomResponse
 */
export declare class QueryNamespaceByDenomResponse extends Message<QueryNamespaceByDenomResponse> {
    /**
     * @generated from field: injective.permissions.v1beta1.Namespace namespace = 1;
     */
    namespace?: Namespace;
    constructor(data?: PartialMessage<QueryNamespaceByDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.QueryNamespaceByDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNamespaceByDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNamespaceByDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNamespaceByDenomResponse;
    static equals(a: QueryNamespaceByDenomResponse | PlainMessage<QueryNamespaceByDenomResponse> | undefined, b: QueryNamespaceByDenomResponse | PlainMessage<QueryNamespaceByDenomResponse> | undefined): boolean;
}
/**
 * QueryAddressesByRoleRequest is the request type for the Query/AddressesByRole
 * RPC method.
 *
 * @generated from message injective.permissions.v1beta1.QueryAddressesByRoleRequest
 */
export declare class QueryAddressesByRoleRequest extends Message<QueryAddressesByRoleRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: string role = 2;
     */
    role: string;
    constructor(data?: PartialMessage<QueryAddressesByRoleRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.QueryAddressesByRoleRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAddressesByRoleRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAddressesByRoleRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAddressesByRoleRequest;
    static equals(a: QueryAddressesByRoleRequest | PlainMessage<QueryAddressesByRoleRequest> | undefined, b: QueryAddressesByRoleRequest | PlainMessage<QueryAddressesByRoleRequest> | undefined): boolean;
}
/**
 * QueryAddressesByRoleResponse is the response type for the
 * Query/AddressesByRole RPC method.
 *
 * @generated from message injective.permissions.v1beta1.QueryAddressesByRoleResponse
 */
export declare class QueryAddressesByRoleResponse extends Message<QueryAddressesByRoleResponse> {
    /**
     * @generated from field: repeated string addresses = 1;
     */
    addresses: string[];
    constructor(data?: PartialMessage<QueryAddressesByRoleResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.QueryAddressesByRoleResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAddressesByRoleResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAddressesByRoleResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAddressesByRoleResponse;
    static equals(a: QueryAddressesByRoleResponse | PlainMessage<QueryAddressesByRoleResponse> | undefined, b: QueryAddressesByRoleResponse | PlainMessage<QueryAddressesByRoleResponse> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.QueryAddressRolesRequest
 */
export declare class QueryAddressRolesRequest extends Message<QueryAddressRolesRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<QueryAddressRolesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.QueryAddressRolesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAddressRolesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAddressRolesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAddressRolesRequest;
    static equals(a: QueryAddressRolesRequest | PlainMessage<QueryAddressRolesRequest> | undefined, b: QueryAddressRolesRequest | PlainMessage<QueryAddressRolesRequest> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.QueryAddressRolesResponse
 */
export declare class QueryAddressRolesResponse extends Message<QueryAddressRolesResponse> {
    /**
     * @generated from field: repeated string roles = 1;
     */
    roles: string[];
    constructor(data?: PartialMessage<QueryAddressRolesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.QueryAddressRolesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAddressRolesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAddressRolesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAddressRolesResponse;
    static equals(a: QueryAddressRolesResponse | PlainMessage<QueryAddressRolesResponse> | undefined, b: QueryAddressRolesResponse | PlainMessage<QueryAddressRolesResponse> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.QueryVouchersForAddressRequest
 */
export declare class QueryVouchersForAddressRequest extends Message<QueryVouchersForAddressRequest> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryVouchersForAddressRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.QueryVouchersForAddressRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVouchersForAddressRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVouchersForAddressRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVouchersForAddressRequest;
    static equals(a: QueryVouchersForAddressRequest | PlainMessage<QueryVouchersForAddressRequest> | undefined, b: QueryVouchersForAddressRequest | PlainMessage<QueryVouchersForAddressRequest> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.QueryVouchersForAddressResponse
 */
export declare class QueryVouchersForAddressResponse extends Message<QueryVouchersForAddressResponse> {
    /**
     * @generated from field: map<string, injective.permissions.v1beta1.Voucher> vouchers = 1;
     */
    vouchers: {
        [key: string]: Voucher;
    };
    constructor(data?: PartialMessage<QueryVouchersForAddressResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.QueryVouchersForAddressResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVouchersForAddressResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVouchersForAddressResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVouchersForAddressResponse;
    static equals(a: QueryVouchersForAddressResponse | PlainMessage<QueryVouchersForAddressResponse> | undefined, b: QueryVouchersForAddressResponse | PlainMessage<QueryVouchersForAddressResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map