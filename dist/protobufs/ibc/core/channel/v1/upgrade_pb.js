// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/core/channel/v1/upgrade.proto (package ibc.core.channel.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Order, Timeout } from "./channel_pb.js";
/**
 * Upgrade is a verifiable type which contains the relevant information
 * for an attempted upgrade. It provides the proposed changes to the channel
 * end, the timeout for this upgrade attempt and the next packet sequence
 * which allows the counterparty to efficiently know the highest sequence it has received.
 * The next sequence send is used for pruning and upgrading from unordered to ordered channels.
 *
 * @generated from message ibc.core.channel.v1.Upgrade
 */
export class Upgrade extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 next_sequence_send = 3;
         */
        this.nextSequenceSend = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Upgrade().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Upgrade().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Upgrade().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Upgrade, a, b);
    }
}
Upgrade.runtime = proto3;
Upgrade.typeName = "ibc.core.channel.v1.Upgrade";
Upgrade.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "fields", kind: "message", T: UpgradeFields },
    { no: 2, name: "timeout", kind: "message", T: Timeout },
    { no: 3, name: "next_sequence_send", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * UpgradeFields are the fields in a channel end which may be changed
 * during a channel upgrade.
 *
 * @generated from message ibc.core.channel.v1.UpgradeFields
 */
export class UpgradeFields extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: ibc.core.channel.v1.Order ordering = 1;
         */
        this.ordering = Order.NONE_UNSPECIFIED;
        /**
         * @generated from field: repeated string connection_hops = 2;
         */
        this.connectionHops = [];
        /**
         * @generated from field: string version = 3;
         */
        this.version = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UpgradeFields().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UpgradeFields().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UpgradeFields().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(UpgradeFields, a, b);
    }
}
UpgradeFields.runtime = proto3;
UpgradeFields.typeName = "ibc.core.channel.v1.UpgradeFields";
UpgradeFields.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "ordering", kind: "enum", T: proto3.getEnumType(Order) },
    { no: 2, name: "connection_hops", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ErrorReceipt defines a type which encapsulates the upgrade sequence and error associated with the
 * upgrade handshake failure. When a channel upgrade handshake is aborted both chains are expected to increment to the
 * next sequence.
 *
 * @generated from message ibc.core.channel.v1.ErrorReceipt
 */
export class ErrorReceipt extends Message {
    constructor(data) {
        super();
        /**
         * the channel upgrade sequence
         *
         * @generated from field: uint64 sequence = 1;
         */
        this.sequence = protoInt64.zero;
        /**
         * the error message detailing the cause of failure
         *
         * @generated from field: string message = 2;
         */
        this.message = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ErrorReceipt().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ErrorReceipt().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ErrorReceipt().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ErrorReceipt, a, b);
    }
}
ErrorReceipt.runtime = proto3;
ErrorReceipt.typeName = "ibc.core.channel.v1.ErrorReceipt";
ErrorReceipt.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=upgrade_pb.js.map