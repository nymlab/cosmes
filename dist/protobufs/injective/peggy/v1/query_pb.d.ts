import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { LastClaimEvent, Valset } from "./types_pb.js";
import { MsgConfirmBatch, MsgValsetConfirm } from "./msgs_pb.js";
import { BatchFees } from "./pool_pb.js";
import { OutgoingTransferTx, OutgoingTxBatch } from "./batch_pb.js";
import { GenesisState } from "./genesis_pb.js";
/**
 * @generated from message injective.peggy.v1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * @generated from field: injective.peggy.v1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryCurrentValsetRequest
 */
export declare class QueryCurrentValsetRequest extends Message<QueryCurrentValsetRequest> {
    constructor(data?: PartialMessage<QueryCurrentValsetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryCurrentValsetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCurrentValsetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCurrentValsetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCurrentValsetRequest;
    static equals(a: QueryCurrentValsetRequest | PlainMessage<QueryCurrentValsetRequest> | undefined, b: QueryCurrentValsetRequest | PlainMessage<QueryCurrentValsetRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryCurrentValsetResponse
 */
export declare class QueryCurrentValsetResponse extends Message<QueryCurrentValsetResponse> {
    /**
     * @generated from field: injective.peggy.v1.Valset valset = 1;
     */
    valset?: Valset;
    constructor(data?: PartialMessage<QueryCurrentValsetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryCurrentValsetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCurrentValsetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCurrentValsetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCurrentValsetResponse;
    static equals(a: QueryCurrentValsetResponse | PlainMessage<QueryCurrentValsetResponse> | undefined, b: QueryCurrentValsetResponse | PlainMessage<QueryCurrentValsetResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryValsetRequestRequest
 */
export declare class QueryValsetRequestRequest extends Message<QueryValsetRequestRequest> {
    /**
     * @generated from field: uint64 nonce = 1;
     */
    nonce: bigint;
    constructor(data?: PartialMessage<QueryValsetRequestRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryValsetRequestRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValsetRequestRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValsetRequestRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValsetRequestRequest;
    static equals(a: QueryValsetRequestRequest | PlainMessage<QueryValsetRequestRequest> | undefined, b: QueryValsetRequestRequest | PlainMessage<QueryValsetRequestRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryValsetRequestResponse
 */
export declare class QueryValsetRequestResponse extends Message<QueryValsetRequestResponse> {
    /**
     * @generated from field: injective.peggy.v1.Valset valset = 1;
     */
    valset?: Valset;
    constructor(data?: PartialMessage<QueryValsetRequestResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryValsetRequestResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValsetRequestResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValsetRequestResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValsetRequestResponse;
    static equals(a: QueryValsetRequestResponse | PlainMessage<QueryValsetRequestResponse> | undefined, b: QueryValsetRequestResponse | PlainMessage<QueryValsetRequestResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryValsetConfirmRequest
 */
export declare class QueryValsetConfirmRequest extends Message<QueryValsetConfirmRequest> {
    /**
     * @generated from field: uint64 nonce = 1;
     */
    nonce: bigint;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<QueryValsetConfirmRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryValsetConfirmRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValsetConfirmRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValsetConfirmRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValsetConfirmRequest;
    static equals(a: QueryValsetConfirmRequest | PlainMessage<QueryValsetConfirmRequest> | undefined, b: QueryValsetConfirmRequest | PlainMessage<QueryValsetConfirmRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryValsetConfirmResponse
 */
export declare class QueryValsetConfirmResponse extends Message<QueryValsetConfirmResponse> {
    /**
     * @generated from field: injective.peggy.v1.MsgValsetConfirm confirm = 1;
     */
    confirm?: MsgValsetConfirm;
    constructor(data?: PartialMessage<QueryValsetConfirmResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryValsetConfirmResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValsetConfirmResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValsetConfirmResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValsetConfirmResponse;
    static equals(a: QueryValsetConfirmResponse | PlainMessage<QueryValsetConfirmResponse> | undefined, b: QueryValsetConfirmResponse | PlainMessage<QueryValsetConfirmResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryValsetConfirmsByNonceRequest
 */
export declare class QueryValsetConfirmsByNonceRequest extends Message<QueryValsetConfirmsByNonceRequest> {
    /**
     * @generated from field: uint64 nonce = 1;
     */
    nonce: bigint;
    constructor(data?: PartialMessage<QueryValsetConfirmsByNonceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryValsetConfirmsByNonceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValsetConfirmsByNonceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValsetConfirmsByNonceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValsetConfirmsByNonceRequest;
    static equals(a: QueryValsetConfirmsByNonceRequest | PlainMessage<QueryValsetConfirmsByNonceRequest> | undefined, b: QueryValsetConfirmsByNonceRequest | PlainMessage<QueryValsetConfirmsByNonceRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryValsetConfirmsByNonceResponse
 */
export declare class QueryValsetConfirmsByNonceResponse extends Message<QueryValsetConfirmsByNonceResponse> {
    /**
     * @generated from field: repeated injective.peggy.v1.MsgValsetConfirm confirms = 1;
     */
    confirms: MsgValsetConfirm[];
    constructor(data?: PartialMessage<QueryValsetConfirmsByNonceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryValsetConfirmsByNonceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValsetConfirmsByNonceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValsetConfirmsByNonceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValsetConfirmsByNonceResponse;
    static equals(a: QueryValsetConfirmsByNonceResponse | PlainMessage<QueryValsetConfirmsByNonceResponse> | undefined, b: QueryValsetConfirmsByNonceResponse | PlainMessage<QueryValsetConfirmsByNonceResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryLastValsetRequestsRequest
 */
export declare class QueryLastValsetRequestsRequest extends Message<QueryLastValsetRequestsRequest> {
    constructor(data?: PartialMessage<QueryLastValsetRequestsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryLastValsetRequestsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLastValsetRequestsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLastValsetRequestsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLastValsetRequestsRequest;
    static equals(a: QueryLastValsetRequestsRequest | PlainMessage<QueryLastValsetRequestsRequest> | undefined, b: QueryLastValsetRequestsRequest | PlainMessage<QueryLastValsetRequestsRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryLastValsetRequestsResponse
 */
export declare class QueryLastValsetRequestsResponse extends Message<QueryLastValsetRequestsResponse> {
    /**
     * @generated from field: repeated injective.peggy.v1.Valset valsets = 1;
     */
    valsets: Valset[];
    constructor(data?: PartialMessage<QueryLastValsetRequestsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryLastValsetRequestsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLastValsetRequestsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLastValsetRequestsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLastValsetRequestsResponse;
    static equals(a: QueryLastValsetRequestsResponse | PlainMessage<QueryLastValsetRequestsResponse> | undefined, b: QueryLastValsetRequestsResponse | PlainMessage<QueryLastValsetRequestsResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest
 */
export declare class QueryLastPendingValsetRequestByAddrRequest extends Message<QueryLastPendingValsetRequestByAddrRequest> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryLastPendingValsetRequestByAddrRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLastPendingValsetRequestByAddrRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLastPendingValsetRequestByAddrRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLastPendingValsetRequestByAddrRequest;
    static equals(a: QueryLastPendingValsetRequestByAddrRequest | PlainMessage<QueryLastPendingValsetRequestByAddrRequest> | undefined, b: QueryLastPendingValsetRequestByAddrRequest | PlainMessage<QueryLastPendingValsetRequestByAddrRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse
 */
export declare class QueryLastPendingValsetRequestByAddrResponse extends Message<QueryLastPendingValsetRequestByAddrResponse> {
    /**
     * @generated from field: repeated injective.peggy.v1.Valset valsets = 1;
     */
    valsets: Valset[];
    constructor(data?: PartialMessage<QueryLastPendingValsetRequestByAddrResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLastPendingValsetRequestByAddrResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLastPendingValsetRequestByAddrResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLastPendingValsetRequestByAddrResponse;
    static equals(a: QueryLastPendingValsetRequestByAddrResponse | PlainMessage<QueryLastPendingValsetRequestByAddrResponse> | undefined, b: QueryLastPendingValsetRequestByAddrResponse | PlainMessage<QueryLastPendingValsetRequestByAddrResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryBatchFeeRequest
 */
export declare class QueryBatchFeeRequest extends Message<QueryBatchFeeRequest> {
    constructor(data?: PartialMessage<QueryBatchFeeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryBatchFeeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBatchFeeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBatchFeeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBatchFeeRequest;
    static equals(a: QueryBatchFeeRequest | PlainMessage<QueryBatchFeeRequest> | undefined, b: QueryBatchFeeRequest | PlainMessage<QueryBatchFeeRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryBatchFeeResponse
 */
export declare class QueryBatchFeeResponse extends Message<QueryBatchFeeResponse> {
    /**
     * @generated from field: repeated injective.peggy.v1.BatchFees batchFees = 1;
     */
    batchFees: BatchFees[];
    constructor(data?: PartialMessage<QueryBatchFeeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryBatchFeeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBatchFeeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBatchFeeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBatchFeeResponse;
    static equals(a: QueryBatchFeeResponse | PlainMessage<QueryBatchFeeResponse> | undefined, b: QueryBatchFeeResponse | PlainMessage<QueryBatchFeeResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest
 */
export declare class QueryLastPendingBatchRequestByAddrRequest extends Message<QueryLastPendingBatchRequestByAddrRequest> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryLastPendingBatchRequestByAddrRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLastPendingBatchRequestByAddrRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLastPendingBatchRequestByAddrRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLastPendingBatchRequestByAddrRequest;
    static equals(a: QueryLastPendingBatchRequestByAddrRequest | PlainMessage<QueryLastPendingBatchRequestByAddrRequest> | undefined, b: QueryLastPendingBatchRequestByAddrRequest | PlainMessage<QueryLastPendingBatchRequestByAddrRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse
 */
export declare class QueryLastPendingBatchRequestByAddrResponse extends Message<QueryLastPendingBatchRequestByAddrResponse> {
    /**
     * @generated from field: injective.peggy.v1.OutgoingTxBatch batch = 1;
     */
    batch?: OutgoingTxBatch;
    constructor(data?: PartialMessage<QueryLastPendingBatchRequestByAddrResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLastPendingBatchRequestByAddrResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLastPendingBatchRequestByAddrResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLastPendingBatchRequestByAddrResponse;
    static equals(a: QueryLastPendingBatchRequestByAddrResponse | PlainMessage<QueryLastPendingBatchRequestByAddrResponse> | undefined, b: QueryLastPendingBatchRequestByAddrResponse | PlainMessage<QueryLastPendingBatchRequestByAddrResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryOutgoingTxBatchesRequest
 */
export declare class QueryOutgoingTxBatchesRequest extends Message<QueryOutgoingTxBatchesRequest> {
    constructor(data?: PartialMessage<QueryOutgoingTxBatchesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryOutgoingTxBatchesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOutgoingTxBatchesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOutgoingTxBatchesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOutgoingTxBatchesRequest;
    static equals(a: QueryOutgoingTxBatchesRequest | PlainMessage<QueryOutgoingTxBatchesRequest> | undefined, b: QueryOutgoingTxBatchesRequest | PlainMessage<QueryOutgoingTxBatchesRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryOutgoingTxBatchesResponse
 */
export declare class QueryOutgoingTxBatchesResponse extends Message<QueryOutgoingTxBatchesResponse> {
    /**
     * @generated from field: repeated injective.peggy.v1.OutgoingTxBatch batches = 1;
     */
    batches: OutgoingTxBatch[];
    constructor(data?: PartialMessage<QueryOutgoingTxBatchesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryOutgoingTxBatchesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOutgoingTxBatchesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOutgoingTxBatchesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOutgoingTxBatchesResponse;
    static equals(a: QueryOutgoingTxBatchesResponse | PlainMessage<QueryOutgoingTxBatchesResponse> | undefined, b: QueryOutgoingTxBatchesResponse | PlainMessage<QueryOutgoingTxBatchesResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryBatchRequestByNonceRequest
 */
export declare class QueryBatchRequestByNonceRequest extends Message<QueryBatchRequestByNonceRequest> {
    /**
     * @generated from field: uint64 nonce = 1;
     */
    nonce: bigint;
    /**
     * @generated from field: string contract_address = 2;
     */
    contractAddress: string;
    constructor(data?: PartialMessage<QueryBatchRequestByNonceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryBatchRequestByNonceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBatchRequestByNonceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBatchRequestByNonceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBatchRequestByNonceRequest;
    static equals(a: QueryBatchRequestByNonceRequest | PlainMessage<QueryBatchRequestByNonceRequest> | undefined, b: QueryBatchRequestByNonceRequest | PlainMessage<QueryBatchRequestByNonceRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryBatchRequestByNonceResponse
 */
export declare class QueryBatchRequestByNonceResponse extends Message<QueryBatchRequestByNonceResponse> {
    /**
     * @generated from field: injective.peggy.v1.OutgoingTxBatch batch = 1;
     */
    batch?: OutgoingTxBatch;
    constructor(data?: PartialMessage<QueryBatchRequestByNonceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryBatchRequestByNonceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBatchRequestByNonceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBatchRequestByNonceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBatchRequestByNonceResponse;
    static equals(a: QueryBatchRequestByNonceResponse | PlainMessage<QueryBatchRequestByNonceResponse> | undefined, b: QueryBatchRequestByNonceResponse | PlainMessage<QueryBatchRequestByNonceResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryBatchConfirmsRequest
 */
export declare class QueryBatchConfirmsRequest extends Message<QueryBatchConfirmsRequest> {
    /**
     * @generated from field: uint64 nonce = 1;
     */
    nonce: bigint;
    /**
     * @generated from field: string contract_address = 2;
     */
    contractAddress: string;
    constructor(data?: PartialMessage<QueryBatchConfirmsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryBatchConfirmsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBatchConfirmsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBatchConfirmsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBatchConfirmsRequest;
    static equals(a: QueryBatchConfirmsRequest | PlainMessage<QueryBatchConfirmsRequest> | undefined, b: QueryBatchConfirmsRequest | PlainMessage<QueryBatchConfirmsRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryBatchConfirmsResponse
 */
export declare class QueryBatchConfirmsResponse extends Message<QueryBatchConfirmsResponse> {
    /**
     * @generated from field: repeated injective.peggy.v1.MsgConfirmBatch confirms = 1;
     */
    confirms: MsgConfirmBatch[];
    constructor(data?: PartialMessage<QueryBatchConfirmsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryBatchConfirmsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBatchConfirmsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBatchConfirmsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBatchConfirmsResponse;
    static equals(a: QueryBatchConfirmsResponse | PlainMessage<QueryBatchConfirmsResponse> | undefined, b: QueryBatchConfirmsResponse | PlainMessage<QueryBatchConfirmsResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryLastEventByAddrRequest
 */
export declare class QueryLastEventByAddrRequest extends Message<QueryLastEventByAddrRequest> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryLastEventByAddrRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryLastEventByAddrRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLastEventByAddrRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLastEventByAddrRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLastEventByAddrRequest;
    static equals(a: QueryLastEventByAddrRequest | PlainMessage<QueryLastEventByAddrRequest> | undefined, b: QueryLastEventByAddrRequest | PlainMessage<QueryLastEventByAddrRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryLastEventByAddrResponse
 */
export declare class QueryLastEventByAddrResponse extends Message<QueryLastEventByAddrResponse> {
    /**
     * @generated from field: injective.peggy.v1.LastClaimEvent last_claim_event = 1;
     */
    lastClaimEvent?: LastClaimEvent;
    constructor(data?: PartialMessage<QueryLastEventByAddrResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryLastEventByAddrResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLastEventByAddrResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLastEventByAddrResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLastEventByAddrResponse;
    static equals(a: QueryLastEventByAddrResponse | PlainMessage<QueryLastEventByAddrResponse> | undefined, b: QueryLastEventByAddrResponse | PlainMessage<QueryLastEventByAddrResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryERC20ToDenomRequest
 */
export declare class QueryERC20ToDenomRequest extends Message<QueryERC20ToDenomRequest> {
    /**
     * @generated from field: string erc20 = 1;
     */
    erc20: string;
    constructor(data?: PartialMessage<QueryERC20ToDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryERC20ToDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryERC20ToDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryERC20ToDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryERC20ToDenomRequest;
    static equals(a: QueryERC20ToDenomRequest | PlainMessage<QueryERC20ToDenomRequest> | undefined, b: QueryERC20ToDenomRequest | PlainMessage<QueryERC20ToDenomRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryERC20ToDenomResponse
 */
export declare class QueryERC20ToDenomResponse extends Message<QueryERC20ToDenomResponse> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: bool cosmos_originated = 2;
     */
    cosmosOriginated: boolean;
    constructor(data?: PartialMessage<QueryERC20ToDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryERC20ToDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryERC20ToDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryERC20ToDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryERC20ToDenomResponse;
    static equals(a: QueryERC20ToDenomResponse | PlainMessage<QueryERC20ToDenomResponse> | undefined, b: QueryERC20ToDenomResponse | PlainMessage<QueryERC20ToDenomResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryDenomToERC20Request
 */
export declare class QueryDenomToERC20Request extends Message<QueryDenomToERC20Request> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryDenomToERC20Request>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryDenomToERC20Request";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomToERC20Request;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomToERC20Request;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomToERC20Request;
    static equals(a: QueryDenomToERC20Request | PlainMessage<QueryDenomToERC20Request> | undefined, b: QueryDenomToERC20Request | PlainMessage<QueryDenomToERC20Request> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryDenomToERC20Response
 */
export declare class QueryDenomToERC20Response extends Message<QueryDenomToERC20Response> {
    /**
     * @generated from field: string erc20 = 1;
     */
    erc20: string;
    /**
     * @generated from field: bool cosmos_originated = 2;
     */
    cosmosOriginated: boolean;
    constructor(data?: PartialMessage<QueryDenomToERC20Response>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryDenomToERC20Response";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomToERC20Response;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomToERC20Response;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomToERC20Response;
    static equals(a: QueryDenomToERC20Response | PlainMessage<QueryDenomToERC20Response> | undefined, b: QueryDenomToERC20Response | PlainMessage<QueryDenomToERC20Response> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryDelegateKeysByValidatorAddress
 */
export declare class QueryDelegateKeysByValidatorAddress extends Message<QueryDelegateKeysByValidatorAddress> {
    /**
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    constructor(data?: PartialMessage<QueryDelegateKeysByValidatorAddress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryDelegateKeysByValidatorAddress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegateKeysByValidatorAddress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegateKeysByValidatorAddress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegateKeysByValidatorAddress;
    static equals(a: QueryDelegateKeysByValidatorAddress | PlainMessage<QueryDelegateKeysByValidatorAddress> | undefined, b: QueryDelegateKeysByValidatorAddress | PlainMessage<QueryDelegateKeysByValidatorAddress> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse
 */
export declare class QueryDelegateKeysByValidatorAddressResponse extends Message<QueryDelegateKeysByValidatorAddressResponse> {
    /**
     * @generated from field: string eth_address = 1;
     */
    ethAddress: string;
    /**
     * @generated from field: string orchestrator_address = 2;
     */
    orchestratorAddress: string;
    constructor(data?: PartialMessage<QueryDelegateKeysByValidatorAddressResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegateKeysByValidatorAddressResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegateKeysByValidatorAddressResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegateKeysByValidatorAddressResponse;
    static equals(a: QueryDelegateKeysByValidatorAddressResponse | PlainMessage<QueryDelegateKeysByValidatorAddressResponse> | undefined, b: QueryDelegateKeysByValidatorAddressResponse | PlainMessage<QueryDelegateKeysByValidatorAddressResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryDelegateKeysByEthAddress
 */
export declare class QueryDelegateKeysByEthAddress extends Message<QueryDelegateKeysByEthAddress> {
    /**
     * @generated from field: string eth_address = 1;
     */
    ethAddress: string;
    constructor(data?: PartialMessage<QueryDelegateKeysByEthAddress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryDelegateKeysByEthAddress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegateKeysByEthAddress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegateKeysByEthAddress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegateKeysByEthAddress;
    static equals(a: QueryDelegateKeysByEthAddress | PlainMessage<QueryDelegateKeysByEthAddress> | undefined, b: QueryDelegateKeysByEthAddress | PlainMessage<QueryDelegateKeysByEthAddress> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryDelegateKeysByEthAddressResponse
 */
export declare class QueryDelegateKeysByEthAddressResponse extends Message<QueryDelegateKeysByEthAddressResponse> {
    /**
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * @generated from field: string orchestrator_address = 2;
     */
    orchestratorAddress: string;
    constructor(data?: PartialMessage<QueryDelegateKeysByEthAddressResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryDelegateKeysByEthAddressResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegateKeysByEthAddressResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegateKeysByEthAddressResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegateKeysByEthAddressResponse;
    static equals(a: QueryDelegateKeysByEthAddressResponse | PlainMessage<QueryDelegateKeysByEthAddressResponse> | undefined, b: QueryDelegateKeysByEthAddressResponse | PlainMessage<QueryDelegateKeysByEthAddressResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress
 */
export declare class QueryDelegateKeysByOrchestratorAddress extends Message<QueryDelegateKeysByOrchestratorAddress> {
    /**
     * @generated from field: string orchestrator_address = 1;
     */
    orchestratorAddress: string;
    constructor(data?: PartialMessage<QueryDelegateKeysByOrchestratorAddress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegateKeysByOrchestratorAddress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegateKeysByOrchestratorAddress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegateKeysByOrchestratorAddress;
    static equals(a: QueryDelegateKeysByOrchestratorAddress | PlainMessage<QueryDelegateKeysByOrchestratorAddress> | undefined, b: QueryDelegateKeysByOrchestratorAddress | PlainMessage<QueryDelegateKeysByOrchestratorAddress> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse
 */
export declare class QueryDelegateKeysByOrchestratorAddressResponse extends Message<QueryDelegateKeysByOrchestratorAddressResponse> {
    /**
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * @generated from field: string eth_address = 2;
     */
    ethAddress: string;
    constructor(data?: PartialMessage<QueryDelegateKeysByOrchestratorAddressResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegateKeysByOrchestratorAddressResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegateKeysByOrchestratorAddressResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegateKeysByOrchestratorAddressResponse;
    static equals(a: QueryDelegateKeysByOrchestratorAddressResponse | PlainMessage<QueryDelegateKeysByOrchestratorAddressResponse> | undefined, b: QueryDelegateKeysByOrchestratorAddressResponse | PlainMessage<QueryDelegateKeysByOrchestratorAddressResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryPendingSendToEth
 */
export declare class QueryPendingSendToEth extends Message<QueryPendingSendToEth> {
    /**
     * @generated from field: string sender_address = 1;
     */
    senderAddress: string;
    constructor(data?: PartialMessage<QueryPendingSendToEth>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryPendingSendToEth";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPendingSendToEth;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPendingSendToEth;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPendingSendToEth;
    static equals(a: QueryPendingSendToEth | PlainMessage<QueryPendingSendToEth> | undefined, b: QueryPendingSendToEth | PlainMessage<QueryPendingSendToEth> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.QueryPendingSendToEthResponse
 */
export declare class QueryPendingSendToEthResponse extends Message<QueryPendingSendToEthResponse> {
    /**
     * @generated from field: repeated injective.peggy.v1.OutgoingTransferTx transfers_in_batches = 1;
     */
    transfersInBatches: OutgoingTransferTx[];
    /**
     * @generated from field: repeated injective.peggy.v1.OutgoingTransferTx unbatched_transfers = 2;
     */
    unbatchedTransfers: OutgoingTransferTx[];
    constructor(data?: PartialMessage<QueryPendingSendToEthResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryPendingSendToEthResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPendingSendToEthResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPendingSendToEthResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPendingSendToEthResponse;
    static equals(a: QueryPendingSendToEthResponse | PlainMessage<QueryPendingSendToEthResponse> | undefined, b: QueryPendingSendToEthResponse | PlainMessage<QueryPendingSendToEthResponse> | undefined): boolean;
}
/**
 * QueryModuleStateRequest is the request type for the Query/PeggyModuleState
 * RPC method.
 *
 * @generated from message injective.peggy.v1.QueryModuleStateRequest
 */
export declare class QueryModuleStateRequest extends Message<QueryModuleStateRequest> {
    constructor(data?: PartialMessage<QueryModuleStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryModuleStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static equals(a: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined, b: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined): boolean;
}
/**
 * QueryModuleStateResponse is the response type for the Query/PeggyModuleState
 * RPC method.
 *
 * @generated from message injective.peggy.v1.QueryModuleStateResponse
 */
export declare class QueryModuleStateResponse extends Message<QueryModuleStateResponse> {
    /**
     * @generated from field: injective.peggy.v1.GenesisState state = 1;
     */
    state?: GenesisState;
    constructor(data?: PartialMessage<QueryModuleStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.QueryModuleStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static equals(a: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined, b: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MissingNoncesRequest
 */
export declare class MissingNoncesRequest extends Message<MissingNoncesRequest> {
    constructor(data?: PartialMessage<MissingNoncesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MissingNoncesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MissingNoncesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MissingNoncesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MissingNoncesRequest;
    static equals(a: MissingNoncesRequest | PlainMessage<MissingNoncesRequest> | undefined, b: MissingNoncesRequest | PlainMessage<MissingNoncesRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MissingNoncesResponse
 */
export declare class MissingNoncesResponse extends Message<MissingNoncesResponse> {
    /**
     * @generated from field: repeated string operator_addresses = 1;
     */
    operatorAddresses: string[];
    constructor(data?: PartialMessage<MissingNoncesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MissingNoncesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MissingNoncesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MissingNoncesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MissingNoncesResponse;
    static equals(a: MissingNoncesResponse | PlainMessage<MissingNoncesResponse> | undefined, b: MissingNoncesResponse | PlainMessage<MissingNoncesResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map