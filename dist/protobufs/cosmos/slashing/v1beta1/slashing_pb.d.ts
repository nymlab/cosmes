import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 *
 * @generated from message cosmos.slashing.v1beta1.ValidatorSigningInfo
 */
export declare class ValidatorSigningInfo extends Message<ValidatorSigningInfo> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * Height at which validator was first a candidate OR was unjailed
     *
     * @generated from field: int64 start_height = 2;
     */
    startHeight: bigint;
    /**
     * Index which is incremented each time the validator was a bonded
     * in a block and may have signed a precommit or not. This in conjunction with the
     * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
     *
     * @generated from field: int64 index_offset = 3;
     */
    indexOffset: bigint;
    /**
     * Timestamp until which the validator is jailed due to liveness downtime.
     *
     * @generated from field: google.protobuf.Timestamp jailed_until = 4;
     */
    jailedUntil?: Timestamp;
    /**
     * Whether or not a validator has been tombstoned (killed out of validator set). It is set
     * once the validator commits an equivocation or for any other configured misbehiavor.
     *
     * @generated from field: bool tombstoned = 5;
     */
    tombstoned: boolean;
    /**
     * A counter kept to avoid unnecessary array reads.
     * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
     *
     * @generated from field: int64 missed_blocks_counter = 6;
     */
    missedBlocksCounter: bigint;
    constructor(data?: PartialMessage<ValidatorSigningInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.ValidatorSigningInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorSigningInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorSigningInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorSigningInfo;
    static equals(a: ValidatorSigningInfo | PlainMessage<ValidatorSigningInfo> | undefined, b: ValidatorSigningInfo | PlainMessage<ValidatorSigningInfo> | undefined): boolean;
}
/**
 * Params represents the parameters used for by the slashing module.
 *
 * @generated from message cosmos.slashing.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * @generated from field: int64 signed_blocks_window = 1;
     */
    signedBlocksWindow: bigint;
    /**
     * @generated from field: bytes min_signed_per_window = 2;
     */
    minSignedPerWindow: Uint8Array;
    /**
     * @generated from field: google.protobuf.Duration downtime_jail_duration = 3;
     */
    downtimeJailDuration?: Duration;
    /**
     * @generated from field: bytes slash_fraction_double_sign = 4;
     */
    slashFractionDoubleSign: Uint8Array;
    /**
     * @generated from field: bytes slash_fraction_downtime = 5;
     */
    slashFractionDowntime: Uint8Array;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=slashing_pb.d.ts.map