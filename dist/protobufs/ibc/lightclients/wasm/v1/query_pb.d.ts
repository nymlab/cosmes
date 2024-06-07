import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination_pb.js";
/**
 * QueryChecksumsRequest is the request type for the Query/Checksums RPC method.
 *
 * @generated from message ibc.lightclients.wasm.v1.QueryChecksumsRequest
 */
export declare class QueryChecksumsRequest extends Message<QueryChecksumsRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryChecksumsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.QueryChecksumsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChecksumsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChecksumsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChecksumsRequest;
    static equals(a: QueryChecksumsRequest | PlainMessage<QueryChecksumsRequest> | undefined, b: QueryChecksumsRequest | PlainMessage<QueryChecksumsRequest> | undefined): boolean;
}
/**
 * QueryChecksumsResponse is the response type for the Query/Checksums RPC method.
 *
 * @generated from message ibc.lightclients.wasm.v1.QueryChecksumsResponse
 */
export declare class QueryChecksumsResponse extends Message<QueryChecksumsResponse> {
    /**
     * checksums is a list of the hex encoded checksums of all wasm codes stored.
     *
     * @generated from field: repeated string checksums = 1;
     */
    checksums: string[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryChecksumsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.QueryChecksumsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChecksumsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChecksumsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChecksumsResponse;
    static equals(a: QueryChecksumsResponse | PlainMessage<QueryChecksumsResponse> | undefined, b: QueryChecksumsResponse | PlainMessage<QueryChecksumsResponse> | undefined): boolean;
}
/**
 * QueryCodeRequest is the request type for the Query/Code RPC method.
 *
 * @generated from message ibc.lightclients.wasm.v1.QueryCodeRequest
 */
export declare class QueryCodeRequest extends Message<QueryCodeRequest> {
    /**
     * checksum is a hex encoded string of the code stored.
     *
     * @generated from field: string checksum = 1;
     */
    checksum: string;
    constructor(data?: PartialMessage<QueryCodeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.QueryCodeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCodeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCodeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCodeRequest;
    static equals(a: QueryCodeRequest | PlainMessage<QueryCodeRequest> | undefined, b: QueryCodeRequest | PlainMessage<QueryCodeRequest> | undefined): boolean;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC method.
 *
 * @generated from message ibc.lightclients.wasm.v1.QueryCodeResponse
 */
export declare class QueryCodeResponse extends Message<QueryCodeResponse> {
    /**
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<QueryCodeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.QueryCodeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCodeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCodeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCodeResponse;
    static equals(a: QueryCodeResponse | PlainMessage<QueryCodeResponse> | undefined, b: QueryCodeResponse | PlainMessage<QueryCodeResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map