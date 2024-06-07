// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/ibchooks/genesis.proto (package osmosis.ibchooks, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
/**
 * @generated from message osmosis.ibchooks.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
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
GenesisState.typeName = "osmosis.ibchooks.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
//# sourceMappingURL=genesis_pb.js.map