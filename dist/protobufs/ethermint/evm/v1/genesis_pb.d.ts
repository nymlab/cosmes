import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params, State } from "./evm_pb.js";
/**
 * GenesisState defines the evm module's genesis state.
 *
 * @generated from message ethermint.evm.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * accounts is an array containing the ethereum genesis accounts.
     *
     * @generated from field: repeated ethermint.evm.v1.GenesisAccount accounts = 1;
     */
    accounts: GenesisAccount[];
    /**
     * params defines all the parameters of the module.
     *
     * @generated from field: ethermint.evm.v1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * GenesisAccount defines an account to be initialized in the genesis state.
 * Its main difference between with Geth's GenesisAccount is that it uses a
 * custom storage type and that it doesn't contain the private key field.
 *
 * @generated from message ethermint.evm.v1.GenesisAccount
 */
export declare class GenesisAccount extends Message<GenesisAccount> {
    /**
     * address defines an ethereum hex formated address of an account
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * code defines the hex bytes of the account code.
     *
     * @generated from field: string code = 2;
     */
    code: string;
    /**
     * storage defines the set of state key values for the account.
     *
     * @generated from field: repeated ethermint.evm.v1.State storage = 3;
     */
    storage: State[];
    constructor(data?: PartialMessage<GenesisAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.GenesisAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisAccount;
    static equals(a: GenesisAccount | PlainMessage<GenesisAccount> | undefined, b: GenesisAccount | PlainMessage<GenesisAccount> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map