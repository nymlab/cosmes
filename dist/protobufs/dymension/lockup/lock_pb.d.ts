import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 *
 * @generated from enum dymensionxyz.dymension.lockup.LockQueryType
 */
export declare enum LockQueryType {
    /**
     * @generated from enum value: ByDuration = 0;
     */
    ByDuration = 0,
    /**
     * @generated from enum value: ByTime = 1;
     */
    ByTime = 1
}
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 *
 * @generated from message dymensionxyz.dymension.lockup.PeriodLock
 */
export declare class PeriodLock extends Message<PeriodLock> {
    /**
     * ID is the unique id of the lock.
     * The ID of the lock is decided upon lock creation, incrementing by 1 for
     * every lock.
     *
     * @generated from field: uint64 ID = 1;
     */
    ID: bigint;
    /**
     * Owner is the account address of the lock owner.
     * Only the owner can modify the state of the lock.
     *
     * @generated from field: string owner = 2;
     */
    owner: string;
    /**
     * Duration is the time needed for a lock to mature after unlocking has
     * started.
     *
     * @generated from field: google.protobuf.Duration duration = 3;
     */
    duration?: Duration;
    /**
     * EndTime refers to the time at which the lock would mature and get deleted.
     * This value is first initialized when an unlock has started for the lock,
     * end time being block time + duration.
     *
     * @generated from field: google.protobuf.Timestamp end_time = 4;
     */
    endTime?: Timestamp;
    /**
     * Coins are the tokens locked within the lock, kept in the module account.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 5;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<PeriodLock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.PeriodLock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PeriodLock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PeriodLock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PeriodLock;
    static equals(a: PeriodLock | PlainMessage<PeriodLock> | undefined, b: PeriodLock | PlainMessage<PeriodLock> | undefined): boolean;
}
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 *
 * @generated from message dymensionxyz.dymension.lockup.QueryCondition
 */
export declare class QueryCondition extends Message<QueryCondition> {
    /**
     * LockQueryType is a type of lock query, ByLockDuration | ByLockTime
     *
     * @generated from field: dymensionxyz.dymension.lockup.LockQueryType lock_query_type = 1;
     */
    lockQueryType: LockQueryType;
    /**
     * Denom represents the token denomination we are looking to lock up
     *
     * @generated from field: string denom = 2;
     */
    denom: string;
    /**
     * Duration is used to query locks with longer duration than the specified
     * duration. Duration field must not be nil when the lock query type is
     * `ByLockDuration`.
     *
     * @generated from field: google.protobuf.Duration duration = 3;
     */
    duration?: Duration;
    /**
     * Timestamp is used by locks started before the specified duration.
     * Timestamp field must not be nil when the lock query type is `ByLockTime`.
     * Querying locks with timestamp is currently not implemented.
     *
     * @generated from field: google.protobuf.Timestamp timestamp = 4;
     */
    timestamp?: Timestamp;
    constructor(data?: PartialMessage<QueryCondition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.QueryCondition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCondition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCondition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCondition;
    static equals(a: QueryCondition | PlainMessage<QueryCondition> | undefined, b: QueryCondition | PlainMessage<QueryCondition> | undefined): boolean;
}
//# sourceMappingURL=lock_pb.d.ts.map