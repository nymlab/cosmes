// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmwasm/wasm/v1/types.proto (package cosmwasm.wasm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
/**
 * AccessType permission types
 *
 * @generated from enum cosmwasm.wasm.v1.AccessType
 */
export var AccessType;
(function (AccessType) {
    /**
     * AccessTypeUnspecified placeholder for empty value
     *
     * @generated from enum value: ACCESS_TYPE_UNSPECIFIED = 0;
     */
    AccessType[AccessType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * AccessTypeNobody forbidden
     *
     * @generated from enum value: ACCESS_TYPE_NOBODY = 1;
     */
    AccessType[AccessType["NOBODY"] = 1] = "NOBODY";
    /**
     * AccessTypeEverybody unrestricted
     *
     * @generated from enum value: ACCESS_TYPE_EVERYBODY = 3;
     */
    AccessType[AccessType["EVERYBODY"] = 3] = "EVERYBODY";
    /**
     * AccessTypeAnyOfAddresses allow any of the addresses
     *
     * @generated from enum value: ACCESS_TYPE_ANY_OF_ADDRESSES = 4;
     */
    AccessType[AccessType["ANY_OF_ADDRESSES"] = 4] = "ANY_OF_ADDRESSES";
})(AccessType || (AccessType = {}));
// Retrieve enum metadata with: proto3.getEnumType(AccessType)
proto3.util.setEnumType(AccessType, "cosmwasm.wasm.v1.AccessType", [
    { no: 0, name: "ACCESS_TYPE_UNSPECIFIED" },
    { no: 1, name: "ACCESS_TYPE_NOBODY" },
    { no: 3, name: "ACCESS_TYPE_EVERYBODY" },
    { no: 4, name: "ACCESS_TYPE_ANY_OF_ADDRESSES" },
]);
/**
 * ContractCodeHistoryOperationType actions that caused a code change
 *
 * @generated from enum cosmwasm.wasm.v1.ContractCodeHistoryOperationType
 */
export var ContractCodeHistoryOperationType;
(function (ContractCodeHistoryOperationType) {
    /**
     * ContractCodeHistoryOperationTypeUnspecified placeholder for empty value
     *
     * @generated from enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0;
     */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * ContractCodeHistoryOperationTypeInit on chain contract instantiation
     *
     * @generated from enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1;
     */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["INIT"] = 1] = "INIT";
    /**
     * ContractCodeHistoryOperationTypeMigrate code migration
     *
     * @generated from enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2;
     */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["MIGRATE"] = 2] = "MIGRATE";
    /**
     * ContractCodeHistoryOperationTypeGenesis based on genesis data
     *
     * @generated from enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3;
     */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["GENESIS"] = 3] = "GENESIS";
})(ContractCodeHistoryOperationType || (ContractCodeHistoryOperationType = {}));
// Retrieve enum metadata with: proto3.getEnumType(ContractCodeHistoryOperationType)
proto3.util.setEnumType(ContractCodeHistoryOperationType, "cosmwasm.wasm.v1.ContractCodeHistoryOperationType", [
    { no: 0, name: "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED" },
    { no: 1, name: "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT" },
    { no: 2, name: "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE" },
    { no: 3, name: "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS" },
]);
/**
 * AccessTypeParam
 *
 * @generated from message cosmwasm.wasm.v1.AccessTypeParam
 */
export class AccessTypeParam extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: cosmwasm.wasm.v1.AccessType value = 1;
         */
        this.value = AccessType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AccessTypeParam().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AccessTypeParam().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AccessTypeParam().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AccessTypeParam, a, b);
    }
}
AccessTypeParam.runtime = proto3;
AccessTypeParam.typeName = "cosmwasm.wasm.v1.AccessTypeParam";
AccessTypeParam.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(AccessType) },
]);
/**
 * AccessConfig access control type.
 *
 * @generated from message cosmwasm.wasm.v1.AccessConfig
 */
export class AccessConfig extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: cosmwasm.wasm.v1.AccessType permission = 1;
         */
        this.permission = AccessType.UNSPECIFIED;
        /**
         * @generated from field: repeated string addresses = 3;
         */
        this.addresses = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AccessConfig().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AccessConfig().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AccessConfig().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AccessConfig, a, b);
    }
}
AccessConfig.runtime = proto3;
AccessConfig.typeName = "cosmwasm.wasm.v1.AccessConfig";
AccessConfig.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "permission", kind: "enum", T: proto3.getEnumType(AccessType) },
    { no: 3, name: "addresses", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * Params defines the set of wasm parameters.
 *
 * @generated from message cosmwasm.wasm.v1.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: cosmwasm.wasm.v1.AccessType instantiate_default_permission = 2;
         */
        this.instantiateDefaultPermission = AccessType.UNSPECIFIED;
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
Params.typeName = "cosmwasm.wasm.v1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "code_upload_access", kind: "message", T: AccessConfig },
    { no: 2, name: "instantiate_default_permission", kind: "enum", T: proto3.getEnumType(AccessType) },
]);
/**
 * CodeInfo is data for the uploaded contract WASM code
 *
 * @generated from message cosmwasm.wasm.v1.CodeInfo
 */
