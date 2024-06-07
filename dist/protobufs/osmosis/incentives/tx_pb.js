// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/incentives/tx.proto (package osmosis.incentives, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { QueryCondition } from "../lockup/lock_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
/**
 * MsgCreateGauge creates a gague to distribute rewards to users
 *
 * @generated from message osmosis.incentives.MsgCreateGauge
 */
export class MsgCreateGauge extends Message {
    constructor(data) {
        super();
        /**
         * is_perpetual shows if it's a perpetual or non-perpetual gauge
         * Non-perpetual gauges distribute their tokens equally per epoch while the
         * gauge is in the active period. Perpetual gauges distribute all their tokens
         * at a single time and only distribute their tokens again once the gauge is
         * refilled
         *
         * @generated from field: bool is_perpetual = 1;
         */
        this.isPerpetual = false;
        /**
         * owner is the address of gauge creator
         *
         * @generated from field: string owner = 2;
         */
        this.owner = "";
        /**
         * coins are coin(s) to be distributed by the gauge
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 4;
         */
        this.coins = [];
        /**
         * num_epochs_paid_over is the number of epochs distribution will be completed
         * over
         *
         * @generated from field: uint64 num_epochs_paid_over = 6;
         */
        this.numEpochsPaidOver = protoInt64.zero;
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
        this.poolId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGauge().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGauge().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGauge().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateGauge, a, b);
    }
}
MsgCreateGauge.runtime = proto3;
MsgCreateGauge.typeName = "osmosis.incentives.MsgCreateGauge";
MsgCreateGauge.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "is_perpetual", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "distribute_to", kind: "message", T: QueryCondition },
    { no: 4, name: "coins", kind: "message", T: Coin, repeated: true },
    { no: 5, name: "start_time", kind: "message", T: Timestamp },
    { no: 6, name: "num_epochs_paid_over", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * @generated from message osmosis.incentives.MsgCreateGaugeResponse
 */
export class MsgCreateGaugeResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGaugeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGaugeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGaugeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateGaugeResponse, a, b);
    }
}
MsgCreateGaugeResponse.runtime = proto3;
MsgCreateGaugeResponse.typeName = "osmosis.incentives.MsgCreateGaugeResponse";
MsgCreateGaugeResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgAddToGauge adds coins to a previously created gauge
 *
 * @generated from message osmosis.incentives.MsgAddToGauge
 */
export class MsgAddToGauge extends Message {
    constructor(data) {
        super();
        /**
         * owner is the gauge owner's address
         *
         * @generated from field: string owner = 1;
         */
        this.owner = "";
        /**
         * gauge_id is the ID of gauge that rewards are getting added to
         *
         * @generated from field: uint64 gauge_id = 2;
         */
        this.gaugeId = protoInt64.zero;
        /**
         * rewards are the coin(s) to add to gauge
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin rewards = 3;
         */
        this.rewards = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgAddToGauge().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgAddToGauge().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgAddToGauge().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgAddToGauge, a, b);
    }
}
MsgAddToGauge.runtime = proto3;
MsgAddToGauge.typeName = "osmosis.incentives.MsgAddToGauge";
MsgAddToGauge.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "gauge_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "rewards", kind: "message", T: Coin, repeated: true },
]);
/**
 * @generated from message osmosis.incentives.MsgAddToGaugeResponse
 */
export class MsgAddToGaugeResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgAddToGaugeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgAddToGaugeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgAddToGaugeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgAddToGaugeResponse, a, b);
    }
}
MsgAddToGaugeResponse.runtime = proto3;
MsgAddToGaugeResponse.typeName = "osmosis.incentives.MsgAddToGaugeResponse";
MsgAddToGaugeResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgCreateGroup creates a group to distribute rewards to a group of pools
 *
 * @generated from message osmosis.incentives.MsgCreateGroup
 */
export class MsgCreateGroup extends Message {
    constructor(data) {
        super();
        /**
         * coins are the provided coins that the group will distribute
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
         */
        this.coins = [];
        /**
         * num_epochs_paid_over is the number of epochs distribution will be completed
         * in. 0 means it's perpetual
         *
         * @generated from field: uint64 num_epochs_paid_over = 2;
         */
        this.numEpochsPaidOver = protoInt64.zero;
        /**
         * owner is the group owner's address
         *
         * @generated from field: string owner = 3;
         */
        this.owner = "";
        /**
         * pool_ids are the IDs of pools that the group is comprised of
         *
         * @generated from field: repeated uint64 pool_ids = 4;
         */
        this.poolIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateGroup, a, b);
    }
}
MsgCreateGroup.runtime = proto3;
MsgCreateGroup.typeName = "osmosis.incentives.MsgCreateGroup";
MsgCreateGroup.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "coins", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "num_epochs_paid_over", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pool_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
]);
/**
 * @generated from message osmosis.incentives.MsgCreateGroupResponse
 */
export class MsgCreateGroupResponse extends Message {
    constructor(data) {
        super();
        /**
         * group_id is the ID of the group that is created from this msg
         *
         * @generated from field: uint64 group_id = 1;
         */
        this.groupId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroupResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroupResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroupResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateGroupResponse, a, b);
    }
}
MsgCreateGroupResponse.runtime = proto3;
MsgCreateGroupResponse.typeName = "osmosis.incentives.MsgCreateGroupResponse";
MsgCreateGroupResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
//# sourceMappingURL=tx_pb.js.map