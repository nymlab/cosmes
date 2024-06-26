import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Proof } from "../crypto/proof_pb.js";
import { Consensus } from "../version/types_pb.js";
import { ValidatorSet } from "./validator_pb.js";
/**
 * BlockIdFlag indicates which BlcokID the signature is for
 *
 * @generated from enum tendermint.types.BlockIDFlag
 */
export declare enum BlockIDFlag {
    /**
     * @generated from enum value: BLOCK_ID_FLAG_UNKNOWN = 0;
     */
    BLOCK_ID_FLAG_UNKNOWN = 0,
    /**
     * @generated from enum value: BLOCK_ID_FLAG_ABSENT = 1;
     */
    BLOCK_ID_FLAG_ABSENT = 1,
    /**
     * @generated from enum value: BLOCK_ID_FLAG_COMMIT = 2;
     */
    BLOCK_ID_FLAG_COMMIT = 2,
    /**
     * @generated from enum value: BLOCK_ID_FLAG_NIL = 3;
     */
    BLOCK_ID_FLAG_NIL = 3
}
/**
 * SignedMsgType is a type of signed message in the consensus.
 *
 * @generated from enum tendermint.types.SignedMsgType
 */
export declare enum SignedMsgType {
    /**
     * @generated from enum value: SIGNED_MSG_TYPE_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * Votes
     *
     * @generated from enum value: SIGNED_MSG_TYPE_PREVOTE = 1;
     */
    PREVOTE = 1,
    /**
     * @generated from enum value: SIGNED_MSG_TYPE_PRECOMMIT = 2;
     */
    PRECOMMIT = 2,
    /**
     * Proposals
     *
     * @generated from enum value: SIGNED_MSG_TYPE_PROPOSAL = 32;
     */
    PROPOSAL = 32
}
/**
 * PartsetHeader
 *
 * @generated from message tendermint.types.PartSetHeader
 */
