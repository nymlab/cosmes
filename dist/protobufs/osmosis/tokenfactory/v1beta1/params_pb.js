// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/tokenfactory/v1beta1/params.proto (package osmosis.tokenfactory.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * Params defines the parameters for the tokenfactory module.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
        /**
         * DenomCreationFee defines the fee to be charged on the creation of a new
         * denom. The fee is drawn from the MsgCreateDenom's sender account, and
         * transferred to the community pool.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin denom_creation_fee = 1;
         */
        this.denomCreationFee = [];
        /**
         * DenomCreationGasConsume defines the gas cost for creating a new denom.
         * This is intended as a spam deterrence mechanism.
         *
         * See: https://github.com/CosmWasm/token-factory/issues/11
         *
         * @generated from field: uint64 denom_creation_gas_consume = 2;
         */
        this.denomCreationGasConsume = protoInt64.zero;
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
Params.typeName = "osmosis.tokenfactory.v1beta1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom_creation_fee", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "denom_creation_gas_consume", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
//# sourceMappingURL=params_pb.js.map