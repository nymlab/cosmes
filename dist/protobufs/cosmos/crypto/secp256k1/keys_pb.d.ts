import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 *
 * @generated from message cosmos.crypto.secp256k1.PubKey
 */
export declare class PubKey extends Message<PubKey> {
    /**
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    constructor(data?: PartialMessage<PubKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.secp256k1.PubKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PubKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PubKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PubKey;
    static equals(a: PubKey | PlainMessage<PubKey> | undefined, b: PubKey | PlainMessage<PubKey> | undefined): boolean;
}
/**
 * PrivKey defines a secp256k1 private key.
 *
 * @generated from message cosmos.crypto.secp256k1.PrivKey
 */
export declare class PrivKey extends Message<PrivKey> {
    /**
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    constructor(data?: PartialMessage<PrivKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.secp256k1.PrivKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrivKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrivKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrivKey;
    static equals(a: PrivKey | PlainMessage<PrivKey> | undefined, b: PrivKey | PlainMessage<PrivKey> | undefined): boolean;
}
//# sourceMappingURL=keys_pb.d.ts.map