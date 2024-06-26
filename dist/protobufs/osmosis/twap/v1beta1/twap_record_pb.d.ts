import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 *
 * @generated from message osmosis.twap.v1beta1.TwapRecord
 */
export declare class TwapRecord extends Message<TwapRecord> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * Lexicographically smaller denom of the pair
     *
     * @generated from field: string asset0_denom = 2;
     */
    asset0Denom: string;
    /**
     * Lexicographically larger denom of the pair
     *
     * @generated from field: string asset1_denom = 3;
     */
    asset1Denom: string;
    /**
     * height this record corresponds to, for debugging purposes
     *
     * @generated from field: int64 height = 4;
     */
    height: bigint;
    /**
     * This field should only exist until we have a global registry in the state
     * machine, mapping prior block heights within {TIME RANGE} to times.
     *
     * @generated from field: google.protobuf.Timestamp time = 5;
     */
    time?: Timestamp;
    /**
     * We store the last spot prices in the struct, so that we can interpolate
     * accumulator values for times between when accumulator records are stored.
     *
     * @generated from field: string p0_last_spot_price = 6;
     */
    p0LastSpotPrice: string;
    /**
     * @generated from field: string p1_last_spot_price = 7;
     */
    p1LastSpotPrice: string;
    /**
     * @generated from field: string p0_arithmetic_twap_accumulator = 8;
     */
    p0ArithmeticTwapAccumulator: string;
    /**
     * @generated from field: string p1_arithmetic_twap_accumulator = 9;
     */
    p1ArithmeticTwapAccumulator: string;
    /**
     * @generated from field: string geometric_twap_accumulator = 10;
     */
    geometricTwapAccumulator: string;
    /**
     * This field contains the time in which the last spot price error occurred.
     * It is used to alert the caller if they are getting a potentially erroneous
     * TWAP, due to an unforeseen underlying error.
     *
     * @generated from field: google.protobuf.Timestamp last_error_time = 11;
     */
    lastErrorTime?: Timestamp;
    constructor(data?: PartialMessage<TwapRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.TwapRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TwapRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TwapRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TwapRecord;
    static equals(a: TwapRecord | PlainMessage<TwapRecord> | undefined, b: TwapRecord | PlainMessage<TwapRecord> | undefined): boolean;
}
/**
 * PruningState allows us to spread out the pruning of TWAP records over time,
 * instead of pruning all at once at the end of the epoch.
 *
 * @generated from message osmosis.twap.v1beta1.PruningState
 */
export declare class PruningState extends Message<PruningState> {
    /**
     * is_pruning is true if the pruning process is ongoing.
     * This tells the module to continue pruning the TWAP records
     * at the EndBlock.
     *
     * @generated from field: bool is_pruning = 1;
     */
    isPruning: boolean;
    /**
     * last_kept_time is the time of the last kept TWAP record.
     * This is used to determine all TWAP records that are older than
     * last_kept_time and should be pruned.
     *
     * @generated from field: google.protobuf.Timestamp last_kept_time = 2;
     */
    lastKeptTime?: Timestamp;
    /**
     * Deprecated: This field is deprecated.
     *
     * @generated from field: bytes last_key_seen = 3 [deprecated = true];
     * @deprecated
     */
    lastKeySeen: Uint8Array;
    /**
     * last_seen_pool_id is the pool_id that we will begin pruning in the next
     * block. This value starts at the highest pool_id at time of epoch, and
     * decreases until it reaches 1. When it reaches 1, the pruning
     * process is complete.
     *
     * @generated from field: uint64 last_seen_pool_id = 4;
     */
    lastSeenPoolId: bigint;
    constructor(data?: PartialMessage<PruningState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.PruningState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PruningState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PruningState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PruningState;
    static equals(a: PruningState | PlainMessage<PruningState> | undefined, b: PruningState | PlainMessage<PruningState> | undefined): boolean;
}
//# sourceMappingURL=twap_record_pb.d.ts.map