import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FundingMode } from "./proposal_pb.js";
/**
 * @generated from message injective.wasmx.v1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * Set the status to active to indicate that contracts can be executed in
     * begin blocker.
     *
     * @generated from field: bool is_execution_enabled = 1;
     */
    isExecutionEnabled: boolean;
    /**
     * Maximum aggregate total gas to be used for the contract executions in the
     * BeginBlocker.
     *
     * @generated from field: uint64 max_begin_block_total_gas = 2;
     */
    maxBeginBlockTotalGas: bigint;
    /**
     * the maximum gas limit each individual contract can consume in the
     * BeginBlocker.
     *
     * @generated from field: uint64 max_contract_gas_limit = 3;
     */
    maxContractGasLimit: bigint;
    /**
     * min_gas_price defines the minimum gas price the contracts must pay to be
     * executed in the BeginBlocker.
     *
     * @generated from field: uint64 min_gas_price = 4;
     */
    minGasPrice: bigint;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.RegisteredContract
 */
export declare class RegisteredContract extends Message<RegisteredContract> {
    /**
     * limit of gas per BB execution
     *
     * @generated from field: uint64 gas_limit = 1;
     */
    gasLimit: bigint;
    /**
     * gas price that contract is willing to pay for execution in BeginBlocker
     *
     * @generated from field: uint64 gas_price = 2;
     */
    gasPrice: bigint;
    /**
     * is contract currently active
     *
     * @generated from field: bool is_executable = 3;
     */
    isExecutable: boolean;
    /**
     * code_id that is allowed to be executed (to prevent malicious updates) - if
     * nil/0 any code_id can be executed
     *
     * @generated from field: uint64 code_id = 4;
     */
    codeId: bigint;
    /**
     * optional - admin addr that is allowed to update contract data
     *
     * @generated from field: string admin_address = 5;
     */
    adminAddress: string;
    /**
     * Optional: address of the contract granting fee
     * Must be set if fund_mode is GrantOnly
     *
     * @generated from field: string granter_address = 6;
     */
    granterAddress: string;
    /**
     * funding mode
     *
     * @generated from field: injective.wasmx.v1.FundingMode fund_mode = 7;
     */
    fundMode: FundingMode;
    constructor(data?: PartialMessage<RegisteredContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.RegisteredContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisteredContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisteredContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisteredContract;
    static equals(a: RegisteredContract | PlainMessage<RegisteredContract> | undefined, b: RegisteredContract | PlainMessage<RegisteredContract> | undefined): boolean;
}
//# sourceMappingURL=wasmx_pb.d.ts.map