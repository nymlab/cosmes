import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params, ValidatorSigningInfo } from "./slashing_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method
 *
 * @generated from message cosmos.slashing.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method
 *
 * @generated from message cosmos.slashing.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * @generated from field: cosmos.slashing.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 *
 * @generated from message cosmos.slashing.v1beta1.QuerySigningInfoRequest
 */
export declare class QuerySigningInfoRequest extends Message<QuerySigningInfoRequest> {
    /**
     * cons_address is the address to query signing info of
     *
     * @generated from field: string cons_address = 1;
     */
    consAddress: string;
    constructor(data?: PartialMessage<QuerySigningInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.QuerySigningInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySigningInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySigningInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySigningInfoRequest;
    static equals(a: QuerySigningInfoRequest | PlainMessage<QuerySigningInfoRequest> | undefined, b: QuerySigningInfoRequest | PlainMessage<QuerySigningInfoRequest> | undefined): boolean;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 *
 * @generated from message cosmos.slashing.v1beta1.QuerySigningInfoResponse
 */
export declare class QuerySigningInfoResponse extends Message<QuerySigningInfoResponse> {
    /**
     * val_signing_info is the signing info of requested val cons address
     *
     * @generated from field: cosmos.slashing.v1beta1.ValidatorSigningInfo val_signing_info = 1;
     */
    valSigningInfo?: ValidatorSigningInfo;
    constructor(data?: PartialMessage<QuerySigningInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.QuerySigningInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySigningInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySigningInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySigningInfoResponse;
    static equals(a: QuerySigningInfoResponse | PlainMessage<QuerySigningInfoResponse> | undefined, b: QuerySigningInfoResponse | PlainMessage<QuerySigningInfoResponse> | undefined): boolean;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 *
 * @generated from message cosmos.slashing.v1beta1.QuerySigningInfosRequest
 */
export declare class QuerySigningInfosRequest extends Message<QuerySigningInfosRequest> {
    /**
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QuerySigningInfosRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.QuerySigningInfosRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySigningInfosRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySigningInfosRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySigningInfosRequest;
    static equals(a: QuerySigningInfosRequest | PlainMessage<QuerySigningInfosRequest> | undefined, b: QuerySigningInfosRequest | PlainMessage<QuerySigningInfosRequest> | undefined): boolean;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 *
 * @generated from message cosmos.slashing.v1beta1.QuerySigningInfosResponse
 */
export declare class QuerySigningInfosResponse extends Message<QuerySigningInfosResponse> {
    /**
     * info is the signing info of all validators
     *
     * @generated from field: repeated cosmos.slashing.v1beta1.ValidatorSigningInfo info = 1;
     */
    info: ValidatorSigningInfo[];
    /**
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QuerySigningInfosResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.QuerySigningInfosResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySigningInfosResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySigningInfosResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySigningInfosResponse;
    static equals(a: QuerySigningInfosResponse | PlainMessage<QuerySigningInfosResponse> | undefined, b: QuerySigningInfosResponse | PlainMessage<QuerySigningInfosResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map