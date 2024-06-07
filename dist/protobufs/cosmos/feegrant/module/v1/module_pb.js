// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/feegrant/module/v1/module.proto (package cosmos.feegrant.module.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Module is the config object of the feegrant module.
 *
 * @generated from message cosmos.feegrant.module.v1.Module
 */
export class Module extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Module().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Module().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Module().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Module, a, b);
    }
}
Module.runtime = proto3;
Module.typeName = "cosmos.feegrant.module.v1.Module";
Module.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=module_pb.js.map