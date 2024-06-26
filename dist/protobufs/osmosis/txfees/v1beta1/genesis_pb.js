// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/txfees/v1beta1/genesis.proto (package osmosis.txfees.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { FeeToken } from "./feetoken_pb.js";
/**
 * GenesisState defines the txfees module's genesis state.
 *
 * @generated from message osmosis.txfees.v1beta1.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string basedenom = 1;
         */
        this.basedenom = "";
        /**
         * @generated from field: repeated osmosis.txfees.v1beta1.FeeToken feetokens = 2;
         */
        this.feetokens = [];
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
GenesisState.typeName = "osmosis.txfees.v1beta1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "basedenom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "feetokens", kind: "message", T: FeeToken, repeated: true },
]);
//# sourceMappingURL=genesis_pb.js.map