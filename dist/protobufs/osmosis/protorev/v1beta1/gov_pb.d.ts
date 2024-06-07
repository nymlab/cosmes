import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 *
 * @generated from message osmosis.protorev.v1beta1.SetProtoRevEnabledProposal
 */
export declare class SetProtoRevEnabledProposal extends Message<SetProtoRevEnabledProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: bool enabled = 3;
     */
    enabled: boolean;
    constructor(data?: PartialMessage<SetProtoRevEnabledProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.SetProtoRevEnabledProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetProtoRevEnabledProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetProtoRevEnabledProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetProtoRevEnabledProposal;
    static equals(a: SetProtoRevEnabledProposal | PlainMessage<SetProtoRevEnabledProposal> | undefined, b: SetProtoRevEnabledProposal | PlainMessage<SetProtoRevEnabledProposal> | undefined): boolean;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 *
 * @generated from message osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal
 */
export declare class SetProtoRevAdminAccountProposal extends Message<SetProtoRevAdminAccountProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string account = 3;
     */
    account: string;
    constructor(data?: PartialMessage<SetProtoRevAdminAccountProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetProtoRevAdminAccountProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetProtoRevAdminAccountProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetProtoRevAdminAccountProposal;
    static equals(a: SetProtoRevAdminAccountProposal | PlainMessage<SetProtoRevAdminAccountProposal> | undefined, b: SetProtoRevAdminAccountProposal | PlainMessage<SetProtoRevAdminAccountProposal> | undefined): boolean;
}
//# sourceMappingURL=gov_pb.d.ts.map