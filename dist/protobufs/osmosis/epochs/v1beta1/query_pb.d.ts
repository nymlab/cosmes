import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { EpochInfo } from "./genesis_pb.js";
/**
 * @generated from message osmosis.epochs.v1beta1.QueryEpochsInfoRequest
 */
export declare class QueryEpochsInfoRequest extends Message<QueryEpochsInfoRequest> {
    constructor(data?: PartialMessage<QueryEpochsInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.epochs.v1beta1.QueryEpochsInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEpochsInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEpochsInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEpochsInfoRequest;
    static equals(a: QueryEpochsInfoRequest | PlainMessage<QueryEpochsInfoRequest> | undefined, b: QueryEpochsInfoRequest | PlainMessage<QueryEpochsInfoRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.epochs.v1beta1.QueryEpochsInfoResponse
 */
export declare class QueryEpochsInfoResponse extends Message<QueryEpochsInfoResponse> {
    /**
     * @generated from field: repeated osmosis.epochs.v1beta1.EpochInfo epochs = 1;
     */
    epochs: EpochInfo[];
    constructor(data?: PartialMessage<QueryEpochsInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.epochs.v1beta1.QueryEpochsInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEpochsInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEpochsInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEpochsInfoResponse;
    static equals(a: QueryEpochsInfoResponse | PlainMessage<QueryEpochsInfoResponse> | undefined, b: QueryEpochsInfoResponse | PlainMessage<QueryEpochsInfoResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.epochs.v1beta1.QueryCurrentEpochRequest
 */
export declare class QueryCurrentEpochRequest extends Message<QueryCurrentEpochRequest> {
    /**
     * @generated from field: string identifier = 1;
     */
    identifier: string;
    constructor(data?: PartialMessage<QueryCurrentEpochRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.epochs.v1beta1.QueryCurrentEpochRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCurrentEpochRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCurrentEpochRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCurrentEpochRequest;
    static equals(a: QueryCurrentEpochRequest | PlainMessage<QueryCurrentEpochRequest> | undefined, b: QueryCurrentEpochRequest | PlainMessage<QueryCurrentEpochRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.epochs.v1beta1.QueryCurrentEpochResponse
 */
export declare class QueryCurrentEpochResponse extends Message<QueryCurrentEpochResponse> {
    /**
     * @generated from field: int64 current_epoch = 1;
     */
    currentEpoch: bigint;
    constructor(data?: PartialMessage<QueryCurrentEpochResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.epochs.v1beta1.QueryCurrentEpochResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCurrentEpochResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCurrentEpochResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCurrentEpochResponse;
    static equals(a: QueryCurrentEpochResponse | PlainMessage<QueryCurrentEpochResponse> | undefined, b: QueryCurrentEpochResponse | PlainMessage<QueryCurrentEpochResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map