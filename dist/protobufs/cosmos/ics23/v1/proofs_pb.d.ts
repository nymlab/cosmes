import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum cosmos.ics23.v1.HashOp
 */
export declare enum HashOp {
    /**
     * NO_HASH is the default if no data passed. Note this is an illegal argument some places.
     *
     * @generated from enum value: NO_HASH = 0;
     */
    NO_HASH = 0,
    /**
     * @generated from enum value: SHA256 = 1;
     */
    SHA256 = 1,
    /**
     * @generated from enum value: SHA512 = 2;
     */
    SHA512 = 2,
    /**
     * @generated from enum value: KECCAK256 = 3;
     */
    KECCAK256 = 3,
    /**
     * @generated from enum value: RIPEMD160 = 4;
     */
    RIPEMD160 = 4,
    /**
     * ripemd160(sha256(x))
     *
     * @generated from enum value: BITCOIN = 5;
     */
    BITCOIN = 5,
    /**
     * @generated from enum value: SHA512_256 = 6;
     */
    SHA512_256 = 6,
    /**
     * @generated from enum value: BLAKE2B_512 = 7;
     */
    BLAKE2B_512 = 7,
    /**
     * @generated from enum value: BLAKE2S_256 = 8;
     */
    BLAKE2S_256 = 8,
    /**
     * @generated from enum value: BLAKE3 = 9;
     */
    BLAKE3 = 9
}
/**
 * *
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 *
 * @generated from enum cosmos.ics23.v1.LengthOp
 */
export declare enum LengthOp {
    /**
     * NO_PREFIX don't include any length info
     *
     * @generated from enum value: NO_PREFIX = 0;
     */
    NO_PREFIX = 0,
    /**
     * VAR_PROTO uses protobuf (and go-amino) varint encoding of the length
     *
     * @generated from enum value: VAR_PROTO = 1;
     */
    VAR_PROTO = 1,
    /**
     * VAR_RLP uses rlp int encoding of the length
     *
     * @generated from enum value: VAR_RLP = 2;
     */
    VAR_RLP = 2,
    /**
     * FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer
     *
     * @generated from enum value: FIXED32_BIG = 3;
     */
    FIXED32_BIG = 3,
    /**
     * FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer
     *
     * @generated from enum value: FIXED32_LITTLE = 4;
     */
    FIXED32_LITTLE = 4,
    /**
     * FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer
     *
     * @generated from enum value: FIXED64_BIG = 5;
     */
    FIXED64_BIG = 5,
    /**
     * FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer
     *
     * @generated from enum value: FIXED64_LITTLE = 6;
     */
    FIXED64_LITTLE = 6,
    /**
     * REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output)
     *
     * @generated from enum value: REQUIRE_32_BYTES = 7;
     */
    REQUIRE_32_BYTES = 7,
    /**
     * REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output)
     *
     * @generated from enum value: REQUIRE_64_BYTES = 8;
     */
    REQUIRE_64_BYTES = 8
}
/**
 * *
 * ExistenceProof takes a key and a value and a set of steps to perform on it.
 * The result of peforming all these steps will provide a "root hash", which can
 * be compared to the value in a header.
 *
 * Since it is computationally infeasible to produce a hash collission for any of the used
 * cryptographic hash functions, if someone can provide a series of operations to transform
 * a given key and value into a root hash that matches some trusted root, these key and values
 * must be in the referenced merkle tree.
 *
 * The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
 * which should be controlled by a spec. Eg. with lengthOp as NONE,
 * prefix = FOO, key = BAR, value = CHOICE
 * and
 * prefix = F, key = OOBAR, value = CHOICE
 * would produce the same value.
 *
 * With LengthOp this is tricker but not impossible. Which is why the "leafPrefixEqual" field
 * in the ProofSpec is valuable to prevent this mutability. And why all trees should
 * length-prefix the data before hashing it.
 *
 * @generated from message cosmos.ics23.v1.ExistenceProof
 */
