import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 *
 * @generated from message tendermint.types.ConsensusParams
 */
export declare class ConsensusParams extends Message<ConsensusParams> {
    /**
     * @generated from field: tendermint.types.BlockParams block = 1;
     */
    block?: BlockParams;
    /**
     * @generated from field: tendermint.types.EvidenceParams evidence = 2;
     */
    evidence?: EvidenceParams;
    /**
     * @generated from field: tendermint.types.ValidatorParams validator = 3;
     */
    validator?: ValidatorParams;
    /**
     * @generated from field: tendermint.types.VersionParams version = 4;
     */
    version?: VersionParams;
    constructor(data?: PartialMessage<ConsensusParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.ConsensusParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConsensusParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConsensusParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConsensusParams;
    static equals(a: ConsensusParams | PlainMessage<ConsensusParams> | undefined, b: ConsensusParams | PlainMessage<ConsensusParams> | undefined): boolean;
}
/**
 * BlockParams contains limits on the block size.
 *
 * @generated from message tendermint.types.BlockParams
 */
export declare class BlockParams extends Message<BlockParams> {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     *
     * @generated from field: int64 max_bytes = 1;
     */
    maxBytes: bigint;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     *
     * @generated from field: int64 max_gas = 2;
     */
    maxGas: bigint;
    constructor(data?: PartialMessage<BlockParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.BlockParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockParams;
    static equals(a: BlockParams | PlainMessage<BlockParams> | undefined, b: BlockParams | PlainMessage<BlockParams> | undefined): boolean;
}
/**
 * EvidenceParams determine how we handle evidence of malfeasance.
 *
 * @generated from message tendermint.types.EvidenceParams
 */
export declare class EvidenceParams extends Message<EvidenceParams> {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     *
     * @generated from field: int64 max_age_num_blocks = 1;
     */
    maxAgeNumBlocks: bigint;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     *
     * @generated from field: google.protobuf.Duration max_age_duration = 2;
     */
    maxAgeDuration?: Duration;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     *
     * @generated from field: int64 max_bytes = 3;
     */
    maxBytes: bigint;
    constructor(data?: PartialMessage<EvidenceParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.EvidenceParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EvidenceParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EvidenceParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EvidenceParams;
    static equals(a: EvidenceParams | PlainMessage<EvidenceParams> | undefined, b: EvidenceParams | PlainMessage<EvidenceParams> | undefined): boolean;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 *
 * @generated from message tendermint.types.ValidatorParams
 */
export declare class ValidatorParams extends Message<ValidatorParams> {
    /**
     * @generated from field: repeated string pub_key_types = 1;
     */
    pubKeyTypes: string[];
    constructor(data?: PartialMessage<ValidatorParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.ValidatorParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorParams;
    static equals(a: ValidatorParams | PlainMessage<ValidatorParams> | undefined, b: ValidatorParams | PlainMessage<ValidatorParams> | undefined): boolean;
}
/**
 * VersionParams contains the ABCI application version.
 *
 * @generated from message tendermint.types.VersionParams
 */
export declare class VersionParams extends Message<VersionParams> {
    /**
     * @generated from field: uint64 app = 1;
     */
    app: bigint;
    constructor(data?: PartialMessage<VersionParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.VersionParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VersionParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VersionParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VersionParams;
    static equals(a: VersionParams | PlainMessage<VersionParams> | undefined, b: VersionParams | PlainMessage<VersionParams> | undefined): boolean;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 *
 * @generated from message tendermint.types.HashedParams
 */
export declare class HashedParams extends Message<HashedParams> {
    /**
     * @generated from field: int64 block_max_bytes = 1;
     */
    blockMaxBytes: bigint;
    /**
     * @generated from field: int64 block_max_gas = 2;
     */
    blockMaxGas: bigint;
    constructor(data?: PartialMessage<HashedParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.HashedParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HashedParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HashedParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HashedParams;
    static equals(a: HashedParams | PlainMessage<HashedParams> | undefined, b: HashedParams | PlainMessage<HashedParams> | undefined): boolean;
}
//# sourceMappingURL=params_pb.d.ts.map