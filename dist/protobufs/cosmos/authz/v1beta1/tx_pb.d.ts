import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Grant } from "./authz_pb.js";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 *
 * @generated from message cosmos.authz.v1beta1.MsgGrant
 */
export declare class MsgGrant extends Message<MsgGrant> {
    /**
     * @generated from field: string granter = 1;
     */
    granter: string;
    /**
     * @generated from field: string grantee = 2;
     */
    grantee: string;
    /**
     * @generated from field: cosmos.authz.v1beta1.Grant grant = 3;
     */
    grant?: Grant;
    constructor(data?: PartialMessage<MsgGrant>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.MsgGrant";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgGrant;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgGrant;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgGrant;
    static equals(a: MsgGrant | PlainMessage<MsgGrant> | undefined, b: MsgGrant | PlainMessage<MsgGrant> | undefined): boolean;
}
/**
 * MsgExecResponse defines the Msg/MsgExecResponse response type.
 *
 * @generated from message cosmos.authz.v1beta1.MsgExecResponse
 */
export declare class MsgExecResponse extends Message<MsgExecResponse> {
    /**
     * @generated from field: repeated bytes results = 1;
     */
    results: Uint8Array[];
    constructor(data?: PartialMessage<MsgExecResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.MsgExecResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExecResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExecResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExecResponse;
    static equals(a: MsgExecResponse | PlainMessage<MsgExecResponse> | undefined, b: MsgExecResponse | PlainMessage<MsgExecResponse> | undefined): boolean;
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 *
 * @generated from message cosmos.authz.v1beta1.MsgExec
 */
export declare class MsgExec extends Message<MsgExec> {
    /**
     * @generated from field: string grantee = 1;
     */
    grantee: string;
    /**
     * Execute Msg.
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     *
     * @generated from field: repeated google.protobuf.Any msgs = 2;
     */
    msgs: Any[];
    constructor(data?: PartialMessage<MsgExec>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.MsgExec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExec;
    static equals(a: MsgExec | PlainMessage<MsgExec> | undefined, b: MsgExec | PlainMessage<MsgExec> | undefined): boolean;
}
/**
 * MsgGrantResponse defines the Msg/MsgGrant response type.
 *
 * @generated from message cosmos.authz.v1beta1.MsgGrantResponse
 */
export declare class MsgGrantResponse extends Message<MsgGrantResponse> {
    constructor(data?: PartialMessage<MsgGrantResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.MsgGrantResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgGrantResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgGrantResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgGrantResponse;
    static equals(a: MsgGrantResponse | PlainMessage<MsgGrantResponse> | undefined, b: MsgGrantResponse | PlainMessage<MsgGrantResponse> | undefined): boolean;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 *
 * @generated from message cosmos.authz.v1beta1.MsgRevoke
 */
export declare class MsgRevoke extends Message<MsgRevoke> {
    /**
     * @generated from field: string granter = 1;
     */
    granter: string;
    /**
     * @generated from field: string grantee = 2;
     */
    grantee: string;
    /**
     * @generated from field: string msg_type_url = 3;
     */
    msgTypeUrl: string;
    constructor(data?: PartialMessage<MsgRevoke>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.MsgRevoke";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRevoke;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRevoke;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRevoke;
    static equals(a: MsgRevoke | PlainMessage<MsgRevoke> | undefined, b: MsgRevoke | PlainMessage<MsgRevoke> | undefined): boolean;
}
/**
 * MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.
 *
 * @generated from message cosmos.authz.v1beta1.MsgRevokeResponse
 */
export declare class MsgRevokeResponse extends Message<MsgRevokeResponse> {
    constructor(data?: PartialMessage<MsgRevokeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.MsgRevokeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRevokeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRevokeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRevokeResponse;
    static equals(a: MsgRevokeResponse | PlainMessage<MsgRevokeResponse> | undefined, b: MsgRevokeResponse | PlainMessage<MsgRevokeResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map