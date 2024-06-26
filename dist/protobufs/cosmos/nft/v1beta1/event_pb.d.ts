import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * EventSend is emitted on Msg/Send
 *
 * @generated from message cosmos.nft.v1beta1.EventSend
 */
export declare class EventSend extends Message<EventSend> {
    /**
     * class_id associated with the nft
     *
     * @generated from field: string class_id = 1;
     */
    classId: string;
    /**
     * id is a unique identifier of the nft
     *
     * @generated from field: string id = 2;
     */
    id: string;
    /**
     * sender is the address of the owner of nft
     *
     * @generated from field: string sender = 3;
     */
    sender: string;
    /**
     * receiver is the receiver address of nft
     *
     * @generated from field: string receiver = 4;
     */
    receiver: string;
    constructor(data?: PartialMessage<EventSend>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.EventSend";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSend;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSend;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSend;
    static equals(a: EventSend | PlainMessage<EventSend> | undefined, b: EventSend | PlainMessage<EventSend> | undefined): boolean;
}
/**
 * EventMint is emitted on Mint
 *
 * @generated from message cosmos.nft.v1beta1.EventMint
 */
export declare class EventMint extends Message<EventMint> {
    /**
     * class_id associated with the nft
     *
     * @generated from field: string class_id = 1;
     */
    classId: string;
    /**
     * id is a unique identifier of the nft
     *
     * @generated from field: string id = 2;
     */
    id: string;
    /**
     * owner is the owner address of the nft
     *
     * @generated from field: string owner = 3;
     */
    owner: string;
    constructor(data?: PartialMessage<EventMint>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.EventMint";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventMint;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventMint;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventMint;
    static equals(a: EventMint | PlainMessage<EventMint> | undefined, b: EventMint | PlainMessage<EventMint> | undefined): boolean;
}
/**
 * EventBurn is emitted on Burn
 *
 * @generated from message cosmos.nft.v1beta1.EventBurn
 */
export declare class EventBurn extends Message<EventBurn> {
    /**
     * class_id associated with the nft
     *
     * @generated from field: string class_id = 1;
     */
    classId: string;
    /**
     * id is a unique identifier of the nft
     *
     * @generated from field: string id = 2;
     */
    id: string;
    /**
     * owner is the owner address of the nft
     *
     * @generated from field: string owner = 3;
     */
    owner: string;
    constructor(data?: PartialMessage<EventBurn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.EventBurn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBurn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBurn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBurn;
    static equals(a: EventBurn | PlainMessage<EventBurn> | undefined, b: EventBurn | PlainMessage<EventBurn> | undefined): boolean;
}
//# sourceMappingURL=event_pb.d.ts.map