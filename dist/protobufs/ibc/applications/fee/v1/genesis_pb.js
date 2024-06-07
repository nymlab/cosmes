// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/applications/fee/v1/genesis.proto (package ibc.applications.fee.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { IdentifiedPacketFees } from "./fee_pb.js";
import { PacketId } from "../../../core/channel/v1/channel_pb.js";
/**
 * GenesisState defines the ICS29 fee middleware genesis state
 *
 * @generated from message ibc.applications.fee.v1.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * list of identified packet fees
         *
         * @generated from field: repeated ibc.applications.fee.v1.IdentifiedPacketFees identified_fees = 1;
         */
        this.identifiedFees = [];
        /**
         * list of fee enabled channels
         *
         * @generated from field: repeated ibc.applications.fee.v1.FeeEnabledChannel fee_enabled_channels = 2;
         */
        this.feeEnabledChannels = [];
        /**
         * list of registered payees
         *
         * @generated from field: repeated ibc.applications.fee.v1.RegisteredPayee registered_payees = 3;
         */
        this.registeredPayees = [];
        /**
         * list of registered counterparty payees
         *
         * @generated from field: repeated ibc.applications.fee.v1.RegisteredCounterpartyPayee registered_counterparty_payees = 4;
         */
        this.registeredCounterpartyPayees = [];
        /**
         * list of forward relayer addresses
         *
         * @generated from field: repeated ibc.applications.fee.v1.ForwardRelayerAddress forward_relayers = 5;
         */
        this.forwardRelayers = [];
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
GenesisState.typeName = "ibc.applications.fee.v1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "identified_fees", kind: "message", T: IdentifiedPacketFees, repeated: true },
    { no: 2, name: "fee_enabled_channels", kind: "message", T: FeeEnabledChannel, repeated: true },
    { no: 3, name: "registered_payees", kind: "message", T: RegisteredPayee, repeated: true },
    { no: 4, name: "registered_counterparty_payees", kind: "message", T: RegisteredCounterpartyPayee, repeated: true },
    { no: 5, name: "forward_relayers", kind: "message", T: ForwardRelayerAddress, repeated: true },
]);
/**
 * FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel
 *
 * @generated from message ibc.applications.fee.v1.FeeEnabledChannel
 */
export class FeeEnabledChannel extends Message {
    constructor(data) {
        super();
        /**
         * unique port identifier
         *
         * @generated from field: string port_id = 1;
         */
        this.portId = "";
        /**
         * unique channel identifier
         *
         * @generated from field: string channel_id = 2;
         */
        this.channelId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new FeeEnabledChannel().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new FeeEnabledChannel().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new FeeEnabledChannel().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(FeeEnabledChannel, a, b);
    }
}
FeeEnabledChannel.runtime = proto3;
FeeEnabledChannel.typeName = "ibc.applications.fee.v1.FeeEnabledChannel";
FeeEnabledChannel.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * RegisteredPayee contains the relayer address and payee address for a specific channel
 *
 * @generated from message ibc.applications.fee.v1.RegisteredPayee
 */
export class RegisteredPayee extends Message {
    constructor(data) {
        super();
        /**
         * unique channel identifier
         *
         * @generated from field: string channel_id = 1;
         */
        this.channelId = "";
        /**
         * the relayer address
         *
         * @generated from field: string relayer = 2;
         */
        this.relayer = "";
        /**
         * the payee address
         *
         * @generated from field: string payee = 3;
         */
        this.payee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RegisteredPayee().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RegisteredPayee().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RegisteredPayee().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(RegisteredPayee, a, b);
    }
}
RegisteredPayee.runtime = proto3;
RegisteredPayee.typeName = "ibc.applications.fee.v1.RegisteredPayee";
RegisteredPayee.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "relayer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "payee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 *
 * @generated from message ibc.applications.fee.v1.RegisteredCounterpartyPayee
 */
export class RegisteredCounterpartyPayee extends Message {
    constructor(data) {
        super();
        /**
         * unique channel identifier
         *
         * @generated from field: string channel_id = 1;
         */
        this.channelId = "";
        /**
         * the relayer address
         *
         * @generated from field: string relayer = 2;
         */
        this.relayer = "";
        /**
         * the counterparty payee address
         *
         * @generated from field: string counterparty_payee = 3;
         */
        this.counterpartyPayee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RegisteredCounterpartyPayee().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RegisteredCounterpartyPayee().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RegisteredCounterpartyPayee().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(RegisteredCounterpartyPayee, a, b);
    }
}
RegisteredCounterpartyPayee.runtime = proto3;
RegisteredCounterpartyPayee.typeName = "ibc.applications.fee.v1.RegisteredCounterpartyPayee";
RegisteredCounterpartyPayee.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "relayer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "counterparty_payee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements
 *
 * @generated from message ibc.applications.fee.v1.ForwardRelayerAddress
 */
export class ForwardRelayerAddress extends Message {
    constructor(data) {
        super();
        /**
         * the forward relayer address
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ForwardRelayerAddress().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ForwardRelayerAddress().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ForwardRelayerAddress().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ForwardRelayerAddress, a, b);
    }
}
ForwardRelayerAddress.runtime = proto3;
ForwardRelayerAddress.typeName = "ibc.applications.fee.v1.ForwardRelayerAddress";
ForwardRelayerAddress.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "packet_id", kind: "message", T: PacketId },
]);
//# sourceMappingURL=genesis_pb.js.map