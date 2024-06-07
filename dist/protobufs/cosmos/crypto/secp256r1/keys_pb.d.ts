import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * PubKey defines a secp256r1 ECDSA public key.
 *
 * @generated from message cosmos.crypto.secp256r1.PubKey
 */
export declare class PubKey extends Message<PubKey> {
    /**
     * Point on secp256r1 curve in a compressed representation as specified in section
     * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    constructor(data?: PartialMessage<PubKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.secp256r1.PubKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PubKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PubKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PubKey;
    static equals(a: PubKey | PlainMessage<PubKey> | undefined, b: PubKey | PlainMessage<PubKey> | undefined): boolean;
}
/**
 * PrivKey defines a secp256r1 ECDSA private key.
 *
 * @generated from message cosmos.crypto.secp256r1.PrivKey
 */
export declare class PrivKey extends Message<PrivKey> {
    /**
     * secret number serialized using big-endian encoding
     *
     * @generated from field: bytes secret = 1;
     */
    secret: Uint8Array;
    constructor(data?: PartialMessage<PrivKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.secp256r1.PrivKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrivKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrivKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrivKey;
    static equals(a: PrivKey | PlainMessage<PrivKey> | undefined, b: PrivKey | PlainMessage<PrivKey> | undefined): boolean;
}
//# sourceMappingURL=keys_pb.d.ts.map