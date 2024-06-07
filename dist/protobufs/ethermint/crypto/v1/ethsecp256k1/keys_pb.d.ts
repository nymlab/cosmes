import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * PubKey defines a type alias for an ecdsa.PublicKey that implements
 * Tendermint's PubKey interface. It represents the 33-byte compressed public
 * key format.
 *
 * @generated from message ethermint.crypto.v1.ethsecp256k1.PubKey
 */
export declare class PubKey extends Message<PubKey> {
    /**
     * key is the public key in byte form
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    constructor(data?: PartialMessage<PubKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.crypto.v1.ethsecp256k1.PubKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PubKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PubKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PubKey;
    static equals(a: PubKey | PlainMessage<PubKey> | undefined, b: PubKey | PlainMessage<PubKey> | undefined): boolean;
}
/**
 * PrivKey defines a type alias for an ecdsa.PrivateKey that implements
 * Tendermint's PrivateKey interface.
 *
 * @generated from message ethermint.crypto.v1.ethsecp256k1.PrivKey
 */
export declare class PrivKey extends Message<PrivKey> {
    /**
     * key is the private key in byte form
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    constructor(data?: PartialMessage<PrivKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.crypto.v1.ethsecp256k1.PrivKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrivKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrivKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrivKey;
    static equals(a: PrivKey | PlainMessage<PrivKey> | undefined, b: PrivKey | PlainMessage<PrivKey> | undefined): boolean;
}
//# sourceMappingURL=keys_pb.d.ts.map