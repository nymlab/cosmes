import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message osmosis.poolincentives.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * minted_denom is the denomination of the coin expected to be minted by the
     * minting module. Pool-incentives module doesn’t actually mint the coin
     * itself, but rather manages the distribution of coins that matches the
     * defined minted_denom.
     *
     * @generated from field: string minted_denom = 1;
     */
    mintedDenom: string;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.LockableDurationsInfo
 */
export declare class LockableDurationsInfo extends Message<LockableDurationsInfo> {
    /**
     * @generated from field: repeated google.protobuf.Duration lockable_durations = 1;
     */
    lockableDurations: Duration[];
    constructor(data?: PartialMessage<LockableDurationsInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.LockableDurationsInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LockableDurationsInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LockableDurationsInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LockableDurationsInfo;
    static equals(a: LockableDurationsInfo | PlainMessage<LockableDurationsInfo> | undefined, b: LockableDurationsInfo | PlainMessage<LockableDurationsInfo> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.DistrInfo
 */
export declare class DistrInfo extends Message<DistrInfo> {
    /**
     * @generated from field: string total_weight = 1;
     */
    totalWeight: string;
    /**
     * @generated from field: repeated osmosis.poolincentives.v1beta1.DistrRecord records = 2;
     */
    records: DistrRecord[];
    constructor(data?: PartialMessage<DistrInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.DistrInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DistrInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DistrInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DistrInfo;
    static equals(a: DistrInfo | PlainMessage<DistrInfo> | undefined, b: DistrInfo | PlainMessage<DistrInfo> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.DistrRecord
 */
export declare class DistrRecord extends Message<DistrRecord> {
    /**
     * @generated from field: uint64 gauge_id = 1;
     */
    gaugeId: bigint;
    /**
     * @generated from field: string weight = 2;
     */
    weight: string;
    constructor(data?: PartialMessage<DistrRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.DistrRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DistrRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DistrRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DistrRecord;
    static equals(a: DistrRecord | PlainMessage<DistrRecord> | undefined, b: DistrRecord | PlainMessage<DistrRecord> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.PoolToGauge
 */
export declare class PoolToGauge extends Message<PoolToGauge> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: uint64 gauge_id = 2;
     */
    gaugeId: bigint;
    /**
     * @generated from field: google.protobuf.Duration duration = 3;
     */
    duration?: Duration;
    constructor(data?: PartialMessage<PoolToGauge>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.PoolToGauge";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolToGauge;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolToGauge;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolToGauge;
    static equals(a: PoolToGauge | PlainMessage<PoolToGauge> | undefined, b: PoolToGauge | PlainMessage<PoolToGauge> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges
 */
export declare class AnyPoolToInternalGauges extends Message<AnyPoolToInternalGauges> {
    /**
     * @generated from field: repeated osmosis.poolincentives.v1beta1.PoolToGauge pool_to_gauge = 2;
     */
    poolToGauge: PoolToGauge[];
    constructor(data?: PartialMessage<AnyPoolToInternalGauges>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnyPoolToInternalGauges;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnyPoolToInternalGauges;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnyPoolToInternalGauges;
    static equals(a: AnyPoolToInternalGauges | PlainMessage<AnyPoolToInternalGauges> | undefined, b: AnyPoolToInternalGauges | PlainMessage<AnyPoolToInternalGauges> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges
 */
export declare class ConcentratedPoolToNoLockGauges extends Message<ConcentratedPoolToNoLockGauges> {
    /**
     * @generated from field: repeated osmosis.poolincentives.v1beta1.PoolToGauge pool_to_gauge = 1;
     */
    poolToGauge: PoolToGauge[];
    constructor(data?: PartialMessage<ConcentratedPoolToNoLockGauges>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConcentratedPoolToNoLockGauges;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConcentratedPoolToNoLockGauges;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConcentratedPoolToNoLockGauges;
    static equals(a: ConcentratedPoolToNoLockGauges | PlainMessage<ConcentratedPoolToNoLockGauges> | undefined, b: ConcentratedPoolToNoLockGauges | PlainMessage<ConcentratedPoolToNoLockGauges> | undefined): boolean;
}
//# sourceMappingURL=incentives_pb.d.ts.map