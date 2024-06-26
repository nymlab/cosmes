// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/lockup/genesis.proto (package osmosis.lockup, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { PeriodLock, SyntheticLock } from "./lock_pb.js";
import { Params } from "./params_pb.js";
/**
 * GenesisState defines the lockup module's genesis state.
 *
 * @generated from message osmosis.lockup.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 last_lock_id = 1;
         */
        this.lastLockId = protoInt64.zero;
        /**
         * @generated from field: repeated osmosis.lockup.PeriodLock locks = 2;
         */
        this.locks = [];
        /**
         * @generated from field: repeated osmosis.lockup.SyntheticLock synthetic_locks = 3;
         */
        this.syntheticLocks = [];
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
GenesisState.typeName = "osmosis.lockup.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "last_lock_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "locks", kind: "message", T: PeriodLock, repeated: true },
    { no: 3, name: "synthetic_locks", kind: "message", T: SyntheticLock, repeated: true },
    { no: 4, name: "params", kind: "message", T: Params },
]);
//# sourceMappingURL=genesis_pb.js.map