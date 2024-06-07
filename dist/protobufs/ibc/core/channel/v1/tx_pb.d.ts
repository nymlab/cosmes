import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Channel, Packet, Params, State } from "./channel_pb.js";
import { Height } from "../../client/v1/client_pb.js";
import { ErrorReceipt, Upgrade, UpgradeFields } from "./upgrade_pb.js";
/**
 * ResponseResultType defines the possible outcomes of the execution of a message
 *
 * @generated from enum ibc.core.channel.v1.ResponseResultType
 */
export declare enum ResponseResultType {
    /**
     * Default zero value enumeration
     *
     * @generated from enum value: RESPONSE_RESULT_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The message did not call the IBC application callbacks (because, for example, the packet had already been relayed)
     *
     * @generated from enum value: RESPONSE_RESULT_TYPE_NOOP = 1;
     */
    NOOP = 1,
    /**
     * The message was executed successfully
     *
     * @generated from enum value: RESPONSE_RESULT_TYPE_SUCCESS = 2;
     */
    SUCCESS = 2,
    /**
     * The message was executed unsuccessfully
     *
     * @generated from enum value: RESPONSE_RESULT_TYPE_FAILURE = 3;
     */
    FAILURE = 3
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenInit
 */
export declare class MsgChannelOpenInit extends Message<MsgChannelOpenInit> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: ibc.core.channel.v1.Channel channel = 2;
     */
    channel?: Channel;
    /**
     * @generated from field: string signer = 3;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelOpenInit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenInit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenInit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenInit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenInit;
    static equals(a: MsgChannelOpenInit | PlainMessage<MsgChannelOpenInit> | undefined, b: MsgChannelOpenInit | PlainMessage<MsgChannelOpenInit> | undefined): boolean;
}
/**
 * MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenInitResponse
 */
export declare class MsgChannelOpenInitResponse extends Message<MsgChannelOpenInitResponse> {
    /**
     * @generated from field: string channel_id = 1;
     */
    channelId: string;
    /**
     * @generated from field: string version = 2;
     */
    version: string;
    constructor(data?: PartialMessage<MsgChannelOpenInitResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenInitResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenInitResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenInitResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenInitResponse;
    static equals(a: MsgChannelOpenInitResponse | PlainMessage<MsgChannelOpenInitResponse> | undefined, b: MsgChannelOpenInitResponse | PlainMessage<MsgChannelOpenInitResponse> | undefined): boolean;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenTry
 */
export declare class MsgChannelOpenTry extends Message<MsgChannelOpenTry> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * Deprecated: this field is unused. Crossing hello's are no longer supported in core IBC.
     *
     * @generated from field: string previous_channel_id = 2 [deprecated = true];
     * @deprecated
     */
    previousChannelId: string;
    /**
     * NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC.
     *
     * @generated from field: ibc.core.channel.v1.Channel channel = 3;
     */
    channel?: Channel;
    /**
     * @generated from field: string counterparty_version = 4;
     */
    counterpartyVersion: string;
    /**
     * @generated from field: bytes proof_init = 5;
     */
    proofInit: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 6;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 7;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelOpenTry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenTry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenTry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenTry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenTry;
    static equals(a: MsgChannelOpenTry | PlainMessage<MsgChannelOpenTry> | undefined, b: MsgChannelOpenTry | PlainMessage<MsgChannelOpenTry> | undefined): boolean;
}
/**
 * MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenTryResponse
 */
export declare class MsgChannelOpenTryResponse extends Message<MsgChannelOpenTryResponse> {
    /**
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    constructor(data?: PartialMessage<MsgChannelOpenTryResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenTryResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenTryResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenTryResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenTryResponse;
    static equals(a: MsgChannelOpenTryResponse | PlainMessage<MsgChannelOpenTryResponse> | undefined, b: MsgChannelOpenTryResponse | PlainMessage<MsgChannelOpenTryResponse> | undefined): boolean;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 * WARNING: a channel upgrade MUST NOT initialize an upgrade for this channel
 * in the same block as executing this message otherwise the counterparty will
 * be incapable of opening.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenAck
 */
export declare class MsgChannelOpenAck extends Message<MsgChannelOpenAck> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: string counterparty_channel_id = 3;
     */
    counterpartyChannelId: string;
    /**
     * @generated from field: string counterparty_version = 4;
     */
    counterpartyVersion: string;
    /**
     * @generated from field: bytes proof_try = 5;
     */
    proofTry: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 6;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 7;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelOpenAck>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenAck";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenAck;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenAck;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenAck;
    static equals(a: MsgChannelOpenAck | PlainMessage<MsgChannelOpenAck> | undefined, b: MsgChannelOpenAck | PlainMessage<MsgChannelOpenAck> | undefined): boolean;
}
/**
 * MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenAckResponse
 */
export declare class MsgChannelOpenAckResponse extends Message<MsgChannelOpenAckResponse> {
    constructor(data?: PartialMessage<MsgChannelOpenAckResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenAckResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenAckResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenAckResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenAckResponse;
    static equals(a: MsgChannelOpenAckResponse | PlainMessage<MsgChannelOpenAckResponse> | undefined, b: MsgChannelOpenAckResponse | PlainMessage<MsgChannelOpenAckResponse> | undefined): boolean;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenConfirm
 */
export declare class MsgChannelOpenConfirm extends Message<MsgChannelOpenConfirm> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: bytes proof_ack = 3;
     */
    proofAck: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 4;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 5;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelOpenConfirm>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenConfirm";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenConfirm;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenConfirm;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenConfirm;
    static equals(a: MsgChannelOpenConfirm | PlainMessage<MsgChannelOpenConfirm> | undefined, b: MsgChannelOpenConfirm | PlainMessage<MsgChannelOpenConfirm> | undefined): boolean;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenConfirmResponse
 */
export declare class MsgChannelOpenConfirmResponse extends Message<MsgChannelOpenConfirmResponse> {
    constructor(data?: PartialMessage<MsgChannelOpenConfirmResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenConfirmResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenConfirmResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenConfirmResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenConfirmResponse;
    static equals(a: MsgChannelOpenConfirmResponse | PlainMessage<MsgChannelOpenConfirmResponse> | undefined, b: MsgChannelOpenConfirmResponse | PlainMessage<MsgChannelOpenConfirmResponse> | undefined): boolean;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelCloseInit
 */
export declare class MsgChannelCloseInit extends Message<MsgChannelCloseInit> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: string signer = 3;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelCloseInit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelCloseInit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelCloseInit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelCloseInit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelCloseInit;
    static equals(a: MsgChannelCloseInit | PlainMessage<MsgChannelCloseInit> | undefined, b: MsgChannelCloseInit | PlainMessage<MsgChannelCloseInit> | undefined): boolean;
}
/**
 * MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelCloseInitResponse
 */
export declare class MsgChannelCloseInitResponse extends Message<MsgChannelCloseInitResponse> {
    constructor(data?: PartialMessage<MsgChannelCloseInitResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelCloseInitResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelCloseInitResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelCloseInitResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelCloseInitResponse;
    static equals(a: MsgChannelCloseInitResponse | PlainMessage<MsgChannelCloseInitResponse> | undefined, b: MsgChannelCloseInitResponse | PlainMessage<MsgChannelCloseInitResponse> | undefined): boolean;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelCloseConfirm
 */
export declare class MsgChannelCloseConfirm extends Message<MsgChannelCloseConfirm> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: bytes proof_init = 3;
     */
    proofInit: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 4;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 5;
     */
    signer: string;
    /**
     * @generated from field: uint64 counterparty_upgrade_sequence = 6;
     */
    counterpartyUpgradeSequence: bigint;
    constructor(data?: PartialMessage<MsgChannelCloseConfirm>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelCloseConfirm";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelCloseConfirm;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelCloseConfirm;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelCloseConfirm;
    static equals(a: MsgChannelCloseConfirm | PlainMessage<MsgChannelCloseConfirm> | undefined, b: MsgChannelCloseConfirm | PlainMessage<MsgChannelCloseConfirm> | undefined): boolean;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelCloseConfirmResponse
 */
export declare class MsgChannelCloseConfirmResponse extends Message<MsgChannelCloseConfirmResponse> {
    constructor(data?: PartialMessage<MsgChannelCloseConfirmResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelCloseConfirmResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelCloseConfirmResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelCloseConfirmResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelCloseConfirmResponse;
    static equals(a: MsgChannelCloseConfirmResponse | PlainMessage<MsgChannelCloseConfirmResponse> | undefined, b: MsgChannelCloseConfirmResponse | PlainMessage<MsgChannelCloseConfirmResponse> | undefined): boolean;
}
/**
 * MsgRecvPacket receives incoming IBC packet
 *
 * @generated from message ibc.core.channel.v1.MsgRecvPacket
 */
export declare class MsgRecvPacket extends Message<MsgRecvPacket> {
    /**
     * @generated from field: ibc.core.channel.v1.Packet packet = 1;
     */
    packet?: Packet;
    /**
     * @generated from field: bytes proof_commitment = 2;
     */
    proofCommitment: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 4;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgRecvPacket>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgRecvPacket";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRecvPacket;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRecvPacket;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRecvPacket;
    static equals(a: MsgRecvPacket | PlainMessage<MsgRecvPacket> | undefined, b: MsgRecvPacket | PlainMessage<MsgRecvPacket> | undefined): boolean;
}
/**
 * MsgRecvPacketResponse defines the Msg/RecvPacket response type.
 *
 * @generated from message ibc.core.channel.v1.MsgRecvPacketResponse
 */
export declare class MsgRecvPacketResponse extends Message<MsgRecvPacketResponse> {
    /**
     * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
     */
    result: ResponseResultType;
    constructor(data?: PartialMessage<MsgRecvPacketResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgRecvPacketResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRecvPacketResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRecvPacketResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRecvPacketResponse;
    static equals(a: MsgRecvPacketResponse | PlainMessage<MsgRecvPacketResponse> | undefined, b: MsgRecvPacketResponse | PlainMessage<MsgRecvPacketResponse> | undefined): boolean;
}
/**
 * MsgTimeout receives timed-out packet
 *
 * @generated from message ibc.core.channel.v1.MsgTimeout
 */
export declare class MsgTimeout extends Message<MsgTimeout> {
    /**
     * @generated from field: ibc.core.channel.v1.Packet packet = 1;
     */
    packet?: Packet;
    /**
     * @generated from field: bytes proof_unreceived = 2;
     */
    proofUnreceived: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    /**
     * @generated from field: uint64 next_sequence_recv = 4;
     */
    nextSequenceRecv: bigint;
    /**
     * @generated from field: string signer = 5;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgTimeout>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgTimeout";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTimeout;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTimeout;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTimeout;
    static equals(a: MsgTimeout | PlainMessage<MsgTimeout> | undefined, b: MsgTimeout | PlainMessage<MsgTimeout> | undefined): boolean;
}
/**
 * MsgTimeoutResponse defines the Msg/Timeout response type.
 *
 * @generated from message ibc.core.channel.v1.MsgTimeoutResponse
 */
export declare class MsgTimeoutResponse extends Message<MsgTimeoutResponse> {
    /**
     * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
     */
    result: ResponseResultType;
    constructor(data?: PartialMessage<MsgTimeoutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgTimeoutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTimeoutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTimeoutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTimeoutResponse;
    static equals(a: MsgTimeoutResponse | PlainMessage<MsgTimeoutResponse> | undefined, b: MsgTimeoutResponse | PlainMessage<MsgTimeoutResponse> | undefined): boolean;
}
/**
 * MsgTimeoutOnClose timed-out packet upon counterparty channel closure.
 *
 * @generated from message ibc.core.channel.v1.MsgTimeoutOnClose
 */
export declare class MsgTimeoutOnClose extends Message<MsgTimeoutOnClose> {
    /**
     * @generated from field: ibc.core.channel.v1.Packet packet = 1;
     */
    packet?: Packet;
    /**
     * @generated from field: bytes proof_unreceived = 2;
     */
    proofUnreceived: Uint8Array;
    /**
     * @generated from field: bytes proof_close = 3;
     */
    proofClose: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 4;
     */
    proofHeight?: Height;
    /**
     * @generated from field: uint64 next_sequence_recv = 5;
     */
    nextSequenceRecv: bigint;
    /**
     * @generated from field: string signer = 6;
     */
    signer: string;
    /**
     * @generated from field: uint64 counterparty_upgrade_sequence = 7;
     */
    counterpartyUpgradeSequence: bigint;
    constructor(data?: PartialMessage<MsgTimeoutOnClose>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgTimeoutOnClose";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTimeoutOnClose;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTimeoutOnClose;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTimeoutOnClose;
    static equals(a: MsgTimeoutOnClose | PlainMessage<MsgTimeoutOnClose> | undefined, b: MsgTimeoutOnClose | PlainMessage<MsgTimeoutOnClose> | undefined): boolean;
}
/**
 * MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type.
 *
 * @generated from message ibc.core.channel.v1.MsgTimeoutOnCloseResponse
 */
export declare class MsgTimeoutOnCloseResponse extends Message<MsgTimeoutOnCloseResponse> {
    /**
     * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
     */
    result: ResponseResultType;
    constructor(data?: PartialMessage<MsgTimeoutOnCloseResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgTimeoutOnCloseResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTimeoutOnCloseResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTimeoutOnCloseResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTimeoutOnCloseResponse;
    static equals(a: MsgTimeoutOnCloseResponse | PlainMessage<MsgTimeoutOnCloseResponse> | undefined, b: MsgTimeoutOnCloseResponse | PlainMessage<MsgTimeoutOnCloseResponse> | undefined): boolean;
}
/**
 * MsgAcknowledgement receives incoming IBC acknowledgement
 *
 * @generated from message ibc.core.channel.v1.MsgAcknowledgement
 */
export declare class MsgAcknowledgement extends Message<MsgAcknowledgement> {
    /**
     * @generated from field: ibc.core.channel.v1.Packet packet = 1;
     */
    packet?: Packet;
    /**
     * @generated from field: bytes acknowledgement = 2;
     */
    acknowledgement: Uint8Array;
    /**
     * @generated from field: bytes proof_acked = 3;
     */
    proofAcked: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 4;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 5;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgAcknowledgement>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgAcknowledgement";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAcknowledgement;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAcknowledgement;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAcknowledgement;
    static equals(a: MsgAcknowledgement | PlainMessage<MsgAcknowledgement> | undefined, b: MsgAcknowledgement | PlainMessage<MsgAcknowledgement> | undefined): boolean;
}
/**
 * MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.
 *
 * @generated from message ibc.core.channel.v1.MsgAcknowledgementResponse
 */
export declare class MsgAcknowledgementResponse extends Message<MsgAcknowledgementResponse> {
    /**
     * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
     */
    result: ResponseResultType;
    constructor(data?: PartialMessage<MsgAcknowledgementResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgAcknowledgementResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAcknowledgementResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAcknowledgementResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAcknowledgementResponse;
    static equals(a: MsgAcknowledgementResponse | PlainMessage<MsgAcknowledgementResponse> | undefined, b: MsgAcknowledgementResponse | PlainMessage<MsgAcknowledgementResponse> | undefined): boolean;
}
/**
 * MsgChannelUpgradeInit defines the request type for the ChannelUpgradeInit rpc
 * WARNING: Initializing a channel upgrade in the same block as opening the channel
 * may result in the counterparty being incapable of opening.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeInit
 */
export declare class MsgChannelUpgradeInit extends Message<MsgChannelUpgradeInit> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: ibc.core.channel.v1.UpgradeFields fields = 3;
     */
    fields?: UpgradeFields;
    /**
     * @generated from field: string signer = 4;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelUpgradeInit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeInit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeInit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeInit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeInit;
    static equals(a: MsgChannelUpgradeInit | PlainMessage<MsgChannelUpgradeInit> | undefined, b: MsgChannelUpgradeInit | PlainMessage<MsgChannelUpgradeInit> | undefined): boolean;
}
/**
 * MsgChannelUpgradeInitResponse defines the MsgChannelUpgradeInit response type
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeInitResponse
 */
export declare class MsgChannelUpgradeInitResponse extends Message<MsgChannelUpgradeInitResponse> {
    /**
     * @generated from field: ibc.core.channel.v1.Upgrade upgrade = 1;
     */
    upgrade?: Upgrade;
    /**
     * @generated from field: uint64 upgrade_sequence = 2;
     */
    upgradeSequence: bigint;
    constructor(data?: PartialMessage<MsgChannelUpgradeInitResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeInitResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeInitResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeInitResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeInitResponse;
    static equals(a: MsgChannelUpgradeInitResponse | PlainMessage<MsgChannelUpgradeInitResponse> | undefined, b: MsgChannelUpgradeInitResponse | PlainMessage<MsgChannelUpgradeInitResponse> | undefined): boolean;
}
/**
 * MsgChannelUpgradeTry defines the request type for the ChannelUpgradeTry rpc
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeTry
 */
export declare class MsgChannelUpgradeTry extends Message<MsgChannelUpgradeTry> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: repeated string proposed_upgrade_connection_hops = 3;
     */
    proposedUpgradeConnectionHops: string[];
    /**
     * @generated from field: ibc.core.channel.v1.UpgradeFields counterparty_upgrade_fields = 4;
     */
    counterpartyUpgradeFields?: UpgradeFields;
    /**
     * @generated from field: uint64 counterparty_upgrade_sequence = 5;
     */
    counterpartyUpgradeSequence: bigint;
    /**
     * @generated from field: bytes proof_channel = 6;
     */
    proofChannel: Uint8Array;
    /**
     * @generated from field: bytes proof_upgrade = 7;
     */
    proofUpgrade: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 8;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 9;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelUpgradeTry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeTry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeTry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeTry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeTry;
    static equals(a: MsgChannelUpgradeTry | PlainMessage<MsgChannelUpgradeTry> | undefined, b: MsgChannelUpgradeTry | PlainMessage<MsgChannelUpgradeTry> | undefined): boolean;
}
/**
 * MsgChannelUpgradeTryResponse defines the MsgChannelUpgradeTry response type
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeTryResponse
 */
export declare class MsgChannelUpgradeTryResponse extends Message<MsgChannelUpgradeTryResponse> {
    /**
     * @generated from field: ibc.core.channel.v1.Upgrade upgrade = 1;
     */
    upgrade?: Upgrade;
    /**
     * @generated from field: uint64 upgrade_sequence = 2;
     */
    upgradeSequence: bigint;
    /**
     * @generated from field: ibc.core.channel.v1.ResponseResultType result = 3;
     */
    result: ResponseResultType;
    constructor(data?: PartialMessage<MsgChannelUpgradeTryResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeTryResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeTryResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeTryResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeTryResponse;
    static equals(a: MsgChannelUpgradeTryResponse | PlainMessage<MsgChannelUpgradeTryResponse> | undefined, b: MsgChannelUpgradeTryResponse | PlainMessage<MsgChannelUpgradeTryResponse> | undefined): boolean;
}
/**
 * MsgChannelUpgradeAck defines the request type for the ChannelUpgradeAck rpc
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeAck
 */
export declare class MsgChannelUpgradeAck extends Message<MsgChannelUpgradeAck> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: ibc.core.channel.v1.Upgrade counterparty_upgrade = 3;
     */
    counterpartyUpgrade?: Upgrade;
    /**
     * @generated from field: bytes proof_channel = 4;
     */
    proofChannel: Uint8Array;
    /**
     * @generated from field: bytes proof_upgrade = 5;
     */
    proofUpgrade: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 6;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 7;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelUpgradeAck>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeAck";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeAck;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeAck;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeAck;
    static equals(a: MsgChannelUpgradeAck | PlainMessage<MsgChannelUpgradeAck> | undefined, b: MsgChannelUpgradeAck | PlainMessage<MsgChannelUpgradeAck> | undefined): boolean;
}
/**
 * MsgChannelUpgradeAckResponse defines MsgChannelUpgradeAck response type
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeAckResponse
 */
export declare class MsgChannelUpgradeAckResponse extends Message<MsgChannelUpgradeAckResponse> {
    /**
     * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
     */
    result: ResponseResultType;
    constructor(data?: PartialMessage<MsgChannelUpgradeAckResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeAckResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeAckResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeAckResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeAckResponse;
    static equals(a: MsgChannelUpgradeAckResponse | PlainMessage<MsgChannelUpgradeAckResponse> | undefined, b: MsgChannelUpgradeAckResponse | PlainMessage<MsgChannelUpgradeAckResponse> | undefined): boolean;
}
/**
 * MsgChannelUpgradeConfirm defines the request type for the ChannelUpgradeConfirm rpc
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeConfirm
 */
export declare class MsgChannelUpgradeConfirm extends Message<MsgChannelUpgradeConfirm> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: ibc.core.channel.v1.State counterparty_channel_state = 3;
     */
    counterpartyChannelState: State;
    /**
     * @generated from field: ibc.core.channel.v1.Upgrade counterparty_upgrade = 4;
     */
    counterpartyUpgrade?: Upgrade;
    /**
     * @generated from field: bytes proof_channel = 5;
     */
    proofChannel: Uint8Array;
    /**
     * @generated from field: bytes proof_upgrade = 6;
     */
    proofUpgrade: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 7;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 8;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelUpgradeConfirm>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeConfirm";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeConfirm;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeConfirm;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeConfirm;
    static equals(a: MsgChannelUpgradeConfirm | PlainMessage<MsgChannelUpgradeConfirm> | undefined, b: MsgChannelUpgradeConfirm | PlainMessage<MsgChannelUpgradeConfirm> | undefined): boolean;
}
/**
 * MsgChannelUpgradeConfirmResponse defines MsgChannelUpgradeConfirm response type
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse
 */
export declare class MsgChannelUpgradeConfirmResponse extends Message<MsgChannelUpgradeConfirmResponse> {
    /**
     * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
     */
    result: ResponseResultType;
    constructor(data?: PartialMessage<MsgChannelUpgradeConfirmResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeConfirmResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeConfirmResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeConfirmResponse;
    static equals(a: MsgChannelUpgradeConfirmResponse | PlainMessage<MsgChannelUpgradeConfirmResponse> | undefined, b: MsgChannelUpgradeConfirmResponse | PlainMessage<MsgChannelUpgradeConfirmResponse> | undefined): boolean;
}
/**
 * MsgChannelUpgradeOpen defines the request type for the ChannelUpgradeOpen rpc
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeOpen
 */
export declare class MsgChannelUpgradeOpen extends Message<MsgChannelUpgradeOpen> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: ibc.core.channel.v1.State counterparty_channel_state = 3;
     */
    counterpartyChannelState: State;
    /**
     * @generated from field: uint64 counterparty_upgrade_sequence = 4;
     */
    counterpartyUpgradeSequence: bigint;
    /**
     * @generated from field: bytes proof_channel = 5;
     */
    proofChannel: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 6;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 7;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelUpgradeOpen>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeOpen";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeOpen;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeOpen;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeOpen;
    static equals(a: MsgChannelUpgradeOpen | PlainMessage<MsgChannelUpgradeOpen> | undefined, b: MsgChannelUpgradeOpen | PlainMessage<MsgChannelUpgradeOpen> | undefined): boolean;
}
/**
 * MsgChannelUpgradeOpenResponse defines the MsgChannelUpgradeOpen response type
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeOpenResponse
 */
export declare class MsgChannelUpgradeOpenResponse extends Message<MsgChannelUpgradeOpenResponse> {
    constructor(data?: PartialMessage<MsgChannelUpgradeOpenResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeOpenResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeOpenResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeOpenResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeOpenResponse;
    static equals(a: MsgChannelUpgradeOpenResponse | PlainMessage<MsgChannelUpgradeOpenResponse> | undefined, b: MsgChannelUpgradeOpenResponse | PlainMessage<MsgChannelUpgradeOpenResponse> | undefined): boolean;
}
/**
 * MsgChannelUpgradeTimeout defines the request type for the ChannelUpgradeTimeout rpc
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeTimeout
 */
export declare class MsgChannelUpgradeTimeout extends Message<MsgChannelUpgradeTimeout> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: ibc.core.channel.v1.Channel counterparty_channel = 3;
     */
    counterpartyChannel?: Channel;
    /**
     * @generated from field: bytes proof_channel = 4;
     */
    proofChannel: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 5;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 6;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelUpgradeTimeout>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeTimeout";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeTimeout;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeTimeout;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeTimeout;
    static equals(a: MsgChannelUpgradeTimeout | PlainMessage<MsgChannelUpgradeTimeout> | undefined, b: MsgChannelUpgradeTimeout | PlainMessage<MsgChannelUpgradeTimeout> | undefined): boolean;
}
/**
 * MsgChannelUpgradeTimeoutRepsonse defines the MsgChannelUpgradeTimeout response type
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse
 */
export declare class MsgChannelUpgradeTimeoutResponse extends Message<MsgChannelUpgradeTimeoutResponse> {
    constructor(data?: PartialMessage<MsgChannelUpgradeTimeoutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeTimeoutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeTimeoutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeTimeoutResponse;
    static equals(a: MsgChannelUpgradeTimeoutResponse | PlainMessage<MsgChannelUpgradeTimeoutResponse> | undefined, b: MsgChannelUpgradeTimeoutResponse | PlainMessage<MsgChannelUpgradeTimeoutResponse> | undefined): boolean;
}
/**
 * MsgChannelUpgradeCancel defines the request type for the ChannelUpgradeCancel rpc
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeCancel
 */
export declare class MsgChannelUpgradeCancel extends Message<MsgChannelUpgradeCancel> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: ibc.core.channel.v1.ErrorReceipt error_receipt = 3;
     */
    errorReceipt?: ErrorReceipt;
    /**
     * @generated from field: bytes proof_error_receipt = 4;
     */
    proofErrorReceipt: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 5;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 6;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelUpgradeCancel>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeCancel";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeCancel;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeCancel;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeCancel;
    static equals(a: MsgChannelUpgradeCancel | PlainMessage<MsgChannelUpgradeCancel> | undefined, b: MsgChannelUpgradeCancel | PlainMessage<MsgChannelUpgradeCancel> | undefined): boolean;
}
/**
 * MsgChannelUpgradeCancelResponse defines the MsgChannelUpgradeCancel response type
 *
 * @generated from message ibc.core.channel.v1.MsgChannelUpgradeCancelResponse
 */
export declare class MsgChannelUpgradeCancelResponse extends Message<MsgChannelUpgradeCancelResponse> {
    constructor(data?: PartialMessage<MsgChannelUpgradeCancelResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelUpgradeCancelResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelUpgradeCancelResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelUpgradeCancelResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelUpgradeCancelResponse;
    static equals(a: MsgChannelUpgradeCancelResponse | PlainMessage<MsgChannelUpgradeCancelResponse> | undefined, b: MsgChannelUpgradeCancelResponse | PlainMessage<MsgChannelUpgradeCancelResponse> | undefined): boolean;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * @generated from message ibc.core.channel.v1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten).
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the channel parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: ibc.core.channel.v1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * MsgUpdateParamsResponse defines the MsgUpdateParams response type.
 *
 * @generated from message ibc.core.channel.v1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
/**
 * MsgPruneAcknowledgements defines the request type for the PruneAcknowledgements rpc.
 *
 * @generated from message ibc.core.channel.v1.MsgPruneAcknowledgements
 */
export declare class MsgPruneAcknowledgements extends Message<MsgPruneAcknowledgements> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: uint64 limit = 3;
     */
    limit: bigint;
    /**
     * @generated from field: string signer = 4;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgPruneAcknowledgements>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgPruneAcknowledgements";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPruneAcknowledgements;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPruneAcknowledgements;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPruneAcknowledgements;
    static equals(a: MsgPruneAcknowledgements | PlainMessage<MsgPruneAcknowledgements> | undefined, b: MsgPruneAcknowledgements | PlainMessage<MsgPruneAcknowledgements> | undefined): boolean;
}
/**
 * MsgPruneAcknowledgementsResponse defines the response type for the PruneAcknowledgements rpc.
 *
 * @generated from message ibc.core.channel.v1.MsgPruneAcknowledgementsResponse
 */
export declare class MsgPruneAcknowledgementsResponse extends Message<MsgPruneAcknowledgementsResponse> {
    /**
     * Number of sequences pruned (includes both packet acknowledgements and packet receipts where appropriate).
     *
     * @generated from field: uint64 total_pruned_sequences = 1;
     */
    totalPrunedSequences: bigint;
    /**
     * Number of sequences left after pruning.
     *
     * @generated from field: uint64 total_remaining_sequences = 2;
     */
    totalRemainingSequences: bigint;
    constructor(data?: PartialMessage<MsgPruneAcknowledgementsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgPruneAcknowledgementsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPruneAcknowledgementsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPruneAcknowledgementsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPruneAcknowledgementsResponse;
    static equals(a: MsgPruneAcknowledgementsResponse | PlainMessage<MsgPruneAcknowledgementsResponse> | undefined, b: MsgPruneAcknowledgementsResponse | PlainMessage<MsgPruneAcknowledgementsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map