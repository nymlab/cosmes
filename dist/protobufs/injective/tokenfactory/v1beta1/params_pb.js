// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/tokenfactory/v1beta1/params.proto (package injective.tokenfactory.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * Params defines the parameters for the tokenfactory module.
 *
 * @generated from message injective.tokenfactory.v1beta1.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin denom_creation_fee = 1;
         */
        this.denomCreationFee = [];
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
Params.typeName = "injective.tokenfactory.v1beta1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom_creation_fee", kind: "message", T: Coin, repeated: true },
]);
//# sourceMappingURL=params_pb.js.map