import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message osmosis.ibchooks.MsgEmitIBCAck
 */
export declare class MsgEmitIBCAck extends Message<MsgEmitIBCAck> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 packet_sequence = 2;
     */
    packetSequence: bigint;
    /**
     * @generated from field: string channel = 3;
     */
    channel: string;
    constructor(data?: PartialMessage<MsgEmitIBCAck>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.ibchooks.MsgEmitIBCAck";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgEmitIBCAck;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgEmitIBCAck;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgEmitIBCAck;
    static equals(a: MsgEmitIBCAck | PlainMessage<MsgEmitIBCAck> | undefined, b: MsgEmitIBCAck | PlainMessage<MsgEmitIBCAck> | undefined): boolean;
}
/**
 * @generated from message osmosis.ibchooks.MsgEmitIBCAckResponse
 */
export declare class MsgEmitIBCAckResponse extends Message<MsgEmitIBCAckResponse> {
    /**
     * @generated from field: string contract_result = 1;
     */
    contractResult: string;
    /**
     * @generated from field: string ibc_ack = 2;
     */
    ibcAck: string;
    constructor(data?: PartialMessage<MsgEmitIBCAckResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.ibchooks.MsgEmitIBCAckResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgEmitIBCAckResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgEmitIBCAckResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgEmitIBCAckResponse;
    static equals(a: MsgEmitIBCAckResponse | PlainMessage<MsgEmitIBCAckResponse> | undefined, b: MsgEmitIBCAckResponse | PlainMessage<MsgEmitIBCAckResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map