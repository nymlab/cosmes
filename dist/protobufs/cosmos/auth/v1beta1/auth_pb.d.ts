import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 *
 * @generated from message cosmos.auth.v1beta1.BaseAccount
 */
export declare class BaseAccount extends Message<BaseAccount> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: google.protobuf.Any pub_key = 2;
     */
    pubKey?: Any;
    /**
     * @generated from field: uint64 account_number = 3;
     */
    accountNumber: bigint;
    /**
     * @generated from field: uint64 sequence = 4;
     */
    sequence: bigint;
    constructor(data?: PartialMessage<BaseAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.BaseAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BaseAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BaseAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BaseAccount;
    static equals(a: BaseAccount | PlainMessage<BaseAccount> | undefined, b: BaseAccount | PlainMessage<BaseAccount> | undefined): boolean;
}
/**
 * ModuleAccount defines an account for modules that holds coins on a pool.
 *
 * @generated from message cosmos.auth.v1beta1.ModuleAccount
 */
export declare class ModuleAccount extends Message<ModuleAccount> {
    /**
     * @generated from field: cosmos.auth.v1beta1.BaseAccount base_account = 1;
     */
    baseAccount?: BaseAccount;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: repeated string permissions = 3;
     */
    permissions: string[];
    constructor(data?: PartialMessage<ModuleAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.ModuleAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleAccount;
    static equals(a: ModuleAccount | PlainMessage<ModuleAccount> | undefined, b: ModuleAccount | PlainMessage<ModuleAccount> | undefined): boolean;
}
/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.auth.v1beta1.ModuleCredential
 */
export declare class ModuleCredential extends Message<ModuleCredential> {
    /**
     * module_name is the name of the module used for address derivation (passed into address.Module).
     *
     * @generated from field: string module_name = 1;
     */
    moduleName: string;
    /**
     * derivation_keys is for deriving a module account address (passed into address.Module)
     * adding more keys creates sub-account addresses (passed into address.Derive)
     *
     * @generated from field: repeated bytes derivation_keys = 2;
     */
    derivationKeys: Uint8Array[];
    constructor(data?: PartialMessage<ModuleCredential>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.ModuleCredential";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleCredential;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleCredential;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleCredential;
    static equals(a: ModuleCredential | PlainMessage<ModuleCredential> | undefined, b: ModuleCredential | PlainMessage<ModuleCredential> | undefined): boolean;
}
/**
 * Params defines the parameters for the auth module.
 *
 * @generated from message cosmos.auth.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * @generated from field: uint64 max_memo_characters = 1;
     */
    maxMemoCharacters: bigint;
    /**
     * @generated from field: uint64 tx_sig_limit = 2;
     */
    txSigLimit: bigint;
    /**
     * @generated from field: uint64 tx_size_cost_per_byte = 3;
     */
    txSizeCostPerByte: bigint;
    /**
     * @generated from field: uint64 sig_verify_cost_ed25519 = 4;
     */
    sigVerifyCostEd25519: bigint;
    /**
     * @generated from field: uint64 sig_verify_cost_secp256k1 = 5;
     */
    sigVerifyCostSecp256k1: bigint;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=auth_pb.d.ts.map