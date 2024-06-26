import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { Metadata, Params, SendEnabled } from "./bank_pb.js";
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryBalanceRequest
 */
export declare class QueryBalanceRequest extends Message<QueryBalanceRequest> {
    /**
     * address is the address to query balances for.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * denom is the coin denom to query balances for.
     *
     * @generated from field: string denom = 2;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryBalanceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryBalanceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBalanceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBalanceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBalanceRequest;
    static equals(a: QueryBalanceRequest | PlainMessage<QueryBalanceRequest> | undefined, b: QueryBalanceRequest | PlainMessage<QueryBalanceRequest> | undefined): boolean;
}
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryBalanceResponse
 */
export declare class QueryBalanceResponse extends Message<QueryBalanceResponse> {
    /**
     * balance is the balance of the coin.
     *
     * @generated from field: cosmos.base.v1beta1.Coin balance = 1;
     */
    balance?: Coin;
    constructor(data?: PartialMessage<QueryBalanceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryBalanceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBalanceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBalanceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBalanceResponse;
    static equals(a: QueryBalanceResponse | PlainMessage<QueryBalanceResponse> | undefined, b: QueryBalanceResponse | PlainMessage<QueryBalanceResponse> | undefined): boolean;
}
/**
 * QueryBalanceRequest is the request type for the Query/AllBalances RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryAllBalancesRequest
 */
export declare class QueryAllBalancesRequest extends Message<QueryAllBalancesRequest> {
    /**
     * address is the address to query balances for.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryAllBalancesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryAllBalancesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllBalancesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllBalancesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllBalancesRequest;
    static equals(a: QueryAllBalancesRequest | PlainMessage<QueryAllBalancesRequest> | undefined, b: QueryAllBalancesRequest | PlainMessage<QueryAllBalancesRequest> | undefined): boolean;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryAllBalancesResponse
 */
export declare class QueryAllBalancesResponse extends Message<QueryAllBalancesResponse> {
    /**
     * balances is the balances of all the coins.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin balances = 1;
     */
    balances: Coin[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryAllBalancesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryAllBalancesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllBalancesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllBalancesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllBalancesResponse;
    static equals(a: QueryAllBalancesResponse | PlainMessage<QueryAllBalancesResponse> | undefined, b: QueryAllBalancesResponse | PlainMessage<QueryAllBalancesResponse> | undefined): boolean;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalancesRequest
 */
export declare class QuerySpendableBalancesRequest extends Message<QuerySpendableBalancesRequest> {
    /**
     * address is the address to query spendable balances for.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QuerySpendableBalancesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QuerySpendableBalancesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpendableBalancesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpendableBalancesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpendableBalancesRequest;
    static equals(a: QuerySpendableBalancesRequest | PlainMessage<QuerySpendableBalancesRequest> | undefined, b: QuerySpendableBalancesRequest | PlainMessage<QuerySpendableBalancesRequest> | undefined): boolean;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalancesResponse
 */
export declare class QuerySpendableBalancesResponse extends Message<QuerySpendableBalancesResponse> {
    /**
     * balances is the spendable balances of all the coins.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin balances = 1;
     */
    balances: Coin[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QuerySpendableBalancesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QuerySpendableBalancesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpendableBalancesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpendableBalancesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpendableBalancesResponse;
    static equals(a: QuerySpendableBalancesResponse | PlainMessage<QuerySpendableBalancesResponse> | undefined, b: QuerySpendableBalancesResponse | PlainMessage<QuerySpendableBalancesResponse> | undefined): boolean;
}
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest
 */
export declare class QuerySpendableBalanceByDenomRequest extends Message<QuerySpendableBalanceByDenomRequest> {
    /**
     * address is the address to query balances for.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * denom is the coin denom to query balances for.
     *
     * @generated from field: string denom = 2;
     */
    denom: string;
    constructor(data?: PartialMessage<QuerySpendableBalanceByDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpendableBalanceByDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpendableBalanceByDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpendableBalanceByDenomRequest;
    static equals(a: QuerySpendableBalanceByDenomRequest | PlainMessage<QuerySpendableBalanceByDenomRequest> | undefined, b: QuerySpendableBalanceByDenomRequest | PlainMessage<QuerySpendableBalanceByDenomRequest> | undefined): boolean;
}
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse
 */
export declare class QuerySpendableBalanceByDenomResponse extends Message<QuerySpendableBalanceByDenomResponse> {
    /**
     * balance is the balance of the coin.
     *
     * @generated from field: cosmos.base.v1beta1.Coin balance = 1;
     */
    balance?: Coin;
    constructor(data?: PartialMessage<QuerySpendableBalanceByDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpendableBalanceByDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpendableBalanceByDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpendableBalanceByDenomResponse;
    static equals(a: QuerySpendableBalanceByDenomResponse | PlainMessage<QuerySpendableBalanceByDenomResponse> | undefined, b: QuerySpendableBalanceByDenomResponse | PlainMessage<QuerySpendableBalanceByDenomResponse> | undefined): boolean;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryTotalSupplyRequest
 */
export declare class QueryTotalSupplyRequest extends Message<QueryTotalSupplyRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryTotalSupplyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryTotalSupplyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalSupplyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalSupplyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalSupplyRequest;
    static equals(a: QueryTotalSupplyRequest | PlainMessage<QueryTotalSupplyRequest> | undefined, b: QueryTotalSupplyRequest | PlainMessage<QueryTotalSupplyRequest> | undefined): boolean;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 *
 * @generated from message cosmos.bank.v1beta1.QueryTotalSupplyResponse
 */
export declare class QueryTotalSupplyResponse extends Message<QueryTotalSupplyResponse> {
    /**
     * supply is the supply of the coins
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin supply = 1;
     */
    supply: Coin[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryTotalSupplyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryTotalSupplyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalSupplyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalSupplyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalSupplyResponse;
    static equals(a: QueryTotalSupplyResponse | PlainMessage<QueryTotalSupplyResponse> | undefined, b: QueryTotalSupplyResponse | PlainMessage<QueryTotalSupplyResponse> | undefined): boolean;
}
/**
 * QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QuerySupplyOfRequest
 */
export declare class QuerySupplyOfRequest extends Message<QuerySupplyOfRequest> {
    /**
     * denom is the coin denom to query balances for.
     *
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QuerySupplyOfRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QuerySupplyOfRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySupplyOfRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySupplyOfRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySupplyOfRequest;
    static equals(a: QuerySupplyOfRequest | PlainMessage<QuerySupplyOfRequest> | undefined, b: QuerySupplyOfRequest | PlainMessage<QuerySupplyOfRequest> | undefined): boolean;
}
/**
 * QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QuerySupplyOfResponse
 */
export declare class QuerySupplyOfResponse extends Message<QuerySupplyOfResponse> {
    /**
     * amount is the supply of the coin.
     *
     * @generated from field: cosmos.base.v1beta1.Coin amount = 1;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<QuerySupplyOfResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QuerySupplyOfResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySupplyOfResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySupplyOfResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySupplyOfResponse;
    static equals(a: QuerySupplyOfResponse | PlainMessage<QuerySupplyOfResponse> | undefined, b: QuerySupplyOfResponse | PlainMessage<QuerySupplyOfResponse> | undefined): boolean;
}
/**
 * QueryParamsRequest defines the request type for querying x/bank parameters.
 *
 * @generated from message cosmos.bank.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse defines the response type for querying x/bank parameters.
 *
 * @generated from message cosmos.bank.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * @generated from field: cosmos.bank.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomsMetadataRequest
 */
export declare class QueryDenomsMetadataRequest extends Message<QueryDenomsMetadataRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryDenomsMetadataRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryDenomsMetadataRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomsMetadataRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomsMetadataRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomsMetadataRequest;
    static equals(a: QueryDenomsMetadataRequest | PlainMessage<QueryDenomsMetadataRequest> | undefined, b: QueryDenomsMetadataRequest | PlainMessage<QueryDenomsMetadataRequest> | undefined): boolean;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomsMetadataResponse
 */
export declare class QueryDenomsMetadataResponse extends Message<QueryDenomsMetadataResponse> {
    /**
     * metadata provides the client information for all the registered tokens.
     *
     * @generated from field: repeated cosmos.bank.v1beta1.Metadata metadatas = 1;
     */
    metadatas: Metadata[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryDenomsMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryDenomsMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomsMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomsMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomsMetadataResponse;
    static equals(a: QueryDenomsMetadataResponse | PlainMessage<QueryDenomsMetadataResponse> | undefined, b: QueryDenomsMetadataResponse | PlainMessage<QueryDenomsMetadataResponse> | undefined): boolean;
}
/**
 * QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomMetadataRequest
 */
export declare class QueryDenomMetadataRequest extends Message<QueryDenomMetadataRequest> {
    /**
     * denom is the coin denom to query the metadata for.
     *
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryDenomMetadataRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryDenomMetadataRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomMetadataRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomMetadataRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomMetadataRequest;
    static equals(a: QueryDenomMetadataRequest | PlainMessage<QueryDenomMetadataRequest> | undefined, b: QueryDenomMetadataRequest | PlainMessage<QueryDenomMetadataRequest> | undefined): boolean;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomMetadataResponse
 */
export declare class QueryDenomMetadataResponse extends Message<QueryDenomMetadataResponse> {
    /**
     * metadata describes and provides all the client information for the requested token.
     *
     * @generated from field: cosmos.bank.v1beta1.Metadata metadata = 1;
     */
    metadata?: Metadata;
    constructor(data?: PartialMessage<QueryDenomMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryDenomMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomMetadataResponse;
    static equals(a: QueryDenomMetadataResponse | PlainMessage<QueryDenomMetadataResponse> | undefined, b: QueryDenomMetadataResponse | PlainMessage<QueryDenomMetadataResponse> | undefined): boolean;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomOwnersRequest
 */
export declare class QueryDenomOwnersRequest extends Message<QueryDenomOwnersRequest> {
    /**
     * denom defines the coin denomination to query all account holders for.
     *
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryDenomOwnersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryDenomOwnersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomOwnersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomOwnersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomOwnersRequest;
    static equals(a: QueryDenomOwnersRequest | PlainMessage<QueryDenomOwnersRequest> | undefined, b: QueryDenomOwnersRequest | PlainMessage<QueryDenomOwnersRequest> | undefined): boolean;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.DenomOwner
 */
export declare class DenomOwner extends Message<DenomOwner> {
    /**
     * address defines the address that owns a particular denomination.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * balance is the balance of the denominated coin for an account.
     *
     * @generated from field: cosmos.base.v1beta1.Coin balance = 2;
     */
    balance?: Coin;
    constructor(data?: PartialMessage<DenomOwner>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.DenomOwner";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DenomOwner;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DenomOwner;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DenomOwner;
    static equals(a: DenomOwner | PlainMessage<DenomOwner> | undefined, b: DenomOwner | PlainMessage<DenomOwner> | undefined): boolean;
}
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomOwnersResponse
 */
export declare class QueryDenomOwnersResponse extends Message<QueryDenomOwnersResponse> {
    /**
     * @generated from field: repeated cosmos.bank.v1beta1.DenomOwner denom_owners = 1;
     */
    denomOwners: DenomOwner[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryDenomOwnersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QueryDenomOwnersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomOwnersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomOwnersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomOwnersResponse;
    static equals(a: QueryDenomOwnersResponse | PlainMessage<QueryDenomOwnersResponse> | undefined, b: QueryDenomOwnersResponse | PlainMessage<QueryDenomOwnersResponse> | undefined): boolean;
}
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySendEnabledRequest
 */
export declare class QuerySendEnabledRequest extends Message<QuerySendEnabledRequest> {
    /**
     * denoms is the specific denoms you want look up. Leave empty to get all entries.
     *
     * @generated from field: repeated string denoms = 1;
     */
    denoms: string[];
    /**
     * pagination defines an optional pagination for the request. This field is
     * only read if the denoms field is empty.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 99;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QuerySendEnabledRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QuerySendEnabledRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySendEnabledRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySendEnabledRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySendEnabledRequest;
    static equals(a: QuerySendEnabledRequest | PlainMessage<QuerySendEnabledRequest> | undefined, b: QuerySendEnabledRequest | PlainMessage<QuerySendEnabledRequest> | undefined): boolean;
}
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySendEnabledResponse
 */
export declare class QuerySendEnabledResponse extends Message<QuerySendEnabledResponse> {
    /**
     * @generated from field: repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 1;
     */
    sendEnabled: SendEnabled[];
    /**
     * pagination defines the pagination in the response. This field is only
     * populated if the denoms field in the request is empty.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 99;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QuerySendEnabledResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.QuerySendEnabledResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySendEnabledResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySendEnabledResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySendEnabledResponse;
    static equals(a: QuerySendEnabledResponse | PlainMessage<QuerySendEnabledResponse> | undefined, b: QuerySendEnabledResponse | PlainMessage<QuerySendEnabledResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map