import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./controller_pb.js";
/**
 * QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method.
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest
 */
export declare class QueryInterchainAccountRequest extends Message<QueryInterchainAccountRequest> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: string connection_id = 2;
     */
    connectionId: string;
    constructor(data?: PartialMessage<QueryInterchainAccountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInterchainAccountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInterchainAccountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInterchainAccountRequest;
    static equals(a: QueryInterchainAccountRequest | PlainMessage<QueryInterchainAccountRequest> | undefined, b: QueryInterchainAccountRequest | PlainMessage<QueryInterchainAccountRequest> | undefined): boolean;
}
/**
 * QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method.
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse
 */
export declare class QueryInterchainAccountResponse extends Message<QueryInterchainAccountResponse> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryInterchainAccountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInterchainAccountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInterchainAccountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInterchainAccountResponse;
    static equals(a: QueryInterchainAccountResponse | PlainMessage<QueryInterchainAccountResponse> | undefined, b: QueryInterchainAccountResponse | PlainMessage<QueryInterchainAccountResponse> | undefined): boolean;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: ibc.applications.interchain_accounts.controller.v1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map