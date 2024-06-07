import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FundingMode } from "./proposal_pb.js";
/**
 * @generated from message injective.wasmx.v1.EventContractExecution
 */
export declare class EventContractExecution extends Message<EventContractExecution> {
    /**
     * @generated from field: string contract_address = 1;
     */
    contractAddress: string;
    /**
     * @generated from field: bytes response = 2;
     */
    response: Uint8Array;
    /**
     * @generated from field: string other_error = 3;
     */
    otherError: string;
    /**
     * @generated from field: string execution_error = 4;
     */
    executionError: string;
    constructor(data?: PartialMessage<EventContractExecution>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.EventContractExecution";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventContractExecution;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventContractExecution;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventContractExecution;
    static equals(a: EventContractExecution | PlainMessage<EventContractExecution> | undefined, b: EventContractExecution | PlainMessage<EventContractExecution> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.EventContractRegistered
 */
export declare class EventContractRegistered extends Message<EventContractRegistered> {
    /**
     * @generated from field: string contract_address = 1;
     */
    contractAddress: string;
    /**
     * @generated from field: uint64 gas_price = 3;
     */
    gasPrice: bigint;
    /**
     * @generated from field: bool should_pin_contract = 4;
     */
    shouldPinContract: boolean;
    /**
     * @generated from field: bool is_migration_allowed = 5;
     */
    isMigrationAllowed: boolean;
    /**
     * @generated from field: uint64 code_id = 6;
     */
    codeId: bigint;
    /**
     * @generated from field: string admin_address = 7;
     */
    adminAddress: string;
    /**
     * @generated from field: string granter_address = 8;
     */
    granterAddress: string;
    /**
     * @generated from field: injective.wasmx.v1.FundingMode funding_mode = 9;
     */
    fundingMode: FundingMode;
    constructor(data?: PartialMessage<EventContractRegistered>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.EventContractRegistered";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventContractRegistered;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventContractRegistered;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventContractRegistered;
    static equals(a: EventContractRegistered | PlainMessage<EventContractRegistered> | undefined, b: EventContractRegistered | PlainMessage<EventContractRegistered> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.EventContractDeregistered
 */
export declare class EventContractDeregistered extends Message<EventContractDeregistered> {
    /**
     * @generated from field: string contract_address = 1;
     */
    contractAddress: string;
    constructor(data?: PartialMessage<EventContractDeregistered>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.EventContractDeregistered";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventContractDeregistered;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventContractDeregistered;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventContractDeregistered;
    static equals(a: EventContractDeregistered | PlainMessage<EventContractDeregistered> | undefined, b: EventContractDeregistered | PlainMessage<EventContractDeregistered> | undefined): boolean;
}
//# sourceMappingURL=events_pb.d.ts.map