export class CodeInfo extends Message {
    constructor(data) {
        super();
        /**
         * CodeHash is the unique identifier created by wasmvm
         *
         * @generated from field: bytes code_hash = 1;
         */
        this.codeHash = new Uint8Array(0);
        /**
         * Creator address who initially stored the code
         *
         * @generated from field: string creator = 2;
         */
        this.creator = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CodeInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CodeInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CodeInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CodeInfo, a, b);
    }
}
CodeInfo.runtime = proto3;
CodeInfo.typeName = "cosmwasm.wasm.v1.CodeInfo";
CodeInfo.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "code_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "instantiate_config", kind: "message", T: AccessConfig },
]);
/**
 * ContractInfo stores a WASM contract instance
 *
 * @generated from message cosmwasm.wasm.v1.ContractInfo
 */
export class ContractInfo extends Message {
    constructor(data) {
        super();
        /**
         * CodeID is the reference to the stored Wasm code
         *
         * @generated from field: uint64 code_id = 1;
         */
        this.codeId = protoInt64.zero;
        /**
         * Creator address who initially instantiated the contract
         *
         * @generated from field: string creator = 2;
         */
        this.creator = "";
        /**
         * Admin is an optional address that can execute migrations
         *
         * @generated from field: string admin = 3;
         */
        this.admin = "";
        /**
         * Label is optional metadata to be stored with a contract instance.
         *
         * @generated from field: string label = 4;
         */
        this.label = "";
        /**
         * @generated from field: string ibc_port_id = 6;
         */
        this.ibcPortId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ContractInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ContractInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ContractInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ContractInfo, a, b);
    }
}
ContractInfo.runtime = proto3;
ContractInfo.typeName = "cosmwasm.wasm.v1.ContractInfo";
ContractInfo.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "created", kind: "message", T: AbsoluteTxPosition },
    { no: 6, name: "ibc_port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "extension", kind: "message", T: Any },
]);
/**
 * ContractCodeHistoryEntry metadata to a contract.
 *
 * @generated from message cosmwasm.wasm.v1.ContractCodeHistoryEntry
 */
export class ContractCodeHistoryEntry extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: cosmwasm.wasm.v1.ContractCodeHistoryOperationType operation = 1;
         */
        this.operation = ContractCodeHistoryOperationType.UNSPECIFIED;
        /**
         * CodeID is the reference to the stored WASM code
         *
         * @generated from field: uint64 code_id = 2;
         */
        this.codeId = protoInt64.zero;
        /**
         * @generated from field: bytes msg = 4;
         */
        this.msg = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ContractCodeHistoryEntry().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ContractCodeHistoryEntry().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ContractCodeHistoryEntry().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ContractCodeHistoryEntry, a, b);
    }
}
ContractCodeHistoryEntry.runtime = proto3;
ContractCodeHistoryEntry.typeName = "cosmwasm.wasm.v1.ContractCodeHistoryEntry";
ContractCodeHistoryEntry.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "operation", kind: "enum", T: proto3.getEnumType(ContractCodeHistoryOperationType) },
    { no: 2, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "updated", kind: "message", T: AbsoluteTxPosition },
    { no: 4, name: "msg", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 *
 * @generated from message cosmwasm.wasm.v1.AbsoluteTxPosition
 */
export class AbsoluteTxPosition extends Message {
    constructor(data) {
        super();
        /**
         * BlockHeight is the block the contract was created at
         *
         * @generated from field: uint64 block_height = 1;
         */
        this.blockHeight = protoInt64.zero;
        /**
         * TxIndex is a monotonic counter within the block (actual transaction index,
         * or gas consumed)
         *
         * @generated from field: uint64 tx_index = 2;
         */
        this.txIndex = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AbsoluteTxPosition().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AbsoluteTxPosition().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AbsoluteTxPosition().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AbsoluteTxPosition, a, b);
    }
}
AbsoluteTxPosition.runtime = proto3;
AbsoluteTxPosition.typeName = "cosmwasm.wasm.v1.AbsoluteTxPosition";
AbsoluteTxPosition.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "tx_index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * Model is a struct that holds a KV pair
 *
 * @generated from message cosmwasm.wasm.v1.Model
 */
export class Model extends Message {
    constructor(data) {
        super();
        /**
         * hex-encode key to read it better (this is often ascii)
         *
         * @generated from field: bytes key = 1;
         */
        this.key = new Uint8Array(0);
        /**
         * base64-encode raw value
         *
         * @generated from field: bytes value = 2;
         */
        this.value = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Model().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Model().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Model().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Model, a, b);
    }
}
Model.runtime = proto3;
Model.typeName = "cosmwasm.wasm.v1.Model";
Model.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
//# sourceMappingURL=types_pb.js.map