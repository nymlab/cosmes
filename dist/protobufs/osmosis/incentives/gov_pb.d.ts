import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { CreateGroup } from "./group_pb.js";
/**
 * CreateGroupsProposal is a type for creating one or more groups via
 * governance. This is useful for creating groups without having to pay
 * creation fees.
 *
 * @generated from message osmosis.incentives.CreateGroupsProposal
 */
export declare class CreateGroupsProposal extends Message<CreateGroupsProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated osmosis.incentives.CreateGroup create_groups = 3;
     */
    createGroups: CreateGroup[];
    constructor(data?: PartialMessage<CreateGroupsProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.incentives.CreateGroupsProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateGroupsProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateGroupsProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateGroupsProposal;
    static equals(a: CreateGroupsProposal | PlainMessage<CreateGroupsProposal> | undefined, b: CreateGroupsProposal | PlainMessage<CreateGroupsProposal> | undefined): boolean;
}
//# sourceMappingURL=gov_pb.d.ts.map