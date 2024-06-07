import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { EpochAndRound, FeedConfig, FeedConfigInfo, Params, Transmission } from "./ocr_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { GenesisState } from "./genesis_pb.js";
/**
 * @generated from message injective.ocr.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * @generated from field: injective.ocr.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.QueryFeedConfigRequest
 */
export declare class QueryFeedConfigRequest extends Message<QueryFeedConfigRequest> {
    /**
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    constructor(data?: PartialMessage<QueryFeedConfigRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryFeedConfigRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeedConfigRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeedConfigRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeedConfigRequest;
    static equals(a: QueryFeedConfigRequest | PlainMessage<QueryFeedConfigRequest> | undefined, b: QueryFeedConfigRequest | PlainMessage<QueryFeedConfigRequest> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.QueryFeedConfigResponse
 */
export declare class QueryFeedConfigResponse extends Message<QueryFeedConfigResponse> {
    /**
     * @generated from field: injective.ocr.v1beta1.FeedConfigInfo feed_config_info = 1;
     */
    feedConfigInfo?: FeedConfigInfo;
    /**
     * @generated from field: injective.ocr.v1beta1.FeedConfig feed_config = 2;
     */
    feedConfig?: FeedConfig;
    constructor(data?: PartialMessage<QueryFeedConfigResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryFeedConfigResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeedConfigResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeedConfigResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeedConfigResponse;
    static equals(a: QueryFeedConfigResponse | PlainMessage<QueryFeedConfigResponse> | undefined, b: QueryFeedConfigResponse | PlainMessage<QueryFeedConfigResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.QueryFeedConfigInfoRequest
 */
export declare class QueryFeedConfigInfoRequest extends Message<QueryFeedConfigInfoRequest> {
    /**
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    constructor(data?: PartialMessage<QueryFeedConfigInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryFeedConfigInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeedConfigInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeedConfigInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeedConfigInfoRequest;
    static equals(a: QueryFeedConfigInfoRequest | PlainMessage<QueryFeedConfigInfoRequest> | undefined, b: QueryFeedConfigInfoRequest | PlainMessage<QueryFeedConfigInfoRequest> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.QueryFeedConfigInfoResponse
 */
export declare class QueryFeedConfigInfoResponse extends Message<QueryFeedConfigInfoResponse> {
    /**
     * @generated from field: injective.ocr.v1beta1.FeedConfigInfo feed_config_info = 1;
     */
    feedConfigInfo?: FeedConfigInfo;
    /**
     * @generated from field: injective.ocr.v1beta1.EpochAndRound epoch_and_round = 2;
     */
    epochAndRound?: EpochAndRound;
    constructor(data?: PartialMessage<QueryFeedConfigInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryFeedConfigInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeedConfigInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeedConfigInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeedConfigInfoResponse;
    static equals(a: QueryFeedConfigInfoResponse | PlainMessage<QueryFeedConfigInfoResponse> | undefined, b: QueryFeedConfigInfoResponse | PlainMessage<QueryFeedConfigInfoResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.QueryLatestRoundRequest
 */
export declare class QueryLatestRoundRequest extends Message<QueryLatestRoundRequest> {
    /**
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    constructor(data?: PartialMessage<QueryLatestRoundRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryLatestRoundRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLatestRoundRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLatestRoundRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLatestRoundRequest;
    static equals(a: QueryLatestRoundRequest | PlainMessage<QueryLatestRoundRequest> | undefined, b: QueryLatestRoundRequest | PlainMessage<QueryLatestRoundRequest> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.QueryLatestRoundResponse
 */
export declare class QueryLatestRoundResponse extends Message<QueryLatestRoundResponse> {
    /**
     * @generated from field: uint64 latest_round_id = 1;
     */
    latestRoundId: bigint;
    /**
     * @generated from field: injective.ocr.v1beta1.Transmission data = 2;
     */
    data?: Transmission;
    constructor(data?: PartialMessage<QueryLatestRoundResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryLatestRoundResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLatestRoundResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLatestRoundResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLatestRoundResponse;
    static equals(a: QueryLatestRoundResponse | PlainMessage<QueryLatestRoundResponse> | undefined, b: QueryLatestRoundResponse | PlainMessage<QueryLatestRoundResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest
 */
export declare class QueryLatestTransmissionDetailsRequest extends Message<QueryLatestTransmissionDetailsRequest> {
    /**
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    constructor(data?: PartialMessage<QueryLatestTransmissionDetailsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLatestTransmissionDetailsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLatestTransmissionDetailsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLatestTransmissionDetailsRequest;
    static equals(a: QueryLatestTransmissionDetailsRequest | PlainMessage<QueryLatestTransmissionDetailsRequest> | undefined, b: QueryLatestTransmissionDetailsRequest | PlainMessage<QueryLatestTransmissionDetailsRequest> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse
 */
export declare class QueryLatestTransmissionDetailsResponse extends Message<QueryLatestTransmissionDetailsResponse> {
    /**
     * @generated from field: bytes config_digest = 1;
     */
    configDigest: Uint8Array;
    /**
     * @generated from field: injective.ocr.v1beta1.EpochAndRound epoch_and_round = 2;
     */
    epochAndRound?: EpochAndRound;
    /**
     * @generated from field: injective.ocr.v1beta1.Transmission data = 3;
     */
    data?: Transmission;
    constructor(data?: PartialMessage<QueryLatestTransmissionDetailsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLatestTransmissionDetailsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLatestTransmissionDetailsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLatestTransmissionDetailsResponse;
    static equals(a: QueryLatestTransmissionDetailsResponse | PlainMessage<QueryLatestTransmissionDetailsResponse> | undefined, b: QueryLatestTransmissionDetailsResponse | PlainMessage<QueryLatestTransmissionDetailsResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.QueryOwedAmountRequest
 */
export declare class QueryOwedAmountRequest extends Message<QueryOwedAmountRequest> {
    /**
     * @generated from field: string transmitter = 1;
     */
    transmitter: string;
    constructor(data?: PartialMessage<QueryOwedAmountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryOwedAmountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOwedAmountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOwedAmountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOwedAmountRequest;
    static equals(a: QueryOwedAmountRequest | PlainMessage<QueryOwedAmountRequest> | undefined, b: QueryOwedAmountRequest | PlainMessage<QueryOwedAmountRequest> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.QueryOwedAmountResponse
 */
export declare class QueryOwedAmountResponse extends Message<QueryOwedAmountResponse> {
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 1;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<QueryOwedAmountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryOwedAmountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOwedAmountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOwedAmountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOwedAmountResponse;
    static equals(a: QueryOwedAmountResponse | PlainMessage<QueryOwedAmountResponse> | undefined, b: QueryOwedAmountResponse | PlainMessage<QueryOwedAmountResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.QueryModuleStateRequest
 */
export declare class QueryModuleStateRequest extends Message<QueryModuleStateRequest> {
    constructor(data?: PartialMessage<QueryModuleStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryModuleStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static equals(a: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined, b: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.QueryModuleStateResponse
 */
export declare class QueryModuleStateResponse extends Message<QueryModuleStateResponse> {
    /**
     * @generated from field: injective.ocr.v1beta1.GenesisState state = 1;
     */
    state?: GenesisState;
    constructor(data?: PartialMessage<QueryModuleStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.QueryModuleStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static equals(a: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined, b: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map