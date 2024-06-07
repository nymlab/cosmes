import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { DenomAuthorityMetadata } from "./authorityMetadata_pb.js";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: osmosis.tokenfactory.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest
 */
export declare class QueryDenomAuthorityMetadataRequest extends Message<QueryDenomAuthorityMetadataRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryDenomAuthorityMetadataRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomAuthorityMetadataRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomAuthorityMetadataRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomAuthorityMetadataRequest;
    static equals(a: QueryDenomAuthorityMetadataRequest | PlainMessage<QueryDenomAuthorityMetadataRequest> | undefined, b: QueryDenomAuthorityMetadataRequest | PlainMessage<QueryDenomAuthorityMetadataRequest> | undefined): boolean;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse
 */
export declare class QueryDenomAuthorityMetadataResponse extends Message<QueryDenomAuthorityMetadataResponse> {
    /**
     * @generated from field: osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata authority_metadata = 1;
     */
    authorityMetadata?: DenomAuthorityMetadata;
    constructor(data?: PartialMessage<QueryDenomAuthorityMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomAuthorityMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomAuthorityMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomAuthorityMetadataResponse;
    static equals(a: QueryDenomAuthorityMetadataResponse | PlainMessage<QueryDenomAuthorityMetadataResponse> | undefined, b: QueryDenomAuthorityMetadataResponse | PlainMessage<QueryDenomAuthorityMetadataResponse> | undefined): boolean;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest
 */
export declare class QueryDenomsFromCreatorRequest extends Message<QueryDenomsFromCreatorRequest> {
    /**
     * @generated from field: string creator = 1;
     */
    creator: string;
    constructor(data?: PartialMessage<QueryDenomsFromCreatorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomsFromCreatorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomsFromCreatorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomsFromCreatorRequest;
    static equals(a: QueryDenomsFromCreatorRequest | PlainMessage<QueryDenomsFromCreatorRequest> | undefined, b: QueryDenomsFromCreatorRequest | PlainMessage<QueryDenomsFromCreatorRequest> | undefined): boolean;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse
 */
export declare class QueryDenomsFromCreatorResponse extends Message<QueryDenomsFromCreatorResponse> {
    /**
     * @generated from field: repeated string denoms = 1;
     */
    denoms: string[];
    constructor(data?: PartialMessage<QueryDenomsFromCreatorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomsFromCreatorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomsFromCreatorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomsFromCreatorResponse;
    static equals(a: QueryDenomsFromCreatorResponse | PlainMessage<QueryDenomsFromCreatorResponse> | undefined, b: QueryDenomsFromCreatorResponse | PlainMessage<QueryDenomsFromCreatorResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressRequest
 */
export declare class QueryBeforeSendHookAddressRequest extends Message<QueryBeforeSendHookAddressRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryBeforeSendHookAddressRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBeforeSendHookAddressRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBeforeSendHookAddressRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBeforeSendHookAddressRequest;
    static equals(a: QueryBeforeSendHookAddressRequest | PlainMessage<QueryBeforeSendHookAddressRequest> | undefined, b: QueryBeforeSendHookAddressRequest | PlainMessage<QueryBeforeSendHookAddressRequest> | undefined): boolean;
}
/**
 * QueryBeforeSendHookAddressResponse defines the response structure for the
 * DenomBeforeSendHook gRPC query.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressResponse
 */
export declare class QueryBeforeSendHookAddressResponse extends Message<QueryBeforeSendHookAddressResponse> {
    /**
     * @generated from field: string cosmwasm_address = 1;
     */
    cosmwasmAddress: string;
    constructor(data?: PartialMessage<QueryBeforeSendHookAddressResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBeforeSendHookAddressResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBeforeSendHookAddressResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBeforeSendHookAddressResponse;
    static equals(a: QueryBeforeSendHookAddressResponse | PlainMessage<QueryBeforeSendHookAddressResponse> | undefined, b: QueryBeforeSendHookAddressResponse | PlainMessage<QueryBeforeSendHookAddressResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map