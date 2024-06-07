import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { Gauge } from "./gauge_pb.js";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination_pb.js";
/**
 * @generated from message dymensionxyz.dymension.incentives.ModuleToDistributeCoinsRequest
 */
export declare class ModuleToDistributeCoinsRequest extends Message<ModuleToDistributeCoinsRequest> {
    constructor(data?: PartialMessage<ModuleToDistributeCoinsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.ModuleToDistributeCoinsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleToDistributeCoinsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleToDistributeCoinsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleToDistributeCoinsRequest;
    static equals(a: ModuleToDistributeCoinsRequest | PlainMessage<ModuleToDistributeCoinsRequest> | undefined, b: ModuleToDistributeCoinsRequest | PlainMessage<ModuleToDistributeCoinsRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.ModuleToDistributeCoinsResponse
 */
export declare class ModuleToDistributeCoinsResponse extends Message<ModuleToDistributeCoinsResponse> {
    /**
     * Coins that have yet to be distributed
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<ModuleToDistributeCoinsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.ModuleToDistributeCoinsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleToDistributeCoinsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleToDistributeCoinsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleToDistributeCoinsResponse;
    static equals(a: ModuleToDistributeCoinsResponse | PlainMessage<ModuleToDistributeCoinsResponse> | undefined, b: ModuleToDistributeCoinsResponse | PlainMessage<ModuleToDistributeCoinsResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.GaugeByIDRequest
 */
export declare class GaugeByIDRequest extends Message<GaugeByIDRequest> {
    /**
     * Gague ID being queried
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    constructor(data?: PartialMessage<GaugeByIDRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.GaugeByIDRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GaugeByIDRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GaugeByIDRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GaugeByIDRequest;
    static equals(a: GaugeByIDRequest | PlainMessage<GaugeByIDRequest> | undefined, b: GaugeByIDRequest | PlainMessage<GaugeByIDRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.GaugeByIDResponse
 */
export declare class GaugeByIDResponse extends Message<GaugeByIDResponse> {
    /**
     * Gauge that corresponds to provided gague ID
     *
     * @generated from field: dymensionxyz.dymension.incentives.Gauge gauge = 1;
     */
    gauge?: Gauge;
    constructor(data?: PartialMessage<GaugeByIDResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.GaugeByIDResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GaugeByIDResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GaugeByIDResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GaugeByIDResponse;
    static equals(a: GaugeByIDResponse | PlainMessage<GaugeByIDResponse> | undefined, b: GaugeByIDResponse | PlainMessage<GaugeByIDResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.GaugesRequest
 */
export declare class GaugesRequest extends Message<GaugesRequest> {
    /**
     * Pagination defines pagination for the request
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<GaugesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.GaugesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GaugesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GaugesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GaugesRequest;
    static equals(a: GaugesRequest | PlainMessage<GaugesRequest> | undefined, b: GaugesRequest | PlainMessage<GaugesRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.GaugesResponse
 */
export declare class GaugesResponse extends Message<GaugesResponse> {
    /**
     * Upcoming and active gauges
     *
     * @generated from field: repeated dymensionxyz.dymension.incentives.Gauge data = 1;
     */
    data: Gauge[];
    /**
     * Pagination defines pagination for the response
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<GaugesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.GaugesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GaugesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GaugesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GaugesResponse;
    static equals(a: GaugesResponse | PlainMessage<GaugesResponse> | undefined, b: GaugesResponse | PlainMessage<GaugesResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.ActiveGaugesRequest
 */
export declare class ActiveGaugesRequest extends Message<ActiveGaugesRequest> {
    /**
     * Pagination defines pagination for the request
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<ActiveGaugesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.ActiveGaugesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveGaugesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveGaugesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveGaugesRequest;
    static equals(a: ActiveGaugesRequest | PlainMessage<ActiveGaugesRequest> | undefined, b: ActiveGaugesRequest | PlainMessage<ActiveGaugesRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.ActiveGaugesResponse
 */
export declare class ActiveGaugesResponse extends Message<ActiveGaugesResponse> {
    /**
     * Active gagues only
     *
     * @generated from field: repeated dymensionxyz.dymension.incentives.Gauge data = 1;
     */
    data: Gauge[];
    /**
     * Pagination defines pagination for the response
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<ActiveGaugesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.ActiveGaugesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveGaugesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveGaugesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveGaugesResponse;
    static equals(a: ActiveGaugesResponse | PlainMessage<ActiveGaugesResponse> | undefined, b: ActiveGaugesResponse | PlainMessage<ActiveGaugesResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.ActiveGaugesPerDenomRequest
 */
export declare class ActiveGaugesPerDenomRequest extends Message<ActiveGaugesPerDenomRequest> {
    /**
     * Desired denom when querying active gagues
     *
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * Pagination defines pagination for the request
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<ActiveGaugesPerDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.ActiveGaugesPerDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveGaugesPerDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveGaugesPerDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveGaugesPerDenomRequest;
    static equals(a: ActiveGaugesPerDenomRequest | PlainMessage<ActiveGaugesPerDenomRequest> | undefined, b: ActiveGaugesPerDenomRequest | PlainMessage<ActiveGaugesPerDenomRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.ActiveGaugesPerDenomResponse
 */
export declare class ActiveGaugesPerDenomResponse extends Message<ActiveGaugesPerDenomResponse> {
    /**
     * Active gagues that match denom in query
     *
     * @generated from field: repeated dymensionxyz.dymension.incentives.Gauge data = 1;
     */
    data: Gauge[];
    /**
     * Pagination defines pagination for the response
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<ActiveGaugesPerDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.ActiveGaugesPerDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveGaugesPerDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveGaugesPerDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveGaugesPerDenomResponse;
    static equals(a: ActiveGaugesPerDenomResponse | PlainMessage<ActiveGaugesPerDenomResponse> | undefined, b: ActiveGaugesPerDenomResponse | PlainMessage<ActiveGaugesPerDenomResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.UpcomingGaugesRequest
 */
export declare class UpcomingGaugesRequest extends Message<UpcomingGaugesRequest> {
    /**
     * Pagination defines pagination for the request
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<UpcomingGaugesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.UpcomingGaugesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpcomingGaugesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpcomingGaugesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpcomingGaugesRequest;
    static equals(a: UpcomingGaugesRequest | PlainMessage<UpcomingGaugesRequest> | undefined, b: UpcomingGaugesRequest | PlainMessage<UpcomingGaugesRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.UpcomingGaugesResponse
 */
export declare class UpcomingGaugesResponse extends Message<UpcomingGaugesResponse> {
    /**
     * Gauges whose distribution is upcoming
     *
     * @generated from field: repeated dymensionxyz.dymension.incentives.Gauge data = 1;
     */
    data: Gauge[];
    /**
     * Pagination defines pagination for the response
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<UpcomingGaugesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.UpcomingGaugesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpcomingGaugesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpcomingGaugesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpcomingGaugesResponse;
    static equals(a: UpcomingGaugesResponse | PlainMessage<UpcomingGaugesResponse> | undefined, b: UpcomingGaugesResponse | PlainMessage<UpcomingGaugesResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.UpcomingGaugesPerDenomRequest
 */
export declare class UpcomingGaugesPerDenomRequest extends Message<UpcomingGaugesPerDenomRequest> {
    /**
     * Filter for upcoming gagues that match specific denom
     *
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * Pagination defines pagination for the request
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<UpcomingGaugesPerDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.UpcomingGaugesPerDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpcomingGaugesPerDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpcomingGaugesPerDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpcomingGaugesPerDenomRequest;
    static equals(a: UpcomingGaugesPerDenomRequest | PlainMessage<UpcomingGaugesPerDenomRequest> | undefined, b: UpcomingGaugesPerDenomRequest | PlainMessage<UpcomingGaugesPerDenomRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.UpcomingGaugesPerDenomResponse
 */
export declare class UpcomingGaugesPerDenomResponse extends Message<UpcomingGaugesPerDenomResponse> {
    /**
     * Upcoming gagues that match denom in query
     *
     * @generated from field: repeated dymensionxyz.dymension.incentives.Gauge upcoming_gauges = 1;
     */
    upcomingGauges: Gauge[];
    /**
     * Pagination defines pagination for the response
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<UpcomingGaugesPerDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.UpcomingGaugesPerDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpcomingGaugesPerDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpcomingGaugesPerDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpcomingGaugesPerDenomResponse;
    static equals(a: UpcomingGaugesPerDenomResponse | PlainMessage<UpcomingGaugesPerDenomResponse> | undefined, b: UpcomingGaugesPerDenomResponse | PlainMessage<UpcomingGaugesPerDenomResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.RewardsEstRequest
 */
export declare class RewardsEstRequest extends Message<RewardsEstRequest> {
    /**
     * Address that is being queried for future estimated rewards
     *
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * Lock IDs included in future reward estimation
     *
     * @generated from field: repeated uint64 lock_ids = 2;
     */
    lockIds: bigint[];
    /**
     * Upper time limit of reward estimation
     * Lower limit is current epoch
     *
     * @generated from field: int64 end_epoch = 3;
     */
    endEpoch: bigint;
    constructor(data?: PartialMessage<RewardsEstRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.RewardsEstRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RewardsEstRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RewardsEstRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RewardsEstRequest;
    static equals(a: RewardsEstRequest | PlainMessage<RewardsEstRequest> | undefined, b: RewardsEstRequest | PlainMessage<RewardsEstRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.RewardsEstResponse
 */
export declare class RewardsEstResponse extends Message<RewardsEstResponse> {
    /**
     * Estimated coin rewards that will be recieved at provided address
     * from specified locks between current time and end epoch
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<RewardsEstResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.RewardsEstResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RewardsEstResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RewardsEstResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RewardsEstResponse;
    static equals(a: RewardsEstResponse | PlainMessage<RewardsEstResponse> | undefined, b: RewardsEstResponse | PlainMessage<RewardsEstResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.QueryLockableDurationsRequest
 */
export declare class QueryLockableDurationsRequest extends Message<QueryLockableDurationsRequest> {
    constructor(data?: PartialMessage<QueryLockableDurationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.QueryLockableDurationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLockableDurationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLockableDurationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLockableDurationsRequest;
    static equals(a: QueryLockableDurationsRequest | PlainMessage<QueryLockableDurationsRequest> | undefined, b: QueryLockableDurationsRequest | PlainMessage<QueryLockableDurationsRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.incentives.QueryLockableDurationsResponse
 */
export declare class QueryLockableDurationsResponse extends Message<QueryLockableDurationsResponse> {
    /**
     * Time durations that users can lock coins for in order to recieve rewards
     *
     * @generated from field: repeated google.protobuf.Duration lockable_durations = 1;
     */
    lockableDurations: Duration[];
    constructor(data?: PartialMessage<QueryLockableDurationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.QueryLockableDurationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLockableDurationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLockableDurationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLockableDurationsResponse;
    static equals(a: QueryLockableDurationsResponse | PlainMessage<QueryLockableDurationsResponse> | undefined, b: QueryLockableDurationsResponse | PlainMessage<QueryLockableDurationsResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map