// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/concentratedliquidity/v1beta1/incentive_record.proto (package osmosis.concentratedliquidity.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.IncentiveRecord
 */
export class IncentiveRecord extends Message {
    constructor(data) {
        super();
        /**
         * incentive_id is the id uniquely identifying this incentive record.
         *
         * @generated from field: uint64 incentive_id = 1;
         */
        this.incentiveId = protoInt64.zero;
        /**
         * @generated from field: uint64 pool_id = 2;
         */
        this.poolId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IncentiveRecord().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IncentiveRecord().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IncentiveRecord().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(IncentiveRecord, a, b);
    }
}
IncentiveRecord.runtime = proto3;
IncentiveRecord.typeName = "osmosis.concentratedliquidity.v1beta1.IncentiveRecord";
IncentiveRecord.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "incentive_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "incentive_record_body", kind: "message", T: IncentiveRecordBody },
    { no: 5, name: "min_uptime", kind: "message", T: Duration },
]);
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody
 */
export class IncentiveRecordBody extends Message {
    constructor(data) {
        super();
        /**
         * emission_rate is the incentive emission rate per second
         *
         * @generated from field: string emission_rate = 2;
         */
        this.emissionRate = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IncentiveRecordBody().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IncentiveRecordBody().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IncentiveRecordBody().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(IncentiveRecordBody, a, b);
    }
}
IncentiveRecordBody.runtime = proto3;
IncentiveRecordBody.typeName = "osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody";
IncentiveRecordBody.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "remaining_coin", kind: "message", T: DecCoin },
    { no: 2, name: "emission_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start_time", kind: "message", T: Timestamp },
]);
//# sourceMappingURL=incentive_record_pb.js.map