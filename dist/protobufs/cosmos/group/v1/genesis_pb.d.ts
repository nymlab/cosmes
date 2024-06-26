import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "./types_pb.js";
/**
 * GenesisState defines the group module's genesis state.
 *
 * @generated from message cosmos.group.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * group_seq is the group table orm.Sequence,
     * it is used to get the next group ID.
     *
     * @generated from field: uint64 group_seq = 1;
     */
    groupSeq: bigint;
    /**
     * groups is the list of groups info.
     *
     * @generated from field: repeated cosmos.group.v1.GroupInfo groups = 2;
     */
    groups: GroupInfo[];
    /**
     * group_members is the list of groups members.
     *
     * @generated from field: repeated cosmos.group.v1.GroupMember group_members = 3;
     */
    groupMembers: GroupMember[];
    /**
     * group_policy_seq is the group policy table orm.Sequence,
     * it is used to generate the next group policy account address.
     *
     * @generated from field: uint64 group_policy_seq = 4;
     */
    groupPolicySeq: bigint;
    /**
     * group_policies is the list of group policies info.
     *
     * @generated from field: repeated cosmos.group.v1.GroupPolicyInfo group_policies = 5;
     */
    groupPolicies: GroupPolicyInfo[];
    /**
     * proposal_seq is the proposal table orm.Sequence,
     * it is used to get the next proposal ID.
     *
     * @generated from field: uint64 proposal_seq = 6;
     */
    proposalSeq: bigint;
    /**
     * proposals is the list of proposals.
     *
     * @generated from field: repeated cosmos.group.v1.Proposal proposals = 7;
     */
    proposals: Proposal[];
    /**
     * votes is the list of votes.
     *
     * @generated from field: repeated cosmos.group.v1.Vote votes = 8;
     */
    votes: Vote[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map