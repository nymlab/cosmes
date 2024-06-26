// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/poolincentives/v1beta1/incentives.proto (package osmosis.poolincentives.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Duration, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
/**
 * @generated from message osmosis.poolincentives.v1beta1.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
        /**
         * minted_denom is the denomination of the coin expected to be minted by the
         * minting module. Pool-incentives module doesn’t actually mint the coin
         * itself, but rather manages the distribution of coins that matches the
         * defined minted_denom.
         *
         * @generated from field: string minted_denom = 1;
         */
        this.mintedDenom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Params().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Params().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Params().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Params, a, b);
    }
}
Params.runtime = proto3;
Params.typeName = "osmosis.poolincentives.v1beta1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "minted_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message osmosis.poolincentives.v1beta1.LockableDurationsInfo
 */
export class LockableDurationsInfo extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated google.protobuf.Duration lockable_durations = 1;
         */
        this.lockableDurations = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LockableDurationsInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LockableDurationsInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LockableDurationsInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(LockableDurationsInfo, a, b);
    }
}
LockableDurationsInfo.runtime = proto3;
LockableDurationsInfo.typeName = "osmosis.poolincentives.v1beta1.LockableDurationsInfo";
LockableDurationsInfo.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "lockable_durations", kind: "message", T: Duration, repeated: true },
]);
/**
 * @generated from message osmosis.poolincentives.v1beta1.DistrInfo
 */
export class DistrInfo extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string total_weight = 1;
         */
        this.totalWeight = "";
        /**
         * @generated from field: repeated osmosis.poolincentives.v1beta1.DistrRecord records = 2;
         */
        this.records = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DistrInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DistrInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DistrInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DistrInfo, a, b);
    }
}
DistrInfo.runtime = proto3;
DistrInfo.typeName = "osmosis.poolincentives.v1beta1.DistrInfo";
DistrInfo.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "total_weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "records", kind: "message", T: DistrRecord, repeated: true },
]);
/**
 * @generated from message osmosis.poolincentives.v1beta1.DistrRecord
 */
export class DistrRecord extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 gauge_id = 1;
         */
        this.gaugeId = protoInt64.zero;
        /**
         * @generated from field: string weight = 2;
         */
        this.weight = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DistrRecord().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DistrRecord().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DistrRecord().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DistrRecord, a, b);
    }
}
DistrRecord.runtime = proto3;
DistrRecord.typeName = "osmosis.poolincentives.v1beta1.DistrRecord";
DistrRecord.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "gauge_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message osmosis.poolincentives.v1beta1.PoolToGauge
 */
export class PoolToGauge extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: uint64 gauge_id = 2;
         */
        this.gaugeId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PoolToGauge().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PoolToGauge().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PoolToGauge().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PoolToGauge, a, b);
    }
}
PoolToGauge.runtime = proto3;
PoolToGauge.typeName = "osmosis.poolincentives.v1beta1.PoolToGauge";
PoolToGauge.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "gauge_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "duration", kind: "message", T: Duration },
]);
/**
 * @generated from message osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges
 */
export class AnyPoolToInternalGauges extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated osmosis.poolincentives.v1beta1.PoolToGauge pool_to_gauge = 2;
         */
        this.poolToGauge = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AnyPoolToInternalGauges().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AnyPoolToInternalGauges().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AnyPoolToInternalGauges().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AnyPoolToInternalGauges, a, b);
    }
}
AnyPoolToInternalGauges.runtime = proto3;
AnyPoolToInternalGauges.typeName = "osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges";
AnyPoolToInternalGauges.fields = proto3.util.newFieldList(() => [
    { no: 2, name: "pool_to_gauge", kind: "message", T: PoolToGauge, repeated: true },
]);
/**
 * @generated from message osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges
 */
export class ConcentratedPoolToNoLockGauges extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated osmosis.poolincentives.v1beta1.PoolToGauge pool_to_gauge = 1;
         */
        this.poolToGauge = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ConcentratedPoolToNoLockGauges().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ConcentratedPoolToNoLockGauges().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ConcentratedPoolToNoLockGauges().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ConcentratedPoolToNoLockGauges, a, b);
    }
}
ConcentratedPoolToNoLockGauges.runtime = proto3;
ConcentratedPoolToNoLockGauges.typeName = "osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges";
ConcentratedPoolToNoLockGauges.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_to_gauge", kind: "message", T: PoolToGauge, repeated: true },
]);
//# sourceMappingURL=incentives_pb.js.map