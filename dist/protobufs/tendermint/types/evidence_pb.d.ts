import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { LightBlock, Vote } from "./types_pb.js";
import { Validator } from "./validator_pb.js";
/**
 * @generated from message tendermint.types.Evidence
 */
export declare class Evidence extends Message<Evidence> {
    /**
     * @generated from oneof tendermint.types.Evidence.sum
     */
    sum: {
        /**
         * @generated from field: tendermint.types.DuplicateVoteEvidence duplicate_vote_evidence = 1;
         */
        value: DuplicateVoteEvidence;
        case: "duplicateVoteEvidence";
    } | {
        /**
         * @generated from field: tendermint.types.LightClientAttackEvidence light_client_attack_evidence = 2;
         */
        value: LightClientAttackEvidence;
        case: "lightClientAttackEvidence";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<Evidence>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.Evidence";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Evidence;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Evidence;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Evidence;
    static equals(a: Evidence | PlainMessage<Evidence> | undefined, b: Evidence | PlainMessage<Evidence> | undefined): boolean;
}
/**
 * DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes.
 *
 * @generated from message tendermint.types.DuplicateVoteEvidence
 */
export declare class DuplicateVoteEvidence extends Message<DuplicateVoteEvidence> {
    /**
     * @generated from field: tendermint.types.Vote vote_a = 1;
     */
    voteA?: Vote;
    /**
     * @generated from field: tendermint.types.Vote vote_b = 2;
     */
    voteB?: Vote;
    /**
     * @generated from field: int64 total_voting_power = 3;
     */
    totalVotingPower: bigint;
    /**
     * @generated from field: int64 validator_power = 4;
     */
    validatorPower: bigint;
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 5;
     */
    timestamp?: Timestamp;
    constructor(data?: PartialMessage<DuplicateVoteEvidence>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.DuplicateVoteEvidence";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DuplicateVoteEvidence;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DuplicateVoteEvidence;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DuplicateVoteEvidence;
    static equals(a: DuplicateVoteEvidence | PlainMessage<DuplicateVoteEvidence> | undefined, b: DuplicateVoteEvidence | PlainMessage<DuplicateVoteEvidence> | undefined): boolean;
}
/**
 * LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client.
 *
 * @generated from message tendermint.types.LightClientAttackEvidence
 */
export declare class LightClientAttackEvidence extends Message<LightClientAttackEvidence> {
    /**
     * @generated from field: tendermint.types.LightBlock conflicting_block = 1;
     */
    conflictingBlock?: LightBlock;
    /**
     * @generated from field: int64 common_height = 2;
     */
    commonHeight: bigint;
    /**
     * @generated from field: repeated tendermint.types.Validator byzantine_validators = 3;
     */
    byzantineValidators: Validator[];
    /**
     * @generated from field: int64 total_voting_power = 4;
     */
    totalVotingPower: bigint;
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 5;
     */
    timestamp?: Timestamp;
    constructor(data?: PartialMessage<LightClientAttackEvidence>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.LightClientAttackEvidence";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LightClientAttackEvidence;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LightClientAttackEvidence;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LightClientAttackEvidence;
    static equals(a: LightClientAttackEvidence | PlainMessage<LightClientAttackEvidence> | undefined, b: LightClientAttackEvidence | PlainMessage<LightClientAttackEvidence> | undefined): boolean;
}
/**
 * @generated from message tendermint.types.EvidenceList
 */
export declare class EvidenceList extends Message<EvidenceList> {
    /**
     * @generated from field: repeated tendermint.types.Evidence evidence = 1;
     */
    evidence: Evidence[];
    constructor(data?: PartialMessage<EvidenceList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.EvidenceList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EvidenceList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EvidenceList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EvidenceList;
    static equals(a: EvidenceList | PlainMessage<EvidenceList> | undefined, b: EvidenceList | PlainMessage<EvidenceList> | undefined): boolean;
}
//# sourceMappingURL=evidence_pb.d.ts.map