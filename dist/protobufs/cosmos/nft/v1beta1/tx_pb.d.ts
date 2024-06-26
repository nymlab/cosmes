import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * MsgSend represents a message to send a nft from one account to another account.
 *
 * @generated from message cosmos.nft.v1beta1.MsgSend
 */
export declare class MsgSend extends Message<MsgSend> {
    /**
     * class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721
     *
     * @generated from field: string class_id = 1;
     */
    classId: string;
    /**
     * id defines the unique identification of nft
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
    constructor(data?: PartialMessage<MsgSend>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.MsgSend";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSend;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSend;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSend;
    static equals(a: MsgSend | PlainMessage<MsgSend> | undefined, b: MsgSend | PlainMessage<MsgSend> | undefined): boolean;
}
/**
 * MsgSendResponse defines the Msg/Send response type.
 *
 * @generated from message cosmos.nft.v1beta1.MsgSendResponse
 */
export declare class MsgSendResponse extends Message<MsgSendResponse> {
    constructor(data?: PartialMessage<MsgSendResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.MsgSendResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSendResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSendResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSendResponse;
    static equals(a: MsgSendResponse | PlainMessage<MsgSendResponse> | undefined, b: MsgSendResponse | PlainMessage<MsgSendResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map