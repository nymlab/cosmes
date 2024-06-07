import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
/**
 * VoteOption enumerates the valid vote options for a given governance proposal.
 *
 * @generated from enum cosmos.gov.v1.VoteOption
 */
export declare enum VoteOption {
    /**
     * VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
     *
     * @generated from enum value: VOTE_OPTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * VOTE_OPTION_YES defines a yes vote option.
     *
     * @generated from enum value: VOTE_OPTION_YES = 1;
     */
    YES = 1,
    /**
     * VOTE_OPTION_ABSTAIN defines an abstain vote option.
     *
     * @generated from enum value: VOTE_OPTION_ABSTAIN = 2;
     */
    ABSTAIN = 2,
    /**
     * VOTE_OPTION_NO defines a no vote option.
     *
     * @generated from enum value: VOTE_OPTION_NO = 3;
     */
    NO = 3,
    /**
     * VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
     *
     * @generated from enum value: VOTE_OPTION_NO_WITH_VETO = 4;
     */
    NO_WITH_VETO = 4
}
/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 *
 * @generated from enum cosmos.gov.v1.ProposalStatus
 */
export declare enum ProposalStatus {
    /**
     * PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status.
     *
     * @generated from enum value: PROPOSAL_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     *
     * @generated from enum value: PROPOSAL_STATUS_DEPOSIT_PERIOD = 1;
     */
    DEPOSIT_PERIOD = 1,
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     *
     * @generated from enum value: PROPOSAL_STATUS_VOTING_PERIOD = 2;
     */
    VOTING_PERIOD = 2,
    /**
     * PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     *
     * @generated from enum value: PROPOSAL_STATUS_PASSED = 3;
     */
    PASSED = 3,
    /**
     * PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     *
     * @generated from enum value: PROPOSAL_STATUS_REJECTED = 4;
     */
    REJECTED = 4,
    /**
     * PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     *
     * @generated from enum value: PROPOSAL_STATUS_FAILED = 5;
     */
    FAILED = 5
}
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 *
 * @generated from message cosmos.gov.v1.WeightedVoteOption
 */