export declare class ExistenceProof extends Message<ExistenceProof> {
    /**
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * @generated from field: bytes value = 2;
     */
    value: Uint8Array;
    /**
     * @generated from field: cosmos.ics23.v1.LeafOp leaf = 3;
     */
    leaf?: LeafOp;
    /**
     * @generated from field: repeated cosmos.ics23.v1.InnerOp path = 4;
     */
    path: InnerOp[];
    constructor(data?: PartialMessage<ExistenceProof>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.ics23.v1.ExistenceProof";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExistenceProof;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExistenceProof;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExistenceProof;
    static equals(a: ExistenceProof | PlainMessage<ExistenceProof> | undefined, b: ExistenceProof | PlainMessage<ExistenceProof> | undefined): boolean;
}
/**
 *
 * NonExistenceProof takes a proof of two neighbors, one left of the desired key,
 * one right of the desired key. If both proofs are valid AND they are neighbors,
 * then there is no valid proof for the given key.
 *
 * @generated from message cosmos.ics23.v1.NonExistenceProof
 */
export declare class NonExistenceProof extends Message<NonExistenceProof> {
    /**
     * TODO: remove this as unnecessary??? we prove a range
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * @generated from field: cosmos.ics23.v1.ExistenceProof left = 2;
     */
    left?: ExistenceProof;
    /**
     * @generated from field: cosmos.ics23.v1.ExistenceProof right = 3;
     */
    right?: ExistenceProof;
    constructor(data?: PartialMessage<NonExistenceProof>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.ics23.v1.NonExistenceProof";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NonExistenceProof;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NonExistenceProof;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NonExistenceProof;
    static equals(a: NonExistenceProof | PlainMessage<NonExistenceProof> | undefined, b: NonExistenceProof | PlainMessage<NonExistenceProof> | undefined): boolean;
}
/**
 *
 * CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages
 *
 * @generated from message cosmos.ics23.v1.CommitmentProof
 */
export declare class CommitmentProof extends Message<CommitmentProof> {
    /**
     * @generated from oneof cosmos.ics23.v1.CommitmentProof.proof
     */
    proof: {
        /**
         * @generated from field: cosmos.ics23.v1.ExistenceProof exist = 1;
         */
        value: ExistenceProof;
        case: "exist";
    } | {
        /**
         * @generated from field: cosmos.ics23.v1.NonExistenceProof nonexist = 2;
         */
        value: NonExistenceProof;
        case: "nonexist";
    } | {
        /**
         * @generated from field: cosmos.ics23.v1.BatchProof batch = 3;
         */
        value: BatchProof;
        case: "batch";
    } | {
        /**
         * @generated from field: cosmos.ics23.v1.CompressedBatchProof compressed = 4;
         */
        value: CompressedBatchProof;
        case: "compressed";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<CommitmentProof>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.ics23.v1.CommitmentProof";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitmentProof;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitmentProof;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitmentProof;
    static equals(a: CommitmentProof | PlainMessage<CommitmentProof> | undefined, b: CommitmentProof | PlainMessage<CommitmentProof> | undefined): boolean;
}
/**
 * *
 * LeafOp represents the raw key-value data we wish to prove, and
 * must be flexible to represent the internal transformation from
 * the original key-value pairs into the basis hash, for many existing
 * merkle trees.
 *
 * key and value are passed in. So that the signature of this operation is:
 * leafOp(key, value) -> output
 *
 * To process this, first prehash the keys and values if needed (ANY means no hash in this case):
 * hkey = prehashKey(key)
 * hvalue = prehashValue(value)
 *
 * Then combine the bytes, and hash it
 * output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)
 *
 * @generated from message cosmos.ics23.v1.LeafOp
 */
export declare class LeafOp extends Message<LeafOp> {
    /**
     * @generated from field: cosmos.ics23.v1.HashOp hash = 1;
     */
    hash: HashOp;
    /**
     * @generated from field: cosmos.ics23.v1.HashOp prehash_key = 2;
     */
    prehashKey: HashOp;
    /**
     * @generated from field: cosmos.ics23.v1.HashOp prehash_value = 3;
     */
    prehashValue: HashOp;
    /**
     * @generated from field: cosmos.ics23.v1.LengthOp length = 4;
     */
    length: LengthOp;
    /**
     * prefix is a fixed bytes that may optionally be included at the beginning to differentiate
     * a leaf node from an inner node.
     *
     * @generated from field: bytes prefix = 5;
     */
    prefix: Uint8Array;
    constructor(data?: PartialMessage<LeafOp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.ics23.v1.LeafOp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeafOp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeafOp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeafOp;
    static equals(a: LeafOp | PlainMessage<LeafOp> | undefined, b: LeafOp | PlainMessage<LeafOp> | undefined): boolean;
}
/**
 * *
 * InnerOp represents a merkle-proof step that is not a leaf.
 * It represents concatenating two children and hashing them to provide the next result.
 *
 * The result of the previous step is passed in, so the signature of this op is:
 * innerOp(child) -> output
 *
 * The result of applying InnerOp should be:
 * output = op.hash(op.prefix || child || op.suffix)
 *
 * where the || operator is concatenation of binary data,
 * and child is the result of hashing all the tree below this step.
 *
 * Any special data, like prepending child with the length, or prepending the entire operation with
 * some value to differentiate from leaf nodes, should be included in prefix and suffix.
 * If either of prefix or suffix is empty, we just treat it as an empty string
 *
 * @generated from message cosmos.ics23.v1.InnerOp
 */
export declare class InnerOp extends Message<InnerOp> {
    /**
     * @generated from field: cosmos.ics23.v1.HashOp hash = 1;
     */
    hash: HashOp;
    /**
     * @generated from field: bytes prefix = 2;
     */
    prefix: Uint8Array;
    /**
     * @generated from field: bytes suffix = 3;
     */
    suffix: Uint8Array;
    constructor(data?: PartialMessage<InnerOp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.ics23.v1.InnerOp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InnerOp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InnerOp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InnerOp;
    static equals(a: InnerOp | PlainMessage<InnerOp> | undefined, b: InnerOp | PlainMessage<InnerOp> | undefined): boolean;
}
/**
 * *
 * ProofSpec defines what the expected parameters are for a given proof type.
 * This can be stored in the client and used to validate any incoming proofs.
 *
 * verify(ProofSpec, Proof) -> Proof | Error
 *
 * As demonstrated in tests, if we don't fix the algorithm used to calculate the
 * LeafHash for a given tree, there are many possible key-value pairs that can
 * generate a given hash (by interpretting the preimage differently).
 * We need this for proper security, requires client knows a priori what
 * tree format server uses. But not in code, rather a configuration object.
 *
 * @generated from message cosmos.ics23.v1.ProofSpec
 */
export declare class ProofSpec extends Message<ProofSpec> {
    /**
     * any field in the ExistenceProof must be the same as in this spec.
     * except Prefix, which is just the first bytes of prefix (spec can be longer)
     *
     * @generated from field: cosmos.ics23.v1.LeafOp leaf_spec = 1;
     */
    leafSpec?: LeafOp;
    /**
     * @generated from field: cosmos.ics23.v1.InnerSpec inner_spec = 2;
     */
    innerSpec?: InnerSpec;
    /**
     * max_depth (if > 0) is the maximum number of InnerOps allowed (mainly for fixed-depth tries)
     *
     * @generated from field: int32 max_depth = 3;
     */
    maxDepth: number;
    /**
     * min_depth (if > 0) is the minimum number of InnerOps allowed (mainly for fixed-depth tries)
     *
     * @generated from field: int32 min_depth = 4;
     */
    minDepth: number;
    /**
     * prehash_key_before_comparison is a flag that indicates whether to use the
     * prehash_key specified by LeafOp to compare lexical ordering of keys for
     * non-existence proofs.
     *
     * @generated from field: bool prehash_key_before_comparison = 5;
     */
    prehashKeyBeforeComparison: boolean;
    constructor(data?: PartialMessage<ProofSpec>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.ics23.v1.ProofSpec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProofSpec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProofSpec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProofSpec;
    static equals(a: ProofSpec | PlainMessage<ProofSpec> | undefined, b: ProofSpec | PlainMessage<ProofSpec> | undefined): boolean;
}
/**
 *
 * InnerSpec contains all store-specific structure info to determine if two proofs from a
 * given store are neighbors.
 *
 * This enables:
 *
 * isLeftMost(spec: InnerSpec, op: InnerOp)
 * isRightMost(spec: InnerSpec, op: InnerOp)
 * isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)
 *
 * @generated from message cosmos.ics23.v1.InnerSpec
 */
export declare class InnerSpec extends Message<InnerSpec> {
    /**
     * Child order is the ordering of the children node, must count from 0
     * iavl tree is [0, 1] (left then right)
     * merk is [0, 2, 1] (left, right, here)
     *
     * @generated from field: repeated int32 child_order = 1;
     */
    childOrder: number[];
    /**
     * @generated from field: int32 child_size = 2;
     */
    childSize: number;
    /**
     * @generated from field: int32 min_prefix_length = 3;
     */
    minPrefixLength: number;
    /**
     * @generated from field: int32 max_prefix_length = 4;
     */
    maxPrefixLength: number;
    /**
     * empty child is the prehash image that is used when one child is nil (eg. 20 bytes of 0)
     *
     * @generated from field: bytes empty_child = 5;
     */
    emptyChild: Uint8Array;
    /**
     * hash is the algorithm that must be used for each InnerOp
     *
     * @generated from field: cosmos.ics23.v1.HashOp hash = 6;
     */
    hash: HashOp;
    constructor(data?: PartialMessage<InnerSpec>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.ics23.v1.InnerSpec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InnerSpec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InnerSpec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InnerSpec;
    static equals(a: InnerSpec | PlainMessage<InnerSpec> | undefined, b: InnerSpec | PlainMessage<InnerSpec> | undefined): boolean;
}
/**
 *
 * BatchProof is a group of multiple proof types than can be compressed
 *
 * @generated from message cosmos.ics23.v1.BatchProof
 */
export declare class BatchProof extends Message<BatchProof> {
    /**
     * @generated from field: repeated cosmos.ics23.v1.BatchEntry entries = 1;
     */
    entries: BatchEntry[];
    constructor(data?: PartialMessage<BatchProof>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.ics23.v1.BatchProof";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchProof;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchProof;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchProof;
    static equals(a: BatchProof | PlainMessage<BatchProof> | undefined, b: BatchProof | PlainMessage<BatchProof> | undefined): boolean;
}
/**
 * Use BatchEntry not CommitmentProof, to avoid recursion
 *
 * @generated from message cosmos.ics23.v1.BatchEntry
 */
export declare class BatchEntry extends Message<BatchEntry> {
    /**
     * @generated from oneof cosmos.ics23.v1.BatchEntry.proof
     */
    proof: {
        /**
         * @generated from field: cosmos.ics23.v1.ExistenceProof exist = 1;
         */
        value: ExistenceProof;
        case: "exist";
    } | {
        /**
         * @generated from field: cosmos.ics23.v1.NonExistenceProof nonexist = 2;
         */
        value: NonExistenceProof;
        case: "nonexist";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<BatchEntry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.ics23.v1.BatchEntry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchEntry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchEntry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchEntry;
    static equals(a: BatchEntry | PlainMessage<BatchEntry> | undefined, b: BatchEntry | PlainMessage<BatchEntry> | undefined): boolean;
}
/**
 * @generated from message cosmos.ics23.v1.CompressedBatchProof
 */
export declare class CompressedBatchProof extends Message<CompressedBatchProof> {
    /**
     * @generated from field: repeated cosmos.ics23.v1.CompressedBatchEntry entries = 1;
     */
    entries: CompressedBatchEntry[];
    /**
     * @generated from field: repeated cosmos.ics23.v1.InnerOp lookup_inners = 2;
     */
    lookupInners: InnerOp[];
    constructor(data?: PartialMessage<CompressedBatchProof>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.ics23.v1.CompressedBatchProof";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompressedBatchProof;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompressedBatchProof;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompressedBatchProof;
    static equals(a: CompressedBatchProof | PlainMessage<CompressedBatchProof> | undefined, b: CompressedBatchProof | PlainMessage<CompressedBatchProof> | undefined): boolean;
}
/**
 * Use BatchEntry not CommitmentProof, to avoid recursion
 *
 * @generated from message cosmos.ics23.v1.CompressedBatchEntry
 */
export declare class CompressedBatchEntry extends Message<CompressedBatchEntry> {
    /**
     * @generated from oneof cosmos.ics23.v1.CompressedBatchEntry.proof
     */
    proof: {
        /**
         * @generated from field: cosmos.ics23.v1.CompressedExistenceProof exist = 1;
         */
        value: CompressedExistenceProof;
        case: "exist";
    } | {
        /**
         * @generated from field: cosmos.ics23.v1.CompressedNonExistenceProof nonexist = 2;
         */
        value: CompressedNonExistenceProof;
        case: "nonexist";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<CompressedBatchEntry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.ics23.v1.CompressedBatchEntry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompressedBatchEntry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompressedBatchEntry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompressedBatchEntry;
    static equals(a: CompressedBatchEntry | PlainMessage<CompressedBatchEntry> | undefined, b: CompressedBatchEntry | PlainMessage<CompressedBatchEntry> | undefined): boolean;
}
/**
 * @generated from message cosmos.ics23.v1.CompressedExistenceProof
 */
export declare class CompressedExistenceProof extends Message<CompressedExistenceProof> {
    /**
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * @generated from field: bytes value = 2;
     */
    value: Uint8Array;
    /**
     * @generated from field: cosmos.ics23.v1.LeafOp leaf = 3;
     */
    leaf?: LeafOp;
    /**
     * these are indexes into the lookup_inners table in CompressedBatchProof
     *
     * @generated from field: repeated int32 path = 4;
     */
    path: number[];
    constructor(data?: PartialMessage<CompressedExistenceProof>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.ics23.v1.CompressedExistenceProof";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompressedExistenceProof;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompressedExistenceProof;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompressedExistenceProof;
    static equals(a: CompressedExistenceProof | PlainMessage<CompressedExistenceProof> | undefined, b: CompressedExistenceProof | PlainMessage<CompressedExistenceProof> | undefined): boolean;
}
/**
 * @generated from message cosmos.ics23.v1.CompressedNonExistenceProof
 */
export declare class CompressedNonExistenceProof extends Message<CompressedNonExistenceProof> {
    /**
     * TODO: remove this as unnecessary??? we prove a range
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * @generated from field: cosmos.ics23.v1.CompressedExistenceProof left = 2;
     */
    left?: CompressedExistenceProof;
    /**
     * @generated from field: cosmos.ics23.v1.CompressedExistenceProof right = 3;
     */
    right?: CompressedExistenceProof;
    constructor(data?: PartialMessage<CompressedNonExistenceProof>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.ics23.v1.CompressedNonExistenceProof";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompressedNonExistenceProof;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompressedNonExistenceProof;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompressedNonExistenceProof;
    static equals(a: CompressedNonExistenceProof | PlainMessage<CompressedNonExistenceProof> | undefined, b: CompressedNonExistenceProof | PlainMessage<CompressedNonExistenceProof> | undefined): boolean;
}
//# sourceMappingURL=proofs_pb.d.ts.map