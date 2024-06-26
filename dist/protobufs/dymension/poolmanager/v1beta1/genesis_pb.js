// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/poolmanager/v1beta1/genesis.proto (package dymensionxyz.dymension.poolmanager.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ModuleRoute } from "./module_route_pb.js";
/**
 * GenesisState defines the poolmanager module's genesis state.
 *
 * @generated from message dymensionxyz.dymension.poolmanager.v1beta1.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * the next_pool_id
         *
         * @generated from field: uint64 next_pool_id = 1;
         */
        this.nextPoolId = protoInt64.zero;
        /**
         * pool_routes is the container of the mappings from pool id to pool type.
         *
         * @generated from field: repeated dymensionxyz.dymension.poolmanager.v1beta1.ModuleRoute pool_routes = 2;
         */
        this.poolRoutes = [];
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
GenesisState.typeName = "dymensionxyz.dymension.poolmanager.v1beta1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "next_pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pool_routes", kind: "message", T: ModuleRoute, repeated: true },
]);
//# sourceMappingURL=genesis_pb.js.map