// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/protorev/v1beta1/tx.proto (package osmosis.protorev.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { BaseDenom, InfoByPoolType, TokenPairArbRoutes } from "./protorev_pb.js";
/**
 * MsgSetHotRoutes defines the Msg/SetHotRoutes request type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetHotRoutes
 */
export class MsgSetHotRoutes extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account that is authorized to set the hot routes.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * hot_routes is the list of hot routes to set.
         *
         * @generated from field: repeated osmosis.protorev.v1beta1.TokenPairArbRoutes hot_routes = 2;
         */
        this.hotRoutes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetHotRoutes().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetHotRoutes().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetHotRoutes().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetHotRoutes, a, b);
    }
}
MsgSetHotRoutes.runtime = proto3;
MsgSetHotRoutes.typeName = "osmosis.protorev.v1beta1.MsgSetHotRoutes";
MsgSetHotRoutes.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "hot_routes", kind: "message", T: TokenPairArbRoutes, repeated: true },
]);
/**
 * MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetHotRoutesResponse
 */
export class MsgSetHotRoutesResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetHotRoutesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetHotRoutesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetHotRoutesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetHotRoutesResponse, a, b);
    }
}
MsgSetHotRoutesResponse.runtime = proto3;
MsgSetHotRoutesResponse.typeName = "osmosis.protorev.v1beta1.MsgSetHotRoutesResponse";
MsgSetHotRoutesResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetDeveloperAccount
 */
export class MsgSetDeveloperAccount extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account that is authorized to set the developer account.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * developer_account is the account that will receive a portion of the profits
         * from the protorev module.
         *
         * @generated from field: string developer_account = 2;
         */
        this.developerAccount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetDeveloperAccount().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetDeveloperAccount().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetDeveloperAccount().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetDeveloperAccount, a, b);
    }
}
MsgSetDeveloperAccount.runtime = proto3;
MsgSetDeveloperAccount.typeName = "osmosis.protorev.v1beta1.MsgSetDeveloperAccount";
MsgSetDeveloperAccount.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "developer_account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse
 */
export class MsgSetDeveloperAccountResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetDeveloperAccountResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetDeveloperAccountResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetDeveloperAccountResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetDeveloperAccountResponse, a, b);
    }
}
MsgSetDeveloperAccountResponse.runtime = proto3;
MsgSetDeveloperAccountResponse.typeName = "osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse";
MsgSetDeveloperAccountResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgSetInfoByPoolType defines the Msg/SetInfoByPoolType request type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetInfoByPoolType
 */
export class MsgSetInfoByPoolType extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account that is authorized to set the pool weights.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetInfoByPoolType().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetInfoByPoolType().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetInfoByPoolType().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetInfoByPoolType, a, b);
    }
}
MsgSetInfoByPoolType.runtime = proto3;
MsgSetInfoByPoolType.typeName = "osmosis.protorev.v1beta1.MsgSetInfoByPoolType";
MsgSetInfoByPoolType.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "info_by_pool_type", kind: "message", T: InfoByPoolType },
]);
/**
 * MsgSetInfoByPoolTypeResponse defines the Msg/SetInfoByPoolType response type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse
 */
export class MsgSetInfoByPoolTypeResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetInfoByPoolTypeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetInfoByPoolTypeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetInfoByPoolTypeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetInfoByPoolTypeResponse, a, b);
    }
}
MsgSetInfoByPoolTypeResponse.runtime = proto3;
MsgSetInfoByPoolTypeResponse.typeName = "osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse";
MsgSetInfoByPoolTypeResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx
 */
export class MsgSetMaxPoolPointsPerTx extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account that is authorized to set the max pool points per tx.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * max_pool_points_per_tx is the maximum number of pool points that can be
         * consumed per transaction.
         *
         * @generated from field: uint64 max_pool_points_per_tx = 2;
         */
        this.maxPoolPointsPerTx = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetMaxPoolPointsPerTx().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetMaxPoolPointsPerTx().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetMaxPoolPointsPerTx().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetMaxPoolPointsPerTx, a, b);
    }
}
MsgSetMaxPoolPointsPerTx.runtime = proto3;
MsgSetMaxPoolPointsPerTx.typeName = "osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx";
MsgSetMaxPoolPointsPerTx.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "max_pool_points_per_tx", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse
 */
export class MsgSetMaxPoolPointsPerTxResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetMaxPoolPointsPerTxResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetMaxPoolPointsPerTxResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetMaxPoolPointsPerTxResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetMaxPoolPointsPerTxResponse, a, b);
    }
}
MsgSetMaxPoolPointsPerTxResponse.runtime = proto3;
MsgSetMaxPoolPointsPerTxResponse.typeName = "osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse";
MsgSetMaxPoolPointsPerTxResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock
 */
export class MsgSetMaxPoolPointsPerBlock extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account that is authorized to set the max pool points per
         * block.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * max_pool_points_per_block is the maximum number of pool points that can be
         * consumed per block.
         *
         * @generated from field: uint64 max_pool_points_per_block = 2;
         */
        this.maxPoolPointsPerBlock = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetMaxPoolPointsPerBlock().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetMaxPoolPointsPerBlock().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetMaxPoolPointsPerBlock().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetMaxPoolPointsPerBlock, a, b);
    }
}
MsgSetMaxPoolPointsPerBlock.runtime = proto3;
MsgSetMaxPoolPointsPerBlock.typeName = "osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock";
MsgSetMaxPoolPointsPerBlock.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "max_pool_points_per_block", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse
 */
export class MsgSetMaxPoolPointsPerBlockResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetMaxPoolPointsPerBlockResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetMaxPoolPointsPerBlockResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetMaxPoolPointsPerBlockResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetMaxPoolPointsPerBlockResponse, a, b);
    }
}
MsgSetMaxPoolPointsPerBlockResponse.runtime = proto3;
MsgSetMaxPoolPointsPerBlockResponse.typeName = "osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse";
MsgSetMaxPoolPointsPerBlockResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetBaseDenoms
 */
export class MsgSetBaseDenoms extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account that is authorized to set the base denoms.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * base_denoms is the list of base denoms to set.
         *
         * @generated from field: repeated osmosis.protorev.v1beta1.BaseDenom base_denoms = 2;
         */
        this.baseDenoms = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetBaseDenoms().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetBaseDenoms().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetBaseDenoms().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetBaseDenoms, a, b);
    }
}
MsgSetBaseDenoms.runtime = proto3;
MsgSetBaseDenoms.typeName = "osmosis.protorev.v1beta1.MsgSetBaseDenoms";
MsgSetBaseDenoms.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "base_denoms", kind: "message", T: BaseDenom, repeated: true },
]);
/**
 * MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse
 */
export class MsgSetBaseDenomsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetBaseDenomsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetBaseDenomsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetBaseDenomsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetBaseDenomsResponse, a, b);
    }
}
MsgSetBaseDenomsResponse.runtime = proto3;
MsgSetBaseDenomsResponse.typeName = "osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse";
MsgSetBaseDenomsResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map