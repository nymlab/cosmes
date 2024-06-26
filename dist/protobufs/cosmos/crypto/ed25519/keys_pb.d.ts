import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * PubKey is an ed25519 public key for handling Tendermint keys in SDK.
 * It's needed for Any serialization and SDK compatibility.
 * It must not be used in a non Tendermint key context because it doesn't implement
 * ADR-28. Nevertheless, you will like to use ed25519 in app user level
 * then you must create a new proto message and follow ADR-28 for Address construction.
 *
 * @generated from message cosmos.crypto.ed25519.PubKey
 */
export declare class PubKey extends Message<PubKey> {
    /**
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    constructor(data?: PartialMessage<PubKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.ed25519.PubKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PubKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PubKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PubKey;
    static equals(a: PubKey | PlainMessage<PubKey> | undefined, b: PubKey | PlainMessage<PubKey> | undefined): boolean;
}
/**
 * Deprecated: PrivKey defines a ed25519 private key.
 * NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.
 *
 * @generated from message cosmos.crypto.ed25519.PrivKey
 */
export declare class PrivKey extends Message<PrivKey> {
    /**
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    constructor(data?: PartialMessage<PrivKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.ed25519.PrivKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrivKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrivKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrivKey;
    static equals(a: PrivKey | PlainMessage<PrivKey> | undefined, b: PrivKey | PlainMessage<PrivKey> | undefined): boolean;
}
//# sourceMappingURL=keys_pb.d.ts.map