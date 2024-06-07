import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ClientConsensusStates, IdentifiedClientState, Params } from "./client_pb.js";
/**
 * GenesisState defines the ibc client submodule's genesis state.
 *
 * @generated from message ibc.core.client.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * client states with their corresponding identifiers
     *
     * @generated from field: repeated ibc.core.client.v1.IdentifiedClientState clients = 1;
     */
    clients: IdentifiedClientState[];
    /**
     * consensus states from each client
     *
     * @generated from field: repeated ibc.core.client.v1.ClientConsensusStates clients_consensus = 2;
     */
    clientsConsensus: ClientConsensusStates[];
    /**
     * metadata from each client
     *
     * @generated from field: repeated ibc.core.client.v1.IdentifiedGenesisMetadata clients_metadata = 3;
     */
    clientsMetadata: IdentifiedGenesisMetadata[];
    /**
     * @generated from field: ibc.core.client.v1.Params params = 4;
     */
    params?: Params;
    /**
     * Deprecated: create_localhost has been deprecated.
     * The localhost client is automatically created at genesis.
     *
     * @generated from field: bool create_localhost = 5 [deprecated = true];
     * @deprecated
     */
    createLocalhost: boolean;
    /**
     * the sequence for the next generated client identifier
     *
     * @generated from field: uint64 next_client_sequence = 6;
     */
    nextClientSequence: bigint;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * GenesisMetadata defines the genesis type for metadata that will be used
 * to export all client store keys that are not client or consensus states.
 *
 * @generated from message ibc.core.client.v1.GenesisMetadata
 */
export declare class GenesisMetadata extends Message<GenesisMetadata> {
    /**
     * store key of metadata without clientID-prefix
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * metadata value
     *
     * @generated from field: bytes value = 2;
     */
    value: Uint8Array;
    constructor(data?: PartialMessage<GenesisMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.GenesisMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisMetadata;
    static equals(a: GenesisMetadata | PlainMessage<GenesisMetadata> | undefined, b: GenesisMetadata | PlainMessage<GenesisMetadata> | undefined): boolean;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 *
 * @generated from message ibc.core.client.v1.IdentifiedGenesisMetadata
 */
export declare class IdentifiedGenesisMetadata extends Message<IdentifiedGenesisMetadata> {
    /**
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * @generated from field: repeated ibc.core.client.v1.GenesisMetadata client_metadata = 2;
     */
    clientMetadata: GenesisMetadata[];
    constructor(data?: PartialMessage<IdentifiedGenesisMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.IdentifiedGenesisMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifiedGenesisMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifiedGenesisMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifiedGenesisMetadata;
    static equals(a: IdentifiedGenesisMetadata | PlainMessage<IdentifiedGenesisMetadata> | undefined, b: IdentifiedGenesisMetadata | PlainMessage<IdentifiedGenesisMetadata> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map