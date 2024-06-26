import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { ConnectionEnd, IdentifiedConnection, Params } from "./connection_pb.js";
import { Height, IdentifiedClientState } from "../../client/v1/client_pb.js";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination_pb.js";
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionRequest
 */
export declare class QueryConnectionRequest extends Message<QueryConnectionRequest> {
    /**
     * connection unique identifier
     *
     * @generated from field: string connection_id = 1;
     */
    connectionId: string;
    constructor(data?: PartialMessage<QueryConnectionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.QueryConnectionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConnectionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConnectionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConnectionRequest;
    static equals(a: QueryConnectionRequest | PlainMessage<QueryConnectionRequest> | undefined, b: QueryConnectionRequest | PlainMessage<QueryConnectionRequest> | undefined): boolean;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionResponse
 */
export declare class QueryConnectionResponse extends Message<QueryConnectionResponse> {
    /**
     * connection associated with the request identifier
     *
     * @generated from field: ibc.core.connection.v1.ConnectionEnd connection = 1;
     */
    connection?: ConnectionEnd;
    /**
     * merkle proof of existence
     *
     * @generated from field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    constructor(data?: PartialMessage<QueryConnectionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.QueryConnectionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConnectionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConnectionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConnectionResponse;
    static equals(a: QueryConnectionResponse | PlainMessage<QueryConnectionResponse> | undefined, b: QueryConnectionResponse | PlainMessage<QueryConnectionResponse> | undefined): boolean;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionsRequest
 */
export declare class QueryConnectionsRequest extends Message<QueryConnectionsRequest> {
    /**
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryConnectionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.QueryConnectionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConnectionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConnectionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConnectionsRequest;
    static equals(a: QueryConnectionsRequest | PlainMessage<QueryConnectionsRequest> | undefined, b: QueryConnectionsRequest | PlainMessage<QueryConnectionsRequest> | undefined): boolean;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionsResponse
 */
export declare class QueryConnectionsResponse extends Message<QueryConnectionsResponse> {
    /**
     * list of stored connections of the chain.
     *
     * @generated from field: repeated ibc.core.connection.v1.IdentifiedConnection connections = 1;
     */
    connections: IdentifiedConnection[];
    /**
     * pagination response
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    /**
     * query block height
     *
     * @generated from field: ibc.core.client.v1.Height height = 3;
     */
    height?: Height;
    constructor(data?: PartialMessage<QueryConnectionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.QueryConnectionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConnectionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConnectionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConnectionsResponse;
    static equals(a: QueryConnectionsResponse | PlainMessage<QueryConnectionsResponse> | undefined, b: QueryConnectionsResponse | PlainMessage<QueryConnectionsResponse> | undefined): boolean;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 *
 * @generated from message ibc.core.connection.v1.QueryClientConnectionsRequest
 */
export declare class QueryClientConnectionsRequest extends Message<QueryClientConnectionsRequest> {
    /**
     * client identifier associated with a connection
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    constructor(data?: PartialMessage<QueryClientConnectionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.QueryClientConnectionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClientConnectionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClientConnectionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClientConnectionsRequest;
    static equals(a: QueryClientConnectionsRequest | PlainMessage<QueryClientConnectionsRequest> | undefined, b: QueryClientConnectionsRequest | PlainMessage<QueryClientConnectionsRequest> | undefined): boolean;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 *
 * @generated from message ibc.core.connection.v1.QueryClientConnectionsResponse
 */
export declare class QueryClientConnectionsResponse extends Message<QueryClientConnectionsResponse> {
    /**
     * slice of all the connection paths associated with a client.
     *
     * @generated from field: repeated string connection_paths = 1;
     */
    connectionPaths: string[];
    /**
     * merkle proof of existence
     *
     * @generated from field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was generated
     *
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    constructor(data?: PartialMessage<QueryClientConnectionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.QueryClientConnectionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClientConnectionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClientConnectionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClientConnectionsResponse;
    static equals(a: QueryClientConnectionsResponse | PlainMessage<QueryClientConnectionsResponse> | undefined, b: QueryClientConnectionsResponse | PlainMessage<QueryClientConnectionsResponse> | undefined): boolean;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionClientStateRequest
 */
export declare class QueryConnectionClientStateRequest extends Message<QueryConnectionClientStateRequest> {
    /**
     * connection identifier
     *
     * @generated from field: string connection_id = 1;
     */
    connectionId: string;
    constructor(data?: PartialMessage<QueryConnectionClientStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.QueryConnectionClientStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConnectionClientStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConnectionClientStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConnectionClientStateRequest;
    static equals(a: QueryConnectionClientStateRequest | PlainMessage<QueryConnectionClientStateRequest> | undefined, b: QueryConnectionClientStateRequest | PlainMessage<QueryConnectionClientStateRequest> | undefined): boolean;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionClientStateResponse
 */
export declare class QueryConnectionClientStateResponse extends Message<QueryConnectionClientStateResponse> {
    /**
     * client state associated with the channel
     *
     * @generated from field: ibc.core.client.v1.IdentifiedClientState identified_client_state = 1;
     */
    identifiedClientState?: IdentifiedClientState;
    /**
     * merkle proof of existence
     *
     * @generated from field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    constructor(data?: PartialMessage<QueryConnectionClientStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.QueryConnectionClientStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConnectionClientStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConnectionClientStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConnectionClientStateResponse;
    static equals(a: QueryConnectionClientStateResponse | PlainMessage<QueryConnectionClientStateResponse> | undefined, b: QueryConnectionClientStateResponse | PlainMessage<QueryConnectionClientStateResponse> | undefined): boolean;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionConsensusStateRequest
 */
export declare class QueryConnectionConsensusStateRequest extends Message<QueryConnectionConsensusStateRequest> {
    /**
     * connection identifier
     *
     * @generated from field: string connection_id = 1;
     */
    connectionId: string;
    /**
     * @generated from field: uint64 revision_number = 2;
     */
    revisionNumber: bigint;
    /**
     * @generated from field: uint64 revision_height = 3;
     */
    revisionHeight: bigint;
    constructor(data?: PartialMessage<QueryConnectionConsensusStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.QueryConnectionConsensusStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConnectionConsensusStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConnectionConsensusStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConnectionConsensusStateRequest;
    static equals(a: QueryConnectionConsensusStateRequest | PlainMessage<QueryConnectionConsensusStateRequest> | undefined, b: QueryConnectionConsensusStateRequest | PlainMessage<QueryConnectionConsensusStateRequest> | undefined): boolean;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionConsensusStateResponse
 */
export declare class QueryConnectionConsensusStateResponse extends Message<QueryConnectionConsensusStateResponse> {
    /**
     * consensus state associated with the channel
     *
     * @generated from field: google.protobuf.Any consensus_state = 1;
     */
    consensusState?: Any;
    /**
     * client ID associated with the consensus state
     *
     * @generated from field: string client_id = 2;
     */
    clientId: string;
    /**
     * merkle proof of existence
     *
     * @generated from field: bytes proof = 3;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from field: ibc.core.client.v1.Height proof_height = 4;
     */
    proofHeight?: Height;
    constructor(data?: PartialMessage<QueryConnectionConsensusStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.QueryConnectionConsensusStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConnectionConsensusStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConnectionConsensusStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConnectionConsensusStateResponse;
    static equals(a: QueryConnectionConsensusStateResponse | PlainMessage<QueryConnectionConsensusStateResponse> | undefined, b: QueryConnectionConsensusStateResponse | PlainMessage<QueryConnectionConsensusStateResponse> | undefined): boolean;
}
/**
 * QueryConnectionParamsRequest is the request type for the Query/ConnectionParams RPC method.
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionParamsRequest
 */
export declare class QueryConnectionParamsRequest extends Message<QueryConnectionParamsRequest> {
    constructor(data?: PartialMessage<QueryConnectionParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.QueryConnectionParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConnectionParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConnectionParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConnectionParamsRequest;
    static equals(a: QueryConnectionParamsRequest | PlainMessage<QueryConnectionParamsRequest> | undefined, b: QueryConnectionParamsRequest | PlainMessage<QueryConnectionParamsRequest> | undefined): boolean;
}
/**
 * QueryConnectionParamsResponse is the response type for the Query/ConnectionParams RPC method.
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionParamsResponse
 */
export declare class QueryConnectionParamsResponse extends Message<QueryConnectionParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: ibc.core.connection.v1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryConnectionParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.QueryConnectionParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConnectionParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConnectionParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConnectionParamsResponse;
    static equals(a: QueryConnectionParamsResponse | PlainMessage<QueryConnectionParamsResponse> | undefined, b: QueryConnectionParamsResponse | PlainMessage<QueryConnectionParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map