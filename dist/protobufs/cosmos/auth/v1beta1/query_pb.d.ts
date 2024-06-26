import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { BaseAccount, Params } from "./auth_pb.js";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.auth.v1beta1.QueryAccountsRequest
 */
export declare class QueryAccountsRequest extends Message<QueryAccountsRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryAccountsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryAccountsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountsRequest;
    static equals(a: QueryAccountsRequest | PlainMessage<QueryAccountsRequest> | undefined, b: QueryAccountsRequest | PlainMessage<QueryAccountsRequest> | undefined): boolean;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.auth.v1beta1.QueryAccountsResponse
 */
export declare class QueryAccountsResponse extends Message<QueryAccountsResponse> {
    /**
     * accounts are the existing accounts
     *
     * @generated from field: repeated google.protobuf.Any accounts = 1;
     */
    accounts: Any[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryAccountsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryAccountsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountsResponse;
    static equals(a: QueryAccountsResponse | PlainMessage<QueryAccountsResponse> | undefined, b: QueryAccountsResponse | PlainMessage<QueryAccountsResponse> | undefined): boolean;
}
/**
 * QueryAccountRequest is the request type for the Query/Account RPC method.
 *
 * @generated from message cosmos.auth.v1beta1.QueryAccountRequest
 */
export declare class QueryAccountRequest extends Message<QueryAccountRequest> {
    /**
     * address defines the address to query for.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryAccountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryAccountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountRequest;
    static equals(a: QueryAccountRequest | PlainMessage<QueryAccountRequest> | undefined, b: QueryAccountRequest | PlainMessage<QueryAccountRequest> | undefined): boolean;
}
/**
 * QueryAccountResponse is the response type for the Query/Account RPC method.
 *
 * @generated from message cosmos.auth.v1beta1.QueryAccountResponse
 */
export declare class QueryAccountResponse extends Message<QueryAccountResponse> {
    /**
     * account defines the account of the corresponding address.
     *
     * @generated from field: google.protobuf.Any account = 1;
     */
    account?: Any;
    constructor(data?: PartialMessage<QueryAccountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryAccountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountResponse;
    static equals(a: QueryAccountResponse | PlainMessage<QueryAccountResponse> | undefined, b: QueryAccountResponse | PlainMessage<QueryAccountResponse> | undefined): boolean;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.auth.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.auth.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: cosmos.auth.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.auth.v1beta1.QueryModuleAccountsRequest
 */
export declare class QueryModuleAccountsRequest extends Message<QueryModuleAccountsRequest> {
    constructor(data?: PartialMessage<QueryModuleAccountsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryModuleAccountsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleAccountsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleAccountsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleAccountsRequest;
    static equals(a: QueryModuleAccountsRequest | PlainMessage<QueryModuleAccountsRequest> | undefined, b: QueryModuleAccountsRequest | PlainMessage<QueryModuleAccountsRequest> | undefined): boolean;
}
/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.auth.v1beta1.QueryModuleAccountsResponse
 */
export declare class QueryModuleAccountsResponse extends Message<QueryModuleAccountsResponse> {
    /**
     * @generated from field: repeated google.protobuf.Any accounts = 1;
     */
    accounts: Any[];
    constructor(data?: PartialMessage<QueryModuleAccountsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryModuleAccountsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleAccountsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleAccountsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleAccountsResponse;
    static equals(a: QueryModuleAccountsResponse | PlainMessage<QueryModuleAccountsResponse> | undefined, b: QueryModuleAccountsResponse | PlainMessage<QueryModuleAccountsResponse> | undefined): boolean;
}
/**
 * QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method.
 *
 * @generated from message cosmos.auth.v1beta1.QueryModuleAccountByNameRequest
 */
export declare class QueryModuleAccountByNameRequest extends Message<QueryModuleAccountByNameRequest> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    constructor(data?: PartialMessage<QueryModuleAccountByNameRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryModuleAccountByNameRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleAccountByNameRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleAccountByNameRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleAccountByNameRequest;
    static equals(a: QueryModuleAccountByNameRequest | PlainMessage<QueryModuleAccountByNameRequest> | undefined, b: QueryModuleAccountByNameRequest | PlainMessage<QueryModuleAccountByNameRequest> | undefined): boolean;
}
/**
 * QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method.
 *
 * @generated from message cosmos.auth.v1beta1.QueryModuleAccountByNameResponse
 */
export declare class QueryModuleAccountByNameResponse extends Message<QueryModuleAccountByNameResponse> {
    /**
     * @generated from field: google.protobuf.Any account = 1;
     */
    account?: Any;
    constructor(data?: PartialMessage<QueryModuleAccountByNameResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryModuleAccountByNameResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleAccountByNameResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleAccountByNameResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleAccountByNameResponse;
    static equals(a: QueryModuleAccountByNameResponse | PlainMessage<QueryModuleAccountByNameResponse> | undefined, b: QueryModuleAccountByNameResponse | PlainMessage<QueryModuleAccountByNameResponse> | undefined): boolean;
}
/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.auth.v1beta1.Bech32PrefixRequest
 */
export declare class Bech32PrefixRequest extends Message<Bech32PrefixRequest> {
    constructor(data?: PartialMessage<Bech32PrefixRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.Bech32PrefixRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Bech32PrefixRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Bech32PrefixRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Bech32PrefixRequest;
    static equals(a: Bech32PrefixRequest | PlainMessage<Bech32PrefixRequest> | undefined, b: Bech32PrefixRequest | PlainMessage<Bech32PrefixRequest> | undefined): boolean;
}
/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.auth.v1beta1.Bech32PrefixResponse
 */
export declare class Bech32PrefixResponse extends Message<Bech32PrefixResponse> {
    /**
     * @generated from field: string bech32_prefix = 1;
     */
    bech32Prefix: string;
    constructor(data?: PartialMessage<Bech32PrefixResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.Bech32PrefixResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Bech32PrefixResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Bech32PrefixResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Bech32PrefixResponse;
    static equals(a: Bech32PrefixResponse | PlainMessage<Bech32PrefixResponse> | undefined, b: Bech32PrefixResponse | PlainMessage<Bech32PrefixResponse> | undefined): boolean;
}
/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.auth.v1beta1.AddressBytesToStringRequest
 */
export declare class AddressBytesToStringRequest extends Message<AddressBytesToStringRequest> {
    /**
     * @generated from field: bytes address_bytes = 1;
     */
    addressBytes: Uint8Array;
    constructor(data?: PartialMessage<AddressBytesToStringRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.AddressBytesToStringRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddressBytesToStringRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddressBytesToStringRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddressBytesToStringRequest;
    static equals(a: AddressBytesToStringRequest | PlainMessage<AddressBytesToStringRequest> | undefined, b: AddressBytesToStringRequest | PlainMessage<AddressBytesToStringRequest> | undefined): boolean;
}
/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.auth.v1beta1.AddressBytesToStringResponse
 */
export declare class AddressBytesToStringResponse extends Message<AddressBytesToStringResponse> {
    /**
     * @generated from field: string address_string = 1;
     */
    addressString: string;
    constructor(data?: PartialMessage<AddressBytesToStringResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.AddressBytesToStringResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddressBytesToStringResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddressBytesToStringResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddressBytesToStringResponse;
    static equals(a: AddressBytesToStringResponse | PlainMessage<AddressBytesToStringResponse> | undefined, b: AddressBytesToStringResponse | PlainMessage<AddressBytesToStringResponse> | undefined): boolean;
}
/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.auth.v1beta1.AddressStringToBytesRequest
 */
export declare class AddressStringToBytesRequest extends Message<AddressStringToBytesRequest> {
    /**
     * @generated from field: string address_string = 1;
     */
    addressString: string;
    constructor(data?: PartialMessage<AddressStringToBytesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.AddressStringToBytesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddressStringToBytesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddressStringToBytesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddressStringToBytesRequest;
    static equals(a: AddressStringToBytesRequest | PlainMessage<AddressStringToBytesRequest> | undefined, b: AddressStringToBytesRequest | PlainMessage<AddressStringToBytesRequest> | undefined): boolean;
}
/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.auth.v1beta1.AddressStringToBytesResponse
 */
export declare class AddressStringToBytesResponse extends Message<AddressStringToBytesResponse> {
    /**
     * @generated from field: bytes address_bytes = 1;
     */
    addressBytes: Uint8Array;
    constructor(data?: PartialMessage<AddressStringToBytesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.AddressStringToBytesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddressStringToBytesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddressStringToBytesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddressStringToBytesResponse;
    static equals(a: AddressStringToBytesResponse | PlainMessage<AddressStringToBytesResponse> | undefined, b: AddressStringToBytesResponse | PlainMessage<AddressStringToBytesResponse> | undefined): boolean;
}
/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 *
 * @generated from message cosmos.auth.v1beta1.QueryAccountAddressByIDRequest
 */
export declare class QueryAccountAddressByIDRequest extends Message<QueryAccountAddressByIDRequest> {
    /**
     * Deprecated, use account_id instead
     *
     * id is the account number of the address to be queried. This field
     * should have been an uint64 (like all account numbers), and will be
     * updated to uint64 in a future version of the auth query.
     *
     * @generated from field: int64 id = 1 [deprecated = true];
     * @deprecated
     */
    id: bigint;
    /**
     * account_id is the account number of the address to be queried.
     *
     * Since: cosmos-sdk 0.47
     *
     * @generated from field: uint64 account_id = 2;
     */
    accountId: bigint;
    constructor(data?: PartialMessage<QueryAccountAddressByIDRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryAccountAddressByIDRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountAddressByIDRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountAddressByIDRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountAddressByIDRequest;
    static equals(a: QueryAccountAddressByIDRequest | PlainMessage<QueryAccountAddressByIDRequest> | undefined, b: QueryAccountAddressByIDRequest | PlainMessage<QueryAccountAddressByIDRequest> | undefined): boolean;
}
/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 *
 * @generated from message cosmos.auth.v1beta1.QueryAccountAddressByIDResponse
 */
export declare class QueryAccountAddressByIDResponse extends Message<QueryAccountAddressByIDResponse> {
    /**
     * @generated from field: string account_address = 1;
     */
    accountAddress: string;
    constructor(data?: PartialMessage<QueryAccountAddressByIDResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryAccountAddressByIDResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountAddressByIDResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountAddressByIDResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountAddressByIDResponse;
    static equals(a: QueryAccountAddressByIDResponse | PlainMessage<QueryAccountAddressByIDResponse> | undefined, b: QueryAccountAddressByIDResponse | PlainMessage<QueryAccountAddressByIDResponse> | undefined): boolean;
}
/**
 * QueryAccountInfoRequest is the Query/AccountInfo request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.auth.v1beta1.QueryAccountInfoRequest
 */
export declare class QueryAccountInfoRequest extends Message<QueryAccountInfoRequest> {
    /**
     * address is the account address string.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryAccountInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryAccountInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountInfoRequest;
    static equals(a: QueryAccountInfoRequest | PlainMessage<QueryAccountInfoRequest> | undefined, b: QueryAccountInfoRequest | PlainMessage<QueryAccountInfoRequest> | undefined): boolean;
}
/**
 * QueryAccountInfoResponse is the Query/AccountInfo response type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.auth.v1beta1.QueryAccountInfoResponse
 */
export declare class QueryAccountInfoResponse extends Message<QueryAccountInfoResponse> {
    /**
     * info is the account info which is represented by BaseAccount.
     *
     * @generated from field: cosmos.auth.v1beta1.BaseAccount info = 1;
     */
    info?: BaseAccount;
    constructor(data?: PartialMessage<QueryAccountInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.QueryAccountInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountInfoResponse;
    static equals(a: QueryAccountInfoResponse | PlainMessage<QueryAccountInfoResponse> | undefined, b: QueryAccountInfoResponse | PlainMessage<QueryAccountInfoResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map