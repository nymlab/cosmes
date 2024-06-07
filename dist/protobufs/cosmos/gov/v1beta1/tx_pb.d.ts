import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { VoteOption, WeightedVoteOption } from "./gov_pb.js";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 *
 * @generated from message cosmos.gov.v1beta1.MsgSubmitProposal
 */
export declare class MsgSubmitProposal extends Message<MsgSubmitProposal> {
    /**
     * content is the proposal's content.
     *
     * @generated from field: google.protobuf.Any content = 1;
     */
    content?: Any;
    /**
     * initial_deposit is the deposit value that must be paid at proposal submission.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin initial_deposit = 2;
     */
    initialDeposit: Coin[];
    /**
     * proposer is the account address of the proposer.
     *
     * @generated from field: string proposer = 3;
     */
    proposer: string;
    constructor(data?: PartialMessage<MsgSubmitProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.MsgSubmitProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitProposal;
    static equals(a: MsgSubmitProposal | PlainMessage<MsgSubmitProposal> | undefined, b: MsgSubmitProposal | PlainMessage<MsgSubmitProposal> | undefined): boolean;
}
/**
 * MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.
 *
 * @generated from message cosmos.gov.v1beta1.MsgSubmitProposalResponse
 */
export declare class MsgSubmitProposalResponse extends Message<MsgSubmitProposalResponse> {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    constructor(data?: PartialMessage<MsgSubmitProposalResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.MsgSubmitProposalResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitProposalResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitProposalResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitProposalResponse;
    static equals(a: MsgSubmitProposalResponse | PlainMessage<MsgSubmitProposalResponse> | undefined, b: MsgSubmitProposalResponse | PlainMessage<MsgSubmitProposalResponse> | undefined): boolean;
}
/**
 * MsgVote defines a message to cast a vote.
 *
 * @generated from message cosmos.gov.v1beta1.MsgVote
 */
export declare class MsgVote extends Message<MsgVote> {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * voter is the voter address for the proposal.
     *
     * @generated from field: string voter = 2;
     */
    voter: string;
    /**
     * option defines the vote option.
     *
     * @generated from field: cosmos.gov.v1beta1.VoteOption option = 3;
     */
    option: VoteOption;
    constructor(data?: PartialMessage<MsgVote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.MsgVote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVote;
    static equals(a: MsgVote | PlainMessage<MsgVote> | undefined, b: MsgVote | PlainMessage<MsgVote> | undefined): boolean;
}
/**
 * MsgVoteResponse defines the Msg/Vote response type.
 *
 * @generated from message cosmos.gov.v1beta1.MsgVoteResponse
 */
export declare class MsgVoteResponse extends Message<MsgVoteResponse> {
    constructor(data?: PartialMessage<MsgVoteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.MsgVoteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVoteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVoteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVoteResponse;
    static equals(a: MsgVoteResponse | PlainMessage<MsgVoteResponse> | undefined, b: MsgVoteResponse | PlainMessage<MsgVoteResponse> | undefined): boolean;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.gov.v1beta1.MsgVoteWeighted
 */
export declare class MsgVoteWeighted extends Message<MsgVoteWeighted> {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * voter is the voter address for the proposal.
     *
     * @generated from field: string voter = 2;
     */
    voter: string;
    /**
     * options defines the weighted vote options.
     *
     * @generated from field: repeated cosmos.gov.v1beta1.WeightedVoteOption options = 3;
     */
    options: WeightedVoteOption[];
    constructor(data?: PartialMessage<MsgVoteWeighted>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.MsgVoteWeighted";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVoteWeighted;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVoteWeighted;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVoteWeighted;
    static equals(a: MsgVoteWeighted | PlainMessage<MsgVoteWeighted> | undefined, b: MsgVoteWeighted | PlainMessage<MsgVoteWeighted> | undefined): boolean;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.gov.v1beta1.MsgVoteWeightedResponse
 */
export declare class MsgVoteWeightedResponse extends Message<MsgVoteWeightedResponse> {
    constructor(data?: PartialMessage<MsgVoteWeightedResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.MsgVoteWeightedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVoteWeightedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVoteWeightedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVoteWeightedResponse;
    static equals(a: MsgVoteWeightedResponse | PlainMessage<MsgVoteWeightedResponse> | undefined, b: MsgVoteWeightedResponse | PlainMessage<MsgVoteWeightedResponse> | undefined): boolean;
}
/**
 * MsgDeposit defines a message to submit a deposit to an existing proposal.
 *
 * @generated from message cosmos.gov.v1beta1.MsgDeposit
 */
export declare class MsgDeposit extends Message<MsgDeposit> {
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
    constructor(data?: PartialMessage<MsgDeposit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.MsgDeposit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDeposit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDeposit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDeposit;
    static equals(a: MsgDeposit | PlainMessage<MsgDeposit> | undefined, b: MsgDeposit | PlainMessage<MsgDeposit> | undefined): boolean;
}
/**
 * MsgDepositResponse defines the Msg/Deposit response type.
 *
 * @generated from message cosmos.gov.v1beta1.MsgDepositResponse
 */
export declare class MsgDepositResponse extends Message<MsgDepositResponse> {
    constructor(data?: PartialMessage<MsgDepositResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.MsgDepositResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDepositResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDepositResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDepositResponse;
    static equals(a: MsgDepositResponse | PlainMessage<MsgDepositResponse> | undefined, b: MsgDepositResponse | PlainMessage<MsgDepositResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map