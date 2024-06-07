import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { PeriodLock } from "./lock_pb.js";
import { Params } from "./params_pb.js";
/**
 * @generated from message dymensionxyz.dymension.lockup.ModuleBalanceRequest
 */
export declare class ModuleBalanceRequest extends Message<ModuleBalanceRequest> {
    constructor(data?: PartialMessage<ModuleBalanceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.ModuleBalanceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleBalanceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleBalanceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleBalanceRequest;
    static equals(a: ModuleBalanceRequest | PlainMessage<ModuleBalanceRequest> | undefined, b: ModuleBalanceRequest | PlainMessage<ModuleBalanceRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.ModuleBalanceResponse
 */
export declare class ModuleBalanceResponse extends Message<ModuleBalanceResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<ModuleBalanceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.ModuleBalanceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleBalanceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleBalanceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleBalanceResponse;
    static equals(a: ModuleBalanceResponse | PlainMessage<ModuleBalanceResponse> | undefined, b: ModuleBalanceResponse | PlainMessage<ModuleBalanceResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.ModuleLockedAmountRequest
 */
export declare class ModuleLockedAmountRequest extends Message<ModuleLockedAmountRequest> {
    constructor(data?: PartialMessage<ModuleLockedAmountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.ModuleLockedAmountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleLockedAmountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleLockedAmountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleLockedAmountRequest;
    static equals(a: ModuleLockedAmountRequest | PlainMessage<ModuleLockedAmountRequest> | undefined, b: ModuleLockedAmountRequest | PlainMessage<ModuleLockedAmountRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.ModuleLockedAmountResponse
 */
export declare class ModuleLockedAmountResponse extends Message<ModuleLockedAmountResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<ModuleLockedAmountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.ModuleLockedAmountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleLockedAmountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleLockedAmountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleLockedAmountResponse;
    static equals(a: ModuleLockedAmountResponse | PlainMessage<ModuleLockedAmountResponse> | undefined, b: ModuleLockedAmountResponse | PlainMessage<ModuleLockedAmountResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountUnlockableCoinsRequest
 */
export declare class AccountUnlockableCoinsRequest extends Message<AccountUnlockableCoinsRequest> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    constructor(data?: PartialMessage<AccountUnlockableCoinsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountUnlockableCoinsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountUnlockableCoinsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountUnlockableCoinsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountUnlockableCoinsRequest;
    static equals(a: AccountUnlockableCoinsRequest | PlainMessage<AccountUnlockableCoinsRequest> | undefined, b: AccountUnlockableCoinsRequest | PlainMessage<AccountUnlockableCoinsRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountUnlockableCoinsResponse
 */
export declare class AccountUnlockableCoinsResponse extends Message<AccountUnlockableCoinsResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<AccountUnlockableCoinsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountUnlockableCoinsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountUnlockableCoinsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountUnlockableCoinsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountUnlockableCoinsResponse;
    static equals(a: AccountUnlockableCoinsResponse | PlainMessage<AccountUnlockableCoinsResponse> | undefined, b: AccountUnlockableCoinsResponse | PlainMessage<AccountUnlockableCoinsResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountUnlockingCoinsRequest
 */
export declare class AccountUnlockingCoinsRequest extends Message<AccountUnlockingCoinsRequest> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    constructor(data?: PartialMessage<AccountUnlockingCoinsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountUnlockingCoinsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountUnlockingCoinsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountUnlockingCoinsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountUnlockingCoinsRequest;
    static equals(a: AccountUnlockingCoinsRequest | PlainMessage<AccountUnlockingCoinsRequest> | undefined, b: AccountUnlockingCoinsRequest | PlainMessage<AccountUnlockingCoinsRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountUnlockingCoinsResponse
 */
export declare class AccountUnlockingCoinsResponse extends Message<AccountUnlockingCoinsResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<AccountUnlockingCoinsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountUnlockingCoinsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountUnlockingCoinsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountUnlockingCoinsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountUnlockingCoinsResponse;
    static equals(a: AccountUnlockingCoinsResponse | PlainMessage<AccountUnlockingCoinsResponse> | undefined, b: AccountUnlockingCoinsResponse | PlainMessage<AccountUnlockingCoinsResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedCoinsRequest
 */
export declare class AccountLockedCoinsRequest extends Message<AccountLockedCoinsRequest> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    constructor(data?: PartialMessage<AccountLockedCoinsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedCoinsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedCoinsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedCoinsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedCoinsRequest;
    static equals(a: AccountLockedCoinsRequest | PlainMessage<AccountLockedCoinsRequest> | undefined, b: AccountLockedCoinsRequest | PlainMessage<AccountLockedCoinsRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedCoinsResponse
 */
export declare class AccountLockedCoinsResponse extends Message<AccountLockedCoinsResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<AccountLockedCoinsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedCoinsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedCoinsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedCoinsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedCoinsResponse;
    static equals(a: AccountLockedCoinsResponse | PlainMessage<AccountLockedCoinsResponse> | undefined, b: AccountLockedCoinsResponse | PlainMessage<AccountLockedCoinsResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedPastTimeRequest
 */
export declare class AccountLockedPastTimeRequest extends Message<AccountLockedPastTimeRequest> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 2;
     */
    timestamp?: Timestamp;
    constructor(data?: PartialMessage<AccountLockedPastTimeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedPastTimeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedPastTimeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedPastTimeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedPastTimeRequest;
    static equals(a: AccountLockedPastTimeRequest | PlainMessage<AccountLockedPastTimeRequest> | undefined, b: AccountLockedPastTimeRequest | PlainMessage<AccountLockedPastTimeRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedPastTimeResponse
 */
export declare class AccountLockedPastTimeResponse extends Message<AccountLockedPastTimeResponse> {
    /**
     * @generated from field: repeated dymensionxyz.dymension.lockup.PeriodLock locks = 1;
     */
    locks: PeriodLock[];
    constructor(data?: PartialMessage<AccountLockedPastTimeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedPastTimeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedPastTimeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedPastTimeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedPastTimeResponse;
    static equals(a: AccountLockedPastTimeResponse | PlainMessage<AccountLockedPastTimeResponse> | undefined, b: AccountLockedPastTimeResponse | PlainMessage<AccountLockedPastTimeResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest
 */
export declare class AccountLockedPastTimeNotUnlockingOnlyRequest extends Message<AccountLockedPastTimeNotUnlockingOnlyRequest> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 2;
     */
    timestamp?: Timestamp;
    constructor(data?: PartialMessage<AccountLockedPastTimeNotUnlockingOnlyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedPastTimeNotUnlockingOnlyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedPastTimeNotUnlockingOnlyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedPastTimeNotUnlockingOnlyRequest;
    static equals(a: AccountLockedPastTimeNotUnlockingOnlyRequest | PlainMessage<AccountLockedPastTimeNotUnlockingOnlyRequest> | undefined, b: AccountLockedPastTimeNotUnlockingOnlyRequest | PlainMessage<AccountLockedPastTimeNotUnlockingOnlyRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse
 */
export declare class AccountLockedPastTimeNotUnlockingOnlyResponse extends Message<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    /**
     * @generated from field: repeated dymensionxyz.dymension.lockup.PeriodLock locks = 1;
     */
    locks: PeriodLock[];
    constructor(data?: PartialMessage<AccountLockedPastTimeNotUnlockingOnlyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedPastTimeNotUnlockingOnlyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedPastTimeNotUnlockingOnlyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedPastTimeNotUnlockingOnlyResponse;
    static equals(a: AccountLockedPastTimeNotUnlockingOnlyResponse | PlainMessage<AccountLockedPastTimeNotUnlockingOnlyResponse> | undefined, b: AccountLockedPastTimeNotUnlockingOnlyResponse | PlainMessage<AccountLockedPastTimeNotUnlockingOnlyResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountUnlockedBeforeTimeRequest
 */
export declare class AccountUnlockedBeforeTimeRequest extends Message<AccountUnlockedBeforeTimeRequest> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 2;
     */
    timestamp?: Timestamp;
    constructor(data?: PartialMessage<AccountUnlockedBeforeTimeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountUnlockedBeforeTimeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountUnlockedBeforeTimeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountUnlockedBeforeTimeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountUnlockedBeforeTimeRequest;
    static equals(a: AccountUnlockedBeforeTimeRequest | PlainMessage<AccountUnlockedBeforeTimeRequest> | undefined, b: AccountUnlockedBeforeTimeRequest | PlainMessage<AccountUnlockedBeforeTimeRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountUnlockedBeforeTimeResponse
 */
export declare class AccountUnlockedBeforeTimeResponse extends Message<AccountUnlockedBeforeTimeResponse> {
    /**
     * @generated from field: repeated dymensionxyz.dymension.lockup.PeriodLock locks = 1;
     */
    locks: PeriodLock[];
    constructor(data?: PartialMessage<AccountUnlockedBeforeTimeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountUnlockedBeforeTimeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountUnlockedBeforeTimeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountUnlockedBeforeTimeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountUnlockedBeforeTimeResponse;
    static equals(a: AccountUnlockedBeforeTimeResponse | PlainMessage<AccountUnlockedBeforeTimeResponse> | undefined, b: AccountUnlockedBeforeTimeResponse | PlainMessage<AccountUnlockedBeforeTimeResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedPastTimeDenomRequest
 */
export declare class AccountLockedPastTimeDenomRequest extends Message<AccountLockedPastTimeDenomRequest> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 2;
     */
    timestamp?: Timestamp;
    /**
     * @generated from field: string denom = 3;
     */
    denom: string;
    constructor(data?: PartialMessage<AccountLockedPastTimeDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedPastTimeDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedPastTimeDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedPastTimeDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedPastTimeDenomRequest;
    static equals(a: AccountLockedPastTimeDenomRequest | PlainMessage<AccountLockedPastTimeDenomRequest> | undefined, b: AccountLockedPastTimeDenomRequest | PlainMessage<AccountLockedPastTimeDenomRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedPastTimeDenomResponse
 */
export declare class AccountLockedPastTimeDenomResponse extends Message<AccountLockedPastTimeDenomResponse> {
    /**
     * @generated from field: repeated dymensionxyz.dymension.lockup.PeriodLock locks = 1;
     */
    locks: PeriodLock[];
    constructor(data?: PartialMessage<AccountLockedPastTimeDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedPastTimeDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedPastTimeDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedPastTimeDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedPastTimeDenomResponse;
    static equals(a: AccountLockedPastTimeDenomResponse | PlainMessage<AccountLockedPastTimeDenomResponse> | undefined, b: AccountLockedPastTimeDenomResponse | PlainMessage<AccountLockedPastTimeDenomResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.LockedDenomRequest
 */
export declare class LockedDenomRequest extends Message<LockedDenomRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: google.protobuf.Duration duration = 2;
     */
    duration?: Duration;
    constructor(data?: PartialMessage<LockedDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.LockedDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LockedDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LockedDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LockedDenomRequest;
    static equals(a: LockedDenomRequest | PlainMessage<LockedDenomRequest> | undefined, b: LockedDenomRequest | PlainMessage<LockedDenomRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.LockedDenomResponse
 */
export declare class LockedDenomResponse extends Message<LockedDenomResponse> {
    /**
     * @generated from field: string amount = 1;
     */
    amount: string;
    constructor(data?: PartialMessage<LockedDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.LockedDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LockedDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LockedDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LockedDenomResponse;
    static equals(a: LockedDenomResponse | PlainMessage<LockedDenomResponse> | undefined, b: LockedDenomResponse | PlainMessage<LockedDenomResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.LockedRequest
 */
export declare class LockedRequest extends Message<LockedRequest> {
    /**
     * @generated from field: uint64 lock_id = 1;
     */
    lockId: bigint;
    constructor(data?: PartialMessage<LockedRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.LockedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LockedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LockedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LockedRequest;
    static equals(a: LockedRequest | PlainMessage<LockedRequest> | undefined, b: LockedRequest | PlainMessage<LockedRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.LockedResponse
 */
export declare class LockedResponse extends Message<LockedResponse> {
    /**
     * @generated from field: dymensionxyz.dymension.lockup.PeriodLock lock = 1;
     */
    lock?: PeriodLock;
    constructor(data?: PartialMessage<LockedResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.LockedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LockedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LockedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LockedResponse;
    static equals(a: LockedResponse | PlainMessage<LockedResponse> | undefined, b: LockedResponse | PlainMessage<LockedResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.NextLockIDRequest
 */
export declare class NextLockIDRequest extends Message<NextLockIDRequest> {
    constructor(data?: PartialMessage<NextLockIDRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.NextLockIDRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NextLockIDRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NextLockIDRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NextLockIDRequest;
    static equals(a: NextLockIDRequest | PlainMessage<NextLockIDRequest> | undefined, b: NextLockIDRequest | PlainMessage<NextLockIDRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.NextLockIDResponse
 */
export declare class NextLockIDResponse extends Message<NextLockIDResponse> {
    /**
     * @generated from field: uint64 lock_id = 1;
     */
    lockId: bigint;
    constructor(data?: PartialMessage<NextLockIDResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.NextLockIDResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NextLockIDResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NextLockIDResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NextLockIDResponse;
    static equals(a: NextLockIDResponse | PlainMessage<NextLockIDResponse> | undefined, b: NextLockIDResponse | PlainMessage<NextLockIDResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedLongerDurationRequest
 */
export declare class AccountLockedLongerDurationRequest extends Message<AccountLockedLongerDurationRequest> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: google.protobuf.Duration duration = 2;
     */
    duration?: Duration;
    constructor(data?: PartialMessage<AccountLockedLongerDurationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedLongerDurationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedLongerDurationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedLongerDurationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedLongerDurationRequest;
    static equals(a: AccountLockedLongerDurationRequest | PlainMessage<AccountLockedLongerDurationRequest> | undefined, b: AccountLockedLongerDurationRequest | PlainMessage<AccountLockedLongerDurationRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedLongerDurationResponse
 */
export declare class AccountLockedLongerDurationResponse extends Message<AccountLockedLongerDurationResponse> {
    /**
     * @generated from field: repeated dymensionxyz.dymension.lockup.PeriodLock locks = 1;
     */
    locks: PeriodLock[];
    constructor(data?: PartialMessage<AccountLockedLongerDurationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedLongerDurationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedLongerDurationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedLongerDurationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedLongerDurationResponse;
    static equals(a: AccountLockedLongerDurationResponse | PlainMessage<AccountLockedLongerDurationResponse> | undefined, b: AccountLockedLongerDurationResponse | PlainMessage<AccountLockedLongerDurationResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedDurationRequest
 */
export declare class AccountLockedDurationRequest extends Message<AccountLockedDurationRequest> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: google.protobuf.Duration duration = 2;
     */
    duration?: Duration;
    constructor(data?: PartialMessage<AccountLockedDurationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedDurationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedDurationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedDurationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedDurationRequest;
    static equals(a: AccountLockedDurationRequest | PlainMessage<AccountLockedDurationRequest> | undefined, b: AccountLockedDurationRequest | PlainMessage<AccountLockedDurationRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedDurationResponse
 */
export declare class AccountLockedDurationResponse extends Message<AccountLockedDurationResponse> {
    /**
     * @generated from field: repeated dymensionxyz.dymension.lockup.PeriodLock locks = 1;
     */
    locks: PeriodLock[];
    constructor(data?: PartialMessage<AccountLockedDurationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedDurationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedDurationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedDurationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedDurationResponse;
    static equals(a: AccountLockedDurationResponse | PlainMessage<AccountLockedDurationResponse> | undefined, b: AccountLockedDurationResponse | PlainMessage<AccountLockedDurationResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest
 */
export declare class AccountLockedLongerDurationNotUnlockingOnlyRequest extends Message<AccountLockedLongerDurationNotUnlockingOnlyRequest> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: google.protobuf.Duration duration = 2;
     */
    duration?: Duration;
    constructor(data?: PartialMessage<AccountLockedLongerDurationNotUnlockingOnlyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    static equals(a: AccountLockedLongerDurationNotUnlockingOnlyRequest | PlainMessage<AccountLockedLongerDurationNotUnlockingOnlyRequest> | undefined, b: AccountLockedLongerDurationNotUnlockingOnlyRequest | PlainMessage<AccountLockedLongerDurationNotUnlockingOnlyRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse
 */
export declare class AccountLockedLongerDurationNotUnlockingOnlyResponse extends Message<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    /**
     * @generated from field: repeated dymensionxyz.dymension.lockup.PeriodLock locks = 1;
     */
    locks: PeriodLock[];
    constructor(data?: PartialMessage<AccountLockedLongerDurationNotUnlockingOnlyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    static equals(a: AccountLockedLongerDurationNotUnlockingOnlyResponse | PlainMessage<AccountLockedLongerDurationNotUnlockingOnlyResponse> | undefined, b: AccountLockedLongerDurationNotUnlockingOnlyResponse | PlainMessage<AccountLockedLongerDurationNotUnlockingOnlyResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedLongerDurationDenomRequest
 */
export declare class AccountLockedLongerDurationDenomRequest extends Message<AccountLockedLongerDurationDenomRequest> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: google.protobuf.Duration duration = 2;
     */
    duration?: Duration;
    /**
     * @generated from field: string denom = 3;
     */
    denom: string;
    constructor(data?: PartialMessage<AccountLockedLongerDurationDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedLongerDurationDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedLongerDurationDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedLongerDurationDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedLongerDurationDenomRequest;
    static equals(a: AccountLockedLongerDurationDenomRequest | PlainMessage<AccountLockedLongerDurationDenomRequest> | undefined, b: AccountLockedLongerDurationDenomRequest | PlainMessage<AccountLockedLongerDurationDenomRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.AccountLockedLongerDurationDenomResponse
 */
export declare class AccountLockedLongerDurationDenomResponse extends Message<AccountLockedLongerDurationDenomResponse> {
    /**
     * @generated from field: repeated dymensionxyz.dymension.lockup.PeriodLock locks = 1;
     */
    locks: PeriodLock[];
    constructor(data?: PartialMessage<AccountLockedLongerDurationDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.AccountLockedLongerDurationDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountLockedLongerDurationDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountLockedLongerDurationDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountLockedLongerDurationDenomResponse;
    static equals(a: AccountLockedLongerDurationDenomResponse | PlainMessage<AccountLockedLongerDurationDenomResponse> | undefined, b: AccountLockedLongerDurationDenomResponse | PlainMessage<AccountLockedLongerDurationDenomResponse> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.lockup.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * @generated from field: dymensionxyz.dymension.lockup.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map