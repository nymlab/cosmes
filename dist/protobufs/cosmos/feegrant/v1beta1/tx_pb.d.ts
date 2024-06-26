import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 *
 * @generated from message cosmos.feegrant.v1beta1.MsgGrantAllowance
 */
export declare class MsgGrantAllowance extends Message<MsgGrantAllowance> {
    /**
     * granter is the address of the user granting an allowance of their funds.
     *
     * @generated from field: string granter = 1;
     */
    granter: string;
    /**
     * grantee is the address of the user being granted an allowance of another user's funds.
     *
     * @generated from field: string grantee = 2;
     */
    grantee: string;
    /**
     * allowance can be any of basic, periodic, allowed fee allowance.
     *
     * @generated from field: google.protobuf.Any allowance = 3;
     */
    allowance?: Any;
    constructor(data?: PartialMessage<MsgGrantAllowance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.MsgGrantAllowance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgGrantAllowance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgGrantAllowance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgGrantAllowance;
    static equals(a: MsgGrantAllowance | PlainMessage<MsgGrantAllowance> | undefined, b: MsgGrantAllowance | PlainMessage<MsgGrantAllowance> | undefined): boolean;
}
/**
 * MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type.
 *
 * @generated from message cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse
 */
export declare class MsgGrantAllowanceResponse extends Message<MsgGrantAllowanceResponse> {
    constructor(data?: PartialMessage<MsgGrantAllowanceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgGrantAllowanceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgGrantAllowanceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgGrantAllowanceResponse;
    static equals(a: MsgGrantAllowanceResponse | PlainMessage<MsgGrantAllowanceResponse> | undefined, b: MsgGrantAllowanceResponse | PlainMessage<MsgGrantAllowanceResponse> | undefined): boolean;
}
/**
 * MsgRevokeAllowance removes any existing Allowance from Granter to Grantee.
 *
 * @generated from message cosmos.feegrant.v1beta1.MsgRevokeAllowance
 */
export declare class MsgRevokeAllowance extends Message<MsgRevokeAllowance> {
    /**
     * granter is the address of the user granting an allowance of their funds.
     *
     * @generated from field: string granter = 1;
     */
    granter: string;
    /**
     * grantee is the address of the user being granted an allowance of another user's funds.
     *
     * @generated from field: string grantee = 2;
     */
    grantee: string;
    constructor(data?: PartialMessage<MsgRevokeAllowance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.MsgRevokeAllowance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRevokeAllowance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRevokeAllowance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRevokeAllowance;
    static equals(a: MsgRevokeAllowance | PlainMessage<MsgRevokeAllowance> | undefined, b: MsgRevokeAllowance | PlainMessage<MsgRevokeAllowance> | undefined): boolean;
}
/**
 * MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type.
 *
 * @generated from message cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse
 */
export declare class MsgRevokeAllowanceResponse extends Message<MsgRevokeAllowanceResponse> {
    constructor(data?: PartialMessage<MsgRevokeAllowanceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRevokeAllowanceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRevokeAllowanceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRevokeAllowanceResponse;
    static equals(a: MsgRevokeAllowanceResponse | PlainMessage<MsgRevokeAllowanceResponse> | undefined, b: MsgRevokeAllowanceResponse | PlainMessage<MsgRevokeAllowanceResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map