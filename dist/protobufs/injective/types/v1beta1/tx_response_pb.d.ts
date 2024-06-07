import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * base header ak message type, we can cast the bytes into corresponding message
 * response type
 *
 * @generated from message injective.types.v1beta1.TxResponseGenericMessage
 */
export declare class TxResponseGenericMessage extends Message<TxResponseGenericMessage> {
    /**
     * @generated from field: string header = 1;
     */
    header: string;
    /**
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<TxResponseGenericMessage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.types.v1beta1.TxResponseGenericMessage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxResponseGenericMessage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxResponseGenericMessage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxResponseGenericMessage;
    static equals(a: TxResponseGenericMessage | PlainMessage<TxResponseGenericMessage> | undefined, b: TxResponseGenericMessage | PlainMessage<TxResponseGenericMessage> | undefined): boolean;
}
/**
 * improvised message to unpack length prefixed messages in tx response data
 *
 * @generated from message injective.types.v1beta1.TxResponseData
 */
export declare class TxResponseData extends Message<TxResponseData> {
    /**
     * @generated from field: repeated injective.types.v1beta1.TxResponseGenericMessage messages = 1;
     */
    messages: TxResponseGenericMessage[];
    constructor(data?: PartialMessage<TxResponseData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.types.v1beta1.TxResponseData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxResponseData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxResponseData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxResponseData;
    static equals(a: TxResponseData | PlainMessage<TxResponseData> | undefined, b: TxResponseData | PlainMessage<TxResponseData> | undefined): boolean;
}
//# sourceMappingURL=tx_response_pb.d.ts.map