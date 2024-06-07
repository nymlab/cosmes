import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DenomTrace, Params } from "./transfer_pb.js";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 *
 * @generated from message ibc.applications.transfer.v1.QueryDenomTraceRequest
 */
export declare class QueryDenomTraceRequest extends Message<QueryDenomTraceRequest> {
    /**
     * hash (in hex format) or denom (full denom with ibc prefix) of the denomination trace information.
     *
     * @generated from field: string hash = 1;
     */
    hash: string;
    constructor(data?: PartialMessage<QueryDenomTraceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.QueryDenomTraceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomTraceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomTraceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomTraceRequest;
    static equals(a: QueryDenomTraceRequest | PlainMessage<QueryDenomTraceRequest> | undefined, b: QueryDenomTraceRequest | PlainMessage<QueryDenomTraceRequest> | undefined): boolean;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryDenomTraceResponse
 */
export declare class QueryDenomTraceResponse extends Message<QueryDenomTraceResponse> {
    /**
     * denom_trace returns the requested denomination trace information.
     *
     * @generated from field: ibc.applications.transfer.v1.DenomTrace denom_trace = 1;
     */
    denomTrace?: DenomTrace;
    constructor(data?: PartialMessage<QueryDenomTraceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.QueryDenomTraceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomTraceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomTraceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomTraceResponse;
    static equals(a: QueryDenomTraceResponse | PlainMessage<QueryDenomTraceResponse> | undefined, b: QueryDenomTraceResponse | PlainMessage<QueryDenomTraceResponse> | undefined): boolean;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 *
 * @generated from message ibc.applications.transfer.v1.QueryDenomTracesRequest
 */
export declare class QueryDenomTracesRequest extends Message<QueryDenomTracesRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryDenomTracesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.QueryDenomTracesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomTracesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomTracesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomTracesRequest;
    static equals(a: QueryDenomTracesRequest | PlainMessage<QueryDenomTracesRequest> | undefined, b: QueryDenomTracesRequest | PlainMessage<QueryDenomTracesRequest> | undefined): boolean;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryDenomTracesResponse
 */
export declare class QueryDenomTracesResponse extends Message<QueryDenomTracesResponse> {
    /**
     * denom_traces returns all denominations trace information.
     *
     * @generated from field: repeated ibc.applications.transfer.v1.DenomTrace denom_traces = 1;
     */
    denomTraces: DenomTrace[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryDenomTracesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.QueryDenomTracesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomTracesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomTracesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomTracesResponse;
    static equals(a: QueryDenomTracesResponse | PlainMessage<QueryDenomTracesResponse> | undefined, b: QueryDenomTracesResponse | PlainMessage<QueryDenomTracesResponse> | undefined): boolean;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: ibc.applications.transfer.v1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 *
 * @generated from message ibc.applications.transfer.v1.QueryDenomHashRequest
 */
export declare class QueryDenomHashRequest extends Message<QueryDenomHashRequest> {
    /**
     * The denomination trace ([port_id]/[channel_id])+/[denom]
     *
     * @generated from field: string trace = 1;
     */
    trace: string;
    constructor(data?: PartialMessage<QueryDenomHashRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.QueryDenomHashRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomHashRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomHashRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomHashRequest;
    static equals(a: QueryDenomHashRequest | PlainMessage<QueryDenomHashRequest> | undefined, b: QueryDenomHashRequest | PlainMessage<QueryDenomHashRequest> | undefined): boolean;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryDenomHashResponse
 */
export declare class QueryDenomHashResponse extends Message<QueryDenomHashResponse> {
    /**
     * hash (in hex format) of the denomination trace information.
     *
     * @generated from field: string hash = 1;
     */
    hash: string;
    constructor(data?: PartialMessage<QueryDenomHashResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.QueryDenomHashResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomHashResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomHashResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomHashResponse;
    static equals(a: QueryDenomHashResponse | PlainMessage<QueryDenomHashResponse> | undefined, b: QueryDenomHashResponse | PlainMessage<QueryDenomHashResponse> | undefined): boolean;
}
/**
 * QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryEscrowAddressRequest
 */
export declare class QueryEscrowAddressRequest extends Message<QueryEscrowAddressRequest> {
    /**
     * unique port identifier
     *
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * unique channel identifier
     *
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    constructor(data?: PartialMessage<QueryEscrowAddressRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.QueryEscrowAddressRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEscrowAddressRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEscrowAddressRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEscrowAddressRequest;
    static equals(a: QueryEscrowAddressRequest | PlainMessage<QueryEscrowAddressRequest> | undefined, b: QueryEscrowAddressRequest | PlainMessage<QueryEscrowAddressRequest> | undefined): boolean;
}
/**
 * QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryEscrowAddressResponse
 */
export declare class QueryEscrowAddressResponse extends Message<QueryEscrowAddressResponse> {
    /**
     * the escrow account address
     *
     * @generated from field: string escrow_address = 1;
     */
    escrowAddress: string;
    constructor(data?: PartialMessage<QueryEscrowAddressResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.QueryEscrowAddressResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEscrowAddressResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEscrowAddressResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEscrowAddressResponse;
    static equals(a: QueryEscrowAddressResponse | PlainMessage<QueryEscrowAddressResponse> | undefined, b: QueryEscrowAddressResponse | PlainMessage<QueryEscrowAddressResponse> | undefined): boolean;
}
/**
 * QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest
 */
export declare class QueryTotalEscrowForDenomRequest extends Message<QueryTotalEscrowForDenomRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryTotalEscrowForDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalEscrowForDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalEscrowForDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalEscrowForDenomRequest;
    static equals(a: QueryTotalEscrowForDenomRequest | PlainMessage<QueryTotalEscrowForDenomRequest> | undefined, b: QueryTotalEscrowForDenomRequest | PlainMessage<QueryTotalEscrowForDenomRequest> | undefined): boolean;
}
/**
 * QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse
 */
export declare class QueryTotalEscrowForDenomResponse extends Message<QueryTotalEscrowForDenomResponse> {
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 1;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<QueryTotalEscrowForDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalEscrowForDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalEscrowForDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalEscrowForDenomResponse;
    static equals(a: QueryTotalEscrowForDenomResponse | PlainMessage<QueryTotalEscrowForDenomResponse> | undefined, b: QueryTotalEscrowForDenomResponse | PlainMessage<QueryTotalEscrowForDenomResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map