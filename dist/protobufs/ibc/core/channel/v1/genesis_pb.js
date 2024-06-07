// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/core/channel/v1/genesis.proto (package ibc.core.channel.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { IdentifiedChannel, PacketState, Params } from "./channel_pb.js";
/**
 * GenesisState defines the ibc channel submodule's genesis state.
 *
 * @generated from message ibc.core.channel.v1.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated ibc.core.channel.v1.IdentifiedChannel channels = 1;
         */
        this.channels = [];
        /**
         * @generated from field: repeated ibc.core.channel.v1.PacketState acknowledgements = 2;
         */
        this.acknowledgements = [];
        /**
         * @generated from field: repeated ibc.core.channel.v1.PacketState commitments = 3;
         */
        this.commitments = [];
        /**
         * @generated from field: repeated ibc.core.channel.v1.PacketState receipts = 4;
         */
        this.receipts = [];
        /**
         * @generated from field: repeated ibc.core.channel.v1.PacketSequence send_sequences = 5;
         */
        this.sendSequences = [];
        /**
         * @generated from field: repeated ibc.core.channel.v1.PacketSequence recv_sequences = 6;
         */
        this.recvSequences = [];
        /**
         * @generated from field: repeated ibc.core.channel.v1.PacketSequence ack_sequences = 7;
         */
        this.ackSequences = [];
        /**
         * the sequence for the next generated channel identifier
         *
         * @generated from field: uint64 next_channel_sequence = 8;
         */
        this.nextChannelSequence = protoInt64.zero;
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
GenesisState.typeName = "ibc.core.channel.v1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "channels", kind: "message", T: IdentifiedChannel, repeated: true },
    { no: 2, name: "acknowledgements", kind: "message", T: PacketState, repeated: true },
    { no: 3, name: "commitments", kind: "message", T: PacketState, repeated: true },
    { no: 4, name: "receipts", kind: "message", T: PacketState, repeated: true },
    { no: 5, name: "send_sequences", kind: "message", T: PacketSequence, repeated: true },
    { no: 6, name: "recv_sequences", kind: "message", T: PacketSequence, repeated: true },
    { no: 7, name: "ack_sequences", kind: "message", T: PacketSequence, repeated: true },
    { no: 8, name: "next_channel_sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "params", kind: "message", T: Params },
]);
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 *
 * @generated from message ibc.core.channel.v1.PacketSequence
 */
export class PacketSequence extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string port_id = 1;
         */
        this.portId = "";
        /**
         * @generated from field: string channel_id = 2;
         */
        this.channelId = "";
        /**
         * @generated from field: uint64 sequence = 3;
         */
        this.sequence = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PacketSequence().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PacketSequence().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PacketSequence().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PacketSequence, a, b);
    }
}
PacketSequence.runtime = proto3;
PacketSequence.typeName = "ibc.core.channel.v1.PacketSequence";
PacketSequence.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
//# sourceMappingURL=genesis_pb.js.map