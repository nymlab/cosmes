// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/applications/interchain_accounts/v1/metadata.proto (package ibc.applications.interchain_accounts.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 *
 * @generated from message ibc.applications.interchain_accounts.v1.Metadata
 */
export class Metadata extends Message {
    constructor(data) {
        super();
        /**
         * version defines the ICS27 protocol version
         *
         * @generated from field: string version = 1;
         */
        this.version = "";
        /**
         * controller_connection_id is the connection identifier associated with the controller chain
         *
         * @generated from field: string controller_connection_id = 2;
         */
        this.controllerConnectionId = "";
        /**
         * host_connection_id is the connection identifier associated with the host chain
         *
         * @generated from field: string host_connection_id = 3;
         */
        this.hostConnectionId = "";
        /**
         * address defines the interchain account address to be fulfilled upon the OnChanOpenTry handshake step
         * NOTE: the address field is empty on the OnChanOpenInit handshake step
         *
         * @generated from field: string address = 4;
         */
        this.address = "";
        /**
         * encoding defines the supported codec format
         *
         * @generated from field: string encoding = 5;
         */
        this.encoding = "";
        /**
         * tx_type defines the type of transactions the interchain account can execute
         *
         * @generated from field: string tx_type = 6;
         */
        this.txType = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Metadata().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Metadata().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Metadata().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Metadata, a, b);
    }
}
Metadata.runtime = proto3;
Metadata.typeName = "ibc.applications.interchain_accounts.v1.Metadata";
Metadata.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "controller_connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "host_connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "encoding", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "tx_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=metadata_pb.js.map