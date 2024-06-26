import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 *
 * @generated from message ibc.lightclients.solomachine.v3.ClientState
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
     * @generated from field: ibc.lightclients.solomachine.v3.ConsensusState consensus_state = 3;
     */
    consensusState?: ConsensusState;
    constructor(data?: PartialMessage<ClientState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v3.ClientState";
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
 * @generated from message ibc.lightclients.solomachine.v3.ConsensusState
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
    static readonly typeName = "ibc.lightclients.solomachine.v3.ConsensusState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConsensusState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConsensusState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConsensusState;
    static equals(a: ConsensusState | PlainMessage<ConsensusState> | undefined, b: ConsensusState | PlainMessage<ConsensusState> | undefined): boolean;
}
/**
 * Header defines a solo machine consensus header
 *
 * @generated from message ibc.lightclients.solomachine.v3.Header
 */
export declare class Header extends Message<Header> {
    /**
     * @generated from field: uint64 timestamp = 1;
     */
    timestamp: bigint;
    /**
     * @generated from field: bytes signature = 2;
     */
    signature: Uint8Array;
    /**
     * @generated from field: google.protobuf.Any new_public_key = 3;
     */
    newPublicKey?: Any;
    /**
     * @generated from field: string new_diversifier = 4;
     */
    newDiversifier: string;
    constructor(data?: PartialMessage<Header>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v3.Header";
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
 * @generated from message ibc.lightclients.solomachine.v3.Misbehaviour
 */
export declare class Misbehaviour extends Message<Misbehaviour> {
    /**
     * @generated from field: uint64 sequence = 1;
     */
    sequence: bigint;
    /**
     * @generated from field: ibc.lightclients.solomachine.v3.SignatureAndData signature_one = 2;
     */
    signatureOne?: SignatureAndData;
    /**
     * @generated from field: ibc.lightclients.solomachine.v3.SignatureAndData signature_two = 3;
     */
    signatureTwo?: SignatureAndData;
    constructor(data?: PartialMessage<Misbehaviour>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v3.Misbehaviour";
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
 * @generated from message ibc.lightclients.solomachine.v3.SignatureAndData
 */
export declare class SignatureAndData extends Message<SignatureAndData> {
    /**
     * @generated from field: bytes signature = 1;
     */
    signature: Uint8Array;
    /**
     * @generated from field: bytes path = 2;
     */
    path: Uint8Array;
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
    static readonly typeName = "ibc.lightclients.solomachine.v3.SignatureAndData";
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
 * @generated from message ibc.lightclients.solomachine.v3.TimestampedSignatureData
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
    static readonly typeName = "ibc.lightclients.solomachine.v3.TimestampedSignatureData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TimestampedSignatureData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TimestampedSignatureData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TimestampedSignatureData;
    static equals(a: TimestampedSignatureData | PlainMessage<TimestampedSignatureData> | undefined, b: TimestampedSignatureData | PlainMessage<TimestampedSignatureData> | undefined): boolean;
}
/**
 * SignBytes defines the signed bytes used for signature verification.
 *
 * @generated from message ibc.lightclients.solomachine.v3.SignBytes
 */
export declare class SignBytes extends Message<SignBytes> {
    /**
     * the sequence number
     *
     * @generated from field: uint64 sequence = 1;
     */
    sequence: bigint;
    /**
     * the proof timestamp
     *
     * @generated from field: uint64 timestamp = 2;
     */
    timestamp: bigint;
    /**
     * the public key diversifier
     *
     * @generated from field: string diversifier = 3;
     */
    diversifier: string;
    /**
     * the standardised path bytes
     *
     * @generated from field: bytes path = 4;
     */
    path: Uint8Array;
    /**
     * the marshaled data bytes
     *
     * @generated from field: bytes data = 5;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<SignBytes>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.solomachine.v3.SignBytes";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignBytes;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignBytes;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignBytes;
    static equals(a: SignBytes | PlainMessage<SignBytes> | undefined, b: SignBytes | PlainMessage<SignBytes> | undefined): boolean;
}
/**
 * HeaderData returns the SignBytes data for update verification.
 *
 * @generated from message ibc.lightclients.solomachine.v3.HeaderData
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
    static readonly typeName = "ibc.lightclients.solomachine.v3.HeaderData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HeaderData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HeaderData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HeaderData;
    static equals(a: HeaderData | PlainMessage<HeaderData> | undefined, b: HeaderData | PlainMessage<HeaderData> | undefined): boolean;
}
//# sourceMappingURL=solomachine_pb.d.ts.map