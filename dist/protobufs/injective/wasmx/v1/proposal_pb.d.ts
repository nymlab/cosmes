import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { StoreCodeProposal } from "../../../cosmwasm/wasm/v1/proposal_legacy_pb.js";
/**
 * @generated from enum injective.wasmx.v1.FundingMode
 */
export declare enum FundingMode {
    /**
     * @generated from enum value: Unspecified = 0;
     */
    Unspecified = 0,
    /**
     * @generated from enum value: SelfFunded = 1;
     */
    SelfFunded = 1,
    /**
     * @generated from enum value: GrantOnly = 2;
     */
    GrantOnly = 2,
    /**
     * @generated from enum value: Dual = 3;
     */
    Dual = 3
}
/**
 * @generated from message injective.wasmx.v1.ContractRegistrationRequestProposal
 */
export declare class ContractRegistrationRequestProposal extends Message<ContractRegistrationRequestProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: injective.wasmx.v1.ContractRegistrationRequest contract_registration_request = 3;
     */
    contractRegistrationRequest?: ContractRegistrationRequest;
    constructor(data?: PartialMessage<ContractRegistrationRequestProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.ContractRegistrationRequestProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractRegistrationRequestProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractRegistrationRequestProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractRegistrationRequestProposal;
    static equals(a: ContractRegistrationRequestProposal | PlainMessage<ContractRegistrationRequestProposal> | undefined, b: ContractRegistrationRequestProposal | PlainMessage<ContractRegistrationRequestProposal> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.BatchContractRegistrationRequestProposal
 */
export declare class BatchContractRegistrationRequestProposal extends Message<BatchContractRegistrationRequestProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated injective.wasmx.v1.ContractRegistrationRequest contract_registration_requests = 3;
     */
    contractRegistrationRequests: ContractRegistrationRequest[];
    constructor(data?: PartialMessage<BatchContractRegistrationRequestProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.BatchContractRegistrationRequestProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchContractRegistrationRequestProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchContractRegistrationRequestProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchContractRegistrationRequestProposal;
    static equals(a: BatchContractRegistrationRequestProposal | PlainMessage<BatchContractRegistrationRequestProposal> | undefined, b: BatchContractRegistrationRequestProposal | PlainMessage<BatchContractRegistrationRequestProposal> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.BatchContractDeregistrationProposal
 */
export declare class BatchContractDeregistrationProposal extends Message<BatchContractDeregistrationProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated string contracts = 3;
     */
    contracts: string[];
    constructor(data?: PartialMessage<BatchContractDeregistrationProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.BatchContractDeregistrationProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchContractDeregistrationProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchContractDeregistrationProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchContractDeregistrationProposal;
    static equals(a: BatchContractDeregistrationProposal | PlainMessage<BatchContractDeregistrationProposal> | undefined, b: BatchContractDeregistrationProposal | PlainMessage<BatchContractDeregistrationProposal> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.ContractRegistrationRequest
 */
export declare class ContractRegistrationRequest extends Message<ContractRegistrationRequest> {
    /**
     * Unique Identifier for contract instance to be registered.
     *
     * @generated from field: string contract_address = 1;
     */
    contractAddress: string;
    /**
     * Maximum gas to be used for the smart contract execution.
     *
     * @generated from field: uint64 gas_limit = 2;
     */
    gasLimit: bigint;
    /**
     * gas price to be used for the smart contract execution.
     *
     * @generated from field: uint64 gas_price = 3;
     */
    gasPrice: bigint;
    /**
     * @generated from field: bool should_pin_contract = 4;
     */
    shouldPinContract: boolean;
    /**
     * if true contract owner can update it, if false only current code_id will be
     * allowed to be executed
     *
     * @generated from field: bool is_migration_allowed = 5;
     */
    isMigrationAllowed: boolean;
    /**
     * code_id of the contract being registered - will be verified upon every
     * execution but only if is_migration_allowed is false
     *
     * @generated from field: uint64 code_id = 6;
     */
    codeId: bigint;
    /**
     * Optional address of admin account (that will be allowed to pause or update
     * contract params)
     *
     * @generated from field: string admin_address = 7;
     */
    adminAddress: string;
    /**
     * Optional address of the contract that grants fees. Must be set if
     * funding_mode is other than SelfFunded
     *
     * @generated from field: string granter_address = 8;
     */
    granterAddress: string;
    /**
     * Specifies how the contract will fund its execution
     *
     * @generated from field: injective.wasmx.v1.FundingMode funding_mode = 9;
     */
    fundingMode: FundingMode;
    constructor(data?: PartialMessage<ContractRegistrationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.ContractRegistrationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractRegistrationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractRegistrationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractRegistrationRequest;
    static equals(a: ContractRegistrationRequest | PlainMessage<ContractRegistrationRequest> | undefined, b: ContractRegistrationRequest | PlainMessage<ContractRegistrationRequest> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.BatchStoreCodeProposal
 */
export declare class BatchStoreCodeProposal extends Message<BatchStoreCodeProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated cosmwasm.wasm.v1.StoreCodeProposal proposals = 3;
     */
    proposals: StoreCodeProposal[];
    constructor(data?: PartialMessage<BatchStoreCodeProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.BatchStoreCodeProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchStoreCodeProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchStoreCodeProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchStoreCodeProposal;
    static equals(a: BatchStoreCodeProposal | PlainMessage<BatchStoreCodeProposal> | undefined, b: BatchStoreCodeProposal | PlainMessage<BatchStoreCodeProposal> | undefined): boolean;
}
//# sourceMappingURL=proposal_pb.d.ts.map