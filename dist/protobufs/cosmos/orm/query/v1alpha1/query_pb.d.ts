import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../../base/query/v1beta1/pagination_pb.js";
/**
 * GetRequest is the Query/Get request type.
 *
 * @generated from message cosmos.orm.query.v1alpha1.GetRequest
 */
export declare class GetRequest extends Message<GetRequest> {
    /**
     * message_name is the fully-qualified message name of the ORM table being queried.
     *
     * @generated from field: string message_name = 1;
     */
    messageName: string;
    /**
     * index is the index fields expression used in orm definitions. If it
     * is empty, the table's primary key is assumed. If it is non-empty, it must
     * refer to an unique index.
     *
     * @generated from field: string index = 2;
     */
    index: string;
    /**
     * values are the values of the fields corresponding to the requested index.
     * There must be as many values provided as there are fields in the index and
     * these values must correspond to the index field types.
     *
     * @generated from field: repeated cosmos.orm.query.v1alpha1.IndexValue values = 3;
     */
    values: IndexValue[];
    constructor(data?: PartialMessage<GetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.orm.query.v1alpha1.GetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRequest;
    static equals(a: GetRequest | PlainMessage<GetRequest> | undefined, b: GetRequest | PlainMessage<GetRequest> | undefined): boolean;
}
/**
 * GetResponse is the Query/Get response type.
 *
 * @generated from message cosmos.orm.query.v1alpha1.GetResponse
 */
export declare class GetResponse extends Message<GetResponse> {
    /**
     * result is the result of the get query. If no value is found, the gRPC
     * status code NOT_FOUND will be returned.
     *
     * @generated from field: google.protobuf.Any result = 1;
     */
    result?: Any;
    constructor(data?: PartialMessage<GetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.orm.query.v1alpha1.GetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetResponse;
    static equals(a: GetResponse | PlainMessage<GetResponse> | undefined, b: GetResponse | PlainMessage<GetResponse> | undefined): boolean;
}
/**
 * ListRequest is the Query/List request type.
 *
 * @generated from message cosmos.orm.query.v1alpha1.ListRequest
 */
export declare class ListRequest extends Message<ListRequest> {
    /**
     * message_name is the fully-qualified message name of the ORM table being queried.
     *
     * @generated from field: string message_name = 1;
     */
    messageName: string;
    /**
     * index is the index fields expression used in orm definitions. If it
     * is empty, the table's primary key is assumed.
     *
     * @generated from field: string index = 2;
     */
    index: string;
    /**
     * query is the query expression corresponding to the provided index. If
     * neither prefix nor range is specified, the query will list all the fields
     * in the index.
     *
     * @generated from oneof cosmos.orm.query.v1alpha1.ListRequest.query
     */
    query: {
        /**
         * prefix defines a prefix query.
         *
         * @generated from field: cosmos.orm.query.v1alpha1.ListRequest.Prefix prefix = 3;
         */
        value: ListRequest_Prefix;
        case: "prefix";
    } | {
        /**
         * range defines a range query.
         *
         * @generated from field: cosmos.orm.query.v1alpha1.ListRequest.Range range = 4;
         */
        value: ListRequest_Range;
        case: "range";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * pagination is the pagination request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 5;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<ListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.orm.query.v1alpha1.ListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest;
    static equals(a: ListRequest | PlainMessage<ListRequest> | undefined, b: ListRequest | PlainMessage<ListRequest> | undefined): boolean;
}
/**
 * Prefix specifies the arguments to a prefix query.
 *
 * @generated from message cosmos.orm.query.v1alpha1.ListRequest.Prefix
 */
export declare class ListRequest_Prefix extends Message<ListRequest_Prefix> {
    /**
     * values specifies the index values for the prefix query.
     * It is valid to special a partial prefix with fewer values than
     * the number of fields in the index.
     *
     * @generated from field: repeated cosmos.orm.query.v1alpha1.IndexValue values = 1;
     */
    values: IndexValue[];
    constructor(data?: PartialMessage<ListRequest_Prefix>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.orm.query.v1alpha1.ListRequest.Prefix";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest_Prefix;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest_Prefix;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest_Prefix;
    static equals(a: ListRequest_Prefix | PlainMessage<ListRequest_Prefix> | undefined, b: ListRequest_Prefix | PlainMessage<ListRequest_Prefix> | undefined): boolean;
}
/**
 * Range specifies the arguments to a range query.
 *
 * @generated from message cosmos.orm.query.v1alpha1.ListRequest.Range
 */
export declare class ListRequest_Range extends Message<ListRequest_Range> {
    /**
     * start specifies the starting index values for the range query.
     * It is valid to provide fewer values than the number of fields in the
     * index.
     *
     * @generated from field: repeated cosmos.orm.query.v1alpha1.IndexValue start = 1;
     */
    start: IndexValue[];
    /**
     * end specifies the inclusive ending index values for the range query.
     * It is valid to provide fewer values than the number of fields in the
     * index.
     *
     * @generated from field: repeated cosmos.orm.query.v1alpha1.IndexValue end = 2;
     */
    end: IndexValue[];
    constructor(data?: PartialMessage<ListRequest_Range>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.orm.query.v1alpha1.ListRequest.Range";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest_Range;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest_Range;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest_Range;
    static equals(a: ListRequest_Range | PlainMessage<ListRequest_Range> | undefined, b: ListRequest_Range | PlainMessage<ListRequest_Range> | undefined): boolean;
}
/**
 * ListResponse is the Query/List response type.
 *
 * @generated from message cosmos.orm.query.v1alpha1.ListResponse
 */
export declare class ListResponse extends Message<ListResponse> {
    /**
     * results are the results of the query.
     *
     * @generated from field: repeated google.protobuf.Any results = 1;
     */
    results: Any[];
    /**
     * pagination is the pagination response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 5;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<ListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.orm.query.v1alpha1.ListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListResponse;
    static equals(a: ListResponse | PlainMessage<ListResponse> | undefined, b: ListResponse | PlainMessage<ListResponse> | undefined): boolean;
}
/**
 * IndexValue represents the value of a field in an ORM index expression.
 *
 * @generated from message cosmos.orm.query.v1alpha1.IndexValue
 */
export declare class IndexValue extends Message<IndexValue> {
    /**
     * value specifies the index value
     *
     * @generated from oneof cosmos.orm.query.v1alpha1.IndexValue.value
     */
    value: {
        /**
         * uint specifies a value for an uint32, fixed32, uint64, or fixed64
         * index field.
         *
         * @generated from field: uint64 uint = 1;
         */
        value: bigint;
        case: "uint";
    } | {
        /**
         * int64 specifies a value for an int32, sfixed32, int64, or sfixed64
         * index field.
         *
         * @generated from field: int64 int = 2;
         */
        value: bigint;
        case: "int";
    } | {
        /**
         * str specifies a value for a string index field.
         *
         * @generated from field: string str = 3;
         */
        value: string;
        case: "str";
    } | {
        /**
         * bytes specifies a value for a bytes index field.
         *
         * @generated from field: bytes bytes = 4;
         */
        value: Uint8Array;
        case: "bytes";
    } | {
        /**
         * enum specifies a value for an enum index field.
         *
         * @generated from field: string enum = 5;
         */
        value: string;
        case: "enum";
    } | {
        /**
         * bool specifies a value for a bool index field.
         *
         * @generated from field: bool bool = 6;
         */
        value: boolean;
        case: "bool";
    } | {
        /**
         * timestamp specifies a value for a timestamp index field.
         *
         * @generated from field: google.protobuf.Timestamp timestamp = 7;
         */
        value: Timestamp;
        case: "timestamp";
    } | {
        /**
         * duration specifies a value for a duration index field.
         *
         * @generated from field: google.protobuf.Duration duration = 8;
         */
        value: Duration;
        case: "duration";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<IndexValue>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.orm.query.v1alpha1.IndexValue";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IndexValue;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IndexValue;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IndexValue;
    static equals(a: IndexValue | PlainMessage<IndexValue> | undefined, b: IndexValue | PlainMessage<IndexValue> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map