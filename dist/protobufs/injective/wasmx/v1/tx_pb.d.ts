import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./wasmx_pb.js";
import { ContractRegistrationRequest } from "./proposal_pb.js";
/**
 * MsgExecuteContractCompat submits the given message data to a smart contract,
 * compatible with EIP712
 *
 * @generated from message injective.wasmx.v1.MsgExecuteContractCompat
 */
export declare class MsgExecuteContractCompat extends Message<MsgExecuteContractCompat> {
    /**
     * Sender is the that actor that signed the messages
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Contract is the address of the smart contract
     *
     * @generated from field: string contract = 2;
     */
    contract: string;
    /**
     * Msg json encoded message to be passed to the contract
     *
     * @generated from field: string msg = 3;
     */
    msg: string;
    /**
     * Funds coins that are transferred to the contract on execution
     *
     * @generated from field: string funds = 4;
     */
    funds: string;
    constructor(data?: PartialMessage<MsgExecuteContractCompat>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.MsgExecuteContractCompat";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExecuteContractCompat;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExecuteContractCompat;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExecuteContractCompat;
    static equals(a: MsgExecuteContractCompat | PlainMessage<MsgExecuteContractCompat> | undefined, b: MsgExecuteContractCompat | PlainMessage<MsgExecuteContractCompat> | undefined): boolean;
}
/**
 * MsgExecuteContractCompatResponse returns execution result data.
 *
 * @generated from message injective.wasmx.v1.MsgExecuteContractCompatResponse
 */
export declare class MsgExecuteContractCompatResponse extends Message<MsgExecuteContractCompatResponse> {
    /**
     * Data contains bytes to returned from the contract
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<MsgExecuteContractCompatResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.MsgExecuteContractCompatResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExecuteContractCompatResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExecuteContractCompatResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExecuteContractCompatResponse;
    static equals(a: MsgExecuteContractCompatResponse | PlainMessage<MsgExecuteContractCompatResponse> | undefined, b: MsgExecuteContractCompatResponse | PlainMessage<MsgExecuteContractCompatResponse> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.MsgUpdateContract
 */
export declare class MsgUpdateContract extends Message<MsgUpdateContract> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Unique Identifier for contract instance to be registered.
     *
     * @generated from field: string contract_address = 2;
     */
    contractAddress: string;
    /**
     * Maximum gas to be used for the smart contract execution.
     *
     * @generated from field: uint64 gas_limit = 3;
     */
    gasLimit: bigint;
    /**
     * gas price to be used for the smart contract execution.
     *
     * @generated from field: uint64 gas_price = 4;
     */
    gasPrice: bigint;
    /**
     * optional - admin account that will be allowed to perform any changes
     *
     * @generated from field: string admin_address = 5;
     */
    adminAddress: string;
    constructor(data?: PartialMessage<MsgUpdateContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.MsgUpdateContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateContract;
    static equals(a: MsgUpdateContract | PlainMessage<MsgUpdateContract> | undefined, b: MsgUpdateContract | PlainMessage<MsgUpdateContract> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.MsgUpdateContractResponse
 */
export declare class MsgUpdateContractResponse extends Message<MsgUpdateContractResponse> {
    constructor(data?: PartialMessage<MsgUpdateContractResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.MsgUpdateContractResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateContractResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateContractResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateContractResponse;
    static equals(a: MsgUpdateContractResponse | PlainMessage<MsgUpdateContractResponse> | undefined, b: MsgUpdateContractResponse | PlainMessage<MsgUpdateContractResponse> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.MsgActivateContract
 */
export declare class MsgActivateContract extends Message<MsgActivateContract> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Unique Identifier for contract instance to be activated.
     *
     * @generated from field: string contract_address = 2;
     */
    contractAddress: string;
    constructor(data?: PartialMessage<MsgActivateContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.MsgActivateContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgActivateContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgActivateContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgActivateContract;
    static equals(a: MsgActivateContract | PlainMessage<MsgActivateContract> | undefined, b: MsgActivateContract | PlainMessage<MsgActivateContract> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.MsgActivateContractResponse
 */
export declare class MsgActivateContractResponse extends Message<MsgActivateContractResponse> {
    constructor(data?: PartialMessage<MsgActivateContractResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.MsgActivateContractResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgActivateContractResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgActivateContractResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgActivateContractResponse;
    static equals(a: MsgActivateContractResponse | PlainMessage<MsgActivateContractResponse> | undefined, b: MsgActivateContractResponse | PlainMessage<MsgActivateContractResponse> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.MsgDeactivateContract
 */
export declare class MsgDeactivateContract extends Message<MsgDeactivateContract> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Unique Identifier for contract instance to be deactivated.
     *
     * @generated from field: string contract_address = 2;
     */
    contractAddress: string;
    constructor(data?: PartialMessage<MsgDeactivateContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.MsgDeactivateContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDeactivateContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDeactivateContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDeactivateContract;
    static equals(a: MsgDeactivateContract | PlainMessage<MsgDeactivateContract> | undefined, b: MsgDeactivateContract | PlainMessage<MsgDeactivateContract> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.MsgDeactivateContractResponse
 */
export declare class MsgDeactivateContractResponse extends Message<MsgDeactivateContractResponse> {
    constructor(data?: PartialMessage<MsgDeactivateContractResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.MsgDeactivateContractResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDeactivateContractResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDeactivateContractResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDeactivateContractResponse;
    static equals(a: MsgDeactivateContractResponse | PlainMessage<MsgDeactivateContractResponse> | undefined, b: MsgDeactivateContractResponse | PlainMessage<MsgDeactivateContractResponse> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the wasmx parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: injective.wasmx.v1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.MsgRegisterContract
 */
export declare class MsgRegisterContract extends Message<MsgRegisterContract> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: injective.wasmx.v1.ContractRegistrationRequest contract_registration_request = 2;
     */
    contractRegistrationRequest?: ContractRegistrationRequest;
    constructor(data?: PartialMessage<MsgRegisterContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.MsgRegisterContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterContract;
    static equals(a: MsgRegisterContract | PlainMessage<MsgRegisterContract> | undefined, b: MsgRegisterContract | PlainMessage<MsgRegisterContract> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.MsgRegisterContractResponse
 */
export declare class MsgRegisterContractResponse extends Message<MsgRegisterContractResponse> {
    constructor(data?: PartialMessage<MsgRegisterContractResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.MsgRegisterContractResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterContractResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterContractResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterContractResponse;
    static equals(a: MsgRegisterContractResponse | PlainMessage<MsgRegisterContractResponse> | undefined, b: MsgRegisterContractResponse | PlainMessage<MsgRegisterContractResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map