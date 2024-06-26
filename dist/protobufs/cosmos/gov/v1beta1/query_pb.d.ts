import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Deposit, DepositParams, Proposal, ProposalStatus, TallyParams, TallyResult, Vote, VotingParams } from "./gov_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
/**
 * QueryProposalRequest is the request type for the Query/Proposal RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryProposalRequest
 */
export declare class QueryProposalRequest extends Message<QueryProposalRequest> {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    constructor(data?: PartialMessage<QueryProposalRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryProposalRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProposalRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProposalRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProposalRequest;
    static equals(a: QueryProposalRequest | PlainMessage<QueryProposalRequest> | undefined, b: QueryProposalRequest | PlainMessage<QueryProposalRequest> | undefined): boolean;
}
/**
 * QueryProposalResponse is the response type for the Query/Proposal RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryProposalResponse
 */
export declare class QueryProposalResponse extends Message<QueryProposalResponse> {
    /**
     * @generated from field: cosmos.gov.v1beta1.Proposal proposal = 1;
     */
    proposal?: Proposal;
    constructor(data?: PartialMessage<QueryProposalResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryProposalResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProposalResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProposalResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProposalResponse;
    static equals(a: QueryProposalResponse | PlainMessage<QueryProposalResponse> | undefined, b: QueryProposalResponse | PlainMessage<QueryProposalResponse> | undefined): boolean;
}
/**
 * QueryProposalsRequest is the request type for the Query/Proposals RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryProposalsRequest
 */
export declare class QueryProposalsRequest extends Message<QueryProposalsRequest> {
    /**
     * proposal_status defines the status of the proposals.
     *
     * @generated from field: cosmos.gov.v1beta1.ProposalStatus proposal_status = 1;
     */
    proposalStatus: ProposalStatus;
    /**
     * voter defines the voter address for the proposals.
     *
     * @generated from field: string voter = 2;
     */
    voter: string;
    /**
     * depositor defines the deposit addresses from the proposals.
     *
     * @generated from field: string depositor = 3;
     */
    depositor: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 4;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryProposalsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryProposalsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProposalsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProposalsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProposalsRequest;
    static equals(a: QueryProposalsRequest | PlainMessage<QueryProposalsRequest> | undefined, b: QueryProposalsRequest | PlainMessage<QueryProposalsRequest> | undefined): boolean;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryProposalsResponse
 */
export declare class QueryProposalsResponse extends Message<QueryProposalsResponse> {
    /**
     * proposals defines all the requested governance proposals.
     *
     * @generated from field: repeated cosmos.gov.v1beta1.Proposal proposals = 1;
     */
    proposals: Proposal[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryProposalsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryProposalsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProposalsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProposalsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProposalsResponse;
    static equals(a: QueryProposalsResponse | PlainMessage<QueryProposalsResponse> | undefined, b: QueryProposalsResponse | PlainMessage<QueryProposalsResponse> | undefined): boolean;
}
/**
 * QueryVoteRequest is the request type for the Query/Vote RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryVoteRequest
 */
export declare class QueryVoteRequest extends Message<QueryVoteRequest> {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * voter defines the voter address for the proposals.
     *
     * @generated from field: string voter = 2;
     */
    voter: string;
    constructor(data?: PartialMessage<QueryVoteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryVoteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVoteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVoteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVoteRequest;
    static equals(a: QueryVoteRequest | PlainMessage<QueryVoteRequest> | undefined, b: QueryVoteRequest | PlainMessage<QueryVoteRequest> | undefined): boolean;
}
/**
 * QueryVoteResponse is the response type for the Query/Vote RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryVoteResponse
 */
export declare class QueryVoteResponse extends Message<QueryVoteResponse> {
    /**
     * vote defines the queried vote.
     *
     * @generated from field: cosmos.gov.v1beta1.Vote vote = 1;
     */
    vote?: Vote;
    constructor(data?: PartialMessage<QueryVoteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryVoteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVoteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVoteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVoteResponse;
    static equals(a: QueryVoteResponse | PlainMessage<QueryVoteResponse> | undefined, b: QueryVoteResponse | PlainMessage<QueryVoteResponse> | undefined): boolean;
}
/**
 * QueryVotesRequest is the request type for the Query/Votes RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryVotesRequest
 */
export declare class QueryVotesRequest extends Message<QueryVotesRequest> {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryVotesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryVotesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVotesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVotesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVotesRequest;
    static equals(a: QueryVotesRequest | PlainMessage<QueryVotesRequest> | undefined, b: QueryVotesRequest | PlainMessage<QueryVotesRequest> | undefined): boolean;
}
/**
 * QueryVotesResponse is the response type for the Query/Votes RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryVotesResponse
 */
export declare class QueryVotesResponse extends Message<QueryVotesResponse> {
    /**
     * votes defines the queried votes.
     *
     * @generated from field: repeated cosmos.gov.v1beta1.Vote votes = 1;
     */
    votes: Vote[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryVotesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryVotesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVotesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVotesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVotesResponse;
    static equals(a: QueryVotesResponse | PlainMessage<QueryVotesResponse> | undefined, b: QueryVotesResponse | PlainMessage<QueryVotesResponse> | undefined): boolean;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    /**
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     *
     * @generated from field: string params_type = 1;
     */
    paramsType: string;
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * voting_params defines the parameters related to voting.
     *
     * @generated from field: cosmos.gov.v1beta1.VotingParams voting_params = 1;
     */
    votingParams?: VotingParams;
    /**
     * deposit_params defines the parameters related to deposit.
     *
     * @generated from field: cosmos.gov.v1beta1.DepositParams deposit_params = 2;
     */
    depositParams?: DepositParams;
    /**
     * tally_params defines the parameters related to tally.
     *
     * @generated from field: cosmos.gov.v1beta1.TallyParams tally_params = 3;
     */
    tallyParams?: TallyParams;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QueryDepositRequest is the request type for the Query/Deposit RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryDepositRequest
 */
export declare class QueryDepositRequest extends Message<QueryDepositRequest> {
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
    constructor(data?: PartialMessage<QueryDepositRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryDepositRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDepositRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDepositRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDepositRequest;
    static equals(a: QueryDepositRequest | PlainMessage<QueryDepositRequest> | undefined, b: QueryDepositRequest | PlainMessage<QueryDepositRequest> | undefined): boolean;
}
/**
 * QueryDepositResponse is the response type for the Query/Deposit RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryDepositResponse
 */
export declare class QueryDepositResponse extends Message<QueryDepositResponse> {
    /**
     * deposit defines the requested deposit.
     *
     * @generated from field: cosmos.gov.v1beta1.Deposit deposit = 1;
     */
    deposit?: Deposit;
    constructor(data?: PartialMessage<QueryDepositResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryDepositResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDepositResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDepositResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDepositResponse;
    static equals(a: QueryDepositResponse | PlainMessage<QueryDepositResponse> | undefined, b: QueryDepositResponse | PlainMessage<QueryDepositResponse> | undefined): boolean;
}
/**
 * QueryDepositsRequest is the request type for the Query/Deposits RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryDepositsRequest
 */
export declare class QueryDepositsRequest extends Message<QueryDepositsRequest> {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryDepositsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryDepositsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDepositsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDepositsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDepositsRequest;
    static equals(a: QueryDepositsRequest | PlainMessage<QueryDepositsRequest> | undefined, b: QueryDepositsRequest | PlainMessage<QueryDepositsRequest> | undefined): boolean;
}
/**
 * QueryDepositsResponse is the response type for the Query/Deposits RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryDepositsResponse
 */
export declare class QueryDepositsResponse extends Message<QueryDepositsResponse> {
    /**
     * deposits defines the requested deposits.
     *
     * @generated from field: repeated cosmos.gov.v1beta1.Deposit deposits = 1;
     */
    deposits: Deposit[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryDepositsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryDepositsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDepositsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDepositsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDepositsResponse;
    static equals(a: QueryDepositsResponse | PlainMessage<QueryDepositsResponse> | undefined, b: QueryDepositsResponse | PlainMessage<QueryDepositsResponse> | undefined): boolean;
}
/**
 * QueryTallyResultRequest is the request type for the Query/Tally RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryTallyResultRequest
 */
export declare class QueryTallyResultRequest extends Message<QueryTallyResultRequest> {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    constructor(data?: PartialMessage<QueryTallyResultRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryTallyResultRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTallyResultRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTallyResultRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTallyResultRequest;
    static equals(a: QueryTallyResultRequest | PlainMessage<QueryTallyResultRequest> | undefined, b: QueryTallyResultRequest | PlainMessage<QueryTallyResultRequest> | undefined): boolean;
}
/**
 * QueryTallyResultResponse is the response type for the Query/Tally RPC method.
 *
 * @generated from message cosmos.gov.v1beta1.QueryTallyResultResponse
 */
export declare class QueryTallyResultResponse extends Message<QueryTallyResultResponse> {
    /**
     * tally defines the requested tally.
     *
     * @generated from field: cosmos.gov.v1beta1.TallyResult tally = 1;
     */
    tally?: TallyResult;
    constructor(data?: PartialMessage<QueryTallyResultResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.QueryTallyResultResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTallyResultResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTallyResultResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTallyResultResponse;
    static equals(a: QueryTallyResultResponse | PlainMessage<QueryTallyResultResponse> | undefined, b: QueryTallyResultResponse | PlainMessage<QueryTallyResultResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map