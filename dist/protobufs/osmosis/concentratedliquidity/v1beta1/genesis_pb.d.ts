import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { TickInfo } from "./tickInfo_pb.js";
import { IncentiveRecord } from "./incentive_record_pb.js";
import { Position } from "./position_pb.js";
import { AccumulatorContent, Record } from "../../accum/v1beta1/accum_pb.js";
import { Params } from "../params_pb.js";
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.FullTick
 */
export declare class FullTick extends Message<FullTick> {
    /**
     * pool id associated with the tick.
     *
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * tick's index.
     *
     * @generated from field: int64 tick_index = 2;
     */
    tickIndex: bigint;
    /**
     * tick's info.
     *
     * @generated from field: osmosis.concentratedliquidity.v1beta1.TickInfo info = 3;
     */
    info?: TickInfo;
    constructor(data?: PartialMessage<FullTick>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.FullTick";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FullTick;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FullTick;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FullTick;
    static equals(a: FullTick | PlainMessage<FullTick> | undefined, b: FullTick | PlainMessage<FullTick> | undefined): boolean;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.PoolData
 */
export declare class PoolData extends Message<PoolData> {
    /**
     * pool struct
     *
     * @generated from field: google.protobuf.Any pool = 1;
     */
    pool?: Any;
    /**
     * pool's ticks
     *
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.FullTick ticks = 2;
     */
    ticks: FullTick[];
    /**
     * @generated from field: osmosis.concentratedliquidity.v1beta1.AccumObject spread_reward_accumulator = 3;
     */
    spreadRewardAccumulator?: AccumObject;
    /**
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.AccumObject incentives_accumulators = 4;
     */
    incentivesAccumulators: AccumObject[];
    /**
     * incentive records to be set
     *
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.IncentiveRecord incentive_records = 5;
     */
    incentiveRecords: IncentiveRecord[];
    constructor(data?: PartialMessage<PoolData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.PoolData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolData;
    static equals(a: PoolData | PlainMessage<PoolData> | undefined, b: PoolData | PlainMessage<PoolData> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.PositionData
 */
export declare class PositionData extends Message<PositionData> {
    /**
     * @generated from field: osmosis.concentratedliquidity.v1beta1.Position position = 1;
     */
    position?: Position;
    /**
     * @generated from field: uint64 lock_id = 2;
     */
    lockId: bigint;
    /**
     * @generated from field: osmosis.accum.v1beta1.Record spread_reward_accum_record = 3;
     */
    spreadRewardAccumRecord?: Record;
    /**
     * @generated from field: repeated osmosis.accum.v1beta1.Record uptime_accum_records = 4;
     */
    uptimeAccumRecords: Record[];
    constructor(data?: PartialMessage<PositionData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.PositionData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PositionData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PositionData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PositionData;
    static equals(a: PositionData | PlainMessage<PositionData> | undefined, b: PositionData | PlainMessage<PositionData> | undefined): boolean;
}
/**
 * GenesisState defines the concentrated liquidity module's genesis state.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params are all the parameters of the module
     *
     * @generated from field: osmosis.concentratedliquidity.Params params = 1;
     */
    params?: Params;
    /**
     * pool data containing serialized pool struct and ticks.
     *
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.PoolData pool_data = 2;
     */
    poolData: PoolData[];
    /**
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.PositionData position_data = 3;
     */
    positionData: PositionData[];
    /**
     * @generated from field: uint64 next_position_id = 4;
     */
    nextPositionId: bigint;
    /**
     * @generated from field: uint64 next_incentive_record_id = 5;
     */
    nextIncentiveRecordId: bigint;
    /**
     * @generated from field: uint64 incentives_accumulator_pool_id_migration_threshold = 6;
     */
    incentivesAccumulatorPoolIdMigrationThreshold: bigint;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * In original struct of Accum object, store.KVStore is stored together.
 * For handling genesis, we do not need to include store.KVStore since we use
 * CL module's KVStore.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.AccumObject
 */
export declare class AccumObject extends Message<AccumObject> {
    /**
     * Accumulator's name (pulled from AccumulatorContent)
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: osmosis.accum.v1beta1.AccumulatorContent accum_content = 2;
     */
    accumContent?: AccumulatorContent;
    constructor(data?: PartialMessage<AccumObject>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.AccumObject";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccumObject;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccumObject;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccumObject;
    static equals(a: AccumObject | PlainMessage<AccumObject> | undefined, b: AccumObject | PlainMessage<AccumObject> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map