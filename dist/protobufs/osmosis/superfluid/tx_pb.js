// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/superfluid/tx.proto (package osmosis.superfluid, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidDelegate
 */
export class MsgSuperfluidDelegate extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: uint64 lock_id = 2;
         */
        this.lockId = protoInt64.zero;
        /**
         * @generated from field: string val_addr = 3;
         */
        this.valAddr = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSuperfluidDelegate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSuperfluidDelegate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSuperfluidDelegate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSuperfluidDelegate, a, b);
    }
}
MsgSuperfluidDelegate.runtime = proto3;
MsgSuperfluidDelegate.typeName = "osmosis.superfluid.MsgSuperfluidDelegate";
MsgSuperfluidDelegate.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "lock_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "val_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidDelegateResponse
 */
export class MsgSuperfluidDelegateResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSuperfluidDelegateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSuperfluidDelegateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSuperfluidDelegateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSuperfluidDelegateResponse, a, b);
    }
}
MsgSuperfluidDelegateResponse.runtime = proto3;
MsgSuperfluidDelegateResponse.typeName = "osmosis.superfluid.MsgSuperfluidDelegateResponse";
MsgSuperfluidDelegateResponse.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidUndelegate
 */
export class MsgSuperfluidUndelegate extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: uint64 lock_id = 2;
         */
        this.lockId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSuperfluidUndelegate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSuperfluidUndelegate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSuperfluidUndelegate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSuperfluidUndelegate, a, b);
    }
}
MsgSuperfluidUndelegate.runtime = proto3;
MsgSuperfluidUndelegate.typeName = "osmosis.superfluid.MsgSuperfluidUndelegate";
MsgSuperfluidUndelegate.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "lock_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidUndelegateResponse
 */
export class MsgSuperfluidUndelegateResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSuperfluidUndelegateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSuperfluidUndelegateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSuperfluidUndelegateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSuperfluidUndelegateResponse, a, b);
    }
}
MsgSuperfluidUndelegateResponse.runtime = proto3;
MsgSuperfluidUndelegateResponse.typeName = "osmosis.superfluid.MsgSuperfluidUndelegateResponse";
MsgSuperfluidUndelegateResponse.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidUnbondLock
 */
export class MsgSuperfluidUnbondLock extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: uint64 lock_id = 2;
         */
        this.lockId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSuperfluidUnbondLock().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSuperfluidUnbondLock().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSuperfluidUnbondLock().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSuperfluidUnbondLock, a, b);
    }
}
MsgSuperfluidUnbondLock.runtime = proto3;
MsgSuperfluidUnbondLock.typeName = "osmosis.superfluid.MsgSuperfluidUnbondLock";
MsgSuperfluidUnbondLock.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "lock_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidUnbondLockResponse
 */
export class MsgSuperfluidUnbondLockResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSuperfluidUnbondLockResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSuperfluidUnbondLockResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSuperfluidUnbondLockResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSuperfluidUnbondLockResponse, a, b);
    }
}
MsgSuperfluidUnbondLockResponse.runtime = proto3;
MsgSuperfluidUnbondLockResponse.typeName = "osmosis.superfluid.MsgSuperfluidUnbondLockResponse";
MsgSuperfluidUnbondLockResponse.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock
 */
export class MsgSuperfluidUndelegateAndUnbondLock extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: uint64 lock_id = 2;
         */
        this.lockId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSuperfluidUndelegateAndUnbondLock().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSuperfluidUndelegateAndUnbondLock().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSuperfluidUndelegateAndUnbondLock().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSuperfluidUndelegateAndUnbondLock, a, b);
    }
}
MsgSuperfluidUndelegateAndUnbondLock.runtime = proto3;
MsgSuperfluidUndelegateAndUnbondLock.typeName = "osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock";
MsgSuperfluidUndelegateAndUnbondLock.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "lock_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "coin", kind: "message", T: Coin },
]);
/**
 * @generated from message osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse
 */
export class MsgSuperfluidUndelegateAndUnbondLockResponse extends Message {
    constructor(data) {
        super();
        /**
         * lock id of the new lock created for the remaining amount.
         * returns the original lockid if the unlocked amount is equal to the
         * original lock's amount.
         *
         * @generated from field: uint64 lock_id = 1;
         */
        this.lockId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSuperfluidUndelegateAndUnbondLockResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSuperfluidUndelegateAndUnbondLockResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSuperfluidUndelegateAndUnbondLockResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSuperfluidUndelegateAndUnbondLockResponse, a, b);
    }
}
MsgSuperfluidUndelegateAndUnbondLockResponse.runtime = proto3;
MsgSuperfluidUndelegateAndUnbondLockResponse.typeName = "osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse";
MsgSuperfluidUndelegateAndUnbondLockResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "lock_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 *
 * @generated from message osmosis.superfluid.MsgLockAndSuperfluidDelegate
 */