export declare class PartSetHeader extends Message<PartSetHeader> {
    /**
     * @generated from field: uint32 total = 1;
     */
    total: number;
    /**
     * @generated from field: bytes hash = 2;
     */
    hash: Uint8Array;
    constructor(data?: PartialMessage<PartSetHeader>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.PartSetHeader";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PartSetHeader;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PartSetHeader;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PartSetHeader;
    static equals(a: PartSetHeader | PlainMessage<PartSetHeader> | undefined, b: PartSetHeader | PlainMessage<PartSetHeader> | undefined): boolean;
}
/**
 * @generated from message tendermint.types.Part
 */
export declare class Part extends Message<Part> {
    /**
     * @generated from field: uint32 index = 1;
     */
    index: number;
    /**
     * @generated from field: bytes bytes = 2;
     */
    bytes: Uint8Array;
    /**
     * @generated from field: tendermint.crypto.Proof proof = 3;
     */
    proof?: Proof;
    constructor(data?: PartialMessage<Part>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.Part";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Part;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Part;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Part;
    static equals(a: Part | PlainMessage<Part> | undefined, b: Part | PlainMessage<Part> | undefined): boolean;
}
/**
 * BlockID
 *
 * @generated from message tendermint.types.BlockID
 */
export declare class BlockID extends Message<BlockID> {
    /**
     * @generated from field: bytes hash = 1;
     */
    hash: Uint8Array;
    /**
     * @generated from field: tendermint.types.PartSetHeader part_set_header = 2;
     */
    partSetHeader?: PartSetHeader;
    constructor(data?: PartialMessage<BlockID>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.BlockID";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockID;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockID;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockID;
    static equals(a: BlockID | PlainMessage<BlockID> | undefined, b: BlockID | PlainMessage<BlockID> | undefined): boolean;
}
/**
 * Header defines the structure of a block header.
 *
 * @generated from message tendermint.types.Header
 */
export declare class Header extends Message<Header> {
    /**
     * basic block info
     *
     * @generated from field: tendermint.version.Consensus version = 1;
     */
    version?: Consensus;
    /**
     * @generated from field: string chain_id = 2;
     */
    chainId: string;
    /**
     * @generated from field: int64 height = 3;
     */
    height: bigint;
    /**
     * @generated from field: google.protobuf.Timestamp time = 4;
     */
    time?: Timestamp;
    /**
     * prev block info
     *
     * @generated from field: tendermint.types.BlockID last_block_id = 5;
     */
    lastBlockId?: BlockID;
    /**
     * hashes of block data
     *
     * commit from validators from the last block
     *
     * @generated from field: bytes last_commit_hash = 6;
     */
    lastCommitHash: Uint8Array;
    /**
     * transactions
     *
     * @generated from field: bytes data_hash = 7;
     */
    dataHash: Uint8Array;
    /**
     * hashes from the app output from the prev block
     *
     * validators for the current block
     *
     * @generated from field: bytes validators_hash = 8;
     */
    validatorsHash: Uint8Array;
    /**
     * validators for the next block
     *
     * @generated from field: bytes next_validators_hash = 9;
     */
    nextValidatorsHash: Uint8Array;
    /**
     * consensus params for current block
     *
     * @generated from field: bytes consensus_hash = 10;
     */
    consensusHash: Uint8Array;
    /**
     * state after txs from the previous block
     *
     * @generated from field: bytes app_hash = 11;
     */
    appHash: Uint8Array;
    /**
     * root hash of all results from the txs from the previous block
     *
     * @generated from field: bytes last_results_hash = 12;
     */
    lastResultsHash: Uint8Array;
    /**
     * consensus info
     *
     * evidence included in the block
     *
     * @generated from field: bytes evidence_hash = 13;
     */
    evidenceHash: Uint8Array;
    /**
     * original proposer of the block
     *
     * @generated from field: bytes proposer_address = 14;
     */
    proposerAddress: Uint8Array;
    constructor(data?: PartialMessage<Header>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.Header";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Header;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Header;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Header;
    static equals(a: Header | PlainMessage<Header> | undefined, b: Header | PlainMessage<Header> | undefined): boolean;
}
/**
 * Data contains the set of transactions included in the block
 *
 * @generated from message tendermint.types.Data
 */
export declare class Data extends Message<Data> {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     *
     * @generated from field: repeated bytes txs = 1;
     */
    txs: Uint8Array[];
    constructor(data?: PartialMessage<Data>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.Data";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Data;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Data;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Data;
    static equals(a: Data | PlainMessage<Data> | undefined, b: Data | PlainMessage<Data> | undefined): boolean;
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 *
 * @generated from message tendermint.types.Vote
 */
export declare class Vote extends Message<Vote> {
    /**
     * @generated from field: tendermint.types.SignedMsgType type = 1;
     */
    type: SignedMsgType;
    /**
     * @generated from field: int64 height = 2;
     */
    height: bigint;
    /**
     * @generated from field: int32 round = 3;
     */
    round: number;
    /**
     * zero if vote is nil.
     *
     * @generated from field: tendermint.types.BlockID block_id = 4;
     */
    blockId?: BlockID;
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 5;
     */
    timestamp?: Timestamp;
    /**
     * @generated from field: bytes validator_address = 6;
     */
    validatorAddress: Uint8Array;
    /**
     * @generated from field: int32 validator_index = 7;
     */
    validatorIndex: number;
    /**
     * @generated from field: bytes signature = 8;
     */
    signature: Uint8Array;
    constructor(data?: PartialMessage<Vote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.Vote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Vote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Vote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Vote;
    static equals(a: Vote | PlainMessage<Vote> | undefined, b: Vote | PlainMessage<Vote> | undefined): boolean;
}
/**
 * Commit contains the evidence that a block was committed by a set of validators.
 *
 * @generated from message tendermint.types.Commit
 */
export declare class Commit extends Message<Commit> {
    /**
     * @generated from field: int64 height = 1;
     */
    height: bigint;
    /**
     * @generated from field: int32 round = 2;
     */
    round: number;
    /**
     * @generated from field: tendermint.types.BlockID block_id = 3;
     */
    blockId?: BlockID;
    /**
     * @generated from field: repeated tendermint.types.CommitSig signatures = 4;
     */
    signatures: CommitSig[];
    constructor(data?: PartialMessage<Commit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.Commit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Commit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Commit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Commit;
    static equals(a: Commit | PlainMessage<Commit> | undefined, b: Commit | PlainMessage<Commit> | undefined): boolean;
}
/**
 * CommitSig is a part of the Vote included in a Commit.
 *
 * @generated from message tendermint.types.CommitSig
 */
export declare class CommitSig extends Message<CommitSig> {
    /**
     * @generated from field: tendermint.types.BlockIDFlag block_id_flag = 1;
     */
    blockIdFlag: BlockIDFlag;
    /**
     * @generated from field: bytes validator_address = 2;
     */
    validatorAddress: Uint8Array;
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 3;
     */
    timestamp?: Timestamp;
    /**
     * @generated from field: bytes signature = 4;
     */
    signature: Uint8Array;
    constructor(data?: PartialMessage<CommitSig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.CommitSig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitSig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitSig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitSig;
    static equals(a: CommitSig | PlainMessage<CommitSig> | undefined, b: CommitSig | PlainMessage<CommitSig> | undefined): boolean;
}
/**
 * @generated from message tendermint.types.Proposal
 */
export declare class Proposal extends Message<Proposal> {
    /**
     * @generated from field: tendermint.types.SignedMsgType type = 1;
     */
    type: SignedMsgType;
    /**
     * @generated from field: int64 height = 2;
     */
    height: bigint;
    /**
     * @generated from field: int32 round = 3;
     */
    round: number;
    /**
     * @generated from field: int32 pol_round = 4;
     */
    polRound: number;
    /**
     * @generated from field: tendermint.types.BlockID block_id = 5;
     */
    blockId?: BlockID;
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 6;
     */
    timestamp?: Timestamp;
    /**
     * @generated from field: bytes signature = 7;
     */
    signature: Uint8Array;
    constructor(data?: PartialMessage<Proposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.Proposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Proposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Proposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Proposal;
    static equals(a: Proposal | PlainMessage<Proposal> | undefined, b: Proposal | PlainMessage<Proposal> | undefined): boolean;
}
/**
 * @generated from message tendermint.types.SignedHeader
 */
export declare class SignedHeader extends Message<SignedHeader> {
    /**
     * @generated from field: tendermint.types.Header header = 1;
     */
    header?: Header;
    /**
     * @generated from field: tendermint.types.Commit commit = 2;
     */
    commit?: Commit;
    constructor(data?: PartialMessage<SignedHeader>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.SignedHeader";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignedHeader;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignedHeader;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignedHeader;
    static equals(a: SignedHeader | PlainMessage<SignedHeader> | undefined, b: SignedHeader | PlainMessage<SignedHeader> | undefined): boolean;
}
/**
 * @generated from message tendermint.types.LightBlock
 */
export declare class LightBlock extends Message<LightBlock> {
    /**
     * @generated from field: tendermint.types.SignedHeader signed_header = 1;
     */
    signedHeader?: SignedHeader;
    /**
     * @generated from field: tendermint.types.ValidatorSet validator_set = 2;
     */
    validatorSet?: ValidatorSet;
    constructor(data?: PartialMessage<LightBlock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.LightBlock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LightBlock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LightBlock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LightBlock;
    static equals(a: LightBlock | PlainMessage<LightBlock> | undefined, b: LightBlock | PlainMessage<LightBlock> | undefined): boolean;
}
/**
 * @generated from message tendermint.types.BlockMeta
 */
export declare class BlockMeta extends Message<BlockMeta> {
    /**
     * @generated from field: tendermint.types.BlockID block_id = 1;
     */
    blockId?: BlockID;
    /**
     * @generated from field: int64 block_size = 2;
     */
    blockSize: bigint;
    /**
     * @generated from field: tendermint.types.Header header = 3;
     */
    header?: Header;
    /**
     * @generated from field: int64 num_txs = 4;
     */
    numTxs: bigint;
    constructor(data?: PartialMessage<BlockMeta>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.BlockMeta";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockMeta;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockMeta;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockMeta;
    static equals(a: BlockMeta | PlainMessage<BlockMeta> | undefined, b: BlockMeta | PlainMessage<BlockMeta> | undefined): boolean;
}
/**
 * TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree.
 *
 * @generated from message tendermint.types.TxProof
 */
export declare class TxProof extends Message<TxProof> {
    /**
     * @generated from field: bytes root_hash = 1;
     */
    rootHash: Uint8Array;
    /**
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    /**
     * @generated from field: tendermint.crypto.Proof proof = 3;
     */
    proof?: Proof;
    constructor(data?: PartialMessage<TxProof>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.TxProof";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxProof;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxProof;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxProof;
    static equals(a: TxProof | PlainMessage<TxProof> | undefined, b: TxProof | PlainMessage<TxProof> | undefined): boolean;
}
//# sourceMappingURL=types_pb.d.ts.map