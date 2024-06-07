import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Height } from "../../../core/client/v1/client_pb.js";
/**
 * Wasm light client's Client state
 *
 * @generated from message ibc.lightclients.wasm.v1.ClientState
 */
export declare class ClientState extends Message<ClientState> {
    /**
     * bytes encoding the client state of the underlying light client
     * implemented as a Wasm contract.
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * @generated from field: bytes checksum = 2;
     */
    checksum: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height latest_height = 3;
     */
    latestHeight?: Height;
    constructor(data?: PartialMessage<ClientState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.ClientState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientState;
    static equals(a: ClientState | PlainMessage<ClientState> | undefined, b: ClientState | PlainMessage<ClientState> | undefined): boolean;
}
/**
 * Wasm light client's ConsensusState
 *
 * @generated from message ibc.lightclients.wasm.v1.ConsensusState
 */
export declare class ConsensusState extends Message<ConsensusState> {
    /**
     * bytes encoding the consensus state of the underlying light client
     * implemented as a Wasm contract.
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<ConsensusState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.ConsensusState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConsensusState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConsensusState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConsensusState;
    static equals(a: ConsensusState | PlainMessage<ConsensusState> | undefined, b: ConsensusState | PlainMessage<ConsensusState> | undefined): boolean;
}
/**
 * Wasm light client message (either header(s) or misbehaviour)
 *
 * @generated from message ibc.lightclients.wasm.v1.ClientMessage
 */
export declare class ClientMessage extends Message<ClientMessage> {
    /**
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<ClientMessage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.ClientMessage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientMessage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientMessage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientMessage;
    static equals(a: ClientMessage | PlainMessage<ClientMessage> | undefined, b: ClientMessage | PlainMessage<ClientMessage> | undefined): boolean;
}
/**
 * Checksums defines a list of all checksums that are stored
 *
 * Deprecated: This message is deprecated in favor of storing the checksums
 * using a Collections.KeySet.
 *
 * @generated from message ibc.lightclients.wasm.v1.Checksums
 * @deprecated
 */
export declare class Checksums extends Message<Checksums> {
    /**
     * @generated from field: repeated bytes checksums = 1;
     */
    checksums: Uint8Array[];
    constructor(data?: PartialMessage<Checksums>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.Checksums";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Checksums;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Checksums;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Checksums;
    static equals(a: Checksums | PlainMessage<Checksums> | undefined, b: Checksums | PlainMessage<Checksums> | undefined): boolean;
}
//# sourceMappingURL=wasm_pb.d.ts.map