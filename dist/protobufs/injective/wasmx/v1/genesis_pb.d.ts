import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params, RegisteredContract } from "./wasmx_pb.js";
/**
 * @generated from message injective.wasmx.v1.RegisteredContractWithAddress
 */
export declare class RegisteredContractWithAddress extends Message<RegisteredContractWithAddress> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: injective.wasmx.v1.RegisteredContract registered_contract = 2;
     */
    registeredContract?: RegisteredContract;
    constructor(data?: PartialMessage<RegisteredContractWithAddress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.RegisteredContractWithAddress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisteredContractWithAddress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisteredContractWithAddress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisteredContractWithAddress;
    static equals(a: RegisteredContractWithAddress | PlainMessage<RegisteredContractWithAddress> | undefined, b: RegisteredContractWithAddress | PlainMessage<RegisteredContractWithAddress> | undefined): boolean;
}
/**
 * GenesisState defines the wasmx module's genesis state.
 *
 * @generated from message injective.wasmx.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines all the parameters of related to wasmx.
     *
     * @generated from field: injective.wasmx.v1.Params params = 1;
     */
    params?: Params;
    /**
     * registered_contracts is an array containing the genesis registered
     * contracts
     *
     * @generated from field: repeated injective.wasmx.v1.RegisteredContractWithAddress registered_contracts = 2;
     */
    registeredContracts: RegisteredContractWithAddress[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map