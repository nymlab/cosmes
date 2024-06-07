import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidDelegate
 */
export declare class MsgSuperfluidDelegate extends Message<MsgSuperfluidDelegate> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 lock_id = 2;
     */
    lockId: bigint;
    /**
     * @generated from field: string val_addr = 3;
     */
    valAddr: string;
    constructor(data?: PartialMessage<MsgSuperfluidDelegate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgSuperfluidDelegate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSuperfluidDelegate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSuperfluidDelegate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSuperfluidDelegate;
    static equals(a: MsgSuperfluidDelegate | PlainMessage<MsgSuperfluidDelegate> | undefined, b: MsgSuperfluidDelegate | PlainMessage<MsgSuperfluidDelegate> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidDelegateResponse
 */
export declare class MsgSuperfluidDelegateResponse extends Message<MsgSuperfluidDelegateResponse> {
    constructor(data?: PartialMessage<MsgSuperfluidDelegateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgSuperfluidDelegateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSuperfluidDelegateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSuperfluidDelegateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSuperfluidDelegateResponse;
    static equals(a: MsgSuperfluidDelegateResponse | PlainMessage<MsgSuperfluidDelegateResponse> | undefined, b: MsgSuperfluidDelegateResponse | PlainMessage<MsgSuperfluidDelegateResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidUndelegate
 */
export declare class MsgSuperfluidUndelegate extends Message<MsgSuperfluidUndelegate> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 lock_id = 2;
     */
    lockId: bigint;
    constructor(data?: PartialMessage<MsgSuperfluidUndelegate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgSuperfluidUndelegate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSuperfluidUndelegate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSuperfluidUndelegate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSuperfluidUndelegate;
    static equals(a: MsgSuperfluidUndelegate | PlainMessage<MsgSuperfluidUndelegate> | undefined, b: MsgSuperfluidUndelegate | PlainMessage<MsgSuperfluidUndelegate> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidUndelegateResponse
 */
export declare class MsgSuperfluidUndelegateResponse extends Message<MsgSuperfluidUndelegateResponse> {
    constructor(data?: PartialMessage<MsgSuperfluidUndelegateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgSuperfluidUndelegateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSuperfluidUndelegateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSuperfluidUndelegateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSuperfluidUndelegateResponse;
    static equals(a: MsgSuperfluidUndelegateResponse | PlainMessage<MsgSuperfluidUndelegateResponse> | undefined, b: MsgSuperfluidUndelegateResponse | PlainMessage<MsgSuperfluidUndelegateResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidUnbondLock
 */
export declare class MsgSuperfluidUnbondLock extends Message<MsgSuperfluidUnbondLock> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 lock_id = 2;
     */
    lockId: bigint;
    constructor(data?: PartialMessage<MsgSuperfluidUnbondLock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgSuperfluidUnbondLock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSuperfluidUnbondLock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSuperfluidUnbondLock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSuperfluidUnbondLock;
    static equals(a: MsgSuperfluidUnbondLock | PlainMessage<MsgSuperfluidUnbondLock> | undefined, b: MsgSuperfluidUnbondLock | PlainMessage<MsgSuperfluidUnbondLock> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidUnbondLockResponse
 */
export declare class MsgSuperfluidUnbondLockResponse extends Message<MsgSuperfluidUnbondLockResponse> {
    constructor(data?: PartialMessage<MsgSuperfluidUnbondLockResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgSuperfluidUnbondLockResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSuperfluidUnbondLockResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSuperfluidUnbondLockResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSuperfluidUnbondLockResponse;
    static equals(a: MsgSuperfluidUnbondLockResponse | PlainMessage<MsgSuperfluidUnbondLockResponse> | undefined, b: MsgSuperfluidUnbondLockResponse | PlainMessage<MsgSuperfluidUnbondLockResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock
 */
export declare class MsgSuperfluidUndelegateAndUnbondLock extends Message<MsgSuperfluidUndelegateAndUnbondLock> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 lock_id = 2;
     */
    lockId: bigint;
    /**
     * Amount of unlocking coin.
     *
     * @generated from field: cosmos.base.v1beta1.Coin coin = 3;
     */
    coin?: Coin;
    constructor(data?: PartialMessage<MsgSuperfluidUndelegateAndUnbondLock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSuperfluidUndelegateAndUnbondLock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSuperfluidUndelegateAndUnbondLock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSuperfluidUndelegateAndUnbondLock;
    static equals(a: MsgSuperfluidUndelegateAndUnbondLock | PlainMessage<MsgSuperfluidUndelegateAndUnbondLock> | undefined, b: MsgSuperfluidUndelegateAndUnbondLock | PlainMessage<MsgSuperfluidUndelegateAndUnbondLock> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse
 */
export declare class MsgSuperfluidUndelegateAndUnbondLockResponse extends Message<MsgSuperfluidUndelegateAndUnbondLockResponse> {
    /**
     * lock id of the new lock created for the remaining amount.
     * returns the original lockid if the unlocked amount is equal to the
     * original lock's amount.
     *
     * @generated from field: uint64 lock_id = 1;
     */
    lockId: bigint;
    constructor(data?: PartialMessage<MsgSuperfluidUndelegateAndUnbondLockResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSuperfluidUndelegateAndUnbondLockResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSuperfluidUndelegateAndUnbondLockResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSuperfluidUndelegateAndUnbondLockResponse;
    static equals(a: MsgSuperfluidUndelegateAndUnbondLockResponse | PlainMessage<MsgSuperfluidUndelegateAndUnbondLockResponse> | undefined, b: MsgSuperfluidUndelegateAndUnbondLockResponse | PlainMessage<MsgSuperfluidUndelegateAndUnbondLockResponse> | undefined): boolean;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 *
 * @generated from message osmosis.superfluid.MsgLockAndSuperfluidDelegate
 */
export declare class MsgLockAndSuperfluidDelegate extends Message<MsgLockAndSuperfluidDelegate> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
     */
    coins: Coin[];
    /**
     * @generated from field: string val_addr = 3;
     */
    valAddr: string;
    constructor(data?: PartialMessage<MsgLockAndSuperfluidDelegate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgLockAndSuperfluidDelegate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgLockAndSuperfluidDelegate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgLockAndSuperfluidDelegate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgLockAndSuperfluidDelegate;
    static equals(a: MsgLockAndSuperfluidDelegate | PlainMessage<MsgLockAndSuperfluidDelegate> | undefined, b: MsgLockAndSuperfluidDelegate | PlainMessage<MsgLockAndSuperfluidDelegate> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse
 */
export declare class MsgLockAndSuperfluidDelegateResponse extends Message<MsgLockAndSuperfluidDelegateResponse> {
    /**
     * @generated from field: uint64 ID = 1;
     */
    ID: bigint;
    constructor(data?: PartialMessage<MsgLockAndSuperfluidDelegateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgLockAndSuperfluidDelegateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgLockAndSuperfluidDelegateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgLockAndSuperfluidDelegateResponse;
    static equals(a: MsgLockAndSuperfluidDelegateResponse | PlainMessage<MsgLockAndSuperfluidDelegateResponse> | undefined, b: MsgLockAndSuperfluidDelegateResponse | PlainMessage<MsgLockAndSuperfluidDelegateResponse> | undefined): boolean;
}
/**
 * MsgCreateFullRangePositionAndSuperfluidDelegate creates a full range position
 * in a concentrated liquidity pool, then superfluid delegates.
 *
 * @generated from message osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate
 */
export declare class MsgCreateFullRangePositionAndSuperfluidDelegate extends Message<MsgCreateFullRangePositionAndSuperfluidDelegate> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
     */
    coins: Coin[];
    /**
     * @generated from field: string val_addr = 3;
     */
    valAddr: string;
    /**
     * @generated from field: uint64 pool_id = 4;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<MsgCreateFullRangePositionAndSuperfluidDelegate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateFullRangePositionAndSuperfluidDelegate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateFullRangePositionAndSuperfluidDelegate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateFullRangePositionAndSuperfluidDelegate;
    static equals(a: MsgCreateFullRangePositionAndSuperfluidDelegate | PlainMessage<MsgCreateFullRangePositionAndSuperfluidDelegate> | undefined, b: MsgCreateFullRangePositionAndSuperfluidDelegate | PlainMessage<MsgCreateFullRangePositionAndSuperfluidDelegate> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse
 */
export declare class MsgCreateFullRangePositionAndSuperfluidDelegateResponse extends Message<MsgCreateFullRangePositionAndSuperfluidDelegateResponse> {
    /**
     * @generated from field: uint64 lockID = 1;
     */
    lockID: bigint;
    /**
     * @generated from field: uint64 positionID = 2;
     */
    positionID: bigint;
    constructor(data?: PartialMessage<MsgCreateFullRangePositionAndSuperfluidDelegateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
    static equals(a: MsgCreateFullRangePositionAndSuperfluidDelegateResponse | PlainMessage<MsgCreateFullRangePositionAndSuperfluidDelegateResponse> | undefined, b: MsgCreateFullRangePositionAndSuperfluidDelegateResponse | PlainMessage<MsgCreateFullRangePositionAndSuperfluidDelegateResponse> | undefined): boolean;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 *
 * @generated from message osmosis.superfluid.MsgUnPoolWhitelistedPool
 */
export declare class MsgUnPoolWhitelistedPool extends Message<MsgUnPoolWhitelistedPool> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<MsgUnPoolWhitelistedPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgUnPoolWhitelistedPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnPoolWhitelistedPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnPoolWhitelistedPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnPoolWhitelistedPool;
    static equals(a: MsgUnPoolWhitelistedPool | PlainMessage<MsgUnPoolWhitelistedPool> | undefined, b: MsgUnPoolWhitelistedPool | PlainMessage<MsgUnPoolWhitelistedPool> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse
 */
export declare class MsgUnPoolWhitelistedPoolResponse extends Message<MsgUnPoolWhitelistedPoolResponse> {
    /**
     * @generated from field: repeated uint64 exited_lock_ids = 1;
     */
    exitedLockIds: bigint[];
    constructor(data?: PartialMessage<MsgUnPoolWhitelistedPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnPoolWhitelistedPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnPoolWhitelistedPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnPoolWhitelistedPoolResponse;
    static equals(a: MsgUnPoolWhitelistedPoolResponse | PlainMessage<MsgUnPoolWhitelistedPoolResponse> | undefined, b: MsgUnPoolWhitelistedPoolResponse | PlainMessage<MsgUnPoolWhitelistedPoolResponse> | undefined): boolean;
}
/**
 * =====================
 * MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 *
 * @generated from message osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 */
export declare class MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition extends Message<MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: int64 lock_id = 2;
     */
    lockId: bigint;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin shares_to_migrate = 3;
     */
    sharesToMigrate?: Coin;
    /**
     * token_out_mins indicates minimum token to exit Balancer pool with.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin token_out_mins = 4;
     */
    tokenOutMins: Coin[];
    constructor(data?: PartialMessage<MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    static equals(a: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition | PlainMessage<MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition> | undefined, b: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition | PlainMessage<MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse
 */
export declare class MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse extends Message<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse> {
    /**
     * @generated from field: string amount0 = 1;
     */
    amount0: string;
    /**
     * @generated from field: string amount1 = 2;
     */
    amount1: string;
    /**
     * @generated from field: string liquidity_created = 3;
     */
    liquidityCreated: string;
    /**
     * @generated from field: google.protobuf.Timestamp join_time = 4;
     */
    joinTime?: Timestamp;
    constructor(data?: PartialMessage<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
    static equals(a: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse | PlainMessage<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse> | undefined, b: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse | PlainMessage<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse> | undefined): boolean;
}
/**
 * ===================== MsgAddToConcentratedLiquiditySuperfluidPosition
 *
 * @generated from message osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition
 */
export declare class MsgAddToConcentratedLiquiditySuperfluidPosition extends Message<MsgAddToConcentratedLiquiditySuperfluidPosition> {
    /**
     * @generated from field: uint64 position_id = 1;
     */
    positionId: bigint;
    /**
     * @generated from field: string sender = 2;
     */
    sender: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin token_desired0 = 3;
     */
    tokenDesired0?: Coin;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin token_desired1 = 4;
     */
    tokenDesired1?: Coin;
    constructor(data?: PartialMessage<MsgAddToConcentratedLiquiditySuperfluidPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddToConcentratedLiquiditySuperfluidPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddToConcentratedLiquiditySuperfluidPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddToConcentratedLiquiditySuperfluidPosition;
    static equals(a: MsgAddToConcentratedLiquiditySuperfluidPosition | PlainMessage<MsgAddToConcentratedLiquiditySuperfluidPosition> | undefined, b: MsgAddToConcentratedLiquiditySuperfluidPosition | PlainMessage<MsgAddToConcentratedLiquiditySuperfluidPosition> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse
 */
export declare class MsgAddToConcentratedLiquiditySuperfluidPositionResponse extends Message<MsgAddToConcentratedLiquiditySuperfluidPositionResponse> {
    /**
     * @generated from field: uint64 position_id = 1;
     */
    positionId: bigint;
    /**
     * @generated from field: string amount0 = 2;
     */
    amount0: string;
    /**
     * @generated from field: string amount1 = 3;
     */
    amount1: string;
    /**
     * new_liquidity is the final liquidity after the add.
     * It includes the liquidity that existed before in the position
     * and the new liquidity that was added to the position.
     *
     * @generated from field: string new_liquidity = 5;
     */
    newLiquidity: string;
    /**
     * @generated from field: uint64 lock_id = 4;
     */
    lockId: bigint;
    constructor(data?: PartialMessage<MsgAddToConcentratedLiquiditySuperfluidPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
    static equals(a: MsgAddToConcentratedLiquiditySuperfluidPositionResponse | PlainMessage<MsgAddToConcentratedLiquiditySuperfluidPositionResponse> | undefined, b: MsgAddToConcentratedLiquiditySuperfluidPositionResponse | PlainMessage<MsgAddToConcentratedLiquiditySuperfluidPositionResponse> | undefined): boolean;
}
/**
 * ===================== MsgUnbondConvertAndStake
 *
 * @generated from message osmosis.superfluid.MsgUnbondConvertAndStake
 */
export declare class MsgUnbondConvertAndStake extends Message<MsgUnbondConvertAndStake> {
    /**
     * lock ID to convert and stake.
     * lock id with 0 should be provided if converting liquid gamm shares to stake
     *
     * @generated from field: uint64 lock_id = 1;
     */
    lockId: bigint;
    /**
     * @generated from field: string sender = 2;
     */
    sender: string;
    /**
     * validator address to delegate to.
     * If provided empty string, we use the validators returned from
     * valset-preference module.
     *
     * @generated from field: string val_addr = 3;
     */
    valAddr: string;
    /**
     * min_amt_to_stake indicates the minimum amount to stake after conversion
     *
     * @generated from field: string min_amt_to_stake = 4;
     */
    minAmtToStake: string;
    /**
     * shares_to_convert indicates shares wanted to stake.
     * Note that this field is only used for liquid(unlocked) gamm shares.
     * For all other cases, this field would be disregarded.
     *
     * @generated from field: cosmos.base.v1beta1.Coin shares_to_convert = 5;
     */
    sharesToConvert?: Coin;
    constructor(data?: PartialMessage<MsgUnbondConvertAndStake>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgUnbondConvertAndStake";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnbondConvertAndStake;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnbondConvertAndStake;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnbondConvertAndStake;
    static equals(a: MsgUnbondConvertAndStake | PlainMessage<MsgUnbondConvertAndStake> | undefined, b: MsgUnbondConvertAndStake | PlainMessage<MsgUnbondConvertAndStake> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.MsgUnbondConvertAndStakeResponse
 */
export declare class MsgUnbondConvertAndStakeResponse extends Message<MsgUnbondConvertAndStakeResponse> {
    /**
     * @generated from field: string total_amt_staked = 1;
     */
    totalAmtStaked: string;
    constructor(data?: PartialMessage<MsgUnbondConvertAndStakeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.MsgUnbondConvertAndStakeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnbondConvertAndStakeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnbondConvertAndStakeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnbondConvertAndStakeResponse;
    static equals(a: MsgUnbondConvertAndStakeResponse | PlainMessage<MsgUnbondConvertAndStakeResponse> | undefined, b: MsgUnbondConvertAndStakeResponse | PlainMessage<MsgUnbondConvertAndStakeResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map