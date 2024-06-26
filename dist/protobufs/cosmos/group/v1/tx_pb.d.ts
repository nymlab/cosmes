import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { MemberRequest, ProposalExecutorResult, VoteOption } from "./types_pb.js";
/**
 * Exec defines modes of execution of a proposal on creation or on new vote.
 *
 * @generated from enum cosmos.group.v1.Exec
 */
export declare enum Exec {
    /**
     * An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     *
     * @generated from enum value: EXEC_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     *
     * @generated from enum value: EXEC_TRY = 1;
     */
    TRY = 1
}
/**
 * MsgCreateGroup is the Msg/CreateGroup request type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroup
 */
export declare class MsgCreateGroup extends Message<MsgCreateGroup> {
    /**
     * admin is the account address of the group admin.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * members defines the group members.
     *
     * @generated from field: repeated cosmos.group.v1.MemberRequest members = 2;
     */
    members: MemberRequest[];
    /**
     * metadata is any arbitrary metadata to attached to the group.
     *
     * @generated from field: string metadata = 3;
     */
    metadata: string;
    constructor(data?: PartialMessage<MsgCreateGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgCreateGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateGroup;
    static equals(a: MsgCreateGroup | PlainMessage<MsgCreateGroup> | undefined, b: MsgCreateGroup | PlainMessage<MsgCreateGroup> | undefined): boolean;
}
/**
 * MsgCreateGroupResponse is the Msg/CreateGroup response type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupResponse
 */
export declare class MsgCreateGroupResponse extends Message<MsgCreateGroupResponse> {
    /**
     * group_id is the unique ID of the newly created group.
     *
     * @generated from field: uint64 group_id = 1;
     */
    groupId: bigint;
    constructor(data?: PartialMessage<MsgCreateGroupResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgCreateGroupResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateGroupResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateGroupResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateGroupResponse;
    static equals(a: MsgCreateGroupResponse | PlainMessage<MsgCreateGroupResponse> | undefined, b: MsgCreateGroupResponse | PlainMessage<MsgCreateGroupResponse> | undefined): boolean;
}
/**
 * MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupMembers
 */
export declare class MsgUpdateGroupMembers extends Message<MsgUpdateGroupMembers> {
    /**
     * admin is the account address of the group admin.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * group_id is the unique ID of the group.
     *
     * @generated from field: uint64 group_id = 2;
     */
    groupId: bigint;
    /**
     * member_updates is the list of members to update,
     * set weight to 0 to remove a member.
     *
     * @generated from field: repeated cosmos.group.v1.MemberRequest member_updates = 3;
     */
    memberUpdates: MemberRequest[];
    constructor(data?: PartialMessage<MsgUpdateGroupMembers>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgUpdateGroupMembers";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateGroupMembers;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateGroupMembers;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateGroupMembers;
    static equals(a: MsgUpdateGroupMembers | PlainMessage<MsgUpdateGroupMembers> | undefined, b: MsgUpdateGroupMembers | PlainMessage<MsgUpdateGroupMembers> | undefined): boolean;
}
/**
 * MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupMembersResponse
 */
export declare class MsgUpdateGroupMembersResponse extends Message<MsgUpdateGroupMembersResponse> {
    constructor(data?: PartialMessage<MsgUpdateGroupMembersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgUpdateGroupMembersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateGroupMembersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateGroupMembersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateGroupMembersResponse;
    static equals(a: MsgUpdateGroupMembersResponse | PlainMessage<MsgUpdateGroupMembersResponse> | undefined, b: MsgUpdateGroupMembersResponse | PlainMessage<MsgUpdateGroupMembersResponse> | undefined): boolean;
}
/**
 * MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupAdmin
 */
export declare class MsgUpdateGroupAdmin extends Message<MsgUpdateGroupAdmin> {
    /**
     * admin is the current account address of the group admin.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * group_id is the unique ID of the group.
     *
     * @generated from field: uint64 group_id = 2;
     */
    groupId: bigint;
    /**
     * new_admin is the group new admin account address.
     *
     * @generated from field: string new_admin = 3;
     */
    newAdmin: string;
    constructor(data?: PartialMessage<MsgUpdateGroupAdmin>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgUpdateGroupAdmin";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateGroupAdmin;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateGroupAdmin;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateGroupAdmin;
    static equals(a: MsgUpdateGroupAdmin | PlainMessage<MsgUpdateGroupAdmin> | undefined, b: MsgUpdateGroupAdmin | PlainMessage<MsgUpdateGroupAdmin> | undefined): boolean;
}
/**
 * MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupAdminResponse
 */
export declare class MsgUpdateGroupAdminResponse extends Message<MsgUpdateGroupAdminResponse> {
    constructor(data?: PartialMessage<MsgUpdateGroupAdminResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgUpdateGroupAdminResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateGroupAdminResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateGroupAdminResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateGroupAdminResponse;
    static equals(a: MsgUpdateGroupAdminResponse | PlainMessage<MsgUpdateGroupAdminResponse> | undefined, b: MsgUpdateGroupAdminResponse | PlainMessage<MsgUpdateGroupAdminResponse> | undefined): boolean;
}
/**
 * MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupMetadata
 */
export declare class MsgUpdateGroupMetadata extends Message<MsgUpdateGroupMetadata> {
    /**
     * admin is the account address of the group admin.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * group_id is the unique ID of the group.
     *
     * @generated from field: uint64 group_id = 2;
     */
    groupId: bigint;
    /**
     * metadata is the updated group's metadata.
     *
     * @generated from field: string metadata = 3;
     */
    metadata: string;
    constructor(data?: PartialMessage<MsgUpdateGroupMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgUpdateGroupMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateGroupMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateGroupMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateGroupMetadata;
    static equals(a: MsgUpdateGroupMetadata | PlainMessage<MsgUpdateGroupMetadata> | undefined, b: MsgUpdateGroupMetadata | PlainMessage<MsgUpdateGroupMetadata> | undefined): boolean;
}
/**
 * MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupMetadataResponse
 */
export declare class MsgUpdateGroupMetadataResponse extends Message<MsgUpdateGroupMetadataResponse> {
    constructor(data?: PartialMessage<MsgUpdateGroupMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgUpdateGroupMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateGroupMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateGroupMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateGroupMetadataResponse;
    static equals(a: MsgUpdateGroupMetadataResponse | PlainMessage<MsgUpdateGroupMetadataResponse> | undefined, b: MsgUpdateGroupMetadataResponse | PlainMessage<MsgUpdateGroupMetadataResponse> | undefined): boolean;
}
/**
 * MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupPolicy
 */
export declare class MsgCreateGroupPolicy extends Message<MsgCreateGroupPolicy> {
    /**
     * admin is the account address of the group admin.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * group_id is the unique ID of the group.
     *
     * @generated from field: uint64 group_id = 2;
     */
    groupId: bigint;
    /**
     * metadata is any arbitrary metadata attached to the group policy.
     *
     * @generated from field: string metadata = 3;
     */
    metadata: string;
    /**
     * decision_policy specifies the group policy's decision policy.
     *
     * @generated from field: google.protobuf.Any decision_policy = 4;
     */
    decisionPolicy?: Any;
    constructor(data?: PartialMessage<MsgCreateGroupPolicy>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgCreateGroupPolicy";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateGroupPolicy;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateGroupPolicy;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateGroupPolicy;
    static equals(a: MsgCreateGroupPolicy | PlainMessage<MsgCreateGroupPolicy> | undefined, b: MsgCreateGroupPolicy | PlainMessage<MsgCreateGroupPolicy> | undefined): boolean;
}
/**
 * MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupPolicyResponse
 */
export declare class MsgCreateGroupPolicyResponse extends Message<MsgCreateGroupPolicyResponse> {
    /**
     * address is the account address of the newly created group policy.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<MsgCreateGroupPolicyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgCreateGroupPolicyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateGroupPolicyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateGroupPolicyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateGroupPolicyResponse;
    static equals(a: MsgCreateGroupPolicyResponse | PlainMessage<MsgCreateGroupPolicyResponse> | undefined, b: MsgCreateGroupPolicyResponse | PlainMessage<MsgCreateGroupPolicyResponse> | undefined): boolean;
}
/**
 * MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyAdmin
 */
export declare class MsgUpdateGroupPolicyAdmin extends Message<MsgUpdateGroupPolicyAdmin> {
    /**
     * admin is the account address of the group admin.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * group_policy_address is the account address of the group policy.
     *
     * @generated from field: string group_policy_address = 2;
     */
    groupPolicyAddress: string;
    /**
     * new_admin is the new group policy admin.
     *
     * @generated from field: string new_admin = 3;
     */
    newAdmin: string;
    constructor(data?: PartialMessage<MsgUpdateGroupPolicyAdmin>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgUpdateGroupPolicyAdmin";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateGroupPolicyAdmin;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateGroupPolicyAdmin;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateGroupPolicyAdmin;
    static equals(a: MsgUpdateGroupPolicyAdmin | PlainMessage<MsgUpdateGroupPolicyAdmin> | undefined, b: MsgUpdateGroupPolicyAdmin | PlainMessage<MsgUpdateGroupPolicyAdmin> | undefined): boolean;
}
/**
 * MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse
 */
export declare class MsgUpdateGroupPolicyAdminResponse extends Message<MsgUpdateGroupPolicyAdminResponse> {
    constructor(data?: PartialMessage<MsgUpdateGroupPolicyAdminResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateGroupPolicyAdminResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateGroupPolicyAdminResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateGroupPolicyAdminResponse;
    static equals(a: MsgUpdateGroupPolicyAdminResponse | PlainMessage<MsgUpdateGroupPolicyAdminResponse> | undefined, b: MsgUpdateGroupPolicyAdminResponse | PlainMessage<MsgUpdateGroupPolicyAdminResponse> | undefined): boolean;
}
/**
 * MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupWithPolicy
 */
export declare class MsgCreateGroupWithPolicy extends Message<MsgCreateGroupWithPolicy> {
    /**
     * admin is the account address of the group and group policy admin.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * members defines the group members.
     *
     * @generated from field: repeated cosmos.group.v1.MemberRequest members = 2;
     */
    members: MemberRequest[];
    /**
     * group_metadata is any arbitrary metadata attached to the group.
     *
     * @generated from field: string group_metadata = 3;
     */
    groupMetadata: string;
    /**
     * group_policy_metadata is any arbitrary metadata attached to the group policy.
     *
     * @generated from field: string group_policy_metadata = 4;
     */
    groupPolicyMetadata: string;
    /**
     * group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group
     * and group policy admin.
     *
     * @generated from field: bool group_policy_as_admin = 5;
     */
    groupPolicyAsAdmin: boolean;
    /**
     * decision_policy specifies the group policy's decision policy.
     *
     * @generated from field: google.protobuf.Any decision_policy = 6;
     */
    decisionPolicy?: Any;
    constructor(data?: PartialMessage<MsgCreateGroupWithPolicy>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgCreateGroupWithPolicy";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateGroupWithPolicy;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateGroupWithPolicy;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateGroupWithPolicy;
    static equals(a: MsgCreateGroupWithPolicy | PlainMessage<MsgCreateGroupWithPolicy> | undefined, b: MsgCreateGroupWithPolicy | PlainMessage<MsgCreateGroupWithPolicy> | undefined): boolean;
}
/**
 * MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupWithPolicyResponse
 */
export declare class MsgCreateGroupWithPolicyResponse extends Message<MsgCreateGroupWithPolicyResponse> {
    /**
     * group_id is the unique ID of the newly created group with policy.
     *
     * @generated from field: uint64 group_id = 1;
     */
    groupId: bigint;
    /**
     * group_policy_address is the account address of the newly created group policy.
     *
     * @generated from field: string group_policy_address = 2;
     */
    groupPolicyAddress: string;
    constructor(data?: PartialMessage<MsgCreateGroupWithPolicyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgCreateGroupWithPolicyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateGroupWithPolicyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateGroupWithPolicyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateGroupWithPolicyResponse;
    static equals(a: MsgCreateGroupWithPolicyResponse | PlainMessage<MsgCreateGroupWithPolicyResponse> | undefined, b: MsgCreateGroupWithPolicyResponse | PlainMessage<MsgCreateGroupWithPolicyResponse> | undefined): boolean;
}
/**
 * MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy
 */
export declare class MsgUpdateGroupPolicyDecisionPolicy extends Message<MsgUpdateGroupPolicyDecisionPolicy> {
    /**
     * admin is the account address of the group admin.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * group_policy_address is the account address of group policy.
     *
     * @generated from field: string group_policy_address = 2;
     */
    groupPolicyAddress: string;
    /**
     * decision_policy is the updated group policy's decision policy.
     *
     * @generated from field: google.protobuf.Any decision_policy = 3;
     */
    decisionPolicy?: Any;
    constructor(data?: PartialMessage<MsgUpdateGroupPolicyDecisionPolicy>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateGroupPolicyDecisionPolicy;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateGroupPolicyDecisionPolicy;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateGroupPolicyDecisionPolicy;
    static equals(a: MsgUpdateGroupPolicyDecisionPolicy | PlainMessage<MsgUpdateGroupPolicyDecisionPolicy> | undefined, b: MsgUpdateGroupPolicyDecisionPolicy | PlainMessage<MsgUpdateGroupPolicyDecisionPolicy> | undefined): boolean;
}
/**
 * MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse
 */
export declare class MsgUpdateGroupPolicyDecisionPolicyResponse extends Message<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    constructor(data?: PartialMessage<MsgUpdateGroupPolicyDecisionPolicyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateGroupPolicyDecisionPolicyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateGroupPolicyDecisionPolicyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateGroupPolicyDecisionPolicyResponse;
    static equals(a: MsgUpdateGroupPolicyDecisionPolicyResponse | PlainMessage<MsgUpdateGroupPolicyDecisionPolicyResponse> | undefined, b: MsgUpdateGroupPolicyDecisionPolicyResponse | PlainMessage<MsgUpdateGroupPolicyDecisionPolicyResponse> | undefined): boolean;
}
/**
 * MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyMetadata
 */
export declare class MsgUpdateGroupPolicyMetadata extends Message<MsgUpdateGroupPolicyMetadata> {
    /**
     * admin is the account address of the group admin.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * group_policy_address is the account address of group policy.
     *
     * @generated from field: string group_policy_address = 2;
     */
    groupPolicyAddress: string;
    /**
     * metadata is the group policy metadata to be updated.
     *
     * @generated from field: string metadata = 3;
     */
    metadata: string;
    constructor(data?: PartialMessage<MsgUpdateGroupPolicyMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgUpdateGroupPolicyMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateGroupPolicyMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateGroupPolicyMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateGroupPolicyMetadata;
    static equals(a: MsgUpdateGroupPolicyMetadata | PlainMessage<MsgUpdateGroupPolicyMetadata> | undefined, b: MsgUpdateGroupPolicyMetadata | PlainMessage<MsgUpdateGroupPolicyMetadata> | undefined): boolean;
}
/**
 * MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse
 */
export declare class MsgUpdateGroupPolicyMetadataResponse extends Message<MsgUpdateGroupPolicyMetadataResponse> {
    constructor(data?: PartialMessage<MsgUpdateGroupPolicyMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateGroupPolicyMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateGroupPolicyMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateGroupPolicyMetadataResponse;
    static equals(a: MsgUpdateGroupPolicyMetadataResponse | PlainMessage<MsgUpdateGroupPolicyMetadataResponse> | undefined, b: MsgUpdateGroupPolicyMetadataResponse | PlainMessage<MsgUpdateGroupPolicyMetadataResponse> | undefined): boolean;
}
/**
 * MsgSubmitProposal is the Msg/SubmitProposal request type.
 *
 * @generated from message cosmos.group.v1.MsgSubmitProposal
 */
export declare class MsgSubmitProposal extends Message<MsgSubmitProposal> {
    /**
     * group_policy_address is the account address of group policy.
     *
     * @generated from field: string group_policy_address = 1;
     */
    groupPolicyAddress: string;
    /**
     * proposers are the account addresses of the proposers.
     * Proposers signatures will be counted as yes votes.
     *
     * @generated from field: repeated string proposers = 2;
     */
    proposers: string[];
    /**
     * metadata is any arbitrary metadata attached to the proposal.
     *
     * @generated from field: string metadata = 3;
     */
    metadata: string;
    /**
     * messages is a list of `sdk.Msg`s that will be executed if the proposal passes.
     *
     * @generated from field: repeated google.protobuf.Any messages = 4;
     */
    messages: Any[];
    /**
     * exec defines the mode of execution of the proposal,
     * whether it should be executed immediately on creation or not.
     * If so, proposers signatures are considered as Yes votes.
     *
     * @generated from field: cosmos.group.v1.Exec exec = 5;
     */
    exec: Exec;
    /**
     * title is the title of the proposal.
     *
     * Since: cosmos-sdk 0.47
     *
     * @generated from field: string title = 6;
     */
    title: string;
    /**
     * summary is the summary of the proposal.
     *
     * Since: cosmos-sdk 0.47
     *
     * @generated from field: string summary = 7;
     */
    summary: string;
    constructor(data?: PartialMessage<MsgSubmitProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgSubmitProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitProposal;
    static equals(a: MsgSubmitProposal | PlainMessage<MsgSubmitProposal> | undefined, b: MsgSubmitProposal | PlainMessage<MsgSubmitProposal> | undefined): boolean;
}
/**
 * MsgSubmitProposalResponse is the Msg/SubmitProposal response type.
 *
 * @generated from message cosmos.group.v1.MsgSubmitProposalResponse
 */
export declare class MsgSubmitProposalResponse extends Message<MsgSubmitProposalResponse> {
    /**
     * proposal is the unique ID of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    constructor(data?: PartialMessage<MsgSubmitProposalResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgSubmitProposalResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitProposalResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitProposalResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitProposalResponse;
    static equals(a: MsgSubmitProposalResponse | PlainMessage<MsgSubmitProposalResponse> | undefined, b: MsgSubmitProposalResponse | PlainMessage<MsgSubmitProposalResponse> | undefined): boolean;
}
/**
 * MsgWithdrawProposal is the Msg/WithdrawProposal request type.
 *
 * @generated from message cosmos.group.v1.MsgWithdrawProposal
 */
export declare class MsgWithdrawProposal extends Message<MsgWithdrawProposal> {
    /**
     * proposal is the unique ID of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * address is the admin of the group policy or one of the proposer of the proposal.
     *
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<MsgWithdrawProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgWithdrawProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawProposal;
    static equals(a: MsgWithdrawProposal | PlainMessage<MsgWithdrawProposal> | undefined, b: MsgWithdrawProposal | PlainMessage<MsgWithdrawProposal> | undefined): boolean;
}
/**
 * MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type.
 *
 * @generated from message cosmos.group.v1.MsgWithdrawProposalResponse
 */
export declare class MsgWithdrawProposalResponse extends Message<MsgWithdrawProposalResponse> {
    constructor(data?: PartialMessage<MsgWithdrawProposalResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgWithdrawProposalResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawProposalResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawProposalResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawProposalResponse;
    static equals(a: MsgWithdrawProposalResponse | PlainMessage<MsgWithdrawProposalResponse> | undefined, b: MsgWithdrawProposalResponse | PlainMessage<MsgWithdrawProposalResponse> | undefined): boolean;
}
/**
 * MsgVote is the Msg/Vote request type.
 *
 * @generated from message cosmos.group.v1.MsgVote
 */
export declare class MsgVote extends Message<MsgVote> {
    /**
     * proposal is the unique ID of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * voter is the voter account address.
     *
     * @generated from field: string voter = 2;
     */
    voter: string;
    /**
     * option is the voter's choice on the proposal.
     *
     * @generated from field: cosmos.group.v1.VoteOption option = 3;
     */
    option: VoteOption;
    /**
     * metadata is any arbitrary metadata attached to the vote.
     *
     * @generated from field: string metadata = 4;
     */
    metadata: string;
    /**
     * exec defines whether the proposal should be executed
     * immediately after voting or not.
     *
     * @generated from field: cosmos.group.v1.Exec exec = 5;
     */
    exec: Exec;
    constructor(data?: PartialMessage<MsgVote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgVote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVote;
    static equals(a: MsgVote | PlainMessage<MsgVote> | undefined, b: MsgVote | PlainMessage<MsgVote> | undefined): boolean;
}
/**
 * MsgVoteResponse is the Msg/Vote response type.
 *
 * @generated from message cosmos.group.v1.MsgVoteResponse
 */
export declare class MsgVoteResponse extends Message<MsgVoteResponse> {
    constructor(data?: PartialMessage<MsgVoteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgVoteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVoteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVoteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVoteResponse;
    static equals(a: MsgVoteResponse | PlainMessage<MsgVoteResponse> | undefined, b: MsgVoteResponse | PlainMessage<MsgVoteResponse> | undefined): boolean;
}
/**
 * MsgExec is the Msg/Exec request type.
 *
 * @generated from message cosmos.group.v1.MsgExec
 */
export declare class MsgExec extends Message<MsgExec> {
    /**
     * proposal is the unique ID of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * executor is the account address used to execute the proposal.
     *
     * @generated from field: string executor = 2;
     */
    executor: string;
    constructor(data?: PartialMessage<MsgExec>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgExec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExec;
    static equals(a: MsgExec | PlainMessage<MsgExec> | undefined, b: MsgExec | PlainMessage<MsgExec> | undefined): boolean;
}
/**
 * MsgExecResponse is the Msg/Exec request type.
 *
 * @generated from message cosmos.group.v1.MsgExecResponse
 */
export declare class MsgExecResponse extends Message<MsgExecResponse> {
    /**
     * result is the final result of the proposal execution.
     *
     * @generated from field: cosmos.group.v1.ProposalExecutorResult result = 2;
     */
    result: ProposalExecutorResult;
    constructor(data?: PartialMessage<MsgExecResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgExecResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExecResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExecResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExecResponse;
    static equals(a: MsgExecResponse | PlainMessage<MsgExecResponse> | undefined, b: MsgExecResponse | PlainMessage<MsgExecResponse> | undefined): boolean;
}
/**
 * MsgLeaveGroup is the Msg/LeaveGroup request type.
 *
 * @generated from message cosmos.group.v1.MsgLeaveGroup
 */
export declare class MsgLeaveGroup extends Message<MsgLeaveGroup> {
    /**
     * address is the account address of the group member.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * group_id is the unique ID of the group.
     *
     * @generated from field: uint64 group_id = 2;
     */
    groupId: bigint;
    constructor(data?: PartialMessage<MsgLeaveGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgLeaveGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgLeaveGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgLeaveGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgLeaveGroup;
    static equals(a: MsgLeaveGroup | PlainMessage<MsgLeaveGroup> | undefined, b: MsgLeaveGroup | PlainMessage<MsgLeaveGroup> | undefined): boolean;
}
/**
 * MsgLeaveGroupResponse is the Msg/LeaveGroup response type.
 *
 * @generated from message cosmos.group.v1.MsgLeaveGroupResponse
 */
export declare class MsgLeaveGroupResponse extends Message<MsgLeaveGroupResponse> {
    constructor(data?: PartialMessage<MsgLeaveGroupResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.MsgLeaveGroupResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgLeaveGroupResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgLeaveGroupResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgLeaveGroupResponse;
    static equals(a: MsgLeaveGroupResponse | PlainMessage<MsgLeaveGroupResponse> | undefined, b: MsgLeaveGroupResponse | PlainMessage<MsgLeaveGroupResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map