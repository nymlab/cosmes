// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/incentives/params.proto (package dymensionxyz.dymension.incentives, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Params holds parameters for the incentives module
 *
 * @generated from message dymensionxyz.dymension.incentives.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
        /**
         * distr_epoch_identifier is what epoch type distribution will be triggered by
         * (day, week, etc.)
         *
         * @generated from field: string distr_epoch_identifier = 1;
         */
        this.distrEpochIdentifier = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Params().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Params().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Params().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Params, a, b);
    }
}
Params.runtime = proto3;
Params.typeName = "dymensionxyz.dymension.incentives.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "distr_epoch_identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=params_pb.js.map