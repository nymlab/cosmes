import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ProposalExecutorResult, ProposalStatus, TallyResult } from "./types_pb.js";
/**
 * EventCreateGroup is an event emitted when a group is created.
 *
 * @generated from message cosmos.group.v1.EventCreateGroup
 */
export declare class EventCreateGroup extends Message<EventCreateGroup> {
    /**
     * group_id is the unique ID of the group.
     *
     * @generated from field: uint64 group_id = 1;
     */
    groupId: bigint;
    constructor(data?: PartialMessage<EventCreateGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.EventCreateGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCreateGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCreateGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCreateGroup;
    static equals(a: EventCreateGroup | PlainMessage<EventCreateGroup> | undefined, b: EventCreateGroup | PlainMessage<EventCreateGroup> | undefined): boolean;
}
/**
 * EventUpdateGroup is an event emitted when a group is updated.
 *
 * @generated from message cosmos.group.v1.EventUpdateGroup
 */
export declare class EventUpdateGroup extends Message<EventUpdateGroup> {
    /**
     * group_id is the unique ID of the group.
     *
     * @generated from field: uint64 group_id = 1;
     */
    groupId: bigint;
    constructor(data?: PartialMessage<EventUpdateGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.EventUpdateGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventUpdateGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventUpdateGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventUpdateGroup;
    static equals(a: EventUpdateGroup | PlainMessage<EventUpdateGroup> | undefined, b: EventUpdateGroup | PlainMessage<EventUpdateGroup> | undefined): boolean;
}
/**
 * EventCreateGroupPolicy is an event emitted when a group policy is created.
 *
 * @generated from message cosmos.group.v1.EventCreateGroupPolicy
 */
export declare class EventCreateGroupPolicy extends Message<EventCreateGroupPolicy> {
    /**
     * address is the account address of the group policy.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<EventCreateGroupPolicy>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.EventCreateGroupPolicy";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCreateGroupPolicy;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCreateGroupPolicy;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCreateGroupPolicy;
    static equals(a: EventCreateGroupPolicy | PlainMessage<EventCreateGroupPolicy> | undefined, b: EventCreateGroupPolicy | PlainMessage<EventCreateGroupPolicy> | undefined): boolean;
}
/**
 * EventUpdateGroupPolicy is an event emitted when a group policy is updated.
 *
 * @generated from message cosmos.group.v1.EventUpdateGroupPolicy
 */
export declare class EventUpdateGroupPolicy extends Message<EventUpdateGroupPolicy> {
    /**
     * address is the account address of the group policy.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<EventUpdateGroupPolicy>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.EventUpdateGroupPolicy";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventUpdateGroupPolicy;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventUpdateGroupPolicy;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventUpdateGroupPolicy;
    static equals(a: EventUpdateGroupPolicy | PlainMessage<EventUpdateGroupPolicy> | undefined, b: EventUpdateGroupPolicy | PlainMessage<EventUpdateGroupPolicy> | undefined): boolean;
}
/**
 * EventSubmitProposal is an event emitted when a proposal is created.
 *
 * @generated from message cosmos.group.v1.EventSubmitProposal
 */
export declare class EventSubmitProposal extends Message<EventSubmitProposal> {
    /**
     * proposal_id is the unique ID of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    constructor(data?: PartialMessage<EventSubmitProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.EventSubmitProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSubmitProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSubmitProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSubmitProposal;
    static equals(a: EventSubmitProposal | PlainMessage<EventSubmitProposal> | undefined, b: EventSubmitProposal | PlainMessage<EventSubmitProposal> | undefined): boolean;
}
/**
 * EventWithdrawProposal is an event emitted when a proposal is withdrawn.
 *
 * @generated from message cosmos.group.v1.EventWithdrawProposal
 */
export declare class EventWithdrawProposal extends Message<EventWithdrawProposal> {
    /**
     * proposal_id is the unique ID of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    constructor(data?: PartialMessage<EventWithdrawProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.EventWithdrawProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventWithdrawProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventWithdrawProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventWithdrawProposal;
    static equals(a: EventWithdrawProposal | PlainMessage<EventWithdrawProposal> | undefined, b: EventWithdrawProposal | PlainMessage<EventWithdrawProposal> | undefined): boolean;
}
/**
 * EventVote is an event emitted when a voter votes on a proposal.
 *
 * @generated from message cosmos.group.v1.EventVote
 */
export declare class EventVote extends Message<EventVote> {
    /**
     * proposal_id is the unique ID of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    constructor(data?: PartialMessage<EventVote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.EventVote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventVote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventVote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventVote;
    static equals(a: EventVote | PlainMessage<EventVote> | undefined, b: EventVote | PlainMessage<EventVote> | undefined): boolean;
}
/**
 * EventExec is an event emitted when a proposal is executed.
 *
 * @generated from message cosmos.group.v1.EventExec
 */
export declare class EventExec extends Message<EventExec> {
    /**
     * proposal_id is the unique ID of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * result is the proposal execution result.
     *
     * @generated from field: cosmos.group.v1.ProposalExecutorResult result = 2;
     */
    result: ProposalExecutorResult;
    /**
     * logs contains error logs in case the execution result is FAILURE.
     *
     * @generated from field: string logs = 3;
     */
    logs: string;
    constructor(data?: PartialMessage<EventExec>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.EventExec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventExec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventExec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventExec;
    static equals(a: EventExec | PlainMessage<EventExec> | undefined, b: EventExec | PlainMessage<EventExec> | undefined): boolean;
}
/**
 * EventLeaveGroup is an event emitted when group member leaves the group.
 *
 * @generated from message cosmos.group.v1.EventLeaveGroup
 */
export declare class EventLeaveGroup extends Message<EventLeaveGroup> {
    /**
     * group_id is the unique ID of the group.
     *
     * @generated from field: uint64 group_id = 1;
     */
    groupId: bigint;
    /**
     * address is the account address of the group member.
     *
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<EventLeaveGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.EventLeaveGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventLeaveGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventLeaveGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventLeaveGroup;
    static equals(a: EventLeaveGroup | PlainMessage<EventLeaveGroup> | undefined, b: EventLeaveGroup | PlainMessage<EventLeaveGroup> | undefined): boolean;
}
/**
 * EventProposalPruned is an event emitted when a proposal is pruned.
 *
 * @generated from message cosmos.group.v1.EventProposalPruned
 */
export declare class EventProposalPruned extends Message<EventProposalPruned> {
    /**
     * proposal_id is the unique ID of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN).
     *
     * @generated from field: cosmos.group.v1.ProposalStatus status = 2;
     */
    status: ProposalStatus;
    /**
     * tally_result is the proposal tally result (when applicable).
     *
     * @generated from field: cosmos.group.v1.TallyResult tally_result = 3;
     */
    tallyResult?: TallyResult;
    constructor(data?: PartialMessage<EventProposalPruned>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.EventProposalPruned";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventProposalPruned;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventProposalPruned;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventProposalPruned;
    static equals(a: EventProposalPruned | PlainMessage<EventProposalPruned> | undefined, b: EventProposalPruned | PlainMessage<EventProposalPruned> | undefined): boolean;
}
//# sourceMappingURL=events_pb.d.ts.map