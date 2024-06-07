// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/wasmx/v1/events.proto (package injective.wasmx.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { FundingMode } from "./proposal_pb.js";
/**
 * @generated from message injective.wasmx.v1.EventContractExecution
 */
export class EventContractExecution extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string contract_address = 1;
         */
        this.contractAddress = "";
        /**
         * @generated from field: bytes response = 2;
         */
        this.response = new Uint8Array(0);
        /**
         * @generated from field: string other_error = 3;
         */
        this.otherError = "";
        /**
         * @generated from field: string execution_error = 4;
         */
        this.executionError = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventContractExecution().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventContractExecution().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventContractExecution().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventContractExecution, a, b);
    }
}
EventContractExecution.runtime = proto3;
EventContractExecution.typeName = "injective.wasmx.v1.EventContractExecution";
EventContractExecution.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "response", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "other_error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "execution_error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.wasmx.v1.EventContractRegistered
 */
export class EventContractRegistered extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string contract_address = 1;
         */
        this.contractAddress = "";
        /**
         * @generated from field: uint64 gas_price = 3;
         */
        this.gasPrice = protoInt64.zero;
        /**
         * @generated from field: bool should_pin_contract = 4;
         */
        this.shouldPinContract = false;
        /**
         * @generated from field: bool is_migration_allowed = 5;
         */
        this.isMigrationAllowed = false;
        /**
         * @generated from field: uint64 code_id = 6;
         */
        this.codeId = protoInt64.zero;
        /**
         * @generated from field: string admin_address = 7;
         */
        this.adminAddress = "";
        /**
         * @generated from field: string granter_address = 8;
         */
        this.granterAddress = "";
        /**
         * @generated from field: injective.wasmx.v1.FundingMode funding_mode = 9;
         */
        this.fundingMode = FundingMode.Unspecified;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventContractRegistered().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventContractRegistered().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventContractRegistered().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventContractRegistered, a, b);
    }
}
EventContractRegistered.runtime = proto3;
EventContractRegistered.typeName = "injective.wasmx.v1.EventContractRegistered";
EventContractRegistered.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "gas_price", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "should_pin_contract", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "is_migration_allowed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "admin_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "granter_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "funding_mode", kind: "enum", T: proto3.getEnumType(FundingMode) },
]);
/**
 * @generated from message injective.wasmx.v1.EventContractDeregistered
 */
export class EventContractDeregistered extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string contract_address = 1;
         */
        this.contractAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventContractDeregistered().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventContractDeregistered().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventContractDeregistered().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventContractDeregistered, a, b);
    }
}
EventContractDeregistered.runtime = proto3;
EventContractDeregistered.typeName = "injective.wasmx.v1.EventContractDeregistered";
EventContractDeregistered.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=events_pb.js.map