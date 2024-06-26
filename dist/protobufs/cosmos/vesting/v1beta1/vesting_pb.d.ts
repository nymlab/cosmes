import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BaseAccount } from "../../auth/v1beta1/auth_pb.js";
import { Coin } from "../../base/v1beta1/coin_pb.js";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 *
 * @generated from message cosmos.vesting.v1beta1.BaseVestingAccount
 */
export declare class BaseVestingAccount extends Message<BaseVestingAccount> {
    /**
     * @generated from field: cosmos.auth.v1beta1.BaseAccount base_account = 1;
     */
    baseAccount?: BaseAccount;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin original_vesting = 2;
     */
    originalVesting: Coin[];
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin delegated_free = 3;
     */
    delegatedFree: Coin[];
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin delegated_vesting = 4;
     */
    delegatedVesting: Coin[];
    /**
     * Vesting end time, as unix timestamp (in seconds).
     *
     * @generated from field: int64 end_time = 5;
     */
    endTime: bigint;
    constructor(data?: PartialMessage<BaseVestingAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.vesting.v1beta1.BaseVestingAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BaseVestingAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BaseVestingAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BaseVestingAccount;
    static equals(a: BaseVestingAccount | PlainMessage<BaseVestingAccount> | undefined, b: BaseVestingAccount | PlainMessage<BaseVestingAccount> | undefined): boolean;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 *
 * @generated from message cosmos.vesting.v1beta1.ContinuousVestingAccount
 */
export declare class ContinuousVestingAccount extends Message<ContinuousVestingAccount> {
    /**
     * @generated from field: cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1;
     */
    baseVestingAccount?: BaseVestingAccount;
    /**
     * Vesting start time, as unix timestamp (in seconds).
     *
     * @generated from field: int64 start_time = 2;
     */
    startTime: bigint;
    constructor(data?: PartialMessage<ContinuousVestingAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.vesting.v1beta1.ContinuousVestingAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContinuousVestingAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContinuousVestingAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContinuousVestingAccount;
    static equals(a: ContinuousVestingAccount | PlainMessage<ContinuousVestingAccount> | undefined, b: ContinuousVestingAccount | PlainMessage<ContinuousVestingAccount> | undefined): boolean;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 *
 * @generated from message cosmos.vesting.v1beta1.DelayedVestingAccount
 */
export declare class DelayedVestingAccount extends Message<DelayedVestingAccount> {
    /**
     * @generated from field: cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1;
     */
    baseVestingAccount?: BaseVestingAccount;
    constructor(data?: PartialMessage<DelayedVestingAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.vesting.v1beta1.DelayedVestingAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DelayedVestingAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DelayedVestingAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DelayedVestingAccount;
    static equals(a: DelayedVestingAccount | PlainMessage<DelayedVestingAccount> | undefined, b: DelayedVestingAccount | PlainMessage<DelayedVestingAccount> | undefined): boolean;
}
/**
 * Period defines a length of time and amount of coins that will vest.
 *
 * @generated from message cosmos.vesting.v1beta1.Period
 */
export declare class Period extends Message<Period> {
    /**
     * Period duration in seconds.
     *
     * @generated from field: int64 length = 1;
     */
    length: bigint;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 2;
     */
    amount: Coin[];
    constructor(data?: PartialMessage<Period>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.vesting.v1beta1.Period";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Period;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Period;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Period;
    static equals(a: Period | PlainMessage<Period> | undefined, b: Period | PlainMessage<Period> | undefined): boolean;
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 *
 * @generated from message cosmos.vesting.v1beta1.PeriodicVestingAccount
 */
export declare class PeriodicVestingAccount extends Message<PeriodicVestingAccount> {
    /**
     * @generated from field: cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1;
     */
    baseVestingAccount?: BaseVestingAccount;
    /**
     * @generated from field: int64 start_time = 2;
     */
    startTime: bigint;
    /**
     * @generated from field: repeated cosmos.vesting.v1beta1.Period vesting_periods = 3;
     */
    vestingPeriods: Period[];
    constructor(data?: PartialMessage<PeriodicVestingAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.vesting.v1beta1.PeriodicVestingAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PeriodicVestingAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PeriodicVestingAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PeriodicVestingAccount;
    static equals(a: PeriodicVestingAccount | PlainMessage<PeriodicVestingAccount> | undefined, b: PeriodicVestingAccount | PlainMessage<PeriodicVestingAccount> | undefined): boolean;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.vesting.v1beta1.PermanentLockedAccount
 */
export declare class PermanentLockedAccount extends Message<PermanentLockedAccount> {
    /**
     * @generated from field: cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1;
     */
    baseVestingAccount?: BaseVestingAccount;
    constructor(data?: PartialMessage<PermanentLockedAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.vesting.v1beta1.PermanentLockedAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermanentLockedAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermanentLockedAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermanentLockedAccount;
    static equals(a: PermanentLockedAccount | PlainMessage<PermanentLockedAccount> | undefined, b: PermanentLockedAccount | PlainMessage<PermanentLockedAccount> | undefined): boolean;
}
//# sourceMappingURL=vesting_pb.d.ts.map