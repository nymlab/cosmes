import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { PeriodLock } from "./lock_pb.js";
/**
 * @generated from message osmosis.lockup.MsgLockTokens
 */
export declare class MsgLockTokens extends Message<MsgLockTokens> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: google.protobuf.Duration duration = 2;
     */
    duration?: Duration;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 3;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<MsgLockTokens>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.lockup.MsgLockTokens";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgLockTokens;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgLockTokens;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgLockTokens;
    static equals(a: MsgLockTokens | PlainMessage<MsgLockTokens> | undefined, b: MsgLockTokens | PlainMessage<MsgLockTokens> | undefined): boolean;
}
/**
 * @generated from message osmosis.lockup.MsgLockTokensResponse
 */
export declare class MsgLockTokensResponse extends Message<MsgLockTokensResponse> {
    /**
     * @generated from field: uint64 ID = 1;
     */
    ID: bigint;
    constructor(data?: PartialMessage<MsgLockTokensResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.lockup.MsgLockTokensResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgLockTokensResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgLockTokensResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgLockTokensResponse;
    static equals(a: MsgLockTokensResponse | PlainMessage<MsgLockTokensResponse> | undefined, b: MsgLockTokensResponse | PlainMessage<MsgLockTokensResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.lockup.MsgBeginUnlockingAll
 */
export declare class MsgBeginUnlockingAll extends Message<MsgBeginUnlockingAll> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    constructor(data?: PartialMessage<MsgBeginUnlockingAll>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.lockup.MsgBeginUnlockingAll";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBeginUnlockingAll;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBeginUnlockingAll;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBeginUnlockingAll;
    static equals(a: MsgBeginUnlockingAll | PlainMessage<MsgBeginUnlockingAll> | undefined, b: MsgBeginUnlockingAll | PlainMessage<MsgBeginUnlockingAll> | undefined): boolean;
}
/**
 * @generated from message osmosis.lockup.MsgBeginUnlockingAllResponse
 */
export declare class MsgBeginUnlockingAllResponse extends Message<MsgBeginUnlockingAllResponse> {
    /**
     * @generated from field: repeated osmosis.lockup.PeriodLock unlocks = 1;
     */
    unlocks: PeriodLock[];
    constructor(data?: PartialMessage<MsgBeginUnlockingAllResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.lockup.MsgBeginUnlockingAllResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBeginUnlockingAllResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBeginUnlockingAllResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBeginUnlockingAllResponse;
    static equals(a: MsgBeginUnlockingAllResponse | PlainMessage<MsgBeginUnlockingAllResponse> | undefined, b: MsgBeginUnlockingAllResponse | PlainMessage<MsgBeginUnlockingAllResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.lockup.MsgBeginUnlocking
 */
export declare class MsgBeginUnlocking extends Message<MsgBeginUnlocking> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: uint64 ID = 2;
     */
    ID: bigint;
    /**
     * Amount of unlocking coins. Unlock all if not set.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 3;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<MsgBeginUnlocking>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.lockup.MsgBeginUnlocking";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBeginUnlocking;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBeginUnlocking;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBeginUnlocking;
    static equals(a: MsgBeginUnlocking | PlainMessage<MsgBeginUnlocking> | undefined, b: MsgBeginUnlocking | PlainMessage<MsgBeginUnlocking> | undefined): boolean;
}
/**
 * @generated from message osmosis.lockup.MsgBeginUnlockingResponse
 */
export declare class MsgBeginUnlockingResponse extends Message<MsgBeginUnlockingResponse> {
    /**
     * @generated from field: bool success = 1;
     */
    success: boolean;
    /**
     * @generated from field: uint64 unlockingLockID = 2;
     */
    unlockingLockID: bigint;
    constructor(data?: PartialMessage<MsgBeginUnlockingResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.lockup.MsgBeginUnlockingResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBeginUnlockingResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBeginUnlockingResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBeginUnlockingResponse;
    static equals(a: MsgBeginUnlockingResponse | PlainMessage<MsgBeginUnlockingResponse> | undefined, b: MsgBeginUnlockingResponse | PlainMessage<MsgBeginUnlockingResponse> | undefined): boolean;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 *
 * @generated from message osmosis.lockup.MsgExtendLockup
 */
export declare class MsgExtendLockup extends Message<MsgExtendLockup> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: uint64 ID = 2;
     */
    ID: bigint;
    /**
     * duration to be set. fails if lower than the current duration, or is
     * unlocking
     *
     * @generated from field: google.protobuf.Duration duration = 3;
     */
    duration?: Duration;
    constructor(data?: PartialMessage<MsgExtendLockup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.lockup.MsgExtendLockup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExtendLockup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExtendLockup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExtendLockup;
    static equals(a: MsgExtendLockup | PlainMessage<MsgExtendLockup> | undefined, b: MsgExtendLockup | PlainMessage<MsgExtendLockup> | undefined): boolean;
}
/**
 * @generated from message osmosis.lockup.MsgExtendLockupResponse
 */
export declare class MsgExtendLockupResponse extends Message<MsgExtendLockupResponse> {
    /**
     * @generated from field: bool success = 1;
     */
    success: boolean;
    constructor(data?: PartialMessage<MsgExtendLockupResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.lockup.MsgExtendLockupResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExtendLockupResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExtendLockupResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExtendLockupResponse;
    static equals(a: MsgExtendLockupResponse | PlainMessage<MsgExtendLockupResponse> | undefined, b: MsgExtendLockupResponse | PlainMessage<MsgExtendLockupResponse> | undefined): boolean;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 *
 * @generated from message osmosis.lockup.MsgForceUnlock
 */
export declare class MsgForceUnlock extends Message<MsgForceUnlock> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: uint64 ID = 2;
     */
    ID: bigint;
    /**
     * Amount of unlocking coins. Unlock all if not set.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 3;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<MsgForceUnlock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.lockup.MsgForceUnlock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgForceUnlock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgForceUnlock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgForceUnlock;
    static equals(a: MsgForceUnlock | PlainMessage<MsgForceUnlock> | undefined, b: MsgForceUnlock | PlainMessage<MsgForceUnlock> | undefined): boolean;
}
/**
 * @generated from message osmosis.lockup.MsgForceUnlockResponse
 */
export declare class MsgForceUnlockResponse extends Message<MsgForceUnlockResponse> {
    /**
     * @generated from field: bool success = 1;
     */
    success: boolean;
    constructor(data?: PartialMessage<MsgForceUnlockResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.lockup.MsgForceUnlockResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgForceUnlockResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgForceUnlockResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgForceUnlockResponse;
    static equals(a: MsgForceUnlockResponse | PlainMessage<MsgForceUnlockResponse> | undefined, b: MsgForceUnlockResponse | PlainMessage<MsgForceUnlockResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.lockup.MsgSetRewardReceiverAddress
 */
export declare class MsgSetRewardReceiverAddress extends Message<MsgSetRewardReceiverAddress> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: uint64 lockID = 2;
     */
    lockID: bigint;
    /**
     * @generated from field: string reward_receiver = 3;
     */
    rewardReceiver: string;
    constructor(data?: PartialMessage<MsgSetRewardReceiverAddress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.lockup.MsgSetRewardReceiverAddress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetRewardReceiverAddress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetRewardReceiverAddress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetRewardReceiverAddress;
    static equals(a: MsgSetRewardReceiverAddress | PlainMessage<MsgSetRewardReceiverAddress> | undefined, b: MsgSetRewardReceiverAddress | PlainMessage<MsgSetRewardReceiverAddress> | undefined): boolean;
}
/**
 * @generated from message osmosis.lockup.MsgSetRewardReceiverAddressResponse
 */
export declare class MsgSetRewardReceiverAddressResponse extends Message<MsgSetRewardReceiverAddressResponse> {
    /**
     * @generated from field: bool success = 1;
     */
    success: boolean;
    constructor(data?: PartialMessage<MsgSetRewardReceiverAddressResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.lockup.MsgSetRewardReceiverAddressResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetRewardReceiverAddressResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetRewardReceiverAddressResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetRewardReceiverAddressResponse;
    static equals(a: MsgSetRewardReceiverAddressResponse | PlainMessage<MsgSetRewardReceiverAddressResponse> | undefined, b: MsgSetRewardReceiverAddressResponse | PlainMessage<MsgSetRewardReceiverAddressResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map