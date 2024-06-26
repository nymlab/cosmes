import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
/**
 * Params defines the parameters for the bank module.
 *
 * @generated from message cosmos.bank.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * Deprecated: Use of SendEnabled in params is deprecated.
     * For genesis, use the newly added send_enabled field in the genesis object.
     * Storage, lookup, and manipulation of this information is now in the keeper.
     *
     * As of cosmos-sdk 0.47, this only exists for backwards compatibility of genesis files.
     *
     * @generated from field: repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 1 [deprecated = true];
     * @deprecated
     */
    sendEnabled: SendEnabled[];
    /**
     * @generated from field: bool default_send_enabled = 2;
     */
    defaultSendEnabled: boolean;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 *
 * @generated from message cosmos.bank.v1beta1.SendEnabled
 */
export declare class SendEnabled extends Message<SendEnabled> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: bool enabled = 2;
     */
    enabled: boolean;
    constructor(data?: PartialMessage<SendEnabled>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.SendEnabled";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendEnabled;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendEnabled;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendEnabled;
    static equals(a: SendEnabled | PlainMessage<SendEnabled> | undefined, b: SendEnabled | PlainMessage<SendEnabled> | undefined): boolean;
}
/**
 * Input models transaction input.
 *
 * @generated from message cosmos.bank.v1beta1.Input
 */
export declare class Input extends Message<Input> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<Input>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.Input";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Input;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Input;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Input;
    static equals(a: Input | PlainMessage<Input> | undefined, b: Input | PlainMessage<Input> | undefined): boolean;
}
/**
 * Output models transaction outputs.
 *
 * @generated from message cosmos.bank.v1beta1.Output
 */
export declare class Output extends Message<Output> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<Output>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.Output";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Output;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Output;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Output;
    static equals(a: Output | PlainMessage<Output> | undefined, b: Output | PlainMessage<Output> | undefined): boolean;
}
/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 *
 * @generated from message cosmos.bank.v1beta1.Supply
 * @deprecated
 */
export declare class Supply extends Message<Supply> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin total = 1;
     */
    total: Coin[];
    constructor(data?: PartialMessage<Supply>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.Supply";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Supply;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Supply;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Supply;
    static equals(a: Supply | PlainMessage<Supply> | undefined, b: Supply | PlainMessage<Supply> | undefined): boolean;
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 *
 * @generated from message cosmos.bank.v1beta1.DenomUnit
 */
export declare class DenomUnit extends Message<DenomUnit> {
    /**
     * denom represents the string name of the given denom unit (e.g uatom).
     *
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * exponent represents power of 10 exponent that one must
     * raise the base_denom to in order to equal the given DenomUnit's denom
     * 1 denom = 10^exponent base_denom
     * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
     * exponent = 6, thus: 1 atom = 10^6 uatom).
     *
     * @generated from field: uint32 exponent = 2;
     */
    exponent: number;
    /**
     * aliases is a list of string aliases for the given denom
     *
     * @generated from field: repeated string aliases = 3;
     */
    aliases: string[];
    constructor(data?: PartialMessage<DenomUnit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.DenomUnit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DenomUnit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DenomUnit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DenomUnit;
    static equals(a: DenomUnit | PlainMessage<DenomUnit> | undefined, b: DenomUnit | PlainMessage<DenomUnit> | undefined): boolean;
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 *
 * @generated from message cosmos.bank.v1beta1.Metadata
 */
export declare class Metadata extends Message<Metadata> {
    /**
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * denom_units represents the list of DenomUnit's for a given coin
     *
     * @generated from field: repeated cosmos.bank.v1beta1.DenomUnit denom_units = 2;
     */
    denomUnits: DenomUnit[];
    /**
     * base represents the base denom (should be the DenomUnit with exponent = 0).
     *
     * @generated from field: string base = 3;
     */
    base: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     *
     * @generated from field: string display = 4;
     */
    display: string;
    /**
     * name defines the name of the token (eg: Cosmos Atom)
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from field: string name = 5;
     */
    name: string;
    /**
     * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
     * be the same as the display.
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from field: string symbol = 6;
     */
    symbol: string;
    /**
     * URI to a document (on or off-chain) that contains additional information. Optional.
     *
     * Since: cosmos-sdk 0.46
     *
     * @generated from field: string uri = 7;
     */
    uri: string;
    /**
     * URIHash is a sha256 hash of a document pointed by URI. It's used to verify that
     * the document didn't change. Optional.
     *
     * Since: cosmos-sdk 0.46
     *
     * @generated from field: string uri_hash = 8;
     */
    uriHash: string;
    constructor(data?: PartialMessage<Metadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.Metadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata;
    static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean;
}
//# sourceMappingURL=bank_pb.d.ts.map