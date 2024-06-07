import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * EpochInfo is a struct that describes the data going into
 * a timer defined by the x/epochs module.
 *
 * @generated from message dymensionxyz.dymension.epochs.v1beta1.EpochInfo
 */
export declare class EpochInfo extends Message<EpochInfo> {
    /**
     * identifier is a unique reference to this particular timer.
     *
     * @generated from field: string identifier = 1;
     */
    identifier: string;
    /**
     * start_time is the time at which the timer first ever ticks.
     * If start_time is in the future, the epoch will not begin until the start
     * time.
     *
     * @generated from field: google.protobuf.Timestamp start_time = 2;
     */
    startTime?: Timestamp;
    /**
     * duration is the time in between epoch ticks.
     * In order for intended behavior to be met, duration should
     * be greater than the chains expected block time.
     * Duration must be non-zero.
     *
     * @generated from field: google.protobuf.Duration duration = 3;
     */
    duration?: Duration;
    /**
     * current_epoch is the current epoch number, or in other words,
     * how many times has the timer 'ticked'.
     * The first tick (current_epoch=1) is defined as
     * the first block whose blocktime is greater than the EpochInfo start_time.
     *
     * @generated from field: int64 current_epoch = 4;
     */
    currentEpoch: bigint;
    /**
     * current_epoch_start_time describes the start time of the current timer
     * interval. The interval is (current_epoch_start_time,
     * current_epoch_start_time + duration] When the timer ticks, this is set to
     * current_epoch_start_time = last_epoch_start_time + duration only one timer
     * tick for a given identifier can occur per block.
     *
     * NOTE! The current_epoch_start_time may diverge significantly from the
     * wall-clock time the epoch began at. Wall-clock time of epoch start may be
     * >> current_epoch_start_time. Suppose current_epoch_start_time = 10,
     * duration = 5. Suppose the chain goes offline at t=14, and comes back online
     * at t=30, and produces blocks at every successive time. (t=31, 32, etc.)
     * * The t=30 block will start the epoch for (10, 15]
     * * The t=31 block will start the epoch for (15, 20]
     * * The t=32 block will start the epoch for (20, 25]
     * * The t=33 block will start the epoch for (25, 30]
     * * The t=34 block will start the epoch for (30, 35]
     * * The **t=36** block will start the epoch for (35, 40]
     *
     * @generated from field: google.protobuf.Timestamp current_epoch_start_time = 5;
     */
    currentEpochStartTime?: Timestamp;
    /**
     * epoch_counting_started is a boolean, that indicates whether this
     * epoch timer has began yet.
     *
     * @generated from field: bool epoch_counting_started = 6;
     */
    epochCountingStarted: boolean;
    /**
     * current_epoch_start_height is the block height at which the current epoch
     * started. (The block height at which the timer last ticked)
     *
     * @generated from field: int64 current_epoch_start_height = 8;
     */
    currentEpochStartHeight: bigint;
    constructor(data?: PartialMessage<EpochInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.epochs.v1beta1.EpochInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EpochInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EpochInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EpochInfo;
    static equals(a: EpochInfo | PlainMessage<EpochInfo> | undefined, b: EpochInfo | PlainMessage<EpochInfo> | undefined): boolean;
}
/**
 * GenesisState defines the epochs module's genesis state.
 *
 * @generated from message dymensionxyz.dymension.epochs.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: repeated dymensionxyz.dymension.epochs.v1beta1.EpochInfo epochs = 1;
     */
    epochs: EpochInfo[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.epochs.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map