// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/twap/v1beta1/twap_record.proto (package osmosis.twap.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 *
 * @generated from message osmosis.twap.v1beta1.TwapRecord
 */
export class TwapRecord extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        /**
         * Lexicographically smaller denom of the pair
         *
         * @generated from field: string asset0_denom = 2;
         */
        this.asset0Denom = "";
        /**
         * Lexicographically larger denom of the pair
         *
         * @generated from field: string asset1_denom = 3;
         */
        this.asset1Denom = "";
        /**
         * height this record corresponds to, for debugging purposes
         *
         * @generated from field: int64 height = 4;
         */
        this.height = protoInt64.zero;
        /**
         * We store the last spot prices in the struct, so that we can interpolate
         * accumulator values for times between when accumulator records are stored.
         *
         * @generated from field: string p0_last_spot_price = 6;
         */
        this.p0LastSpotPrice = "";
        /**
         * @generated from field: string p1_last_spot_price = 7;
         */
        this.p1LastSpotPrice = "";
        /**
         * @generated from field: string p0_arithmetic_twap_accumulator = 8;
         */
        this.p0ArithmeticTwapAccumulator = "";
        /**
         * @generated from field: string p1_arithmetic_twap_accumulator = 9;
         */
        this.p1ArithmeticTwapAccumulator = "";
        /**
         * @generated from field: string geometric_twap_accumulator = 10;
         */
        this.geometricTwapAccumulator = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TwapRecord().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TwapRecord().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TwapRecord().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TwapRecord, a, b);
    }
}
TwapRecord.runtime = proto3;
TwapRecord.typeName = "osmosis.twap.v1beta1.TwapRecord";
TwapRecord.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "asset0_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "asset1_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "time", kind: "message", T: Timestamp },
    { no: 6, name: "p0_last_spot_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "p1_last_spot_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "p0_arithmetic_twap_accumulator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "p1_arithmetic_twap_accumulator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "geometric_twap_accumulator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "last_error_time", kind: "message", T: Timestamp },
]);
/**
 * PruningState allows us to spread out the pruning of TWAP records over time,
 * instead of pruning all at once at the end of the epoch.
 *
 * @generated from message osmosis.twap.v1beta1.PruningState
 */
export class PruningState extends Message {
    constructor(data) {
        super();
        /**
         * is_pruning is true if the pruning process is ongoing.
         * This tells the module to continue pruning the TWAP records
         * at the EndBlock.
         *
         * @generated from field: bool is_pruning = 1;
         */
        this.isPruning = false;
        /**
         * Deprecated: This field is deprecated.
         *
         * @generated from field: bytes last_key_seen = 3 [deprecated = true];
         * @deprecated
         */
        this.lastKeySeen = new Uint8Array(0);
        /**
         * last_seen_pool_id is the pool_id that we will begin pruning in the next
         * block. This value starts at the highest pool_id at time of epoch, and
         * decreases until it reaches 1. When it reaches 1, the pruning
         * process is complete.
         *
         * @generated from field: uint64 last_seen_pool_id = 4;
         */
        this.lastSeenPoolId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PruningState().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PruningState().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PruningState().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PruningState, a, b);
    }
}
PruningState.runtime = proto3;
PruningState.typeName = "osmosis.twap.v1beta1.PruningState";
PruningState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "is_pruning", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "last_kept_time", kind: "message", T: Timestamp },
    { no: 3, name: "last_key_seen", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "last_seen_pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
//# sourceMappingURL=twap_record_pb.js.map