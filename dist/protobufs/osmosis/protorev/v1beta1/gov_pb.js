// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/protorev/v1beta1/gov.proto (package osmosis.protorev.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 *
 * @generated from message osmosis.protorev.v1beta1.SetProtoRevEnabledProposal
 */
export class SetProtoRevEnabledProposal extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string title = 1;
         */
        this.title = "";
        /**
         * @generated from field: string description = 2;
         */
        this.description = "";
        /**
         * @generated from field: bool enabled = 3;
         */
        this.enabled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetProtoRevEnabledProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetProtoRevEnabledProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetProtoRevEnabledProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SetProtoRevEnabledProposal, a, b);
    }
}
SetProtoRevEnabledProposal.runtime = proto3;
SetProtoRevEnabledProposal.typeName = "osmosis.protorev.v1beta1.SetProtoRevEnabledProposal";
SetProtoRevEnabledProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 *
 * @generated from message osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal
 */
export class SetProtoRevAdminAccountProposal extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string title = 1;
         */
        this.title = "";
        /**
         * @generated from field: string description = 2;
         */
        this.description = "";
        /**
         * @generated from field: string account = 3;
         */
        this.account = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetProtoRevAdminAccountProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetProtoRevAdminAccountProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetProtoRevAdminAccountProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SetProtoRevAdminAccountProposal, a, b);
    }
}
SetProtoRevAdminAccountProposal.runtime = proto3;
SetProtoRevAdminAccountProposal.typeName = "osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal";
SetProtoRevAdminAccountProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=gov_pb.js.map