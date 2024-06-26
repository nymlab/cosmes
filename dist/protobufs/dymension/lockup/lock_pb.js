// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/lockup/lock.proto (package dymensionxyz.dymension.lockup, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 *
 * @generated from enum dymensionxyz.dymension.lockup.LockQueryType
 */
export var LockQueryType;
(function (LockQueryType) {
    /**
     * @generated from enum value: ByDuration = 0;
     */
    LockQueryType[LockQueryType["ByDuration"] = 0] = "ByDuration";
    /**
     * @generated from enum value: ByTime = 1;
     */
    LockQueryType[LockQueryType["ByTime"] = 1] = "ByTime";
})(LockQueryType || (LockQueryType = {}));
// Retrieve enum metadata with: proto3.getEnumType(LockQueryType)
proto3.util.setEnumType(LockQueryType, "dymensionxyz.dymension.lockup.LockQueryType", [
    { no: 0, name: "ByDuration" },
    { no: 1, name: "ByTime" },
]);
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 *
 * @generated from message dymensionxyz.dymension.lockup.PeriodLock
 */
export class PeriodLock extends Message {
    constructor(data) {
        super();
        /**
         * ID is the unique id of the lock.
         * The ID of the lock is decided upon lock creation, incrementing by 1 for
         * every lock.
         *
         * @generated from field: uint64 ID = 1;
         */
        this.ID = protoInt64.zero;
        /**
         * Owner is the account address of the lock owner.
         * Only the owner can modify the state of the lock.
         *
         * @generated from field: string owner = 2;
         */
        this.owner = "";
        /**
         * Coins are the tokens locked within the lock, kept in the module account.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 5;
         */
        this.coins = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PeriodLock().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PeriodLock().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PeriodLock().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PeriodLock, a, b);
    }
}
PeriodLock.runtime = proto3;
PeriodLock.typeName = "dymensionxyz.dymension.lockup.PeriodLock";
PeriodLock.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "duration", kind: "message", T: Duration },
    { no: 4, name: "end_time", kind: "message", T: Timestamp },
    { no: 5, name: "coins", kind: "message", T: Coin, repeated: true },
]);
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 *
 * @generated from message dymensionxyz.dymension.lockup.QueryCondition
 */
export class QueryCondition extends Message {
    constructor(data) {
        super();
        /**
         * LockQueryType is a type of lock query, ByLockDuration | ByLockTime
         *
         * @generated from field: dymensionxyz.dymension.lockup.LockQueryType lock_query_type = 1;
         */
        this.lockQueryType = LockQueryType.ByDuration;
        /**
         * Denom represents the token denomination we are looking to lock up
         *
         * @generated from field: string denom = 2;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryCondition().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryCondition().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryCondition().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryCondition, a, b);
    }
}
QueryCondition.runtime = proto3;
QueryCondition.typeName = "dymensionxyz.dymension.lockup.QueryCondition";
QueryCondition.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "lock_query_type", kind: "enum", T: proto3.getEnumType(LockQueryType) },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "duration", kind: "message", T: Duration },
    { no: 4, name: "timestamp", kind: "message", T: Timestamp },
]);
//# sourceMappingURL=lock_pb.js.map