import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { DistrInfo, Params } from "./incentives_pb.js";
import { Gauge } from "../../incentives/gauge_pb.js";
/**
 * @generated from message osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest
 */
export declare class QueryGaugeIdsRequest extends Message<QueryGaugeIdsRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<QueryGaugeIdsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGaugeIdsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGaugeIdsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGaugeIdsRequest;
    static equals(a: QueryGaugeIdsRequest | PlainMessage<QueryGaugeIdsRequest> | undefined, b: QueryGaugeIdsRequest | PlainMessage<QueryGaugeIdsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse
 */
export declare class QueryGaugeIdsResponse extends Message<QueryGaugeIdsResponse> {
    /**
     * @generated from field: repeated osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration gauge_ids_with_duration = 1;
     */
    gaugeIdsWithDuration: QueryGaugeIdsResponse_GaugeIdWithDuration[];
    constructor(data?: PartialMessage<QueryGaugeIdsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGaugeIdsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGaugeIdsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGaugeIdsResponse;
    static equals(a: QueryGaugeIdsResponse | PlainMessage<QueryGaugeIdsResponse> | undefined, b: QueryGaugeIdsResponse | PlainMessage<QueryGaugeIdsResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration
 */
export declare class QueryGaugeIdsResponse_GaugeIdWithDuration extends Message<QueryGaugeIdsResponse_GaugeIdWithDuration> {
    /**
     * @generated from field: uint64 gauge_id = 1;
     */
    gaugeId: bigint;
    /**
     * @generated from field: google.protobuf.Duration duration = 2;
     */
    duration?: Duration;
    /**
     * @generated from field: string gauge_incentive_percentage = 3;
     */
    gaugeIncentivePercentage: string;
    constructor(data?: PartialMessage<QueryGaugeIdsResponse_GaugeIdWithDuration>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGaugeIdsResponse_GaugeIdWithDuration;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGaugeIdsResponse_GaugeIdWithDuration;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGaugeIdsResponse_GaugeIdWithDuration;
    static equals(a: QueryGaugeIdsResponse_GaugeIdWithDuration | PlainMessage<QueryGaugeIdsResponse_GaugeIdWithDuration> | undefined, b: QueryGaugeIdsResponse_GaugeIdWithDuration | PlainMessage<QueryGaugeIdsResponse_GaugeIdWithDuration> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.QueryDistrInfoRequest
 */
export declare class QueryDistrInfoRequest extends Message<QueryDistrInfoRequest> {
    constructor(data?: PartialMessage<QueryDistrInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.QueryDistrInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDistrInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDistrInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDistrInfoRequest;
    static equals(a: QueryDistrInfoRequest | PlainMessage<QueryDistrInfoRequest> | undefined, b: QueryDistrInfoRequest | PlainMessage<QueryDistrInfoRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.QueryDistrInfoResponse
 */
export declare class QueryDistrInfoResponse extends Message<QueryDistrInfoResponse> {
    /**
     * @generated from field: osmosis.poolincentives.v1beta1.DistrInfo distr_info = 1;
     */
    distrInfo?: DistrInfo;
    constructor(data?: PartialMessage<QueryDistrInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.QueryDistrInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDistrInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDistrInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDistrInfoResponse;
    static equals(a: QueryDistrInfoResponse | PlainMessage<QueryDistrInfoResponse> | undefined, b: QueryDistrInfoResponse | PlainMessage<QueryDistrInfoResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * @generated from field: osmosis.poolincentives.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest
 */
export declare class QueryLockableDurationsRequest extends Message<QueryLockableDurationsRequest> {
    constructor(data?: PartialMessage<QueryLockableDurationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLockableDurationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLockableDurationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLockableDurationsRequest;
    static equals(a: QueryLockableDurationsRequest | PlainMessage<QueryLockableDurationsRequest> | undefined, b: QueryLockableDurationsRequest | PlainMessage<QueryLockableDurationsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse
 */
export declare class QueryLockableDurationsResponse extends Message<QueryLockableDurationsResponse> {
    /**
     * @generated from field: repeated google.protobuf.Duration lockable_durations = 1;
     */
    lockableDurations: Duration[];
    constructor(data?: PartialMessage<QueryLockableDurationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLockableDurationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLockableDurationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLockableDurationsResponse;
    static equals(a: QueryLockableDurationsResponse | PlainMessage<QueryLockableDurationsResponse> | undefined, b: QueryLockableDurationsResponse | PlainMessage<QueryLockableDurationsResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest
 */
export declare class QueryIncentivizedPoolsRequest extends Message<QueryIncentivizedPoolsRequest> {
    constructor(data?: PartialMessage<QueryIncentivizedPoolsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIncentivizedPoolsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIncentivizedPoolsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIncentivizedPoolsRequest;
    static equals(a: QueryIncentivizedPoolsRequest | PlainMessage<QueryIncentivizedPoolsRequest> | undefined, b: QueryIncentivizedPoolsRequest | PlainMessage<QueryIncentivizedPoolsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.IncentivizedPool
 */
export declare class IncentivizedPool extends Message<IncentivizedPool> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: google.protobuf.Duration lockable_duration = 2;
     */
    lockableDuration?: Duration;
    /**
     * @generated from field: uint64 gauge_id = 3;
     */
    gaugeId: bigint;
    constructor(data?: PartialMessage<IncentivizedPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.IncentivizedPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IncentivizedPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IncentivizedPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IncentivizedPool;
    static equals(a: IncentivizedPool | PlainMessage<IncentivizedPool> | undefined, b: IncentivizedPool | PlainMessage<IncentivizedPool> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse
 */
export declare class QueryIncentivizedPoolsResponse extends Message<QueryIncentivizedPoolsResponse> {
    /**
     * @generated from field: repeated osmosis.poolincentives.v1beta1.IncentivizedPool incentivized_pools = 1;
     */
    incentivizedPools: IncentivizedPool[];
    constructor(data?: PartialMessage<QueryIncentivizedPoolsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIncentivizedPoolsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIncentivizedPoolsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIncentivizedPoolsResponse;
    static equals(a: QueryIncentivizedPoolsResponse | PlainMessage<QueryIncentivizedPoolsResponse> | undefined, b: QueryIncentivizedPoolsResponse | PlainMessage<QueryIncentivizedPoolsResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest
 */
export declare class QueryExternalIncentiveGaugesRequest extends Message<QueryExternalIncentiveGaugesRequest> {
    constructor(data?: PartialMessage<QueryExternalIncentiveGaugesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryExternalIncentiveGaugesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryExternalIncentiveGaugesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryExternalIncentiveGaugesRequest;
    static equals(a: QueryExternalIncentiveGaugesRequest | PlainMessage<QueryExternalIncentiveGaugesRequest> | undefined, b: QueryExternalIncentiveGaugesRequest | PlainMessage<QueryExternalIncentiveGaugesRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse
 */
export declare class QueryExternalIncentiveGaugesResponse extends Message<QueryExternalIncentiveGaugesResponse> {
    /**
     * @generated from field: repeated osmosis.incentives.Gauge data = 1;
     */
    data: Gauge[];
    constructor(data?: PartialMessage<QueryExternalIncentiveGaugesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryExternalIncentiveGaugesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryExternalIncentiveGaugesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryExternalIncentiveGaugesResponse;
    static equals(a: QueryExternalIncentiveGaugesResponse | PlainMessage<QueryExternalIncentiveGaugesResponse> | undefined, b: QueryExternalIncentiveGaugesResponse | PlainMessage<QueryExternalIncentiveGaugesResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map