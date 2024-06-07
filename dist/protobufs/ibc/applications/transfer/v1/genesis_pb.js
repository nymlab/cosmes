// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/applications/transfer/v1/genesis.proto (package ibc.applications.transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { DenomTrace, Params } from "./transfer_pb.js";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * GenesisState defines the ibc-transfer genesis state
 *
 * @generated from message ibc.applications.transfer.v1.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string port_id = 1;
         */
        this.portId = "";
        /**
         * @generated from field: repeated ibc.applications.transfer.v1.DenomTrace denom_traces = 2;
         */
        this.denomTraces = [];
        /**
         * total_escrowed contains the total amount of tokens escrowed
         * by the transfer module
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin total_escrowed = 4;
         */
        this.totalEscrowed = [];
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
GenesisState.typeName = "ibc.applications.transfer.v1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom_traces", kind: "message", T: DenomTrace, repeated: true },
    { no: 3, name: "params", kind: "message", T: Params },
    { no: 4, name: "total_escrowed", kind: "message", T: Coin, repeated: true },
]);
//# sourceMappingURL=genesis_pb.js.map