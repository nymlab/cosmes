// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/gamm/v1beta1/genesis.proto (package dymensionxyz.dymension.gamm.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * GenesisState defines the gamm module's genesis state.
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated google.protobuf.Any pools = 1;
         */
        this.pools = [];
        /**
         * will be renamed to next_pool_id in an upcoming version
         *
         * @generated from field: uint64 next_pool_number = 2;
         */
        this.nextPoolNumber = protoInt64.zero;
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
GenesisState.typeName = "dymensionxyz.dymension.gamm.v1beta1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pools", kind: "message", T: Any, repeated: true },
    { no: 2, name: "next_pool_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "params", kind: "message", T: Params },
]);
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin pool_creation_fee = 1;
         */
        this.poolCreationFee = [];
        /**
         * @generated from field: bool enable_global_pool_fees = 2;
         */
        this.enableGlobalPoolFees = false;
        /**
         * @generated from field: string taker_fee = 4;
         */
        this.takerFee = "";
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
Params.typeName = "dymensionxyz.dymension.gamm.v1beta1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_creation_fee", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "enable_global_pool_fees", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "global_fees", kind: "message", T: GlobalFees },
    { no: 4, name: "taker_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.GlobalFees
 */
export class GlobalFees extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string swap_fee = 1;
         */
        this.swapFee = "";
        /**
         * @generated from field: string exit_fee = 2;
         */
        this.exitFee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GlobalFees().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GlobalFees().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GlobalFees().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GlobalFees, a, b);
    }
}
GlobalFees.runtime = proto3;
GlobalFees.typeName = "dymensionxyz.dymension.gamm.v1beta1.GlobalFees";
GlobalFees.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "swap_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "exit_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=genesis_pb.js.map