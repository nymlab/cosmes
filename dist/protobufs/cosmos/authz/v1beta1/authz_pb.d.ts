import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 *
 * @generated from message cosmos.authz.v1beta1.GenericAuthorization
 */
export declare class GenericAuthorization extends Message<GenericAuthorization> {
    /**
     * Msg, identified by it's type URL, to grant unrestricted permissions to execute
     *
     * @generated from field: string msg = 1;
     */
    msg: string;
    constructor(data?: PartialMessage<GenericAuthorization>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.GenericAuthorization";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenericAuthorization;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenericAuthorization;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenericAuthorization;
    static equals(a: GenericAuthorization | PlainMessage<GenericAuthorization> | undefined, b: GenericAuthorization | PlainMessage<GenericAuthorization> | undefined): boolean;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 *
 * @generated from message cosmos.authz.v1beta1.Grant
 */
export declare class Grant extends Message<Grant> {
    /**
     * @generated from field: google.protobuf.Any authorization = 1;
     */
    authorization?: Any;
    /**
     * time when the grant will expire and will be pruned. If null, then the grant
     * doesn't have a time expiration (other conditions  in `authorization`
     * may apply to invalidate the grant)
     *
     * @generated from field: google.protobuf.Timestamp expiration = 2;
     */
    expiration?: Timestamp;
    constructor(data?: PartialMessage<Grant>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.Grant";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Grant;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Grant;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Grant;
    static equals(a: Grant | PlainMessage<Grant> | undefined, b: Grant | PlainMessage<Grant> | undefined): boolean;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 *
 * @generated from message cosmos.authz.v1beta1.GrantAuthorization
 */
export declare class GrantAuthorization extends Message<GrantAuthorization> {
    /**
     * @generated from field: string granter = 1;
     */
    granter: string;
    /**
     * @generated from field: string grantee = 2;
     */
    grantee: string;
    /**
     * @generated from field: google.protobuf.Any authorization = 3;
     */
    authorization?: Any;
    /**
     * @generated from field: google.protobuf.Timestamp expiration = 4;
     */
    expiration?: Timestamp;
    constructor(data?: PartialMessage<GrantAuthorization>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.GrantAuthorization";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GrantAuthorization;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GrantAuthorization;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GrantAuthorization;
    static equals(a: GrantAuthorization | PlainMessage<GrantAuthorization> | undefined, b: GrantAuthorization | PlainMessage<GrantAuthorization> | undefined): boolean;
}
/**
 * GrantQueueItem contains the list of TypeURL of a sdk.Msg.
 *
 * @generated from message cosmos.authz.v1beta1.GrantQueueItem
 */
export declare class GrantQueueItem extends Message<GrantQueueItem> {
    /**
     * msg_type_urls contains the list of TypeURL of a sdk.Msg.
     *
     * @generated from field: repeated string msg_type_urls = 1;
     */
    msgTypeUrls: string[];
    constructor(data?: PartialMessage<GrantQueueItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.GrantQueueItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GrantQueueItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GrantQueueItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GrantQueueItem;
    static equals(a: GrantQueueItem | PlainMessage<GrantQueueItem> | undefined, b: GrantQueueItem | PlainMessage<GrantQueueItem> | undefined): boolean;
}
//# sourceMappingURL=authz_pb.d.ts.map