import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
/**
 * QueryEvidenceRequest is the request type for the Query/Evidence RPC method.
 *
 * @generated from message cosmos.evidence.v1beta1.QueryEvidenceRequest
 */
export declare class QueryEvidenceRequest extends Message<QueryEvidenceRequest> {
    /**
     * evidence_hash defines the hash of the requested evidence.
     * Deprecated: Use hash, a HEX encoded string, instead.
     *
     * @generated from field: bytes evidence_hash = 1 [deprecated = true];
     * @deprecated
     */
    evidenceHash: Uint8Array;
    /**
     * hash defines the evidence hash of the requested evidence.
     *
     * Since: cosmos-sdk 0.47
     *
     * @generated from field: string hash = 2;
     */
    hash: string;
    constructor(data?: PartialMessage<QueryEvidenceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.evidence.v1beta1.QueryEvidenceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEvidenceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEvidenceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEvidenceRequest;
    static equals(a: QueryEvidenceRequest | PlainMessage<QueryEvidenceRequest> | undefined, b: QueryEvidenceRequest | PlainMessage<QueryEvidenceRequest> | undefined): boolean;
}
/**
 * QueryEvidenceResponse is the response type for the Query/Evidence RPC method.
 *
 * @generated from message cosmos.evidence.v1beta1.QueryEvidenceResponse
 */
export declare class QueryEvidenceResponse extends Message<QueryEvidenceResponse> {
    /**
     * evidence returns the requested evidence.
     *
     * @generated from field: google.protobuf.Any evidence = 1;
     */
    evidence?: Any;
    constructor(data?: PartialMessage<QueryEvidenceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.evidence.v1beta1.QueryEvidenceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEvidenceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEvidenceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEvidenceResponse;
    static equals(a: QueryEvidenceResponse | PlainMessage<QueryEvidenceResponse> | undefined, b: QueryEvidenceResponse | PlainMessage<QueryEvidenceResponse> | undefined): boolean;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 *
 * @generated from message cosmos.evidence.v1beta1.QueryAllEvidenceRequest
 */
export declare class QueryAllEvidenceRequest extends Message<QueryAllEvidenceRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryAllEvidenceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.evidence.v1beta1.QueryAllEvidenceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllEvidenceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllEvidenceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllEvidenceRequest;
    static equals(a: QueryAllEvidenceRequest | PlainMessage<QueryAllEvidenceRequest> | undefined, b: QueryAllEvidenceRequest | PlainMessage<QueryAllEvidenceRequest> | undefined): boolean;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 *
 * @generated from message cosmos.evidence.v1beta1.QueryAllEvidenceResponse
 */
export declare class QueryAllEvidenceResponse extends Message<QueryAllEvidenceResponse> {
    /**
     * evidence returns all evidences.
     *
     * @generated from field: repeated google.protobuf.Any evidence = 1;
     */
    evidence: Any[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryAllEvidenceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.evidence.v1beta1.QueryAllEvidenceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllEvidenceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllEvidenceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllEvidenceResponse;
    static equals(a: QueryAllEvidenceResponse | PlainMessage<QueryAllEvidenceResponse> | undefined, b: QueryAllEvidenceResponse | PlainMessage<QueryAllEvidenceResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map