export class MsgLockAndSuperfluidDelegate extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
         */
        this.coins = [];
        /**
         * @generated from field: string val_addr = 3;
         */
        this.valAddr = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgLockAndSuperfluidDelegate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgLockAndSuperfluidDelegate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgLockAndSuperfluidDelegate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgLockAndSuperfluidDelegate, a, b);
    }
}
MsgLockAndSuperfluidDelegate.runtime = proto3;
MsgLockAndSuperfluidDelegate.typeName = "osmosis.superfluid.MsgLockAndSuperfluidDelegate";
MsgLockAndSuperfluidDelegate.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coins", kind: "message", T: Coin, repeated: true },
    { no: 3, name: "val_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse
 */
export class MsgLockAndSuperfluidDelegateResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 ID = 1;
         */
        this.ID = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgLockAndSuperfluidDelegateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgLockAndSuperfluidDelegateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgLockAndSuperfluidDelegateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgLockAndSuperfluidDelegateResponse, a, b);
    }
}
MsgLockAndSuperfluidDelegateResponse.runtime = proto3;
MsgLockAndSuperfluidDelegateResponse.typeName = "osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse";
MsgLockAndSuperfluidDelegateResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * MsgCreateFullRangePositionAndSuperfluidDelegate creates a full range position
 * in a concentrated liquidity pool, then superfluid delegates.
 *
 * @generated from message osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate
 */
export class MsgCreateFullRangePositionAndSuperfluidDelegate extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
         */
        this.coins = [];
        /**
         * @generated from field: string val_addr = 3;
         */
        this.valAddr = "";
        /**
         * @generated from field: uint64 pool_id = 4;
         */
        this.poolId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateFullRangePositionAndSuperfluidDelegate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateFullRangePositionAndSuperfluidDelegate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateFullRangePositionAndSuperfluidDelegate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateFullRangePositionAndSuperfluidDelegate, a, b);
    }
}
MsgCreateFullRangePositionAndSuperfluidDelegate.runtime = proto3;
MsgCreateFullRangePositionAndSuperfluidDelegate.typeName = "osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate";
MsgCreateFullRangePositionAndSuperfluidDelegate.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coins", kind: "message", T: Coin, repeated: true },
    { no: 3, name: "val_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * @generated from message osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse
 */
export class MsgCreateFullRangePositionAndSuperfluidDelegateResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 lockID = 1;
         */
        this.lockID = protoInt64.zero;
        /**
         * @generated from field: uint64 positionID = 2;
         */
        this.positionID = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateFullRangePositionAndSuperfluidDelegateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateFullRangePositionAndSuperfluidDelegateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateFullRangePositionAndSuperfluidDelegateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateFullRangePositionAndSuperfluidDelegateResponse, a, b);
    }
}
MsgCreateFullRangePositionAndSuperfluidDelegateResponse.runtime = proto3;
MsgCreateFullRangePositionAndSuperfluidDelegateResponse.typeName = "osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse";
MsgCreateFullRangePositionAndSuperfluidDelegateResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "lockID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "positionID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
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
export class MsgUnPoolWhitelistedPool extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: uint64 pool_id = 2;
         */
        this.poolId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUnPoolWhitelistedPool().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUnPoolWhitelistedPool().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUnPoolWhitelistedPool().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUnPoolWhitelistedPool, a, b);
    }
}
MsgUnPoolWhitelistedPool.runtime = proto3;
MsgUnPoolWhitelistedPool.typeName = "osmosis.superfluid.MsgUnPoolWhitelistedPool";
MsgUnPoolWhitelistedPool.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * @generated from message osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse
 */
export class MsgUnPoolWhitelistedPoolResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated uint64 exited_lock_ids = 1;
         */
        this.exitedLockIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUnPoolWhitelistedPoolResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUnPoolWhitelistedPoolResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUnPoolWhitelistedPoolResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUnPoolWhitelistedPoolResponse, a, b);
    }
}
MsgUnPoolWhitelistedPoolResponse.runtime = proto3;
MsgUnPoolWhitelistedPoolResponse.typeName = "osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse";
MsgUnPoolWhitelistedPoolResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "exited_lock_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
]);
/**
 * =====================
 * MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 *
 * @generated from message osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 */
export class MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: int64 lock_id = 2;
         */
        this.lockId = protoInt64.zero;
        /**
         * token_out_mins indicates minimum token to exit Balancer pool with.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin token_out_mins = 4;
         */
        this.tokenOutMins = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, a, b);
    }
}
MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.runtime = proto3;
MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.typeName = "osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition";
MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "lock_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "shares_to_migrate", kind: "message", T: Coin },
    { no: 4, name: "token_out_mins", kind: "message", T: Coin, repeated: true },
]);
/**
 * @generated from message osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse
 */
