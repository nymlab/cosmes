// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/poolmanager/v1beta1/swap_route.proto (package dymensionxyz.dymension.poolmanager.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
/**
 * @generated from message dymensionxyz.dymension.poolmanager.v1beta1.SwapAmountInRoute
 */
export class SwapAmountInRoute extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string token_out_denom = 2;
         */
        this.tokenOutDenom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SwapAmountInRoute().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SwapAmountInRoute().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SwapAmountInRoute().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SwapAmountInRoute, a, b);
    }
}
SwapAmountInRoute.runtime = proto3;
SwapAmountInRoute.typeName = "dymensionxyz.dymension.poolmanager.v1beta1.SwapAmountInRoute";
SwapAmountInRoute.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "token_out_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message dymensionxyz.dymension.poolmanager.v1beta1.SwapAmountOutRoute
 */
export class SwapAmountOutRoute extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string token_in_denom = 2;
         */
        this.tokenInDenom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SwapAmountOutRoute().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SwapAmountOutRoute().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SwapAmountOutRoute().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SwapAmountOutRoute, a, b);
    }
}
SwapAmountOutRoute.runtime = proto3;
SwapAmountOutRoute.typeName = "dymensionxyz.dymension.poolmanager.v1beta1.SwapAmountOutRoute";
SwapAmountOutRoute.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "token_in_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=swap_route_pb.js.map