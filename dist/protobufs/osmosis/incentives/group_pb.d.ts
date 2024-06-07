import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Gauge } from "./gauge_pb.js";
/**
 * SplittingPolicy determines the way we want to split incentives in groupGauges
 *
 * @generated from enum osmosis.incentives.SplittingPolicy
 */
export declare enum SplittingPolicy {
    /**
     * @generated from enum value: ByVolume = 0;
     */
    ByVolume = 0
}
/**
 * Note that while both InternalGaugeInfo and InternalGaugeRecord could
 * technically be replaced by DistrInfo and DistrRecord from the pool-incentives
 * module, we create separate types here to keep our abstractions clean and
 * readable (pool-incentives distribution abstractions are used in a very
 * specific way that does not directly relate to gauge logic). This also helps
 * us sidestep a refactor to avoid an import cycle.
 *
 * @generated from message osmosis.incentives.InternalGaugeInfo
 */
export declare class InternalGaugeInfo extends Message<InternalGaugeInfo> {
    /**
     * @generated from field: string total_weight = 1;
     */
    totalWeight: string;
    /**
     * @generated from field: repeated osmosis.incentives.InternalGaugeRecord gauge_records = 2;
     */
    gaugeRecords: InternalGaugeRecord[];
    constructor(data?: PartialMessage<InternalGaugeInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.incentives.InternalGaugeInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InternalGaugeInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InternalGaugeInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InternalGaugeInfo;
    static equals(a: InternalGaugeInfo | PlainMessage<InternalGaugeInfo> | undefined, b: InternalGaugeInfo | PlainMessage<InternalGaugeInfo> | undefined): boolean;
}
/**
 * @generated from message osmosis.incentives.InternalGaugeRecord
 */
export declare class InternalGaugeRecord extends Message<InternalGaugeRecord> {
    /**
     * @generated from field: uint64 gauge_id = 1;
     */
    gaugeId: bigint;
    /**
     * CurrentWeight is the current weight of this gauge being distributed to for
     * this epoch. For instance, for volume splitting policy, this stores the
     * volume generated in the last epoch of the linked pool.
     *
     * @generated from field: string current_weight = 2;
     */
    currentWeight: string;
    /**
     * CumulativeWeight serves as a snapshot of the accumulator being tracked
     * based on splitting policy. For instance, for volume splitting policy, this
     * stores the cumulative volume for the linked pool at time of last update.
     *
     * @generated from field: string cumulative_weight = 3;
     */
    cumulativeWeight: string;
    constructor(data?: PartialMessage<InternalGaugeRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.incentives.InternalGaugeRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InternalGaugeRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InternalGaugeRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InternalGaugeRecord;
    static equals(a: InternalGaugeRecord | PlainMessage<InternalGaugeRecord> | undefined, b: InternalGaugeRecord | PlainMessage<InternalGaugeRecord> | undefined): boolean;
}
/**
 * Group is an object that stores a 1:1 mapped gauge ID, a list of pool gauge
 * info, and a splitting policy. These are grouped into a single abstraction to
 * allow for distribution of group incentives to internal gauges according to
 * the specified splitting policy.
 *
 * @generated from message osmosis.incentives.Group
 */
export declare class Group extends Message<Group> {
    /**
     * @generated from field: uint64 group_gauge_id = 1;
     */
    groupGaugeId: bigint;
    /**
     * @generated from field: osmosis.incentives.InternalGaugeInfo internal_gauge_info = 2;
     */
    internalGaugeInfo?: InternalGaugeInfo;
    /**
     * @generated from field: osmosis.incentives.SplittingPolicy splitting_policy = 3;
     */
    splittingPolicy: SplittingPolicy;
    constructor(data?: PartialMessage<Group>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.incentives.Group";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Group;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Group;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Group;
    static equals(a: Group | PlainMessage<Group> | undefined, b: Group | PlainMessage<Group> | undefined): boolean;
}
/**
 * CreateGroup is called via governance to create a new group.
 * It takes an array of pool IDs to split the incentives across.
 *
 * @generated from message osmosis.incentives.CreateGroup
 */
export declare class CreateGroup extends Message<CreateGroup> {
    /**
     * @generated from field: repeated uint64 pool_ids = 1;
     */
    poolIds: bigint[];
    constructor(data?: PartialMessage<CreateGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.incentives.CreateGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateGroup;
    static equals(a: CreateGroup | PlainMessage<CreateGroup> | undefined, b: CreateGroup | PlainMessage<CreateGroup> | undefined): boolean;
}
/**
 * GroupsWithGauge is a helper struct that stores a group and its
 * associated gauge.
 *
 * @generated from message osmosis.incentives.GroupsWithGauge
 */
export declare class GroupsWithGauge extends Message<GroupsWithGauge> {
    /**
     * @generated from field: osmosis.incentives.Group group = 1;
     */
    group?: Group;
    /**
     * @generated from field: osmosis.incentives.Gauge gauge = 2;
     */
    gauge?: Gauge;
    constructor(data?: PartialMessage<GroupsWithGauge>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.incentives.GroupsWithGauge";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GroupsWithGauge;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GroupsWithGauge;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GroupsWithGauge;
    static equals(a: GroupsWithGauge | PlainMessage<GroupsWithGauge> | undefined, b: GroupsWithGauge | PlainMessage<GroupsWithGauge> | undefined): boolean;
}
//# sourceMappingURL=group_pb.d.ts.map