export class MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string amount0 = 1;
         */
        this.amount0 = "";
        /**
         * @generated from field: string amount1 = 2;
         */
        this.amount1 = "";
        /**
         * @generated from field: string liquidity_created = 3;
         */
        this.liquidityCreated = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, a, b);
    }
}
MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.runtime = proto3;
MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.typeName = "osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse";
MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "amount0", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "liquidity_created", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "join_time", kind: "message", T: Timestamp },
]);
/**
 * ===================== MsgAddToConcentratedLiquiditySuperfluidPosition
 *
 * @generated from message osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition
 */
export class MsgAddToConcentratedLiquiditySuperfluidPosition extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 position_id = 1;
         */
        this.positionId = protoInt64.zero;
        /**
         * @generated from field: string sender = 2;
         */
        this.sender = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgAddToConcentratedLiquiditySuperfluidPosition().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgAddToConcentratedLiquiditySuperfluidPosition().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgAddToConcentratedLiquiditySuperfluidPosition().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgAddToConcentratedLiquiditySuperfluidPosition, a, b);
    }
}
MsgAddToConcentratedLiquiditySuperfluidPosition.runtime = proto3;
MsgAddToConcentratedLiquiditySuperfluidPosition.typeName = "osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition";
MsgAddToConcentratedLiquiditySuperfluidPosition.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "position_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_desired0", kind: "message", T: Coin },
    { no: 4, name: "token_desired1", kind: "message", T: Coin },
]);
/**
 * @generated from message osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse
 */
export class MsgAddToConcentratedLiquiditySuperfluidPositionResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 position_id = 1;
         */
        this.positionId = protoInt64.zero;
        /**
         * @generated from field: string amount0 = 2;
         */
        this.amount0 = "";
        /**
         * @generated from field: string amount1 = 3;
         */
        this.amount1 = "";
        /**
         * new_liquidity is the final liquidity after the add.
         * It includes the liquidity that existed before in the position
         * and the new liquidity that was added to the position.
         *
         * @generated from field: string new_liquidity = 5;
         */
        this.newLiquidity = "";
        /**
         * @generated from field: uint64 lock_id = 4;
         */
        this.lockId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgAddToConcentratedLiquiditySuperfluidPositionResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgAddToConcentratedLiquiditySuperfluidPositionResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgAddToConcentratedLiquiditySuperfluidPositionResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgAddToConcentratedLiquiditySuperfluidPositionResponse, a, b);
    }
}
MsgAddToConcentratedLiquiditySuperfluidPositionResponse.runtime = proto3;
MsgAddToConcentratedLiquiditySuperfluidPositionResponse.typeName = "osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse";
MsgAddToConcentratedLiquiditySuperfluidPositionResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "position_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "amount0", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "new_liquidity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "lock_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * ===================== MsgUnbondConvertAndStake
 *
 * @generated from message osmosis.superfluid.MsgUnbondConvertAndStake
 */
export class MsgUnbondConvertAndStake extends Message {
    constructor(data) {
        super();
        /**
         * lock ID to convert and stake.
         * lock id with 0 should be provided if converting liquid gamm shares to stake
         *
         * @generated from field: uint64 lock_id = 1;
         */
        this.lockId = protoInt64.zero;
        /**
         * @generated from field: string sender = 2;
         */
        this.sender = "";
        /**
         * validator address to delegate to.
         * If provided empty string, we use the validators returned from
         * valset-preference module.
         *
         * @generated from field: string val_addr = 3;
         */
        this.valAddr = "";
        /**
         * min_amt_to_stake indicates the minimum amount to stake after conversion
         *
         * @generated from field: string min_amt_to_stake = 4;
         */
        this.minAmtToStake = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUnbondConvertAndStake().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUnbondConvertAndStake().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUnbondConvertAndStake().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUnbondConvertAndStake, a, b);
    }
}
MsgUnbondConvertAndStake.runtime = proto3;
MsgUnbondConvertAndStake.typeName = "osmosis.superfluid.MsgUnbondConvertAndStake";
MsgUnbondConvertAndStake.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "lock_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "val_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "min_amt_to_stake", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "shares_to_convert", kind: "message", T: Coin },
]);
/**
 * @generated from message osmosis.superfluid.MsgUnbondConvertAndStakeResponse
 */
export class MsgUnbondConvertAndStakeResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string total_amt_staked = 1;
         */
        this.totalAmtStaked = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUnbondConvertAndStakeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUnbondConvertAndStakeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUnbondConvertAndStakeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUnbondConvertAndStakeResponse, a, b);
    }
}
MsgUnbondConvertAndStakeResponse.runtime = proto3;
MsgUnbondConvertAndStakeResponse.typeName = "osmosis.superfluid.MsgUnbondConvertAndStakeResponse";
MsgUnbondConvertAndStakeResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "total_amt_staked", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=tx_pb.js.map