import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { BlockID, Commit, Data } from "../../../../tendermint/types/types_pb.js";
import { EvidenceList } from "../../../../tendermint/types/evidence_pb.js";
import { Consensus } from "../../../../tendermint/version/types_pb.js";
/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.Block
 */
export declare class Block extends Message<Block> {
    /**
     * @generated from field: cosmos.base.tendermint.v1beta1.Header header = 1;
     */
    header?: Header;
    /**
     * @generated from field: tendermint.types.Data data = 2;
     */
    data?: Data;
    /**
     * @generated from field: tendermint.types.EvidenceList evidence = 3;
     */
    evidence?: EvidenceList;
    /**
     * @generated from field: tendermint.types.Commit last_commit = 4;
     */
    lastCommit?: Commit;
    constructor(data?: PartialMessage<Block>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.Block";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Block;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Block;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Block;
    static equals(a: Block | PlainMessage<Block> | undefined, b: Block | PlainMessage<Block> | undefined): boolean;
}
/**
 * Header defines the structure of a Tendermint block header.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.Header
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
     * proposer_address is the original block proposer address, formatted as a Bech32 string.
     * In Tendermint, this type is `bytes`, but in the SDK, we convert it to a Bech32 string
     * for better UX.
     *
     * original proposer of the block
     *
     * @generated from field: string proposer_address = 14;
     */
    proposerAddress: string;
    constructor(data?: PartialMessage<Header>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.Header";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Header;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Header;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Header;
    static equals(a: Header | PlainMessage<Header> | undefined, b: Header | PlainMessage<Header> | undefined): boolean;
}
//# sourceMappingURL=types_pb.d.ts.map