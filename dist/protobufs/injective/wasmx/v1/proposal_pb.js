// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/wasmx/v1/proposal.proto (package injective.wasmx.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { StoreCodeProposal } from "../../../cosmwasm/wasm/v1/proposal_legacy_pb.js";
/**
 * @generated from enum injective.wasmx.v1.FundingMode
 */
export var FundingMode;
(function (FundingMode) {
    /**
     * @generated from enum value: Unspecified = 0;
     */
    FundingMode[FundingMode["Unspecified"] = 0] = "Unspecified";
    /**
     * @generated from enum value: SelfFunded = 1;
     */
    FundingMode[FundingMode["SelfFunded"] = 1] = "SelfFunded";
    /**
     * @generated from enum value: GrantOnly = 2;
     */
    FundingMode[FundingMode["GrantOnly"] = 2] = "GrantOnly";
    /**
     * @generated from enum value: Dual = 3;
     */
    FundingMode[FundingMode["Dual"] = 3] = "Dual";
})(FundingMode || (FundingMode = {}));
// Retrieve enum metadata with: proto3.getEnumType(FundingMode)
proto3.util.setEnumType(FundingMode, "injective.wasmx.v1.FundingMode", [
    { no: 0, name: "Unspecified" },
    { no: 1, name: "SelfFunded" },
    { no: 2, name: "GrantOnly" },
    { no: 3, name: "Dual" },
]);
/**
 * @generated from message injective.wasmx.v1.ContractRegistrationRequestProposal
 */
export class ContractRegistrationRequestProposal extends Message {
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
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ContractRegistrationRequestProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ContractRegistrationRequestProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ContractRegistrationRequestProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ContractRegistrationRequestProposal, a, b);
    }
}
ContractRegistrationRequestProposal.runtime = proto3;
ContractRegistrationRequestProposal.typeName = "injective.wasmx.v1.ContractRegistrationRequestProposal";
ContractRegistrationRequestProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "contract_registration_request", kind: "message", T: ContractRegistrationRequest },
]);
/**
 * @generated from message injective.wasmx.v1.BatchContractRegistrationRequestProposal
 */
export class BatchContractRegistrationRequestProposal extends Message {
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
         * @generated from field: repeated injective.wasmx.v1.ContractRegistrationRequest contract_registration_requests = 3;
         */
        this.contractRegistrationRequests = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BatchContractRegistrationRequestProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BatchContractRegistrationRequestProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BatchContractRegistrationRequestProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BatchContractRegistrationRequestProposal, a, b);
    }
}
BatchContractRegistrationRequestProposal.runtime = proto3;
BatchContractRegistrationRequestProposal.typeName = "injective.wasmx.v1.BatchContractRegistrationRequestProposal";
BatchContractRegistrationRequestProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "contract_registration_requests", kind: "message", T: ContractRegistrationRequest, repeated: true },
]);
/**
 * @generated from message injective.wasmx.v1.BatchContractDeregistrationProposal
 */
export class BatchContractDeregistrationProposal extends Message {
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
         * @generated from field: repeated string contracts = 3;
         */
        this.contracts = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BatchContractDeregistrationProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BatchContractDeregistrationProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BatchContractDeregistrationProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BatchContractDeregistrationProposal, a, b);
    }
}
BatchContractDeregistrationProposal.runtime = proto3;
BatchContractDeregistrationProposal.typeName = "injective.wasmx.v1.BatchContractDeregistrationProposal";
BatchContractDeregistrationProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "contracts", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message injective.wasmx.v1.ContractRegistrationRequest
 */
export class ContractRegistrationRequest extends Message {
    constructor(data) {
        super();
        /**
         * Unique Identifier for contract instance to be registered.
         *
         * @generated from field: string contract_address = 1;
         */
        this.contractAddress = "";
        /**
         * Maximum gas to be used for the smart contract execution.
         *
         * @generated from field: uint64 gas_limit = 2;
         */
        this.gasLimit = protoInt64.zero;
        /**
         * gas price to be used for the smart contract execution.
         *
         * @generated from field: uint64 gas_price = 3;
         */
        this.gasPrice = protoInt64.zero;
        /**
         * @generated from field: bool should_pin_contract = 4;
         */
        this.shouldPinContract = false;
        /**
         * if true contract owner can update it, if false only current code_id will be
         * allowed to be executed
         *
         * @generated from field: bool is_migration_allowed = 5;
         */
        this.isMigrationAllowed = false;
        /**
         * code_id of the contract being registered - will be verified upon every
         * execution but only if is_migration_allowed is false
         *
         * @generated from field: uint64 code_id = 6;
         */
        this.codeId = protoInt64.zero;
        /**
         * Optional address of admin account (that will be allowed to pause or update
         * contract params)
         *
         * @generated from field: string admin_address = 7;
         */
        this.adminAddress = "";
        /**
         * Optional address of the contract that grants fees. Must be set if
         * funding_mode is other than SelfFunded
         *
         * @generated from field: string granter_address = 8;
         */
        this.granterAddress = "";
        /**
         * Specifies how the contract will fund its execution
         *
         * @generated from field: injective.wasmx.v1.FundingMode funding_mode = 9;
         */
        this.fundingMode = FundingMode.Unspecified;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ContractRegistrationRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ContractRegistrationRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ContractRegistrationRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ContractRegistrationRequest, a, b);
    }
}
ContractRegistrationRequest.runtime = proto3;
ContractRegistrationRequest.typeName = "injective.wasmx.v1.ContractRegistrationRequest";
ContractRegistrationRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "gas_limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "gas_price", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "should_pin_contract", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "is_migration_allowed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "admin_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "granter_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "funding_mode", kind: "enum", T: proto3.getEnumType(FundingMode) },
]);
/**
 * @generated from message injective.wasmx.v1.BatchStoreCodeProposal
 */
export class BatchStoreCodeProposal extends Message {
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
         * @generated from field: repeated cosmwasm.wasm.v1.StoreCodeProposal proposals = 3;
         */
        this.proposals = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BatchStoreCodeProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BatchStoreCodeProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BatchStoreCodeProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BatchStoreCodeProposal, a, b);
    }
}
BatchStoreCodeProposal.runtime = proto3;
BatchStoreCodeProposal.typeName = "injective.wasmx.v1.BatchStoreCodeProposal";
BatchStoreCodeProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "proposals", kind: "message", T: StoreCodeProposal, repeated: true },
]);
//# sourceMappingURL=proposal_pb.js.map