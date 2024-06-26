import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { ConnectionEnd } from "../../../core/connection/v1/connection_pb.js";
import { Channel } from "../../../core/channel/v1/channel_pb.js";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 *
 * @generated from enum ibc.lightclients.solomachine.v2.DataType
 */
export declare enum DataType {
    /**
     * Default State
     *
     * @generated from enum value: DATA_TYPE_UNINITIALIZED_UNSPECIFIED = 0;
     */
    UNINITIALIZED_UNSPECIFIED = 0,
    /**
     * Data type for client state verification
     *
     * @generated from enum value: DATA_TYPE_CLIENT_STATE = 1;
     */
    CLIENT_STATE = 1,
    /**
     * Data type for consensus state verification
     *
     * @generated from enum value: DATA_TYPE_CONSENSUS_STATE = 2;
     */
    CONSENSUS_STATE = 2,
    /**
     * Data type for connection state verification
     *
     * @generated from enum value: DATA_TYPE_CONNECTION_STATE = 3;
     */
    CONNECTION_STATE = 3,
    /**
     * Data type for channel state verification
     *
     * @generated from enum value: DATA_TYPE_CHANNEL_STATE = 4;
     */
    CHANNEL_STATE = 4,
    /**
     * Data type for packet commitment verification
     *
     * @generated from enum value: DATA_TYPE_PACKET_COMMITMENT = 5;
     */
    PACKET_COMMITMENT = 5,
    /**
     * Data type for packet acknowledgement verification
     *
     * @generated from enum value: DATA_TYPE_PACKET_ACKNOWLEDGEMENT = 6;
     */
    PACKET_ACKNOWLEDGEMENT = 6,
    /**
     * Data type for packet receipt absence verification
     *
     * @generated from enum value: DATA_TYPE_PACKET_RECEIPT_ABSENCE = 7;
     */
    PACKET_RECEIPT_ABSENCE = 7,
    /**
     * Data type for next sequence recv verification
     *
     * @generated from enum value: DATA_TYPE_NEXT_SEQUENCE_RECV = 8;
     */
    NEXT_SEQUENCE_RECV = 8,
    /**
     * Data type for header verification
     *
     * @generated from enum value: DATA_TYPE_HEADER = 9;
     */
    HEADER = 9
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 *
 * @generated from message ibc.lightclients.solomachine.v2.ClientState
 */
export declare class ClientState extends Message<ClientState> {
    /**
     * latest sequence of the client state
     *
     * @generated from field: uint64 sequence = 1;
     */
    sequence: bigint;
    /**
     * frozen sequence of the solo machine
     *
     * @generated from field: bool is_frozen = 2;
     */
    isFrozen: boolean;
    /**
     * @generated from field: ibc.lightclients.solomachine.v2.ConsensusState consensus_state = 3;
     */
    consensusState?: ConsensusState;
    /**
     * when set to true, will allow governance to update a solo machine client.
     * The client will be unfrozen if it is frozen.
     *
     * @generated from field: bool allow_update_after_proposal = 4;
     */
    allowUpdateAfterProposal: boolean;
    constructor(data?: PartialMessage<ClientState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.ClientState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientState;
    static equals(a: ClientState | PlainMessage<ClientState> | undefined, b: ClientState | PlainMessage<ClientState> | undefined): boolean;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 *
 * @generated from message ibc.lightclients.solomachine.v2.ConsensusState
 */
export declare class ConsensusState extends Message<ConsensusState> {
    /**
     * public key of the solo machine
     *
     * @generated from field: google.protobuf.Any public_key = 1;
     */
    publicKey?: Any;
    /**
     * diversifier allows the same public key to be re-used across different solo
     * machine clients (potentially on different chains) without being considered
     * misbehaviour.
     *
     * @generated from field: string diversifier = 2;
     */
    diversifier: string;
    /**
     * @generated from field: uint64 timestamp = 3;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<ConsensusState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.ConsensusState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConsensusState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConsensusState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConsensusState;
    static equals(a: ConsensusState | PlainMessage<ConsensusState> | undefined, b: ConsensusState | PlainMessage<ConsensusState> | undefined): boolean;
}
/**
 * Header defines a solo machine consensus header
 *
 * @generated from message ibc.lightclients.solomachine.v2.Header
 */
export declare class Header extends Message<Header> {
    /**
     * sequence to update solo machine public key at
     *
     * @generated from field: uint64 sequence = 1;
     */
    sequence: bigint;
    /**
     * @generated from field: uint64 timestamp = 2;
     */
    timestamp: bigint;
    /**
     * @generated from field: bytes signature = 3;
     */
    signature: Uint8Array;
    /**
     * @generated from field: google.protobuf.Any new_public_key = 4;
     */
    newPublicKey?: Any;
    /**
     * @generated from field: string new_diversifier = 5;
     */
    newDiversifier: string;
    constructor(data?: PartialMessage<Header>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.Header";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Header;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Header;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Header;
    static equals(a: Header | PlainMessage<Header> | undefined, b: Header | PlainMessage<Header> | undefined): boolean;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 *
 * @generated from message ibc.lightclients.solomachine.v2.Misbehaviour
 */
export declare class Misbehaviour extends Message<Misbehaviour> {
    /**
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * @generated from field: uint64 sequence = 2;
     */
    sequence: bigint;
    /**
     * @generated from field: ibc.lightclients.solomachine.v2.SignatureAndData signature_one = 3;
     */
    signatureOne?: SignatureAndData;
    /**
     * @generated from field: ibc.lightclients.solomachine.v2.SignatureAndData signature_two = 4;
     */
    signatureTwo?: SignatureAndData;
    constructor(data?: PartialMessage<Misbehaviour>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.Misbehaviour";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Misbehaviour;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Misbehaviour;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Misbehaviour;
    static equals(a: Misbehaviour | PlainMessage<Misbehaviour> | undefined, b: Misbehaviour | PlainMessage<Misbehaviour> | undefined): boolean;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 *
 * @generated from message ibc.lightclients.solomachine.v2.SignatureAndData
 */
export declare class SignatureAndData extends Message<SignatureAndData> {
    /**
     * @generated from field: bytes signature = 1;
     */
    signature: Uint8Array;
    /**
     * @generated from field: ibc.lightclients.solomachine.v2.DataType data_type = 2;
     */
    dataType: DataType;
    /**
     * @generated from field: bytes data = 3;
     */
    data: Uint8Array;
    /**
     * @generated from field: uint64 timestamp = 4;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<SignatureAndData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.SignatureAndData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignatureAndData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignatureAndData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignatureAndData;
    static equals(a: SignatureAndData | PlainMessage<SignatureAndData> | undefined, b: SignatureAndData | PlainMessage<SignatureAndData> | undefined): boolean;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 *
 * @generated from message ibc.lightclients.solomachine.v2.TimestampedSignatureData
 */
export declare class TimestampedSignatureData extends Message<TimestampedSignatureData> {
    /**
     * @generated from field: bytes signature_data = 1;
     */
    signatureData: Uint8Array;
    /**
     * @generated from field: uint64 timestamp = 2;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<TimestampedSignatureData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.TimestampedSignatureData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TimestampedSignatureData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TimestampedSignatureData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TimestampedSignatureData;
    static equals(a: TimestampedSignatureData | PlainMessage<TimestampedSignatureData> | undefined, b: TimestampedSignatureData | PlainMessage<TimestampedSignatureData> | undefined): boolean;
}
/**
 * SignBytes defines the signed bytes used for signature verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.SignBytes
 */
export declare class SignBytes extends Message<SignBytes> {
    /**
     * @generated from field: uint64 sequence = 1;
     */
    sequence: bigint;
    /**
     * @generated from field: uint64 timestamp = 2;
     */
    timestamp: bigint;
    /**
     * @generated from field: string diversifier = 3;
     */
    diversifier: string;
    /**
     * type of the data used
     *
     * @generated from field: ibc.lightclients.solomachine.v2.DataType data_type = 4;
     */
    dataType: DataType;
    /**
     * marshaled data
     *
     * @generated from field: bytes data = 5;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<SignBytes>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.SignBytes";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignBytes;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignBytes;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignBytes;
    static equals(a: SignBytes | PlainMessage<SignBytes> | undefined, b: SignBytes | PlainMessage<SignBytes> | undefined): boolean;
}
/**
 * HeaderData returns the SignBytes data for update verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.HeaderData
 */
export declare class HeaderData extends Message<HeaderData> {
    /**
     * header public key
     *
     * @generated from field: google.protobuf.Any new_pub_key = 1;
     */
    newPubKey?: Any;
    /**
     * header diversifier
     *
     * @generated from field: string new_diversifier = 2;
     */
    newDiversifier: string;
    constructor(data?: PartialMessage<HeaderData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.HeaderData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HeaderData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HeaderData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HeaderData;
    static equals(a: HeaderData | PlainMessage<HeaderData> | undefined, b: HeaderData | PlainMessage<HeaderData> | undefined): boolean;
}
/**
 * ClientStateData returns the SignBytes data for client state verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.ClientStateData
 */
export declare class ClientStateData extends Message<ClientStateData> {
    /**
     * @generated from field: bytes path = 1;
     */
    path: Uint8Array;
    /**
     * @generated from field: google.protobuf.Any client_state = 2;
     */
    clientState?: Any;
    constructor(data?: PartialMessage<ClientStateData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.ClientStateData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStateData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStateData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStateData;
    static equals(a: ClientStateData | PlainMessage<ClientStateData> | undefined, b: ClientStateData | PlainMessage<ClientStateData> | undefined): boolean;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.ConsensusStateData
 */
export declare class ConsensusStateData extends Message<ConsensusStateData> {
    /**
     * @generated from field: bytes path = 1;
     */
    path: Uint8Array;
    /**
     * @generated from field: google.protobuf.Any consensus_state = 2;
     */
    consensusState?: Any;
    constructor(data?: PartialMessage<ConsensusStateData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.ConsensusStateData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConsensusStateData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConsensusStateData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConsensusStateData;
    static equals(a: ConsensusStateData | PlainMessage<ConsensusStateData> | undefined, b: ConsensusStateData | PlainMessage<ConsensusStateData> | undefined): boolean;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.ConnectionStateData
 */
export declare class ConnectionStateData extends Message<ConnectionStateData> {
    /**
     * @generated from field: bytes path = 1;
     */
    path: Uint8Array;
    /**
     * @generated from field: ibc.core.connection.v1.ConnectionEnd connection = 2;
     */
    connection?: ConnectionEnd;
    constructor(data?: PartialMessage<ConnectionStateData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.ConnectionStateData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConnectionStateData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConnectionStateData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConnectionStateData;
    static equals(a: ConnectionStateData | PlainMessage<ConnectionStateData> | undefined, b: ConnectionStateData | PlainMessage<ConnectionStateData> | undefined): boolean;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.ChannelStateData
 */
export declare class ChannelStateData extends Message<ChannelStateData> {
    /**
     * @generated from field: bytes path = 1;
     */
    path: Uint8Array;
    /**
     * @generated from field: ibc.core.channel.v1.Channel channel = 2;
     */
    channel?: Channel;
    constructor(data?: PartialMessage<ChannelStateData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.ChannelStateData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChannelStateData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChannelStateData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChannelStateData;
    static equals(a: ChannelStateData | PlainMessage<ChannelStateData> | undefined, b: ChannelStateData | PlainMessage<ChannelStateData> | undefined): boolean;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.PacketCommitmentData
 */
export declare class PacketCommitmentData extends Message<PacketCommitmentData> {
    /**
     * @generated from field: bytes path = 1;
     */
    path: Uint8Array;
    /**
     * @generated from field: bytes commitment = 2;
     */
    commitment: Uint8Array;
    constructor(data?: PartialMessage<PacketCommitmentData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.PacketCommitmentData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketCommitmentData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketCommitmentData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketCommitmentData;
    static equals(a: PacketCommitmentData | PlainMessage<PacketCommitmentData> | undefined, b: PacketCommitmentData | PlainMessage<PacketCommitmentData> | undefined): boolean;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.PacketAcknowledgementData
 */
export declare class PacketAcknowledgementData extends Message<PacketAcknowledgementData> {
    /**
     * @generated from field: bytes path = 1;
     */
    path: Uint8Array;
    /**
     * @generated from field: bytes acknowledgement = 2;
     */
    acknowledgement: Uint8Array;
    constructor(data?: PartialMessage<PacketAcknowledgementData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.PacketAcknowledgementData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketAcknowledgementData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketAcknowledgementData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketAcknowledgementData;
    static equals(a: PacketAcknowledgementData | PlainMessage<PacketAcknowledgementData> | undefined, b: PacketAcknowledgementData | PlainMessage<PacketAcknowledgementData> | undefined): boolean;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData
 */
export declare class PacketReceiptAbsenceData extends Message<PacketReceiptAbsenceData> {
    /**
     * @generated from field: bytes path = 1;
     */
    path: Uint8Array;
    constructor(data?: PartialMessage<PacketReceiptAbsenceData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketReceiptAbsenceData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketReceiptAbsenceData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketReceiptAbsenceData;
    static equals(a: PacketReceiptAbsenceData | PlainMessage<PacketReceiptAbsenceData> | undefined, b: PacketReceiptAbsenceData | PlainMessage<PacketReceiptAbsenceData> | undefined): boolean;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 *
 * @generated from message ibc.lightclients.solomachine.v2.NextSequenceRecvData
 */
export declare class NextSequenceRecvData extends Message<NextSequenceRecvData> {
    /**
     * @generated from field: bytes path = 1;
     */
    path: Uint8Array;
    /**
     * @generated from field: uint64 next_seq_recv = 2;
     */
    nextSeqRecv: bigint;
    constructor(data?: PartialMessage<NextSequenceRecvData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v2.NextSequenceRecvData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NextSequenceRecvData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NextSequenceRecvData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NextSequenceRecvData;
    static equals(a: NextSequenceRecvData | PlainMessage<NextSequenceRecvData> | undefined, b: NextSequenceRecvData | PlainMessage<NextSequenceRecvData> | undefined): boolean;
}
//# sourceMappingURL=solomachine_pb.d.ts.map