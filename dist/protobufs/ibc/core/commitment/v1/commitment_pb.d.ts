import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { CommitmentProof } from "../../../../cosmos/ics23/v1/proofs_pb.js";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 *
 * @generated from message ibc.core.commitment.v1.MerkleRoot
 */
export declare class MerkleRoot extends Message<MerkleRoot> {
    /**
     * @generated from field: bytes hash = 1;
     */
    hash: Uint8Array;
    constructor(data?: PartialMessage<MerkleRoot>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.commitment.v1.MerkleRoot";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MerkleRoot;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MerkleRoot;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MerkleRoot;
    static equals(a: MerkleRoot | PlainMessage<MerkleRoot> | undefined, b: MerkleRoot | PlainMessage<MerkleRoot> | undefined): boolean;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 *
 * @generated from message ibc.core.commitment.v1.MerklePrefix
 */
export declare class MerklePrefix extends Message<MerklePrefix> {
    /**
     * @generated from field: bytes key_prefix = 1;
     */
    keyPrefix: Uint8Array;
    constructor(data?: PartialMessage<MerklePrefix>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.commitment.v1.MerklePrefix";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MerklePrefix;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MerklePrefix;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MerklePrefix;
    static equals(a: MerklePrefix | PlainMessage<MerklePrefix> | undefined, b: MerklePrefix | PlainMessage<MerklePrefix> | undefined): boolean;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 *
 * @generated from message ibc.core.commitment.v1.MerklePath
 */
export declare class MerklePath extends Message<MerklePath> {
    /**
     * @generated from field: repeated string key_path = 1;
     */
    keyPath: string[];
    constructor(data?: PartialMessage<MerklePath>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.commitment.v1.MerklePath";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MerklePath;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MerklePath;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MerklePath;
    static equals(a: MerklePath | PlainMessage<MerklePath> | undefined, b: MerklePath | PlainMessage<MerklePath> | undefined): boolean;
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 *
 * @generated from message ibc.core.commitment.v1.MerkleProof
 */
export declare class MerkleProof extends Message<MerkleProof> {
    /**
     * @generated from field: repeated cosmos.ics23.v1.CommitmentProof proofs = 1;
     */
    proofs: CommitmentProof[];
    constructor(data?: PartialMessage<MerkleProof>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.commitment.v1.MerkleProof";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MerkleProof;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MerkleProof;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MerkleProof;
    static equals(a: MerkleProof | PlainMessage<MerkleProof> | undefined, b: MerkleProof | PlainMessage<MerkleProof> | undefined): boolean;
}
//# sourceMappingURL=commitment_pb.d.ts.map