// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/superfluid/v1beta1/gov.proto (package osmosis.superfluid.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { SuperfluidAsset } from "../superfluid_pb.js";
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 *
 * @generated from message osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal
 */
export class SetSuperfluidAssetsProposal extends Message {
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
         * @generated from field: repeated osmosis.superfluid.SuperfluidAsset assets = 3;
         */
        this.assets = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetSuperfluidAssetsProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetSuperfluidAssetsProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetSuperfluidAssetsProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SetSuperfluidAssetsProposal, a, b);
    }
}
SetSuperfluidAssetsProposal.runtime = proto3;
SetSuperfluidAssetsProposal.typeName = "osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal";
SetSuperfluidAssetsProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "assets", kind: "message", T: SuperfluidAsset, repeated: true },
]);
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 *
 * @generated from message osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal
 */
export class RemoveSuperfluidAssetsProposal extends Message {
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
         * @generated from field: repeated string superfluid_asset_denoms = 3;
         */
        this.superfluidAssetDenoms = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RemoveSuperfluidAssetsProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RemoveSuperfluidAssetsProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RemoveSuperfluidAssetsProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(RemoveSuperfluidAssetsProposal, a, b);
    }
}
RemoveSuperfluidAssetsProposal.runtime = proto3;
RemoveSuperfluidAssetsProposal.typeName = "osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal";
RemoveSuperfluidAssetsProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "superfluid_asset_denoms", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 *
 * @generated from message osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal
 */
export class UpdateUnpoolWhiteListProposal extends Message {
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
         * @generated from field: repeated uint64 ids = 3;
         */
        this.ids = [];
        /**
         * @generated from field: bool is_overwrite = 4;
         */
        this.isOverwrite = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UpdateUnpoolWhiteListProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UpdateUnpoolWhiteListProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UpdateUnpoolWhiteListProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(UpdateUnpoolWhiteListProposal, a, b);
    }
}
UpdateUnpoolWhiteListProposal.runtime = proto3;
UpdateUnpoolWhiteListProposal.typeName = "osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal";
UpdateUnpoolWhiteListProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 4, name: "is_overwrite", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
//# sourceMappingURL=gov_pb.js.map