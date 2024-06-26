import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * EventGrant is emitted on Msg/Grant
 *
 * @generated from message cosmos.authz.v1beta1.EventGrant
 */
export declare class EventGrant extends Message<EventGrant> {
    /**
     * Msg type URL for which an autorization is granted
     *
     * @generated from field: string msg_type_url = 2;
     */
    msgTypeUrl: string;
    /**
     * Granter account address
     *
     * @generated from field: string granter = 3;
     */
    granter: string;
    /**
     * Grantee account address
     *
     * @generated from field: string grantee = 4;
     */
    grantee: string;
    constructor(data?: PartialMessage<EventGrant>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.EventGrant";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventGrant;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventGrant;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventGrant;
    static equals(a: EventGrant | PlainMessage<EventGrant> | undefined, b: EventGrant | PlainMessage<EventGrant> | undefined): boolean;
}
/**
 * EventRevoke is emitted on Msg/Revoke
 *
 * @generated from message cosmos.authz.v1beta1.EventRevoke
 */
export declare class EventRevoke extends Message<EventRevoke> {
    /**
     * Msg type URL for which an autorization is revoked
     *
     * @generated from field: string msg_type_url = 2;
     */
    msgTypeUrl: string;
    /**
     * Granter account address
     *
     * @generated from field: string granter = 3;
     */
    granter: string;
    /**
     * Grantee account address
     *
     * @generated from field: string grantee = 4;
     */
    grantee: string;
    constructor(data?: PartialMessage<EventRevoke>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.authz.v1beta1.EventRevoke";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventRevoke;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventRevoke;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventRevoke;
    static equals(a: EventRevoke | PlainMessage<EventRevoke> | undefined, b: EventRevoke | PlainMessage<EventRevoke> | undefined): boolean;
}
//# sourceMappingURL=event_pb.d.ts.map