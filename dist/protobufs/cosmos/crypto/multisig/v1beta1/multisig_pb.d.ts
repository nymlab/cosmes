import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey.
 * See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers
 * signed and with which modes.
 *
 * @generated from message cosmos.crypto.multisig.v1beta1.MultiSignature
 */
export declare class MultiSignature extends Message<MultiSignature> {
    /**
     * @generated from field: repeated bytes signatures = 1;
     */
    signatures: Uint8Array[];
    constructor(data?: PartialMessage<MultiSignature>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.multisig.v1beta1.MultiSignature";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MultiSignature;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MultiSignature;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MultiSignature;
    static equals(a: MultiSignature | PlainMessage<MultiSignature> | undefined, b: MultiSignature | PlainMessage<MultiSignature> | undefined): boolean;
}
/**
 * CompactBitArray is an implementation of a space efficient bit array.
 * This is used to ensure that the encoded data takes up a minimal amount of
 * space after proto encoding.
 * This is not thread safe, and is not intended for concurrent usage.
 *
 * @generated from message cosmos.crypto.multisig.v1beta1.CompactBitArray
 */
export declare class CompactBitArray extends Message<CompactBitArray> {
    /**
     * @generated from field: uint32 extra_bits_stored = 1;
     */
    extraBitsStored: number;
    /**
     * @generated from field: bytes elems = 2;
     */
    elems: Uint8Array;
    constructor(data?: PartialMessage<CompactBitArray>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.multisig.v1beta1.CompactBitArray";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompactBitArray;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompactBitArray;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompactBitArray;
    static equals(a: CompactBitArray | PlainMessage<CompactBitArray> | undefined, b: CompactBitArray | PlainMessage<CompactBitArray> | undefined): boolean;
}
//# sourceMappingURL=multisig_pb.d.ts.map