import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { QueryCondition } from "../lockup/lock_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
/**
 * MsgCreateGauge creates a gague to distribute rewards to users
 *
 * @generated from message osmosis.incentives.MsgCreateGauge
 */
export declare class MsgCreateGauge extends Message<MsgCreateGauge> {
    /**
     * is_perpetual shows if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled
     *
     * @generated from field: bool is_perpetual = 1;
     */
    isPerpetual: boolean;
    /**
     * owner is the address of gauge creator
     *
     * @generated from field: string owner = 2;
     */
    owner: string;
    /**
     * distribute_to show which lock the gauge should distribute to by time
     * duration or by timestamp
     *
     * @generated from field: osmosis.lockup.QueryCondition distribute_to = 3;
     */
    distributeTo?: QueryCondition;
    /**
     * coins are coin(s) to be distributed by the gauge
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 4;
     */
    coins: Coin[];
    /**
     * start_time is the distribution start time
     *
     * @generated from field: google.protobuf.Timestamp start_time = 5;
     */
    startTime?: Timestamp;
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * over
     *
     * @generated from field: uint64 num_epochs_paid_over = 6;
     */
    numEpochsPaidOver: bigint;
    /**
     * pool_id is the ID of the pool that the gauge is meant to be associated
     * with. if pool_id is set, then the "QueryCondition.LockQueryType" must be
     * "NoLock" with all other fields of the "QueryCondition.LockQueryType" struct
     * unset, including "QueryCondition.Denom". However, note that, internally,
     * the empty string in "QueryCondition.Denom" ends up being overwritten with
     * incentivestypes.NoLockExternalGaugeDenom(<pool-id>) so that the gauges
     * associated with a pool can be queried by this prefix if needed.
     *
     * @generated from field: uint64 pool_id = 7;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<MsgCreateGauge>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.incentives.MsgCreateGauge";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateGauge;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateGauge;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateGauge;
    static equals(a: MsgCreateGauge | PlainMessage<MsgCreateGauge> | undefined, b: MsgCreateGauge | PlainMessage<MsgCreateGauge> | undefined): boolean;
}
/**
 * @generated from message osmosis.incentives.MsgCreateGaugeResponse
 */
export declare class MsgCreateGaugeResponse extends Message<MsgCreateGaugeResponse> {
    constructor(data?: PartialMessage<MsgCreateGaugeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.incentives.MsgCreateGaugeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateGaugeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateGaugeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateGaugeResponse;
    static equals(a: MsgCreateGaugeResponse | PlainMessage<MsgCreateGaugeResponse> | undefined, b: MsgCreateGaugeResponse | PlainMessage<MsgCreateGaugeResponse> | undefined): boolean;
}
/**
 * MsgAddToGauge adds coins to a previously created gauge
 *
 * @generated from message osmosis.incentives.MsgAddToGauge
 */
export declare class MsgAddToGauge extends Message<MsgAddToGauge> {
    /**
     * owner is the gauge owner's address
     *
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * gauge_id is the ID of gauge that rewards are getting added to
     *
     * @generated from field: uint64 gauge_id = 2;
     */
    gaugeId: bigint;
    /**
     * rewards are the coin(s) to add to gauge
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin rewards = 3;
     */
    rewards: Coin[];
    constructor(data?: PartialMessage<MsgAddToGauge>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.incentives.MsgAddToGauge";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddToGauge;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddToGauge;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddToGauge;
    static equals(a: MsgAddToGauge | PlainMessage<MsgAddToGauge> | undefined, b: MsgAddToGauge | PlainMessage<MsgAddToGauge> | undefined): boolean;
}
/**
 * @generated from message osmosis.incentives.MsgAddToGaugeResponse
 */
export declare class MsgAddToGaugeResponse extends Message<MsgAddToGaugeResponse> {
    constructor(data?: PartialMessage<MsgAddToGaugeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.incentives.MsgAddToGaugeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddToGaugeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddToGaugeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddToGaugeResponse;
    static equals(a: MsgAddToGaugeResponse | PlainMessage<MsgAddToGaugeResponse> | undefined, b: MsgAddToGaugeResponse | PlainMessage<MsgAddToGaugeResponse> | undefined): boolean;
}
/**
 * MsgCreateGroup creates a group to distribute rewards to a group of pools
 *
 * @generated from message osmosis.incentives.MsgCreateGroup
 */
export declare class MsgCreateGroup extends Message<MsgCreateGroup> {
    /**
     * coins are the provided coins that the group will distribute
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
     */
    coins: Coin[];
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * in. 0 means it's perpetual
     *
     * @generated from field: uint64 num_epochs_paid_over = 2;
     */
    numEpochsPaidOver: bigint;
    /**
     * owner is the group owner's address
     *
     * @generated from field: string owner = 3;
     */
    owner: string;
    /**
     * pool_ids are the IDs of pools that the group is comprised of
     *
     * @generated from field: repeated uint64 pool_ids = 4;
     */
    poolIds: bigint[];
    constructor(data?: PartialMessage<MsgCreateGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.incentives.MsgCreateGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateGroup;
    static equals(a: MsgCreateGroup | PlainMessage<MsgCreateGroup> | undefined, b: MsgCreateGroup | PlainMessage<MsgCreateGroup> | undefined): boolean;
}
/**
 * @generated from message osmosis.incentives.MsgCreateGroupResponse
 */
export declare class MsgCreateGroupResponse extends Message<MsgCreateGroupResponse> {
    /**
     * group_id is the ID of the group that is created from this msg
     *
     * @generated from field: uint64 group_id = 1;
     */
    groupId: bigint;
    constructor(data?: PartialMessage<MsgCreateGroupResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.incentives.MsgCreateGroupResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateGroupResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateGroupResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateGroupResponse;
    static equals(a: MsgCreateGroupResponse | PlainMessage<MsgCreateGroupResponse> | undefined, b: MsgCreateGroupResponse | PlainMessage<MsgCreateGroupResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map