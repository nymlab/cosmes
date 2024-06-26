import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 *
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 *
 * @generated from message cosmos.base.query.v1beta1.PageRequest
 */
export declare class PageRequest extends Message<PageRequest> {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     *
     * @generated from field: uint64 offset = 2;
     */
    offset: bigint;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     *
     * @generated from field: uint64 limit = 3;
     */
    limit: bigint;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     *
     * @generated from field: bool count_total = 4;
     */
    countTotal: boolean;
    /**
     * reverse is set to true if results are to be returned in the descending order.
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from field: bool reverse = 5;
     */
    reverse: boolean;
    constructor(data?: PartialMessage<PageRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.query.v1beta1.PageRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PageRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PageRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PageRequest;
    static equals(a: PageRequest | PlainMessage<PageRequest> | undefined, b: PageRequest | PlainMessage<PageRequest> | undefined): boolean;
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 *
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 *
 * @generated from message cosmos.base.query.v1beta1.PageResponse
 */
export declare class PageResponse extends Message<PageResponse> {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently. It will be empty if
     * there are no more results.
     *
     * @generated from field: bytes next_key = 1;
     */
    nextKey: Uint8Array;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     *
     * @generated from field: uint64 total = 2;
     */
    total: bigint;
    constructor(data?: PartialMessage<PageResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.query.v1beta1.PageResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PageResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PageResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PageResponse;
    static equals(a: PageResponse | PlainMessage<PageResponse> | undefined, b: PageResponse | PlainMessage<PageResponse> | undefined): boolean;
}
//# sourceMappingURL=pagination_pb.d.ts.map