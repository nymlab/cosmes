// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/downtimedetector/v1beta1/genesis.proto (package osmosis.downtimedetector.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Downtime } from "./downtime_duration_pb.js";
/**
 * @generated from message osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry
 */
export class GenesisDowntimeEntry extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: osmosis.downtimedetector.v1beta1.Downtime duration = 1;
         */
        this.duration = Downtime.DURATION_30S;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GenesisDowntimeEntry().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GenesisDowntimeEntry().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GenesisDowntimeEntry().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GenesisDowntimeEntry, a, b);
    }
}
GenesisDowntimeEntry.runtime = proto3;
GenesisDowntimeEntry.typeName = "osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry";
GenesisDowntimeEntry.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "duration", kind: "enum", T: proto3.getEnumType(Downtime) },
    { no: 2, name: "last_downtime", kind: "message", T: Timestamp },
]);
/**
 * GenesisState defines the twap module's genesis state.
 *
 * @generated from message osmosis.downtimedetector.v1beta1.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry downtimes = 1;
         */
        this.downtimes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GenesisState().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GenesisState().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GenesisState().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GenesisState, a, b);
    }
}
GenesisState.runtime = proto3;
GenesisState.typeName = "osmosis.downtimedetector.v1beta1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "downtimes", kind: "message", T: GenesisDowntimeEntry, repeated: true },
    { no: 2, name: "last_block_time", kind: "message", T: Timestamp },
]);
//# sourceMappingURL=genesis_pb.js.map