export declare class WeightedVoteOption extends Message<WeightedVoteOption> {
    /**
     * option defines the valid vote options, it must not contain duplicate vote options.
     *
     * @generated from field: cosmos.gov.v1.VoteOption option = 1;
     */
    option: VoteOption;
    /**
     * weight is the vote weight associated with the vote option.
     *
     * @generated from field: string weight = 2;
     */
    weight: string;
    constructor(data?: PartialMessage<WeightedVoteOption>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1.WeightedVoteOption";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WeightedVoteOption;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WeightedVoteOption;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WeightedVoteOption;
    static equals(a: WeightedVoteOption | PlainMessage<WeightedVoteOption> | undefined, b: WeightedVoteOption | PlainMessage<WeightedVoteOption> | undefined): boolean;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 *
 * @generated from message cosmos.gov.v1.Deposit
 */
export declare class Deposit extends Message<Deposit> {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * depositor defines the deposit addresses from the proposals.
     *
     * @generated from field: string depositor = 2;
     */
    depositor: string;
    /**
     * amount to be deposited by depositor.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
     */
    amount: Coin[];
    constructor(data?: PartialMessage<Deposit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1.Deposit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Deposit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Deposit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Deposit;
    static equals(a: Deposit | PlainMessage<Deposit> | undefined, b: Deposit | PlainMessage<Deposit> | undefined): boolean;
}
/**
 * Proposal defines the core field members of a governance proposal.
 *
 * @generated from message cosmos.gov.v1.Proposal
 */
export declare class Proposal extends Message<Proposal> {
    /**
     * id defines the unique id of the proposal.
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * messages are the arbitrary messages to be executed if the proposal passes.
     *
     * @generated from field: repeated google.protobuf.Any messages = 2;
     */
    messages: Any[];
    /**
     * status defines the proposal status.
     *
     * @generated from field: cosmos.gov.v1.ProposalStatus status = 3;
     */
    status: ProposalStatus;
    /**
     * final_tally_result is the final tally result of the proposal. When
     * querying a proposal via gRPC, this field is not populated until the
     * proposal's voting period has ended.
     *
     * @generated from field: cosmos.gov.v1.TallyResult final_tally_result = 4;
     */
    finalTallyResult?: TallyResult;
    /**
     * submit_time is the time of proposal submission.
     *
     * @generated from field: google.protobuf.Timestamp submit_time = 5;
     */
    submitTime?: Timestamp;
    /**
     * deposit_end_time is the end time for deposition.
     *
     * @generated from field: google.protobuf.Timestamp deposit_end_time = 6;
     */
    depositEndTime?: Timestamp;
    /**
     * total_deposit is the total deposit on the proposal.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin total_deposit = 7;
     */
    totalDeposit: Coin[];
    /**
     * voting_start_time is the starting time to vote on a proposal.
     *
     * @generated from field: google.protobuf.Timestamp voting_start_time = 8;
     */
    votingStartTime?: Timestamp;
    /**
     * voting_end_time is the end time of voting on a proposal.
     *
     * @generated from field: google.protobuf.Timestamp voting_end_time = 9;
     */
    votingEndTime?: Timestamp;
    /**
     * metadata is any arbitrary metadata attached to the proposal.
     *
     * @generated from field: string metadata = 10;
     */
    metadata: string;
    /**
     * title is the title of the proposal
     *
     * Since: cosmos-sdk 0.47
     *
     * @generated from field: string title = 11;
     */
    title: string;
    /**
     * summary is a short summary of the proposal
     *
     * Since: cosmos-sdk 0.47
     *
     * @generated from field: string summary = 12;
     */
    summary: string;
    /**
     * Proposer is the address of the proposal sumbitter
     *
     * Since: cosmos-sdk 0.47
     *
     * @generated from field: string proposer = 13;
     */
    proposer: string;
    constructor(data?: PartialMessage<Proposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1.Proposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Proposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Proposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Proposal;
    static equals(a: Proposal | PlainMessage<Proposal> | undefined, b: Proposal | PlainMessage<Proposal> | undefined): boolean;
}
/**
 * TallyResult defines a standard tally for a governance proposal.
 *
 * @generated from message cosmos.gov.v1.TallyResult
 */
export declare class TallyResult extends Message<TallyResult> {
    /**
     * yes_count is the number of yes votes on a proposal.
     *
     * @generated from field: string yes_count = 1;
     */
    yesCount: string;
    /**
     * abstain_count is the number of abstain votes on a proposal.
     *
     * @generated from field: string abstain_count = 2;
     */
    abstainCount: string;
    /**
     * no_count is the number of no votes on a proposal.
     *
     * @generated from field: string no_count = 3;
     */
    noCount: string;
    /**
     * no_with_veto_count is the number of no with veto votes on a proposal.
     *
     * @generated from field: string no_with_veto_count = 4;
     */
    noWithVetoCount: string;
    constructor(data?: PartialMessage<TallyResult>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1.TallyResult";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TallyResult;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TallyResult;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TallyResult;
    static equals(a: TallyResult | PlainMessage<TallyResult> | undefined, b: TallyResult | PlainMessage<TallyResult> | undefined): boolean;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 *
 * @generated from message cosmos.gov.v1.Vote
 */
export declare class Vote extends Message<Vote> {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * voter is the voter address of the proposal.
     *
     * @generated from field: string voter = 2;
     */
    voter: string;
    /**
     * options is the weighted vote options.
     *
     * @generated from field: repeated cosmos.gov.v1.WeightedVoteOption options = 4;
     */
    options: WeightedVoteOption[];
    /**
     * metadata is any  arbitrary metadata to attached to the vote.
     *
     * @generated from field: string metadata = 5;
     */
    metadata: string;
    constructor(data?: PartialMessage<Vote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1.Vote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Vote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Vote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Vote;
    static equals(a: Vote | PlainMessage<Vote> | undefined, b: Vote | PlainMessage<Vote> | undefined): boolean;
}
/**
 * DepositParams defines the params for deposits on governance proposals.
 *
 * @generated from message cosmos.gov.v1.DepositParams
 */
export declare class DepositParams extends Message<DepositParams> {
    /**
     * Minimum deposit for a proposal to enter voting period.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin min_deposit = 1;
     */
    minDeposit: Coin[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     * months.
     *
     * @generated from field: google.protobuf.Duration max_deposit_period = 2;
     */
    maxDepositPeriod?: Duration;
    constructor(data?: PartialMessage<DepositParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1.DepositParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepositParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepositParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepositParams;
    static equals(a: DepositParams | PlainMessage<DepositParams> | undefined, b: DepositParams | PlainMessage<DepositParams> | undefined): boolean;
}
/**
 * VotingParams defines the params for voting on governance proposals.
 *
 * @generated from message cosmos.gov.v1.VotingParams
 */
export declare class VotingParams extends Message<VotingParams> {
    /**
     * Duration of the voting period.
     *
     * @generated from field: google.protobuf.Duration voting_period = 1;
     */
    votingPeriod?: Duration;
    constructor(data?: PartialMessage<VotingParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1.VotingParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VotingParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VotingParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VotingParams;
    static equals(a: VotingParams | PlainMessage<VotingParams> | undefined, b: VotingParams | PlainMessage<VotingParams> | undefined): boolean;
}
/**
 * TallyParams defines the params for tallying votes on governance proposals.
 *
 * @generated from message cosmos.gov.v1.TallyParams
 */
export declare class TallyParams extends Message<TallyParams> {
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     * considered valid.
     *
     * @generated from field: string quorum = 1;
     */
    quorum: string;
    /**
     * Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
     *
     * @generated from field: string threshold = 2;
     */
    threshold: string;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     * vetoed. Default value: 1/3.
     *
     * @generated from field: string veto_threshold = 3;
     */
    vetoThreshold: string;
    constructor(data?: PartialMessage<TallyParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1.TallyParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TallyParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TallyParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TallyParams;
    static equals(a: TallyParams | PlainMessage<TallyParams> | undefined, b: TallyParams | PlainMessage<TallyParams> | undefined): boolean;
}
/**
 * Params defines the parameters for the x/gov module.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.gov.v1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * Minimum deposit for a proposal to enter voting period.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin min_deposit = 1;
     */
    minDeposit: Coin[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     * months.
     *
     * @generated from field: google.protobuf.Duration max_deposit_period = 2;
     */
    maxDepositPeriod?: Duration;
    /**
     * Duration of the voting period.
     *
     * @generated from field: google.protobuf.Duration voting_period = 3;
     */
    votingPeriod?: Duration;
    /**
     *  Minimum percentage of total stake needed to vote for a result to be
     *  considered valid.
     *
     * @generated from field: string quorum = 4;
     */
    quorum: string;
    /**
     *  Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
     *
     * @generated from field: string threshold = 5;
     */
    threshold: string;
    /**
     *  Minimum value of Veto votes to Total votes ratio for proposal to be
     *  vetoed. Default value: 1/3.
     *
     * @generated from field: string veto_threshold = 6;
     */
    vetoThreshold: string;
    /**
     *  The ratio representing the proportion of the deposit value that must be paid at proposal submission.
     *
     * @generated from field: string min_initial_deposit_ratio = 7;
     */
    minInitialDepositRatio: string;
    /**
     * burn deposits if a proposal does not meet quorum
     *
     * @generated from field: bool burn_vote_quorum = 13;
     */
    burnVoteQuorum: boolean;
    /**
     * burn deposits if the proposal does not enter voting period
     *
     * @generated from field: bool burn_proposal_deposit_prevote = 14;
     */
    burnProposalDepositPrevote: boolean;
    /**
     * burn deposits if quorum with vote type no_veto is met
     *
     * @generated from field: bool burn_vote_veto = 15;
     */
    burnVoteVeto: boolean;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=gov_pb.d.ts.map