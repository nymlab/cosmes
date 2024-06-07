import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * GenesisState defines 08-wasm's keeper genesis state
 *
 * @generated from message ibc.lightclients.wasm.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * uploaded light client wasm contracts
     *
     * @generated from field: repeated ibc.lightclients.wasm.v1.Contract contracts = 1;
     */
    contracts: Contract[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * Contract stores contract code
 *
 * @generated from message ibc.lightclients.wasm.v1.Contract
 */
export declare class Contract extends Message<Contract> {
    /**
     * contract byte code
     *
     * @generated from field: bytes code_bytes = 1;
     */
    codeBytes: Uint8Array;
    constructor(data?: PartialMessage<Contract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.Contract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Contract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Contract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Contract;
    static equals(a: Contract | PlainMessage<Contract> | undefined, b: Contract | PlainMessage<Contract> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map