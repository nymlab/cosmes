import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { BIP44Params } from "../../hd/v1/hd_pb.js";
/**
 * Record is used for representing a key in the keyring.
 *
 * @generated from message cosmos.crypto.keyring.v1.Record
 */
export declare class Record extends Message<Record> {
    /**
     * name represents a name of Record
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * pub_key represents a public key in any format
     *
     * @generated from field: google.protobuf.Any pub_key = 2;
     */
    pubKey?: Any;
    /**
     * Record contains one of the following items
     *
     * @generated from oneof cosmos.crypto.keyring.v1.Record.item
     */
    item: {
        /**
         * local stores the private key locally.
         *
         * @generated from field: cosmos.crypto.keyring.v1.Record.Local local = 3;
         */
        value: Record_Local;
        case: "local";
    } | {
        /**
         * ledger stores the information about a Ledger key.
         *
         * @generated from field: cosmos.crypto.keyring.v1.Record.Ledger ledger = 4;
         */
        value: Record_Ledger;
        case: "ledger";
    } | {
        /**
         * Multi does not store any other information.
         *
         * @generated from field: cosmos.crypto.keyring.v1.Record.Multi multi = 5;
         */
        value: Record_Multi;
        case: "multi";
    } | {
        /**
         * Offline does not store any other information.
         *
         * @generated from field: cosmos.crypto.keyring.v1.Record.Offline offline = 6;
         */
        value: Record_Offline;
        case: "offline";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<Record>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.keyring.v1.Record";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Record;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Record;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Record;
    static equals(a: Record | PlainMessage<Record> | undefined, b: Record | PlainMessage<Record> | undefined): boolean;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Local
 */
export declare class Record_Local extends Message<Record_Local> {
    /**
     * @generated from field: google.protobuf.Any priv_key = 1;
     */
    privKey?: Any;
    constructor(data?: PartialMessage<Record_Local>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.keyring.v1.Record.Local";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Record_Local;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Record_Local;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Record_Local;
    static equals(a: Record_Local | PlainMessage<Record_Local> | undefined, b: Record_Local | PlainMessage<Record_Local> | undefined): boolean;
}
/**
 * Ledger item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Ledger
 */
export declare class Record_Ledger extends Message<Record_Ledger> {
    /**
     * @generated from field: cosmos.crypto.hd.v1.BIP44Params path = 1;
     */
    path?: BIP44Params;
    constructor(data?: PartialMessage<Record_Ledger>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.keyring.v1.Record.Ledger";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Record_Ledger;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Record_Ledger;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Record_Ledger;
    static equals(a: Record_Ledger | PlainMessage<Record_Ledger> | undefined, b: Record_Ledger | PlainMessage<Record_Ledger> | undefined): boolean;
}
/**
 * Multi item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Multi
 */
export declare class Record_Multi extends Message<Record_Multi> {
    constructor(data?: PartialMessage<Record_Multi>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.keyring.v1.Record.Multi";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Record_Multi;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Record_Multi;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Record_Multi;
    static equals(a: Record_Multi | PlainMessage<Record_Multi> | undefined, b: Record_Multi | PlainMessage<Record_Multi> | undefined): boolean;
}
/**
 * Offline item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Offline
 */
export declare class Record_Offline extends Message<Record_Offline> {
    constructor(data?: PartialMessage<Record_Offline>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.keyring.v1.Record.Offline";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Record_Offline;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Record_Offline;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Record_Offline;
    static equals(a: Record_Offline | PlainMessage<Record_Offline> | undefined, b: Record_Offline | PlainMessage<Record_Offline> | undefined): boolean;
}
//# sourceMappingURL=record_pb.d.ts.map