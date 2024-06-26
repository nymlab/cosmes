import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, TallyResult, Vote } from "./types_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
/**
 * QueryGroupInfoRequest is the Query/GroupInfo request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupInfoRequest
 */
export declare class QueryGroupInfoRequest extends Message<QueryGroupInfoRequest> {
    /**
     * group_id is the unique ID of the group.
     *
     * @generated from field: uint64 group_id = 1;
     */
    groupId: bigint;
    constructor(data?: PartialMessage<QueryGroupInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupInfoRequest;
    static equals(a: QueryGroupInfoRequest | PlainMessage<QueryGroupInfoRequest> | undefined, b: QueryGroupInfoRequest | PlainMessage<QueryGroupInfoRequest> | undefined): boolean;
}
/**
 * QueryGroupInfoResponse is the Query/GroupInfo response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupInfoResponse
 */
export declare class QueryGroupInfoResponse extends Message<QueryGroupInfoResponse> {
    /**
     * info is the GroupInfo of the group.
     *
     * @generated from field: cosmos.group.v1.GroupInfo info = 1;
     */
    info?: GroupInfo;
    constructor(data?: PartialMessage<QueryGroupInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupInfoResponse;
    static equals(a: QueryGroupInfoResponse | PlainMessage<QueryGroupInfoResponse> | undefined, b: QueryGroupInfoResponse | PlainMessage<QueryGroupInfoResponse> | undefined): boolean;
}
/**
 * QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPolicyInfoRequest
 */
export declare class QueryGroupPolicyInfoRequest extends Message<QueryGroupPolicyInfoRequest> {
    /**
     * address is the account address of the group policy.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryGroupPolicyInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupPolicyInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupPolicyInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupPolicyInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupPolicyInfoRequest;
    static equals(a: QueryGroupPolicyInfoRequest | PlainMessage<QueryGroupPolicyInfoRequest> | undefined, b: QueryGroupPolicyInfoRequest | PlainMessage<QueryGroupPolicyInfoRequest> | undefined): boolean;
}
/**
 * QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPolicyInfoResponse
 */
export declare class QueryGroupPolicyInfoResponse extends Message<QueryGroupPolicyInfoResponse> {
    /**
     * info is the GroupPolicyInfo of the group policy.
     *
     * @generated from field: cosmos.group.v1.GroupPolicyInfo info = 1;
     */
    info?: GroupPolicyInfo;
    constructor(data?: PartialMessage<QueryGroupPolicyInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupPolicyInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupPolicyInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupPolicyInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupPolicyInfoResponse;
    static equals(a: QueryGroupPolicyInfoResponse | PlainMessage<QueryGroupPolicyInfoResponse> | undefined, b: QueryGroupPolicyInfoResponse | PlainMessage<QueryGroupPolicyInfoResponse> | undefined): boolean;
}
/**
 * QueryGroupMembersRequest is the Query/GroupMembers request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupMembersRequest
 */
export declare class QueryGroupMembersRequest extends Message<QueryGroupMembersRequest> {
    /**
     * group_id is the unique ID of the group.
     *
     * @generated from field: uint64 group_id = 1;
     */
    groupId: bigint;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryGroupMembersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupMembersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupMembersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupMembersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupMembersRequest;
    static equals(a: QueryGroupMembersRequest | PlainMessage<QueryGroupMembersRequest> | undefined, b: QueryGroupMembersRequest | PlainMessage<QueryGroupMembersRequest> | undefined): boolean;
}
/**
 * QueryGroupMembersResponse is the Query/GroupMembersResponse response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupMembersResponse
 */
export declare class QueryGroupMembersResponse extends Message<QueryGroupMembersResponse> {
    /**
     * members are the members of the group with given group_id.
     *
     * @generated from field: repeated cosmos.group.v1.GroupMember members = 1;
     */
    members: GroupMember[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryGroupMembersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupMembersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupMembersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupMembersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupMembersResponse;
    static equals(a: QueryGroupMembersResponse | PlainMessage<QueryGroupMembersResponse> | undefined, b: QueryGroupMembersResponse | PlainMessage<QueryGroupMembersResponse> | undefined): boolean;
}
/**
 * QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupsByAdminRequest
 */
export declare class QueryGroupsByAdminRequest extends Message<QueryGroupsByAdminRequest> {
    /**
     * admin is the account address of a group's admin.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryGroupsByAdminRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupsByAdminRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupsByAdminRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupsByAdminRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupsByAdminRequest;
    static equals(a: QueryGroupsByAdminRequest | PlainMessage<QueryGroupsByAdminRequest> | undefined, b: QueryGroupsByAdminRequest | PlainMessage<QueryGroupsByAdminRequest> | undefined): boolean;
}
/**
 * QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupsByAdminResponse
 */
export declare class QueryGroupsByAdminResponse extends Message<QueryGroupsByAdminResponse> {
    /**
     * groups are the groups info with the provided admin.
     *
     * @generated from field: repeated cosmos.group.v1.GroupInfo groups = 1;
     */
    groups: GroupInfo[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryGroupsByAdminResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupsByAdminResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupsByAdminResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupsByAdminResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupsByAdminResponse;
    static equals(a: QueryGroupsByAdminResponse | PlainMessage<QueryGroupsByAdminResponse> | undefined, b: QueryGroupsByAdminResponse | PlainMessage<QueryGroupsByAdminResponse> | undefined): boolean;
}
/**
 * QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPoliciesByGroupRequest
 */
export declare class QueryGroupPoliciesByGroupRequest extends Message<QueryGroupPoliciesByGroupRequest> {
    /**
     * group_id is the unique ID of the group policy's group.
     *
     * @generated from field: uint64 group_id = 1;
     */
    groupId: bigint;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryGroupPoliciesByGroupRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupPoliciesByGroupRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupPoliciesByGroupRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupPoliciesByGroupRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupPoliciesByGroupRequest;
    static equals(a: QueryGroupPoliciesByGroupRequest | PlainMessage<QueryGroupPoliciesByGroupRequest> | undefined, b: QueryGroupPoliciesByGroupRequest | PlainMessage<QueryGroupPoliciesByGroupRequest> | undefined): boolean;
}
/**
 * QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPoliciesByGroupResponse
 */
export declare class QueryGroupPoliciesByGroupResponse extends Message<QueryGroupPoliciesByGroupResponse> {
    /**
     * group_policies are the group policies info associated with the provided group.
     *
     * @generated from field: repeated cosmos.group.v1.GroupPolicyInfo group_policies = 1;
     */
    groupPolicies: GroupPolicyInfo[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryGroupPoliciesByGroupResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupPoliciesByGroupResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupPoliciesByGroupResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupPoliciesByGroupResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupPoliciesByGroupResponse;
    static equals(a: QueryGroupPoliciesByGroupResponse | PlainMessage<QueryGroupPoliciesByGroupResponse> | undefined, b: QueryGroupPoliciesByGroupResponse | PlainMessage<QueryGroupPoliciesByGroupResponse> | undefined): boolean;
}
/**
 * QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPoliciesByAdminRequest
 */
export declare class QueryGroupPoliciesByAdminRequest extends Message<QueryGroupPoliciesByAdminRequest> {
    /**
     * admin is the admin address of the group policy.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryGroupPoliciesByAdminRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupPoliciesByAdminRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupPoliciesByAdminRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupPoliciesByAdminRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupPoliciesByAdminRequest;
    static equals(a: QueryGroupPoliciesByAdminRequest | PlainMessage<QueryGroupPoliciesByAdminRequest> | undefined, b: QueryGroupPoliciesByAdminRequest | PlainMessage<QueryGroupPoliciesByAdminRequest> | undefined): boolean;
}
/**
 * QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPoliciesByAdminResponse
 */
export declare class QueryGroupPoliciesByAdminResponse extends Message<QueryGroupPoliciesByAdminResponse> {
    /**
     * group_policies are the group policies info with provided admin.
     *
     * @generated from field: repeated cosmos.group.v1.GroupPolicyInfo group_policies = 1;
     */
    groupPolicies: GroupPolicyInfo[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryGroupPoliciesByAdminResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupPoliciesByAdminResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupPoliciesByAdminResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupPoliciesByAdminResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupPoliciesByAdminResponse;
    static equals(a: QueryGroupPoliciesByAdminResponse | PlainMessage<QueryGroupPoliciesByAdminResponse> | undefined, b: QueryGroupPoliciesByAdminResponse | PlainMessage<QueryGroupPoliciesByAdminResponse> | undefined): boolean;
}
/**
 * QueryProposalRequest is the Query/Proposal request type.
 *
 * @generated from message cosmos.group.v1.QueryProposalRequest
 */
export declare class QueryProposalRequest extends Message<QueryProposalRequest> {
    /**
     * proposal_id is the unique ID of a proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    constructor(data?: PartialMessage<QueryProposalRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryProposalRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProposalRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProposalRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProposalRequest;
    static equals(a: QueryProposalRequest | PlainMessage<QueryProposalRequest> | undefined, b: QueryProposalRequest | PlainMessage<QueryProposalRequest> | undefined): boolean;
}
/**
 * QueryProposalResponse is the Query/Proposal response type.
 *
 * @generated from message cosmos.group.v1.QueryProposalResponse
 */
export declare class QueryProposalResponse extends Message<QueryProposalResponse> {
    /**
     * proposal is the proposal info.
     *
     * @generated from field: cosmos.group.v1.Proposal proposal = 1;
     */
    proposal?: Proposal;
    constructor(data?: PartialMessage<QueryProposalResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryProposalResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProposalResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProposalResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProposalResponse;
    static equals(a: QueryProposalResponse | PlainMessage<QueryProposalResponse> | undefined, b: QueryProposalResponse | PlainMessage<QueryProposalResponse> | undefined): boolean;
}
/**
 * QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type.
 *
 * @generated from message cosmos.group.v1.QueryProposalsByGroupPolicyRequest
 */
export declare class QueryProposalsByGroupPolicyRequest extends Message<QueryProposalsByGroupPolicyRequest> {
    /**
     * address is the account address of the group policy related to proposals.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryProposalsByGroupPolicyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryProposalsByGroupPolicyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProposalsByGroupPolicyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProposalsByGroupPolicyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProposalsByGroupPolicyRequest;
    static equals(a: QueryProposalsByGroupPolicyRequest | PlainMessage<QueryProposalsByGroupPolicyRequest> | undefined, b: QueryProposalsByGroupPolicyRequest | PlainMessage<QueryProposalsByGroupPolicyRequest> | undefined): boolean;
}
/**
 * QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type.
 *
 * @generated from message cosmos.group.v1.QueryProposalsByGroupPolicyResponse
 */
export declare class QueryProposalsByGroupPolicyResponse extends Message<QueryProposalsByGroupPolicyResponse> {
    /**
     * proposals are the proposals with given group policy.
     *
     * @generated from field: repeated cosmos.group.v1.Proposal proposals = 1;
     */
    proposals: Proposal[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryProposalsByGroupPolicyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryProposalsByGroupPolicyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProposalsByGroupPolicyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProposalsByGroupPolicyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProposalsByGroupPolicyResponse;
    static equals(a: QueryProposalsByGroupPolicyResponse | PlainMessage<QueryProposalsByGroupPolicyResponse> | undefined, b: QueryProposalsByGroupPolicyResponse | PlainMessage<QueryProposalsByGroupPolicyResponse> | undefined): boolean;
}
/**
 * QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type.
 *
 * @generated from message cosmos.group.v1.QueryVoteByProposalVoterRequest
 */
export declare class QueryVoteByProposalVoterRequest extends Message<QueryVoteByProposalVoterRequest> {
    /**
     * proposal_id is the unique ID of a proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * voter is a proposal voter account address.
     *
     * @generated from field: string voter = 2;
     */
    voter: string;
    constructor(data?: PartialMessage<QueryVoteByProposalVoterRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryVoteByProposalVoterRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVoteByProposalVoterRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVoteByProposalVoterRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVoteByProposalVoterRequest;
    static equals(a: QueryVoteByProposalVoterRequest | PlainMessage<QueryVoteByProposalVoterRequest> | undefined, b: QueryVoteByProposalVoterRequest | PlainMessage<QueryVoteByProposalVoterRequest> | undefined): boolean;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type.
 *
 * @generated from message cosmos.group.v1.QueryVoteByProposalVoterResponse
 */
export declare class QueryVoteByProposalVoterResponse extends Message<QueryVoteByProposalVoterResponse> {
    /**
     * vote is the vote with given proposal_id and voter.
     *
     * @generated from field: cosmos.group.v1.Vote vote = 1;
     */
    vote?: Vote;
    constructor(data?: PartialMessage<QueryVoteByProposalVoterResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryVoteByProposalVoterResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVoteByProposalVoterResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVoteByProposalVoterResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVoteByProposalVoterResponse;
    static equals(a: QueryVoteByProposalVoterResponse | PlainMessage<QueryVoteByProposalVoterResponse> | undefined, b: QueryVoteByProposalVoterResponse | PlainMessage<QueryVoteByProposalVoterResponse> | undefined): boolean;
}
/**
 * QueryVotesByProposalRequest is the Query/VotesByProposal request type.
 *
 * @generated from message cosmos.group.v1.QueryVotesByProposalRequest
 */
export declare class QueryVotesByProposalRequest extends Message<QueryVotesByProposalRequest> {
    /**
     * proposal_id is the unique ID of a proposal.
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
    constructor(data?: PartialMessage<QueryVotesByProposalRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryVotesByProposalRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVotesByProposalRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVotesByProposalRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVotesByProposalRequest;
    static equals(a: QueryVotesByProposalRequest | PlainMessage<QueryVotesByProposalRequest> | undefined, b: QueryVotesByProposalRequest | PlainMessage<QueryVotesByProposalRequest> | undefined): boolean;
}
/**
 * QueryVotesByProposalResponse is the Query/VotesByProposal response type.
 *
 * @generated from message cosmos.group.v1.QueryVotesByProposalResponse
 */
export declare class QueryVotesByProposalResponse extends Message<QueryVotesByProposalResponse> {
    /**
     * votes are the list of votes for given proposal_id.
     *
     * @generated from field: repeated cosmos.group.v1.Vote votes = 1;
     */
    votes: Vote[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryVotesByProposalResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryVotesByProposalResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVotesByProposalResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVotesByProposalResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVotesByProposalResponse;
    static equals(a: QueryVotesByProposalResponse | PlainMessage<QueryVotesByProposalResponse> | undefined, b: QueryVotesByProposalResponse | PlainMessage<QueryVotesByProposalResponse> | undefined): boolean;
}
/**
 * QueryVotesByVoterRequest is the Query/VotesByVoter request type.
 *
 * @generated from message cosmos.group.v1.QueryVotesByVoterRequest
 */
export declare class QueryVotesByVoterRequest extends Message<QueryVotesByVoterRequest> {
    /**
     * voter is a proposal voter account address.
     *
     * @generated from field: string voter = 1;
     */
    voter: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryVotesByVoterRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryVotesByVoterRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVotesByVoterRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVotesByVoterRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVotesByVoterRequest;
    static equals(a: QueryVotesByVoterRequest | PlainMessage<QueryVotesByVoterRequest> | undefined, b: QueryVotesByVoterRequest | PlainMessage<QueryVotesByVoterRequest> | undefined): boolean;
}
/**
 * QueryVotesByVoterResponse is the Query/VotesByVoter response type.
 *
 * @generated from message cosmos.group.v1.QueryVotesByVoterResponse
 */
export declare class QueryVotesByVoterResponse extends Message<QueryVotesByVoterResponse> {
    /**
     * votes are the list of votes by given voter.
     *
     * @generated from field: repeated cosmos.group.v1.Vote votes = 1;
     */
    votes: Vote[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryVotesByVoterResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryVotesByVoterResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVotesByVoterResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVotesByVoterResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVotesByVoterResponse;
    static equals(a: QueryVotesByVoterResponse | PlainMessage<QueryVotesByVoterResponse> | undefined, b: QueryVotesByVoterResponse | PlainMessage<QueryVotesByVoterResponse> | undefined): boolean;
}
/**
 * QueryGroupsByMemberRequest is the Query/GroupsByMember request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupsByMemberRequest
 */
export declare class QueryGroupsByMemberRequest extends Message<QueryGroupsByMemberRequest> {
    /**
     * address is the group member address.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryGroupsByMemberRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupsByMemberRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupsByMemberRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupsByMemberRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupsByMemberRequest;
    static equals(a: QueryGroupsByMemberRequest | PlainMessage<QueryGroupsByMemberRequest> | undefined, b: QueryGroupsByMemberRequest | PlainMessage<QueryGroupsByMemberRequest> | undefined): boolean;
}
/**
 * QueryGroupsByMemberResponse is the Query/GroupsByMember response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupsByMemberResponse
 */
export declare class QueryGroupsByMemberResponse extends Message<QueryGroupsByMemberResponse> {
    /**
     * groups are the groups info with the provided group member.
     *
     * @generated from field: repeated cosmos.group.v1.GroupInfo groups = 1;
     */
    groups: GroupInfo[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryGroupsByMemberResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupsByMemberResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupsByMemberResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupsByMemberResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupsByMemberResponse;
    static equals(a: QueryGroupsByMemberResponse | PlainMessage<QueryGroupsByMemberResponse> | undefined, b: QueryGroupsByMemberResponse | PlainMessage<QueryGroupsByMemberResponse> | undefined): boolean;
}
/**
 * QueryTallyResultRequest is the Query/TallyResult request type.
 *
 * @generated from message cosmos.group.v1.QueryTallyResultRequest
 */
export declare class QueryTallyResultRequest extends Message<QueryTallyResultRequest> {
    /**
     * proposal_id is the unique id of a proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    constructor(data?: PartialMessage<QueryTallyResultRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryTallyResultRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTallyResultRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTallyResultRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTallyResultRequest;
    static equals(a: QueryTallyResultRequest | PlainMessage<QueryTallyResultRequest> | undefined, b: QueryTallyResultRequest | PlainMessage<QueryTallyResultRequest> | undefined): boolean;
}
/**
 * QueryTallyResultResponse is the Query/TallyResult response type.
 *
 * @generated from message cosmos.group.v1.QueryTallyResultResponse
 */
export declare class QueryTallyResultResponse extends Message<QueryTallyResultResponse> {
    /**
     * tally defines the requested tally.
     *
     * @generated from field: cosmos.group.v1.TallyResult tally = 1;
     */
    tally?: TallyResult;
    constructor(data?: PartialMessage<QueryTallyResultResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryTallyResultResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTallyResultResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTallyResultResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTallyResultResponse;
    static equals(a: QueryTallyResultResponse | PlainMessage<QueryTallyResultResponse> | undefined, b: QueryTallyResultResponse | PlainMessage<QueryTallyResultResponse> | undefined): boolean;
}
/**
 * QueryGroupsRequest is the Query/Groups request type.
 *
 * Since: cosmos-sdk 0.47.1
 *
 * @generated from message cosmos.group.v1.QueryGroupsRequest
 */
export declare class QueryGroupsRequest extends Message<QueryGroupsRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryGroupsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupsRequest;
    static equals(a: QueryGroupsRequest | PlainMessage<QueryGroupsRequest> | undefined, b: QueryGroupsRequest | PlainMessage<QueryGroupsRequest> | undefined): boolean;
}
/**
 * QueryGroupsResponse is the Query/Groups response type.
 *
 * Since: cosmos-sdk 0.47.1
 *
 * @generated from message cosmos.group.v1.QueryGroupsResponse
 */
export declare class QueryGroupsResponse extends Message<QueryGroupsResponse> {
    /**
     * `groups` is all the groups present in state.
     *
     * @generated from field: repeated cosmos.group.v1.GroupInfo groups = 1;
     */
    groups: GroupInfo[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryGroupsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.QueryGroupsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGroupsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGroupsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGroupsResponse;
    static equals(a: QueryGroupsResponse | PlainMessage<QueryGroupsResponse> | undefined, b: QueryGroupsResponse | PlainMessage<QueryGroupsResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map